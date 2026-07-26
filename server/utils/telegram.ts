import { useRuntimeConfig } from '#imports'

/**
 * Retries a promise-returning function using Exponential Backoff.
 * 
 * @param fn - The async function to retry
 * @param retries - Maximum number of retry attempts
 * @param delayMs - Initial delay in milliseconds
 * @param factor - Multiply factor for exponential growth of delay
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  retries: number = 3,
  delayMs: number = 1000,
  factor: number = 2
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    if (retries <= 0) {
      throw error
    }
    console.warn(`[Retry] Action failed. Retrying in ${delayMs}ms... (Remaining attempts: ${retries})`)
    await new Promise((resolve) => setTimeout(resolve, delayMs))
    return retryWithBackoff(fn, retries - 1, delayMs * factor, factor)
  }
}

/**
 * Sends a notification message to Telegram via the Telegram Bot API.
 * Uses retryWithBackoff helper to guarantee delivery on network hiccups.
 * 
 * @param markdownMessage - Message content formatted in Markdown V1
 */
export async function sendTelegramAlert(markdownMessage: string): Promise<boolean> {
  const config = useRuntimeConfig()
  
  const botToken = config.telegramBotToken || globalThis.process?.env?.TELEGRAM_BOT_TOKEN
  const chatId = config.telegramChatId || globalThis.process?.env?.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.warn('[Telegram Alert] Missing credentials. Skipping alert:', markdownMessage)
    return false
  }

  const endpoint = `https://api.telegram.org/bot${botToken}/sendMessage`

  const sendRequest = async () => {
    return await $fetch(endpoint, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text: markdownMessage,
        parse_mode: 'Markdown'
      }
    })
  }

  try {
    // Retry sending 3 times with 1.5s initial backoff
    await retryWithBackoff(sendRequest, 3, 1500)
    console.log('[Telegram Alert] Successfully sent message to channel.')
    return true
  } catch (error) {
    console.error('[Telegram Alert] Failed to send notification after retries:', error)
    return false
  }
}

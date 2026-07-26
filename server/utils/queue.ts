/**
 * Type definition for a task function that returns a Promise.
 */
type AsyncTask<T> = () => Promise<T>

/**
 * A generic in-memory queue to control concurrency of async tasks.
 * Useful for rate limiting API requests (e.g. Cloudinary uploads).
 */
export class AsyncQueue {
  private queue: Array<{ task: AsyncTask<any>; resolve: (value: any) => void; reject: (reason?: any) => void }> = []
  private runningCount = 0
  private concurrencyLimit: number

  constructor(concurrencyLimit: number = 3) {
    this.concurrencyLimit = concurrencyLimit
  }

  /**
   * Enqueues a task and returns a promise that resolves when the task completes.
   */
  enqueue<T>(task: AsyncTask<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push({ task, resolve, reject })
      this.runNext()
    })
  }

  /**
   * Triggers execution of the next task in the queue if capacity permits.
   */
  private async runNext(): Promise<void> {
    if (this.runningCount >= this.concurrencyLimit || this.queue.length === 0) {
      return
    }

    const nextItem = this.queue.shift()
    if (!nextItem) return

    const { task, resolve, reject } = nextItem
    this.runningCount++

    try {
      const result = await task()
      resolve(result)
    } catch (error) {
      reject(error)
    } finally {
      this.runningCount--
      this.runNext()
    }
  }

  /**
   * Gets the current number of pending tasks in the queue.
   */
  getPendingCount(): number {
    return this.queue.length
  }

  /**
   * Gets the number of currently running tasks.
   */
  getRunningCount(): number {
    return this.runningCount
  }
}

// Export single queue instances for image/video uploads
export const imageUploadQueue = new AsyncQueue(3) // Limits concurrency to 3 simultaneous uploads
export const videoUploadQueue = new AsyncQueue(1) // Video uploads are heavy, process 1 by 1

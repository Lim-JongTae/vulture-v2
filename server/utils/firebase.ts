import { initializeApp, cert, getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { useRuntimeConfig } from '#imports'

/**
 * Initializes Firebase Admin SDK inside Nuxt server context.
 * Utilizes environment variables / runtime configurations for security.
 */
export function getFirebaseAdminDb() {
  const config = useRuntimeConfig()
  
  const projectId = config.firebaseProjectId || globalThis.process?.env?.FIREBASE_PROJECT_ID
  const clientEmail = config.firebaseClientEmail || globalThis.process?.env?.FIREBASE_CLIENT_EMAIL
  // Replace escaped newlines commonly stored in process.env
  const privateKey = (config.firebasePrivateKey || globalThis.process?.env?.FIREBASE_PRIVATE_KEY)?.replace(/\\n/g, '\n')

  // Safe fallback if Firebase Admin config is missing
  if (!projectId || !clientEmail || !privateKey) {
    console.warn('[Firebase Admin] Configuration missing. Firestore operations might fail.')
    return null
  }

  // Check if firebase admin app is already initialized
  const apps = getApps()
  let adminApp
  
  if (apps.length === 0) {
    adminApp = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey
      })
    })
  } else {
    adminApp = apps[0]
  }

  return getFirestore(adminApp)
}

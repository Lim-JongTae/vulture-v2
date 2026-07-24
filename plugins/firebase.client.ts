import { defineNuxtPlugin, useRuntimeConfig, type NuxtApp } from 'nuxt/app'
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage"
import { getFunctions } from "firebase/functions"
import { getMessaging, isSupported } from "firebase/messaging"

export default defineNuxtPlugin(async (_nuxtApp: NuxtApp) => {  
  const config = useRuntimeConfig().public as Record<string, any>

  const firebaseConfig = {
    apiKey: config.apiKey || config.firebaseApiKey,
    authDomain: config.authDomain || config.firebaseAuthDomain,
    databaseURL: config.databaseURL || config.firebaseDatabaseUrl,
    projectId: config.projectId || config.firebaseProjectId,
    storageBucket: config.storageBucket || config.firebaseStorageBucket,
    messagingSenderId: config.messagingSenderId || config.firebaseMessagingSenderId,
    appId: config.appId || config.firebaseAppId,
    measurementId: config.measurementId || config.firebaseMeasurementId
  }

  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

  const db = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app)
  const functions = getFunctions(app)
  
  let messaging = null
  if (typeof window !== 'undefined' && await isSupported()) {
    messaging = getMessaging(app)
  }

  return {
    provide: {
      firebaseApp: app,
      db,            
      auth,      
      storage,         
      functions,
      messaging
    }
  }
})

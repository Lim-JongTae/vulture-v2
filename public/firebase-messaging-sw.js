importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: "AIzaSyAb6A4yjg22oEqRVPoZanE9W-WKSzvWSbg",
  authDomain: "ecobest-e49b0.firebaseapp.com",
  projectId: "ecobest-e49b0",
  storageBucket: "ecobest-e49b0.appspot.com",
  messagingSenderId: "518376376725",
  appId: "1:518376376725:web:ab68fa3dbdb3c9ac75ce9c"
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload?.notification?.title || '울산독수리 알림'
  const notificationOptions = {
    body: payload?.notification?.body || '',
    icon: '/favicon.ico'
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

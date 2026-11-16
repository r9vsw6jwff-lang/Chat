// Импорт скриптов Firebase для работы Service Worker
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Инициализация Firebase в Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyA5WJE3afisQ-Ue6w8EwLq1Bnz-Gjq5ICI",
  authDomain: "chat-14abe.firebaseapp.com",
  projectId: "chat-14abe",
  storageBucket: "chat-14abe.firebasestorage.app",
  messagingSenderId: "412240777047",
  appId: "1:412240777047:web:dcda1e2736c09e2777b812",
  measurementId: "G-JR38HQMKH3"
});

const messaging = firebase.messaging();

// Фоновая обработка пуш-уведомлений
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Получено фоновое сообщение ', payload);
  const notificationTitle = payload.notification.title || 'Новое сообщение';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

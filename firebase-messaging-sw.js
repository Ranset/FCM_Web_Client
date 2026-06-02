importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

const messaging = firebase.messaging();

// CREAR EL CANAL DE COMUNICACIÓN
// Esto permite hablar con la pestaña abierta del navegador
const channel = new BroadcastChannel('firebase_messages');

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano ', payload);
  
  // IMPORTANTE: Reenviar el mensaje a la página web abierta
  // para que pueda mostrar la notificación visual (Toast)
  channel.postMessage(payload);
});
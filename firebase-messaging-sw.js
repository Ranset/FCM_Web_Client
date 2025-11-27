importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Configuración básica (puedes dejar los valores vacíos si solo recibes, 
// pero se recomienda poner tu senderId)
firebase.initializeApp({
    apiKey: "AIzaSyCnY3hILp6EJ6XUFOzTA7dsu7InFYaE8dA",
    authDomain: "testpush-645b8.firebaseapp.com",
    projectId: "testpush-645b8",
    storageBucket: "testpush-645b8.firebasestorage.app",
    messagingSenderId: "301486367280",
    appId: "1:301486367280:web:e9c03b8349ecd8579c83f5"
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
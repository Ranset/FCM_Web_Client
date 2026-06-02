importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCnY3hILp6EJ6XUFOzTA7dsu7InFYaE8dA", 
  messagingSenderId: "301486367280"
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
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCnY3hILp6EJ6XUFOzTA7dsu7InFYaE8dA", // Opcional en el SW, pero recomendado dejar vacío o config básica
  messagingSenderId: "301486367280"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensaje recibido en segundo plano ', payload);
});
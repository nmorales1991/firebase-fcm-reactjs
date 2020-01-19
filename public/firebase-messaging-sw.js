importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAfE4XX4g7YennzibFrYqmcwJfExlRKAzw",
    authDomain: "serverless-d0a19.firebaseapp.com",
    databaseURL: "https://serverless-d0a19.firebaseio.com",
    projectId: "serverless-d0a19",
    storageBucket: "serverless-d0a19.appspot.com",
    messagingSenderId: "1085719671002",
    appId: "1:1085719671002:web:d1f7b46913f22dad5a75e3",
    measurementId: "G-1C5S3EF5KX"
});

const messaging = firebase.messaging();

import firebase from "firebase";

export const inicializarFirebase = () => {
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
};

export const preguntarPermisos = async () => {
    try {
        const messaging = firebase.messaging();

        //await messaging.requestPermission();
        await Notification.requestPermission().then(async permission=>{
            if (permission === 'denied') {
                console.log('Permission wasn\'t granted. Allow a retry.');
                return;
              } else if (permission === 'default') {
                console.log('The permission request was dismissed.');
                return;
              }
              const token = await messaging.getToken();
              console.log("user token: ", token);
      
              return token;
        })
        
    } catch (error) {
        console.error(error);
    }
};

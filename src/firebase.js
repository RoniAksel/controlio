 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDv1463JHbZ_gTeRO73N1ZVH_rPEeRTqFA",
    authDomain: "todo-1198a.firebaseapp.com",
    databaseURL: "https://todo-1198a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-1198a",
    storageBucket: "todo-1198a.appspot.com",
    messagingSenderId: "617002746205",
    appId: "1:617002746205:web:a6f954845c3eb2766568b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  const db = firebase.firestore();

  
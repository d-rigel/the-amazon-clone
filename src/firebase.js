import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {};

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3z9MChvD-Xp5t61VGYFnjjhWSqoS3nfk",
    authDomain: "todo-293b3.firebaseapp.com",
    databaseURL: "https://todo-293b3.firebaseio.com",
    projectId: "todo-293b3",
    storageBucket: "todo-293b3.appspot.com",
    messagingSenderId: "228763494938",
    appId: "1:228763494938:web:d12c467bf524270599ffa3",
    measurementId: "G-H6RBTQX5SW"

  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export { auth };
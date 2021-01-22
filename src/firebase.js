// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC4A5zXtUzTgtDdmH0RUxiTjqeYdxazObo",
    authDomain: "clone-a7237.firebaseapp.com",
    projectId: "clone-a7237",
    storageBucket: "clone-a7237.appspot.com",
    messagingSenderId: "158606337648",
    appId: "1:158606337648:web:2d3a911acf037b352bf6b5",
    measurementId: "G-7TGG689W5N"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth}
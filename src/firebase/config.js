import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAIMvtdDvRB49YbVnDYoMPQX_gCwPF3H8Q",
  authDomain: "ninja-firegram-480ba.firebaseapp.com",
  databaseURL: "https://ninja-firegram-480ba-default-rtdb.firebaseio.com",
  projectId: "ninja-firegram-480ba",
  storageBucket: "ninja-firegram-480ba.appspot.com",
  messagingSenderId: "147778696503",
  appId: "1:147778696503:web:99d7391b0f8c83256116b2"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timeStamp}
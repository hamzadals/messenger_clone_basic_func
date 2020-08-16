import firebase from 'firebase'
const firebaseApp = firebase.initializeApp(
{
  apiKey: "AIzaSyBNrQTj2M7KK8F3Fw9yDOnnLvNrIKEb27w",
  authDomain: "messenger-clone-a0851.firebaseapp.com",
  databaseURL: "https://messenger-clone-a0851.firebaseio.com",
  projectId: "messenger-clone-a0851",
  storageBucket: "messenger-clone-a0851.appspot.com",
  messagingSenderId: "1034641326542",
  appId: "1:1034641326542:web:71d68240b2396eddac2b9f",
  measurementId: "G-G8Z0EXMZBV"
}
);
const db =firebaseApp.firestore();
export default db
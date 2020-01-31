import firebase from "firebase/app";

if (!firebase.apps.length) {
  firebase.initializeApp(process.env.firebaseConfig);
}
export default firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCyKZnLEK9grbsRLZVwUkHDRm7PrkStJ7s",
  authDomain: "crwn-db-881b7.firebaseapp.com",
  projectId: "crwn-db-881b7",
  storageBucket: "crwn-db-881b7.appspot.com",
  messagingSenderId: "592290249389",
  appId: "1:592290249389:web:2b93ba661263f17715a424",
  measurementId: "G-5K8W01VX93",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

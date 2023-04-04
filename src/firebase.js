// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzLOUl1eTHv2IyHEuzyCxTqidjxJRh82c",
    authDomain: "clone-bbddc.firebaseapp.com",
    projectId: "clone-bbddc",
    storageBucket: "clone-bbddc.appspot.com",
    messagingSenderId: "271106742140",
    appId: "1:271106742140:web:f9c53ce2ddc75d39fd36f9",
    measurementId: "G-ES2JS60VJ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }


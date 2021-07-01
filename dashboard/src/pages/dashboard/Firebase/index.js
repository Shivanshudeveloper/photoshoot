import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
import "firebase/messaging";
import "firebase/analytics";
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAu0VEg33WX6U-_n_EzwqTEi0jcV158yXU",
    authDomain: "photoshoot-61d18.firebaseapp.com",
    projectId: "photoshoot-61d18",
    storageBucket: "photoshoot-61d18.appspot.com",
    messagingSenderId: "165759172210",
    appId: "1:165759172210:web:0d250d93b6b265b3ca4ceb",
    measurementId: "G-61YVJS112B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let storage = firebase.storage();
let database = firebase.database();
let auth = firebase.auth();
let firestore = firebase.firestore();
// Authentication for Google
var googleProvider = new firebase.auth.GoogleAuthProvider();
// Authentication for Facebook
var facebookProvider = new firebase.auth.FacebookAuthProvider();
// Authentication for Twitter
var twitterProvider = new firebase.auth.TwitterAuthProvider();
export {
    firestore, auth, googleProvider, facebookProvider, twitterProvider, database, storage, firebase as default
}
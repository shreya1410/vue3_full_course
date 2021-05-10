import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig ={
    apiKey: "AIzaSyChSOQ51K_13wHguZzc2JeC3HbwvvFZmbQ",
    authDomain: "vue-full-course-58925.firebaseapp.com",
    projectId: "vue-full-course-58925",
    storageBucket: "vue-full-course-58925.appspot.com",
    messagingSenderId: "741511994803",
    appId: "1:741511994803:web:a56759c23e777a88ef3fc6"
};

firebase.initializeApp(firebaseConfig);
const db= firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
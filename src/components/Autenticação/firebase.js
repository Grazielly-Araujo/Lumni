
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAXGEpSku4DmkdLbavEnWOsNXFMiaKB-fo",
    authDomain: "lumniauth.firebaseapp.com",
    projectId: "lumniauth",
    storageBucket: "lumniauth.appspot.com",
    messagingSenderId: "677811535401",
    appId: "1:677811535401:web:9ea28eda0f758782bfa638",
    measurementId: "G-23GZS5WS2J"

};

firebase.initializeApp(firebaseConfig); 
export const auth = firebase.auth();
export const db = firebase.firestore();
import firebase from 'firebase/app';
// import { initializeApp } from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCyMegBqnjJ9vGhTHQ_S6zeSJ2XbTW67QQ",
    authDomain: "new-console-98d92.firebaseapp.com",
    projectId: "new-console-98d92",
    storageBucket: "new-console-98d92.appspot.com",
    messagingSenderId: "862050083227",
    appId: "1:862050083227:web:8c97d1c9b2fe451f1dc13e",
    measurementId: "G-70106EEXRZ"
};

if(!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app())
// firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;
// const firebaseApp = initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export default firebaseApp;

// export const app = firebase.initializeApp({
//     apiKey: "AIzaSyCyMegBqnjJ9vGhTHQ_S6zeSJ2XbTW67QQ",
//     authDomain: "new-console-98d92.firebaseapp.com",
//     projectId: "new-console-98d92",
//     storageBucket: "new-console-98d92.appspot.com",
//     messagingSenderId: "862050083227",
//     appId: "1:862050083227:web:8c97d1c9b2fe451f1dc13e",
//     measurementId: "G-70106EEXRZ"
// })
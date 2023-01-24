// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxCp88Ym-Bpi90R71RMWeixVnYUIIVh1g",
    authDomain: "mymoney-4c0a9.firebaseapp.com",
    projectId: "mymoney-4c0a9",
    storageBucket: "mymoney-4c0a9.appspot.com",
    messagingSenderId: "348856792830",
    appId: "1:348856792830:web:f406bd658b73c738e4d7af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectStore = firebase.firestore();
const projectAuth = firebase.auth()

export { projectStore, projectAuth }
// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getFirestore
} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7BZyTzMW5dysKkHAxFPCcvPCehCNPjow",
    authDomain: "react-crud-app-21141.firebaseapp.com",
    databaseURL: "https://react-crud-app-21141-default-rtdb.firebaseio.com",
    projectId: "react-crud-app-21141",
    storageBucket: "react-crud-app-21141.appspot.com",
    messagingSenderId: "571962826111",
    appId: "1:571962826111:web:32946d33abe2ae5d544e4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

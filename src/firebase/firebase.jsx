// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTH,
  projectId:process.env.REACT_APP_ID,
  storageBucket:process.env.REACT_APP_BUCKET,
  messagingSenderId:process.env.REACT_APP_SENDER,
  appId:process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

const storage = getStorage(app); 

export { db, storage}
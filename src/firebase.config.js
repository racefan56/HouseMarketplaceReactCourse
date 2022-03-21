// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgQjqaAd0N55gYsptnZaks6dQPz1F1zEg',
  authDomain: 'house-marketplace-app-db5cf.firebaseapp.com',
  projectId: 'house-marketplace-app-db5cf',
  storageBucket: 'house-marketplace-app-db5cf.appspot.com',
  messagingSenderId: '122292328607',
  appId: '1:122292328607:web:9797cd8a33ac1d6b3deaaa',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

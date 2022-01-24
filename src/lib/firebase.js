import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { seedDatabase } from '../seed'

const config = {
  apiKey: "AIzaSyDAeNoAGfy_5Wrqvnuaf9IfqS1DOZcDayE",
  authDomain: "instagram-clone-svelte.firebaseapp.com",
  projectId: "instagram-clone-svelte",
  storageBucket: "instagram-clone-svelte.appspot.com",
  messagingSenderId: "800924273836",
  appId: "1:800924273836:web:7af277fe7aff1e97806309",
  measurementId: "G-5FRJ8YQ7P6"
};

const firebase = Firebase.initializeApp(config)

const { FieldValue } = Firebase.firestore

//seedDatabase(firebase)

console.log(firebase, 'firebase')

export { firebase, FieldValue }

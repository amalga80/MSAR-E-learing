import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed'
const config={
    apiKey: "AIzaSyAoLWIwLkjJ-50n7cyq6kg35OQdvue82EM",
    authDomain: "msar-77f29.firebaseapp.com",
    projectId: "msar-77f29",
    storageBucket: "msar-77f29.appspot.com",
    messagingSenderId: "179159764177",
    appId: "1:179159764177:web:15d97e403de3a499f809f0",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };    
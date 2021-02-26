import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDEQgwjdPPsuxKfX9PIO-EdgLqWRgjZFJc",
  authDomain: "react-english-web.firebaseapp.com",
  projectId: "react-english-web",
  storageBucket: "react-english-web.appspot.com",
  messagingSenderId: "755706456298",
  appId: "1:755706456298:web:e7db73d99e94faab460f93"
  })

firebase.firestore().settings( { timestampsInSnapshots: true })

export default firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2xY8r42fQiXES6086PCQUsMTSD2zTbYE",
  authDomain: "facebook-clone-6d013.firebaseapp.com",
  databaseURL: "https://facebook-clone-6d013.firebaseio.com",
  projectId: "facebook-clone-6d013",
  storageBucket: "facebook-clone-6d013.appspot.com",
  messagingSenderId: "516618223309",
  appId: "1:516618223309:web:9b0062dde89994e05c7384",
  measurementId: "G-FE7NCLZCKY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

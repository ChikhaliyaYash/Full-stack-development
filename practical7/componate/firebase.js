import firebase from "firebase/app"; import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCBE2OGjmB_jlW3SZ75nambFyPAAg2LVpA", authDomain: "whatsapp-clone-bbf4c.firebaseapp.com",
projectId: "whatsapp-clone-bbf4c",
storageBucket: "whatsapp-clone-bbf4c.appspot.com", messagingSenderId: "376281278602",
appId: "1:376281278602:web:b3708d5ec3c75112332573"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; export default db;


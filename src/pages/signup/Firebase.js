import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIsCOL_jVPO53jbdWR41gbEQnY8HP9V6w",
  authDomain: "signup-e93e5.firebaseapp.com",
  projectId: "signup-e93e5",
  storageBucket: "signup-e93e5.firebasestorage.app",
  messagingSenderId: "173581720687",
  appId: "1:173581720687:web:ffb9bd0575ac5209cd019a",
  measurementId: "G-SYTGQFBEY8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export let auth = getAuth(app)
export let provider = new GoogleAuthProvider()
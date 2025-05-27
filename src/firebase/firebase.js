// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8AlumuSWrP8vhvULmtniNngIPr3XBIc",
  authDomain: "portfolio-2a9eb.firebaseapp.com",
  databaseURL: "https://portfolio-2a9eb-default-rtdb.firebaseio.com",
  projectId: "portfolio-2a9eb",
  storageBucket: "portfolio-2a9eb.firebasestorage.app",
  messagingSenderId: "623812216285",
  appId: "1:623812216285:web:3f1d196bf1d72e23bc2234",
  measurementId: "G-LGMSQBPMDL",
};

// Initialize Firebse
const initFirebase = async () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
};

const Firebase = {
  initFirebase,
};

export default Firebase;

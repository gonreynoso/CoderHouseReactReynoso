//eslint-disable-next-line
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// Desestructuracion de variables de entorno
const { 
  VITE_REACT_APP_API_KEY,
  VITE_REACT_APP_AUTH_DOMAIN,
  VITE_REACT_APP_PROJECT_ID,
  VITE_REACT_APP_STORAGE_BUCKET,
  VITE_REACT_APP_MESSAGING_SENDER_ID,
  VITE_REACT_APP_APP_ID
} = import.meta.env;

// Bootstrap y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// CSS GLOBAL
import './index.css'

// REACT TOASTIFY
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_REACT_APP_API_KEY,
  authDomain: VITE_REACT_APP_AUTH_DOMAIN,
  projectId: VITE_REACT_APP_PROJECT_ID,
  storageBucket: VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: VITE_REACT_APP_APP_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
      <ToastContainer />
  </BrowserRouter>
)


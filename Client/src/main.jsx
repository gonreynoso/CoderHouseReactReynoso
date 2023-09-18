//eslint-disable-next-line
import * as React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


// Destructuracion de variables de entorno
const { 
  VITE_REACT_APP_API_KEY,
  VITE_REACT_APP_AUTH_DOMAIN,
  VITE_REACT_APP_PROJECT_ID,
  VITE_REACT_APP_STORAGE_BUCKET,
  VITE_REACT_APP_MESSAGING_SENDER_ID,
  VITE_REACT_APP_APP_ID
} = import.meta.env;


// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

// Material UI
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// Bootstrap y Bootstrap Icons
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'; 

// CSS GLOBAL
import './index.css'

// FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_REACT_APP_API_KEY,
  authDomain: VITE_REACT_APP_AUTH_DOMAIN,
  projectId: VITE_REACT_APP_PROJECT_ID,
  storageBucket: VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: VITE_REACT_APP_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* // 2. Wrap NextUIProvider at the root of your app */}
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </BrowserRouter>
)

//PARA CONVERTIR LA PAGINA EN DARK MODE
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     {/* // 2. Wrap NextUIProvider at the root of your app */}
//     <NextUIProvider>
//       <main className="dark text-foreground bg-background">
//         <App />
//       </main>
//     </NextUIProvider>
//   </BrowserRouter>
// )
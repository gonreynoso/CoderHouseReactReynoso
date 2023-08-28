//eslint-disable-next-line
import * as React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Bootstrap y Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

// CSS
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* // 2. Wrap NextUIProvider at the root of your app */}
      <NextUIProvider>
        <App />
      </NextUIProvider>
  </BrowserRouter>
)



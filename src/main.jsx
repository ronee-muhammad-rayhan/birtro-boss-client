<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';
>>>>>>> dd2dd9512788608bf94c8e124fb7beb1b81789c7

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
<<<<<<< HEAD
        <div className="max-w-screen-xl mx-auto">
=======
        <div className='max-w-screen-xl mx-auto'>
>>>>>>> dd2dd9512788608bf94c8e124fb7beb1b81789c7
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
<<<<<<< HEAD
  </React.StrictMode>
);
=======
  </React.StrictMode>,
)
>>>>>>> dd2dd9512788608bf94c8e124fb7beb1b81789c7

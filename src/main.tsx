import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/css/normalize.css'
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/Cart";
import { router } from './router';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
)

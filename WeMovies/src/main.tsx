import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/css/normalize.css'
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/Cart";
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/config';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
)

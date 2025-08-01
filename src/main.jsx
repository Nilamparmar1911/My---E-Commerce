// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import React from 'react'
// import './index.css'
// import App from './App.jsx'
// import { CartProvider } from './assets/CartContext.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//         <CartProvider> 
//       <App />
//           </CartProvider>

//   </StrictMode>,
// )


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);


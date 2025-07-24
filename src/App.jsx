// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Login from './component/Login'
// import Register from './component/Register'
// import Home from './component/Home'
// import Products from './component/Products'
// import Footer from './component/Footer'
// import Header from './component/Header'
// import About from './component/About'
// // import Testimonial from './component/Testimonial'
// import Navbar from './component/Navbar'
// import Contact from './component/Contact'
// import Faq from './component/Faq'

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/footer" element={<Footer />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './component/Login';
import Register from './component/Register';
import Home from './Pages/Home';
import Products from './component/Products';
import ProductDetail from './component/ProductDetail';
import Footer from "./component/Footer";

import Header from './Pages/Header';
import About from './Pages/About';
import Navbar from './component/Navbar';
import Contact from './Pages/Contact';
import Faq from './component/Faq';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

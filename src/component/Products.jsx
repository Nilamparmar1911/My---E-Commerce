// import React from "react";
// import Footer from "./Footer";
// import { productCart } from "./Constant/Index";
// import { useCart } from "../assets/CartContext";

// const Products = () => {
//   const { addToCart } = useCart();

//   return (
//     <>
//     <div className="w-full px-4 sm:px-6 lg:px-12 py-10">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 font-bold text-center leading-tight mb-12">
//         Top <span className="text-[#020063]">Trending</span> Products
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
//         {productCart.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300 h-[400px] flex flex-col justify-start"
//           >
//             <div className="flex justify-center">
//               <div className="bg-white shadow-md h-56 mt-5 w-56 rounded-sm overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//             <div className=" text-center flex-grow">
//               <h3 className="text-xl font-semibold text-gray-800 ">{item.title}</h3>
//               <p className="text-black font-bold mb-1 text-lg">₹{item.price}</p>
//               <div className="mt-2 flex justify-center">
//                 <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#1e6911] text-white rounded-md text-sm font-semibold">
//                   <span>{item.rating}</span>
//                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//   <path d="M12 2L14.94 8.63L22 9.27L16.5 14.14L18.18 21.02L12 17.77L5.82 21.02L7.5 14.14L2 9.27L9.06 8.63L12 2Z" />
// </svg>

//                 </div>
//               </div>
//               <button
//                 onClick={() => addToCart(item)}
//                 className="mt-4 px-4 py-2 bg-[#020063] text-white rounded-md font-semibold"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-16">
//         <button className="px-10 py-3 bg-[#39019c] text-white rounded-md font-semibold transition duration-300">
//           View More
//         </button>
//       </div>
//     </div>
//          <Footer/>
//    </>
//   );
// };

// export default Products;


// import React from 'react';
// import Footer from './Footer';
// import { productCart } from './Constant/Index';
// import { useCart } from '../assets/CartContext';
// import { useWishlist } from '../assets/WishlistContext';

// const Products = () => {
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   return (
//     <>
//       <div className="w-full px-4 sm:px-6 lg:px-12 py-10">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 font-bold text-center leading-tight mb-12">
//           Top <span className="text-[#020063]">Trending</span> Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
//           {productCart.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300 h-[400px] flex flex-col justify-start"
//             >
//               <div className="flex justify-center">
//                 <div className="bg-white shadow-md h-56 mt-5 w-56 rounded-sm overflow-hidden">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="text-center flex-grow">
//                 <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
//                 <p className="text-black font-bold mb-1 text-lg">₹{item.price}</p>
//                 <div className="mt-2 flex justify-center">
//                   <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#1e6911] text-white rounded-md text-sm font-semibold">
//                     <span>{item.rating}</span>
//                     <svg
//                       className="w-4 h-4 text-white"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M12 2L14.94 8.63L22 9.27L16.5 14.14L18.18 21.02L12 17.77L5.82 21.02L7.5 14.14L2 9.27L9.06 8.63L12 2Z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex justify-center gap-4">
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="px-4 py-2 bg-[#020063] text-white rounded-md font-semibold"
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={() => addToWishlist(item)}
//                     className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold"
//                   >
//                     ♥
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-16">
//           <button className="px-10 py-3 bg-[#39019c] text-white rounded-md font-semibold transition duration-300">
//             View More
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Products;



import React from 'react';
import Footer from '../component/Footer';
import { productCart } from './Constant/Index';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full px-4 sm:px-8 lg:px-22 py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-10 font-bold text-center leading-tight mb-12">
          Top <span className="text-[#020063]">Trending</span> Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {productCart.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/products/${item.id}`)}
              className="cursor-pointer bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300 h-[400px] flex flex-col justify-start"
            >
              <div className="flex justify-center">
                <div className="bg-white shadow-md h-40 mt-5 w-52 rounded-sm overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center flex-grow mt-8">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-black font-bold mb-1 text-lg">₹{item.price}</p>
                <div className="mt-2 flex justify-center">
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#1e6911] text-white rounded-md text-sm font-semibold">
                    <span>{item.rating}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L14.94 8.63L22 9.27L16.5 14.14L18.18 21.02L12 17.77L5.82 21.02L7.5 14.14L2 9.27L9.06 8.63L12 2Z" />
                    </svg>
                  </div>
                </div>
                {/* <div className="mt-4 flex justify-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                    className="px-4 py-2 bg-[#020063] text-white rounded-md font-semibold"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToWishlist(item);
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold"
                  >
                    ♥
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="px-10 py-3 bg-[#39019c] text-white rounded-md font-semibold transition duration-300">
            View More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;

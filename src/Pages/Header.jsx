// import React from "react";
// import { useCart } from "../assets/CartContext";

// function Header() {
//   const { cart } = useCart();

//   return (
//     <div>
//       <nav className="bg-white shadow-md">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-14 items-center justify-end">
//             <div className="flex items-center gap-6">


//               {/* Cart Button */}
//               <button type="button" className="relative text-blue-700 hover:text-blue-900 transition">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 576 512"
//   style={{ fill: '#0b1059' }}
//   className="w-6 h-6"
// >
//   <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
// </svg>




//                 {cart.length > 0 && (
//                   <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                     {cart.length}
//                   </span>
//                 )}
//               </button>

//                   {/* Wishlist Button */}
//               <button type="button" className="relative text-blue-700 hover:text-blue-900 transition">
//                <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="24"
//   height="24"
//   fill="#000066"
//   className="w-6 h-6 text-blue-"
//   viewBox="0 0 24 24"
// >
//   <path d="M12 21.35l-1.45-1.32C5.4 
//     15.36 2 12.28 2 8.5 2 5.42 
//     4.42 3 7.5 3c1.74 0 3.41 
//     0.81 4.5 2.09C13.09 3.81 14.76 
//     3 16.5 3 19.58 3 22 5.42 22 
//     8.5c0 3.78-3.4 6.86-8.55 
//     11.54L12 21.35z" />
// </svg>

//               </button>

//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;




import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext"; // ✅ Import wishlist context

function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist(); // ✅ Access wishlist

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-end">
            <div className="flex items-center gap-6">

              {/* Cart Button */}
              <button type="button" className="relative text-blue-700 hover:text-blue-900 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  style={{ fill: '#0b1059' }}
                  className="w-6 h-6"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>

                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Wishlist Button */}
              <button type="button" className="relative text-blue-700 hover:text-blue-900 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000066"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 
                    15.36 2 12.28 2 8.5 2 5.42 
                    4.42 3 7.5 3c1.74 0 3.41 
                    0.81 4.5 2.09C13.09 3.81 14.76 
                    3 16.5 3 19.58 3 22 5.42 22 
                    8.5c0 3.78-3.4 6.86-8.55 
                    11.54L12 21.35z" />
                </svg>

                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

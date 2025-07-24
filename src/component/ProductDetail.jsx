import React, { useState } from 'react'; // ✅ Added useState
import { useParams } from 'react-router-dom';
import { productCart } from '../Constant/Index';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productCart.find((item) => item.id.toString() === id);

  const [mainImage, setMainImage] = useState(product?.img); // ✅ Initialize with main image

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  if (!product) {
    return <div className="text-center mt-20 text-red-600 text-xl">Product Not Found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <img          
            src={mainImage}
            alt={product.title}
            className="w-full h-96 object-cover rounded shadow"
          />     
        </div>


        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-xl font-semibold text-blue-800 mb-2">₹{product.price}</p>
          <p className="mb-4 text-gray-600">Rating: {product.rating} ⭐</p>
         <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
  <button
    onClick={() => addToCart(product)}
    className="w-full sm:w-auto px-6 py-3 bg-[#020063] text-white rounded-md font-semibold text-center"
  >
    Add to Cart
  </button>
  <button
    onClick={() => addToWishlist(product)}
    className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-md font-semibold text-center"
  >
    ♥ Wishlist
  </button>
</div>

           <div className="flex gap-6 mt-4">
            {product.additionalImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb-${index}`}
                onClick={() => setMainImage(img)}
                className="w-40 h-40 object-cover shadow-lg cursor-pointer rounded hover:scale-105 duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;





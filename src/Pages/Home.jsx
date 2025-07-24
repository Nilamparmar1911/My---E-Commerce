import React from "react";
import Products from "../component/Products";


function Home() {
  return (
    <>

   
  {/* //banner-img */}
  <div className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh]">
  <img
    src={"src/assets/Banner.jpg"}
    alt="Banner"
    className="w-full h-full object-cover"
  />
</div>
 <Products/>

  </>
  );
}

export default Home;

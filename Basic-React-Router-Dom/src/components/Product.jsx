import React from "react";

const Product = () => {
  return (
    <>
      <div className="pro bg-purple-900 flex justify-center items-center font-bold">
        <h1 className=" cursor-pointer text-white text-5xl underline uppercase text-center">
          Product Page.
        </h1>
      </div>

      <div>
        <img
          className="object-cover"
          src="https://plus.unsplash.com/premium_photo-1661375427386-64ac35086427?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="Product Page"
        />
      </div>

      <div className="text-white">
        <p className="">
          About Product Page A product page provides detailed information about
          a product and helps users make informed purchasing decisions. It
          should include the product name, high-quality images, price,
          description, and available features. Additional elements such as
          product ratings, customer reviews, size or color options, and stock
          availability can improve the shopping experience. Clear buttons like
          “Add to Cart” and “Buy Now” make purchasing convenient. The page
          should have a responsive design that works smoothly across mobile
          devices, tablets, and desktops. Proper navigation, fast loading speed,
          and an attractive layout are also important. Overall, a well-designed
          product page improves user experience and increases customer
          engagement and sales.
        </p>
      </div>
    </>
  );
};

export default Product;

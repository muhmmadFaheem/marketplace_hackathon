"use client";
import { useCart } from "@/context/Context";
import Image from "next/image";
import React from "react";

const Wishlist = () => {
  const { wishlist, setWishlist, addToCart } = useCart();

  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <>
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="flex items-center border-b py-4 gap-4"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-500">${product.price}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => {
                      addToCart(product);
                      removeFromWishlist(product._id);
                    }}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Wishlist;

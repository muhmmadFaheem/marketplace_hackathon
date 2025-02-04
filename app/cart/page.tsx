"use client";
import { useCart } from "@/context/Context";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const AddToCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const router = useRouter();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(({ product, quantity }) => (
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
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(product._id)}
                    className="px-3 py-1 bg-gray-300 rounded-l-lg hover:bg-gray-400"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border">{quantity}</span>
                  <button
                    onClick={() => increaseQuantity(product._id)}
                    className="px-3 py-1 bg-gray-300 rounded-r-lg hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-lg font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => router.push("/checkout")}
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default AddToCart;

"use client";

import React, { useState } from "react";
import { useCart } from "@/context/Context";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Checkout = () => {
  const { cartItems } = useCart();
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!userData.name || !userData.email || !userData.address) {
      alert("Please fill in all the fields.");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert("Order Placed Successfully!");
    router.push("/");
  };

  console.log("Cart Items:", cartItems); // Debugging cart structure

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Cart Items */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Order</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item: any, index: any) => (
              <div
                key={index}
                className="flex items-center border p-3 rounded-lg"
              >
                {/* Ensure image URL is available */}
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.productName}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* User Info Form */}
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your full name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-lg"
          placeholder="Enter your address"
        />
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;

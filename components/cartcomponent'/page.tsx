// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item._id === product._id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   const updateCartQuantity = (productId, quantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item._id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

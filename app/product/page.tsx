// "use client";

// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// // Create the Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ngiqta5f",
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   useCdn: true,
//   apiVersion: "2021-08-31",
// });

// // Define the product and cart item interfaces
// interface Product {
//   _id: string;
//   productName: string;
//   category: string;
//   price: number;
//   description: string;
//   status: string;
//   colors: string[];
//   inventory: number;
//   image?: {
//     asset: {
//       _ref: string;
//     };
//   };
//   imageUrl?: string;
// }

// interface CartItem {
//   product: Product;
//   quantity: number;
// }

// const ProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [wishlist, setWishlist] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   // Fetch products from Sanity
//   const fetchProducts = async () => {
//     try {
//       const query = `
//         *[_type == "product"]{
//           _id,
//           productName,
//           category,
//           price,
//           description,
//           status,
//           colors,
//           inventory,
//           "imageUrl": image.asset->url
//         }
//       `;
//       const result: Product[] = await client.fetch(query);
//       setProducts(result);
//       setFilteredProducts(result);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Add product to the cart
//   const handleAddToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.product._id === product._id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.product._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { product, quantity: 1 }];
//       }
//     });
//   };

//   // Increase quantity in the cart
//   const handleIncreaseQuantity = (productId: string) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.product._id === productId
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   // Decrease quantity in the cart
//   const handleDecreaseQuantity = (productId: string) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.product._id === productId && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0) // Remove item if quantity becomes 0
//     );
//   };

//   // Add or remove product from wishlist
//   const handleWishlistToggle = (product: Product) => {
//     setWishlist((prevWishlist) => {
//       if (prevWishlist.some((item) => item._id === product._id)) {
//         return prevWishlist.filter((item) => item._id !== product._id);
//       } else {
//         return [...prevWishlist, product];
//       }
//     });
//   };

//   // Get total cart amount
//   const getTotalAmount = () => {
//     return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
//   };

//   // Search products
//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     const filtered = products.filter((product) =>
//       product.productName.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       {/* Search Bar */}
//       <div className="mb-4 flex justify-center">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => handleSearch(e.target.value)}
//           placeholder="Search products..."
//           className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <h1 className="text-xl font-bold mb-4">Available Products</h1>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//           >
//             {product.imageUrl && (
//               <Image
//                 src={product.imageUrl}
//                 alt={product.productName}
//                 width={300}
//                 height={300}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//             )}
//             <h2 className="text-lg font-semibold mt-2">{product.productName}</h2>
//             <p className="text-gray-600 mt-1">{product.category}</p>
//             <p className="text-blue-600 font-bold mt-1">${product.price.toFixed(2)}</p>
//             <p className="text-gray-500 mt-2 text-sm">{product.description}</p>

//             <button
//               className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>

//             <button
//               className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
//               onClick={() => handleWishlistToggle(product)}
//             >
//               {wishlist.some((item) => item._id === product._id)
//                 ? "Remove from Wishlist"
//                 : "Add to Wishlist"}
//             </button>

//             {/* Link to Dynamic Product Page */}
//             <Link
//               href={`/products/${product._id}`}
//               className="block mt-2 text-center text-blue-500 hover:underline"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Cart Summary */}
//       <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
//         {cart.length > 0 ? (
//           <div>
//             <ul className="space-y-4">
//               {cart.map((item) => (
//                 <li
//                   key={item.product._id}
//                   className="flex justify-between items-center bg-white shadow-sm py-4 px-4 rounded-md"
//                 >
//                   <div>
//                     <p className="font-medium">{item.product.productName}</p>
//                     <p className="text-sm text-gray-600">
//                       Quantity: {item.quantity} x ${item.product.price.toFixed(2)}
//                     </p>
//                     <div className="flex gap-2 mt-2">
//                       <button
//                         className="bg-gray-200 px-2 py-1 rounded-md"
//                         onClick={() => handleDecreaseQuantity(item.product._id)}
//                       >
//                         -
//                       </button>
//                       <button
//                         className="bg-gray-200 px-2 py-1 rounded-md"
//                         onClick={() => handleIncreaseQuantity(item.product._id)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <p className="font-bold">
//                     ${item.product.price * item.quantity}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-4 text-right">
//               <h3 className="text-xl font-bold">Total: ${getTotalAmount().toFixed(2)}</h3>
//             </div>
//           </div>
//         ) : (
//           <p>Your cart is empty. Add some products!</p>
//         )}
//       </div>

//       {/* Wishlist */}
//       <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold mb-4">Wishlist</h2>
//         {wishlist.length > 0 ? (
//           <ul className="space-y-4">
//             {wishlist.map((item) => (
//               <li
//                 key={item._id}
//                 className="flex justify-between items-center bg-white shadow-sm py-4 px-4 rounded-md"
//               >
//                 <div>
//                   <p className="font-medium">{item.productName}</p>
//                   <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 </div>
//                 <Image
//                   src={item.imageUrl || ""}
//                   alt={item.productName}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Your wishlist is empty.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

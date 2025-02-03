// import { useCart } from "../cartContext";
// import Link from "next/link";
// import { loadStripe } from "@stripe/stripe-js";

// const CartPage = () => {
//   const { cart, removeFromCart, updateCartQuantity } = useCart();

//   const getTotalAmount = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handleCheckout = async () => {
//     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
//     const response = await fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(cart),
//     });
//     const session = await response.json();
//     await stripe.redirectToCheckout({ sessionId: session.id });
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Your Cart</h1>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map((item) => (
//             <div key={item._id} className="flex justify-between border-b py-4">
//               <p>{item.productName} ({item.quantity})</p>
//               <p>${item.price * item.quantity}</p>
//               <button onClick={() => removeFromCart(item._id)}>Remove</button>
//               <input type="number" value={item.quantity} onChange={(e) => updateCartQuantity(item._id, Number(e.target.value))} />
//             </div>
//           ))}
//           <h2 className="text-xl font-bold mt-4">Total: ${getTotalAmount()}</h2>
//           <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleCheckout}>
//             Checkout
//           </button>
//         </div>
//       ) : (
//         <p>Your cart is empty. <Link href="/">Go shopping</Link></p>
//       )}
//     </div>
//   );
// };

// export default CartPage;
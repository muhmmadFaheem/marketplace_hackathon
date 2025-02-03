// import Stripe from "stripe";
// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
//     const { cart } = req.body;
//     const lineItems = cart.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: { name: item.productName },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${req.headers.origin}/success`,
//       cancel_url: `${req.headers.origin}/cart`,
//     });

//     res.json({ id: session.id });
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end("Method Not Allowed");
//   }
// }

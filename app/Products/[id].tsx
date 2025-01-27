import React from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

// Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ngiqta5f",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

// Product Details Page
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
      _id,
      productName,
      category,
      price,
      description,
      colors,
      "imageUrl": image.asset->url
    }`,
    { id: params.id }
  );

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{product.productName}</h1>
      {product.imageUrl && (
        <Image
          src={product.imageUrl}
          alt={product.productName}
          width={500}
          height={500}
          className="rounded-lg"
        />
      )}
      <p className="mt-2 text-gray-600">Category: {product.category}</p>
      <p className="text-blue-600 text-lg font-bold">${product.price.toFixed(2)}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
}

"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { Product } from "@/sanity/type/product";

async function getProduct(id: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && _id == $id][0]{
      _id,
      productName,
      category,
      price,
      description,
      status,
      colors,
      inventory,
      "imageUrl": image.asset->url
    }`,
    { id }
  );
}

export default function ProductDetails() {
  const params = useParams(); // Get dynamic params
  console.log("Params:", params); // Debugging

  const id = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProduct(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <div className="text-center text-red-500">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold">{product.productName}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

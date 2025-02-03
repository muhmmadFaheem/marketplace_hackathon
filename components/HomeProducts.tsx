import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IProduct {
  _id: string;
  productName: string;
  category: string;
  price: number;
  description: string;
  status: string;
  colors: string[];
  inventory: number;
  imageUrl: string;
}

const getData = async () => {
  const url = await client.fetch(`
  *[_type == "product"]{
    _id,
    productName,
    category,
    price,
    description,
    status,
    colors,
    inventory,
    "imageUrl": image.asset->url
  }`);
  return await url;
};

const HomeProducts = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6">
      {data.map((product: IProduct) => {
        return (
          <div className="border rounded-lg shadow-lg p-4 bg-white">
            <Link href={`/product/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={300}
                height={300}
                className="w-full object-cover rounded-md"
              />
            </Link>
            <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-xl font-semibold mt-2">${product.price}</p>
            <p
              className={`text-sm font-medium ${product.status === "Available" ? "text-green-500" : "text-red-500"}`}
            >
              {product.status}
            </p>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeProducts;

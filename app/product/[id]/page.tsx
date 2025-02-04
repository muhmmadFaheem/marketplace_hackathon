"use client";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "@/context/Context";
import React, { useEffect, useState } from "react";

interface IProduct {
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

const getProduct = async (id: string): Promise<IProduct | null> => {
  return await client.fetch(
    `*[_type == "product" && _id == $id][0]{
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
};

const ProductDetail = () => {
  const { id } = useParams() as { id: string };
  const { cartItems, addToCart, addToWishlist, wishlist } = useCart();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (id) {
      getProduct(id)
        .then((data) => {
          console.log("Fetched Product:", data);
          setProduct(data);
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      setIsInCart(cartItems.some((item) => item.product._id === product._id));
      setIsInWishlist(wishlist.some((item) => item._id === product._id));
    }
  }, [product, cartItems, wishlist]);

  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <Image
          src={product.imageUrl}
          alt={product.productName}
          width={500}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">{product.productName}</h1>
          <p className="text-gray-500 text-lg">{product.category}</p>
          <p className="text-xl font-semibold mt-2">${product.price}</p>
          <p className={`text-md font-medium ${product.status === "Available" ? "text-green-500" : "text-red-500"}`}>
            {product.status}
          </p>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="mt-4 font-semibold">Available Colors:</p>
          <div className="flex gap-2 mt-2">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          <p className="mt-4 font-semibold">Stock: {product.inventory} left</p>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => {
              if (product.inventory > 0) {
                addToCart({
                  _id: product._id,
                  title: product.productName,
                  description: product.description,
                  price: product.price,
                  discountPercentage: 0,
                  imageUrl: product.imageUrl,
                });
                setIsInCart(true);
              }
            }}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              isInCart
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
            disabled={isInCart}
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>

          <button
            onClick={() => {
              addToWishlist({
                _id: product._id,
                title: product.productName,
                description: product.description,
                price: product.price,
                discountPercentage: 0,
                imageUrl: product.imageUrl,
              });
              setIsInWishlist(true);
            }}
            className={`px-6 py-3 font-semibold rounded-lg transition ${
              isInWishlist
                ? "bg-gray-400 text-black cursor-not-allowed"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
            disabled={isInWishlist}
          >
            {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

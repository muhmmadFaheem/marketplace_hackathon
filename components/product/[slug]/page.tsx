import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity/type/product";
import { groq } from "next-sanity";
import Image from "next/image";

// interface ProductPageProps {
//     params : Promise<{slug : string}>
// }

interface ProductPageProps {
    params: { slug: string };
}


// async function getProduct(slug:string) : Promise<Product> {
//     return client.fetch(
//         groq`*[_type == "product" && slug.current == $slug][0]{
//         _id,
//         productName,
//         _type,
//         image,
//         price
        
//         }`, {slug}
//     )
// }

async function getProduct(slug: string): Promise<Product | null> {
    try {
        const product = await client.fetch(
            groq`*[_type == "product" && slug.current == $slug][0]`,
            { slug }
        );
        return product || null;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}


// export default async function ProductsPage({params} : ProductPageProps){

//     const {slug} = await params;
//     const product = await getProduct(slug);

//     return(

//         <div className="max-w-7xl- mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square">
//                     {
//                         product?.image && (
//                             <Image 
//                             src={urlFor(product.image).url()}
//                             alt = { product.productName}
//                             width = {500}
//                             height = {500}
//                             className = "rounded-lg shadow-md"
//                             />
//                         )
//                     }
//                 </div>
//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-4xl font-bold">
//                         {product.productName}
//                     </h1>
//                     <p className="text-2xl font-sans">
//                         {product.price}
//                     </p>
//                 </div>
//             </div>
//         </div>

//     )
// }


export default async function ProductsPage({ params }: ProductPageProps) {
    const {slug} = params;
    const product = await getProduct(slug);

    if (!product) {
        return <div className="text-center text-red-500">Product not found!</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.productName}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{product.productName}</h1>
                    <p className="text-2xl font-sans">${product.price.toFixed(2)}</p>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((product) => (
        <Link
          className="w-full h-[60vh] border border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${product.id}`}
          key={product.id}
        >
          {/* IMAGE CONTAINER */}
          {product.img && (
            <div className="relative h-[80%]">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-contain"
                sizes="100% 100%"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{product.title}</h1>
            <h2 className="group-hover:hidden text-xl">${product.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

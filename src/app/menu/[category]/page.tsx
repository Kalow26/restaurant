import { pizzas } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((pizza) => (
        <Link
          className="w-full h-[60vh] border border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${pizza.id}`}
          key={pizza.id}
        >
          {/* IMAGE CONTAINER */}
          {pizza.img && (
            <div className="relative h-[80%]">
              <Image
                src={pizza.img}
                alt={pizza.title}
                fill
                className="object-contain"
                sizes="100% 100%"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{pizza.title}</h1>
            <h2 className="group-hover:hidden text-xl">{pizza.price}</h2>
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

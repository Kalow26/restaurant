import { featuredProducts } from "@/data/data";
import Image from "next/image";

const Features = () => {
  return (
    <div className="overflow-x-scroll text-red-500 snap-x snap-mandatory">
      {/* wrapoper */}
      <div className="w-max flex">
        {/* single item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="h-[60vh] w-[100vw] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] "
          >
            {/* image container */}
            {product.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 snap-center">
                <Image
                  src={product.img}
                  alt="feature1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            )}
            {/* text container  */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 pt-6 xl:pt-0">
              <h1 className="text-xl upparcase font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8">{product.desc}</p>
              <span className="font-bold text-xl">${product.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

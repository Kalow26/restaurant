import Image from "next/image";

const Offers = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh] md:bg-[url('/offerBg.png')] md:bg-cover">
      {/* text container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French fries
        </h1>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aspernatur id porro commodi ad nesciunt minus dolores, eius illum
          nostrum quis sint quo excepturi hic repellendus minima rerum odit
          nihil ex quia.
        </p>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>

      {/* image container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt="feature1"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Offers;

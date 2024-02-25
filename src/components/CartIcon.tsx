import Image from "next/image";

const CartIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-5 h-5">
        <Image
          src="/cart.png"
          sizes="100vw"
          alt="cart"
          fill
          className="w-auto h-auto"
        />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};

export default CartIcon;

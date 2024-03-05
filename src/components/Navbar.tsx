import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Menu from "./Menu";
import UserLinks from "./UserLinks";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 lg:px-20 xl:px-40 flex items-center justify-between border border-b-red-500 uppercase md:h-24">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="md:text-center flex-1 text-xl md:font-bold">
        <Link href="/">Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" width={20} height={20} alt="phone" />
          <span>+33 067876</span>
        </div>
        <UserLinks />
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

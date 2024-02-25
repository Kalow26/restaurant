import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 text-red-500 flex justify-between items-center p-4 lg:px-20 xl:px-40">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <p>&copy; All right reserved</p>
    </div>
  );
};

export default Footer;

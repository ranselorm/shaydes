import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="lg:-mt-[40px] mb-[60px] lg:mb-[30px]">
        <Link href="/">
          <Image src="/lg.png" width={80} height={100} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

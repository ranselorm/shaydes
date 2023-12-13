import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div>
        <Link href="/">
          <Image src="/lg.png" width={80} height={100} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

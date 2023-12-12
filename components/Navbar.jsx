import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div>
        <Image src="/lg.png" width={100} height={100} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;

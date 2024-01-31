import Link from "next/link";
import Image from "next/image";
const isAuthenticated = false; //change this later

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="mb-[40px] lg:mb-[20px] flex justify-center gap-x-[60px] items-center w-full px-4 py-3">
        <Link href="/">
          <Image src="/lg.png" width={70} height={70} alt="logo" />
        </Link>
        {/* <div className="flex items-center gap-x-6">
          <Link href="/courses" className="">
            <p>Courses</p>
          </Link>
          <Link href="/login" className="">
            <p>{isAuthenticated ? "Logout" : "Login"}</p>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;

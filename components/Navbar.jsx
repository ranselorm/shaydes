"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
// import Signout from "../components/Signout";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const signout = () => {
  signOut(auth)
    .then(() => {
      toast.success("Signout succesfull!");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const Navbar = () => {
  const { user } = useAuth();
  return (
    <nav className="flex justify-center">
      <div className="mb-[40px] lg:mb-[20px] flex flex-col justify-center gap-x-[60px] items-center w-full px-4 py-3">
        <Link href="/">
          <Image src="/lg.png" width={70} height={70} alt="logo" />
        </Link>
        {user && <button onClick={signout}>Sign Out</button>}
      </div>
    </nav>
  );
};

export default Navbar;

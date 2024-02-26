"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      router.push("/");
      toast.success(`Welcome back ${result.user.displayName}`);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  return (
    <div className=" text-black h-max py-3 px-12 rounded-md mt-[150px] mx-auto flex justify-center bg-white w-max">
      <div>
        <div className="flex gap-6 items-center">
          <Image
            src="/google.png"
            alt=""
            width={50}
            height={50}
            className="object-cover"
          />
          <button className="text-[20px]" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

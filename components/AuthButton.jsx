"use client";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const GoogleSignInButton = () => {
  const { setUser } = useAuth();
  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      toast.success(`Welcome back, ${result.user.displayName}`);
    } catch (error) {
      toast.error();
      console.error("Oops, Something went wrong!");
    }
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="bg-white px-2 py-1 text-black flex items-center gap-2 rounded"
    >
      <img src="/google.png" alt="google logo" className="w-6 h-6" />
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;

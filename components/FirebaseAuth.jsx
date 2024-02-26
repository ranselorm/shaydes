"use client";
import React from "react";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const FirebaseAuth = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
      };
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log("User created successfully on the server side.", response);
      } else {
        console.error(
          "Failed to create user on the server side:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };
  return (
    <div className="bg-white text-black h-max py-6 px-12 rounded-md">
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
  );
};

export default FirebaseAuth;

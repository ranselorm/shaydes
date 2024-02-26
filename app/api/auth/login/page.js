import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import User from "../../../../models/userModel";

import { NextResponse } from "next/server";
// import { connect } from "../../../db";
import { connect } from "../../../../db";
connect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // Perform any necessary database operations
      console.log(result);

      await User.create({
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
      });
      NextResponse.json({ success: true, user: result.user });
    } catch (error) {
      console.log("Google sign-in error:", error);
      NextResponse.json({
        success: false,
        error: "Internal Server Error",
      });
    }
  } else {
    NextResponse.json({
      success: false,
      error: "Method Not Allowed",
    });
  }
}

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import User from "../../../../models/userModel";

import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../db";
connect();

// export async function POST(NextRequest, res) {
//   const { uid, displayName, email } = NextRequest.body;
//   try {
//     const result = await User.create({ uid, displayName, email });
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Server Error" });
//   }
// }

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const newUser = new User(req.body);
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

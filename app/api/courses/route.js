const Course = require("../../../models/courseModel");

import { NextResponse } from "next/server";
import { connect } from "../../../db";
connect();

export async function GET(req, res) {
  try {
    const courses = await Course.find();
    return NextResponse.json(courses);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" });
  }
}

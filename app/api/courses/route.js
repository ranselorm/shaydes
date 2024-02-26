// import Course from "../../../models/course";

import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    const courses = await prisma.course.findMany({
      include: {
        chapters: {},
      },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}

// export async function POST(req) {
//   const { body } = req;
//   try {
//     const course = await Course.create(body);
//     return new NextResponse(JSON.stringify(course), {
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ message: error.message }), {
//       status: error.status || 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

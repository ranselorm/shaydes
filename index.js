const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const newCourse = await prisma.course.create({
      data: {
        name: "Intro Course",
        backdrop: "hello@prisma.com",
        chapters: {
          create: [
            {
              name: "My first chapter",
              content: {
                create: [
                  {
                    video_url: "hello video",
                    overview: "Hi there!!!",
                  },
                ],
              },
            },
          ],
        },
      },
      include: {
        chapters: {
          include: {
            content: true,
          },
        },
      },
    });

    console.log("New course created:", newCourse);
  } catch (error) {
    console.error("Error creating course:", error);
  } finally {
    await prisma.$disconnect();
  }

  const courses = await prisma.course.findMany({
    include: {
      chapters: {
        include: {
          content: true,
        },
      },
    },
  });

  console.log("All courses:", courses);
  return courses;
}

main();

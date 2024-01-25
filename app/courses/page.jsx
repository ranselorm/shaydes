import Link from "next/link";
import { courseItems } from "../../data";

const Courses = () => {
  return (
    <>
      <div className="flex justify-center py-10 gap-5 items-center h-screen">
        {courseItems.map((course) => (
          <div key={course.id} className="w-[300px]">
            <Link href={`/courses/${course.id}`}>
              <div className="relative w-[300px] h-[250px] rounded-lg overflow-hidden group">
                <img
                  src={course.backdrop}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute hidden inset-0 group-hover:flex justify-center items-center bg-black/30 cursor-pointer transition-all duration-300">
                  <div className="bg-white bg-opacity-30 w-full text-center py-2 text-[20px] font-bold">
                    Enroll Now!
                  </div>
                </div>
              </div>
            </Link>
            <div className="px-2 my-2">
              <h4 className="flex items-center justify-between font-bold">
                {course.name} <span>$20.90</span>
              </h4>
              <article className="my-3">
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  alias ut assumenda mollitia.
                </p>
                <Link href={`/courses/${course.id}`}>
                  <button className="bg-btn-gradient py-2 px-3 rounded-full text-black text-[18px] font-semibold mt-4 w-full">
                    Enroll Now!
                  </button>
                </Link>
              </article>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;

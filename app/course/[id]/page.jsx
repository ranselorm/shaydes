"use client";
import ReactPlayer from "react-player";

import { courseItems } from "../../../data";

const CoursePage = () => {
  return (
    <>
      {/* <div className="flex">
        <section className="w-3/12 h-max py-10 p-4 shadow-lg">
          <div>
            <div>Logo</div>
            <h4 className="font-bold my-6">Course Content</h4>
            <div className="flex flex-col">
              {courseItems.map((course) => (
                <div className="py-4 border-b border-gray-300" key={course.id}>
                  <div className="flex items-center text-[15px] font-bold">
                    <h3>
                      Section <span>{course.section}:</span>
                    </h3>
                    <span className="ml-2">{course.name}</span>
                  </div>
                  {course.content.map((course) => (
                    <div key={course.id}>
                      <h4 className="py-2 text-[14px] hover:bg-gray-200 rounded-md transition-all cursor-pointer">
                        <span className="mr-2">{course.id}.</span>
                        {course.name}
                      </h4>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <main className="bg-gray-100 w-9/12 flex justify-center pt-[50px]">
          <div className="w-full">
            {courseItems.map((course) =>
              course.content.map((course) => (
                <div className="w-9/12 h-[380px] mx-auto">
                  <ReactPlayer url="" width="100%" height="100%" />
                  <article>
                    <h2 className="text-[18px] my-4">{course.name}</h2>
                    <h4 className="text-[23px] font-bold">
                      Lorem ipsum dolor sit amet
                    </h4>
                    <p className="text-[15px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, tempore explicabo itaque repellat minima eum
                      laudantium autem repudiandae, odit fugit est. Adipisci
                      laboriosam, debitis fuga eum excepturi laudantium
                      consequuntur earum!
                    </p>
                  </article>
                </div>
              ))
            )}
          </div>
        </main>
      </div> */}
    </>
  );
};

export default CoursePage;

import Image from "next/image";
import { CgCloseO } from "react-icons/cg";
import ReactPlayer from "react-player";
import { HiBadgeCheck } from "react-icons/hi";

const CourseDetailModal = ({ course, onClose }) => {
  console.log(course);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-main px-4 transition-all ease-in-out z-10 mt-[80px] text-black">
      <div className="bg-gray-100 rounded-lg p-5 md:w-8/12 md:h-[80vh] relative flex items-center">
        <button
          onClick={onClose}
          className="absolute text-black right-1 top-1 text-[24px]"
        >
          <CgCloseO />
        </button>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 w-full">
          <div className="md:w-7/12 w-full">
            <article className="bg-white shadow-lg p-5 rounded">
              <h4 className="font-bold text-[22px] capitalize mb-6">
                {course.name}
              </h4>
              <div>
                <p className="text-sm text-gray-600 my-1">
                  Enrolled students - <span>250</span>
                </p>
                <p className="text-sm text-gray-600 my-1">
                  Created By - <span>Pamela</span>
                </p>
                <p className="text-sm text-gray-600 my-1">
                  Last Updated - <span>01/29/2024</span>
                </p>
                <p className="text-sm text-gray-600 my-1">
                  Language - <span>English</span>
                </p>
                <div>
                  <h4 className="font-semibold mt-10">Description</h4>
                  <p className="text-sm my-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam velit qui tenetur. Laboriosam nihil alias non error
                    eaque id deserunt quis incidunt iste illum cumque explicabo,
                    eos quia quaerat. Quo!
                  </p>
                  <p className="text-sm my-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam velit qui tenetur. Laboriosam nihil alias non error
                    eaque id deserunt quis incidunt iste illum cumque explicabo,
                    eos quia quaerat. Quo!
                  </p>
                </div>
              </div>
            </article>
            {/* <div className="bg-white rounded p-5 mt-4 h-[220px] overflow-scroll"></div> */}
          </div>
          <div className="w-full md:w-[38%] bg-white shadow-lg p-5 rounded flex flex-col justify-center items-center gap-4 ">
            <div className="w-full">
              <div className="w-full md:w-[280px] h-[200px] bg-black rounded mb-4 overflow-hidden">
                <ReactPlayer
                  url="https://youtu.be/k6eE3c70hgg?si=pRQyurEmkVH5MA5f"
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
              <article>
                <h4 className="font-semibold text-[33px] mb-2">$49</h4>
              </article>
              <div className="">
                <h4 className="font-semibold mb-2">Course Features</h4>
                <p className="text-sm my-1 flex items-center gap-2">
                  <span>
                    <HiBadgeCheck className="text-yellow-700" />
                  </span>
                  Total 10 lessons
                </p>
                <p className="text-sm my-1 flex items-center gap-2">
                  <span>
                    <HiBadgeCheck className="text-yellow-700" />
                  </span>
                  Total 10 lessons
                </p>
                <p className="text-sm my-1 flex items-center gap-2">
                  <span>
                    <HiBadgeCheck className="text-yellow-700" />
                  </span>
                  Total 10 lessons
                </p>
                <p className="text-sm my-1 flex items-center gap-2">
                  <span>
                    <HiBadgeCheck className="text-yellow-700" />
                  </span>
                  Total 10 lessons
                </p>
                <button
                  className=" mt-3 py-2 text-black rounded w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #FAC97A, #E9BF5C)",
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;

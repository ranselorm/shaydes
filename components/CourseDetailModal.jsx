import Image from "next/image";
import { CgCloseO } from "react-icons/cg";
import { MdLaunch } from "react-icons/md";

const CourseDetailModal = ({ course, onClose }) => {
  console.log(course);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-main px-4 transition-all ease-in-out z-10 mt-[80px]">
      <div className="bg-gray-100 rounded-lg p-5 md:w-9/12 md:h-[80vh] relative flex items-center">
        <button
          onClick={onClose}
          className="absolute text-black right-4 top-3 text-[24px]"
        >
          <CgCloseO />
        </button>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 w-full">
          <div className="w-6/12">
            <article className="bg-white shadow-lg p-5 rounded">
              <h4 className="font-bold text-[22px] capitalize mb-6">
                Cosmetology for beginners
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
              </div>
            </article>
          </div>
          <div className="w-4/12 bg-white shadow-lg p-5 rounded flex flex-col justify-center items-center gap-4 ">
            <div className="">
              <div className="w-[300px] h-[200px] bg-black rounded mb-4"></div>
              <article>
                <h4 className="font-semibold">$49</h4>
              </article>
              <div>
                <h4 className="font-semibold mb-2">Course Features</h4>
                <p className="text-sm my-1 flex items-center">
                  <span>.</span>
                  Total 10 lessons
                </p>
                <p className="text-sm my-1 flex items-center">
                  <span>.</span>
                  Total 10 lessons
                </p>
                <p className="text-sm my-1 flex items-center">
                  <span>.</span>
                  Total 10 lessons
                </p>
                <p className="text-sm my-1 flex items-center">
                  <span>.</span>
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

"use client";
import { useState, useEffect } from "react";
import CourseDetailModal from "../../components/CourseDetailModal";

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourseItems(data);
      console.log("from backend", data);
    };

    fetchData();
  }, []);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center py-10 gap-5 items-center h-screen md:-mt-[80px]">
        {courseItems?.map((course) => (
          <div
            key={course.id}
            className="w-[300px]"
            onClick={() => openModal(course)}
          >
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
            <div className="px-2 my-2">
              <h4 className="flex items-center justify-between font-bold">
                {course.name} <span>$20.90</span>
              </h4>
              <article className="my-3">
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  alias ut assumenda mollitia.
                </p>
                <button className="bg-btn-gradient py-2 px-3 rounded-full text-black text-[18px] font-semibold mt-4 w-full">
                  Enroll Now!
                </button>
              </article>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={closeModal}
          isOpen={isModalOpen}
        />
      )}
    </>
  );
};

export default Courses;

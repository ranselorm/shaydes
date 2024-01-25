"use client";
import React from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";
import { courseItems } from "../../../data";

const CoursePage = () => {
  const { id } = useParams();
  const course = courseItems.find((course) => course.id === id);

  // Initialize state to store the current chapter and content
  const [currentChapterIndex, setCurrentChapterIndex] = React.useState(0);
  const [currentContentIndex, setCurrentContentIndex] = React.useState(0);

  // Update the current chapter and content when a section or content is clicked
  const handleSectionClick = (chapterIndex) => {
    setCurrentChapterIndex(chapterIndex);
    setCurrentContentIndex(0); // Reset content index when a new section is clicked
  };

  const handleContentClick = (contentIndex) => {
    setCurrentContentIndex(contentIndex);
  };

  // Retrieve the current chapter and content based on the state
  const currentChapter = course.chapters[currentChapterIndex];
  const currentContent =
    currentChapter && currentChapter.content[currentContentIndex];

  return (
    <>
      <div className="flex">
        <section className="w-[350px] h-screen py-10 p-4 shadow-lg bg-black text-gray-200">
          <div className="px-2">Logo</div>
          <h4 className="font-bold my-6 px-2">Course Content</h4>
          <div className="flex flex-col">
            {course.chapters.map((course, index) => (
              <div key={index} className="py-4 border-b border-gray-200">
                <div
                  className="flex items-center text-[14px] font-bold px-2 cursor-pointer"
                  onClick={() => handleSectionClick(index)}
                >
                  <h3 className="">
                    Section <span>{course.section}:</span>
                  </h3>
                  <span className="ml-2">{course.name}</span>
                </div>
                {course.content.map((course, index) => (
                  <div
                    className="hover:bg-gray-200 px-2 py-1 rounded-sm cursor-pointer w-full transition-all"
                    key={index}
                    onClick={() => handleContentClick(index)}
                  >
                    <p className="text-[13px]">{course.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
        <main className="bg-gray-100 w-9/12 flex justify-center pt-[50px]">
          <div className="w-8/12">
            <div className="w-full h-[380px] mx-auto rounded-lg overflow-hidden shadow-lg bg-black">
              <ReactPlayer
                url={currentContent.videourl}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <article>
              <h2 className="text-[18px] my-4">
                Overview <span></span>
              </h2>
              <h4 className="text-[23px] font-bold">{currentContent.name}</h4>
              <p className="text-[15px]">{currentContent.overview}</p>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export default CoursePage;

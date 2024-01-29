// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import ReactPlayer from "react-player";
// import { courseItems } from "../../../data";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { MdOutlineKeyboardArrowUp } from "react-icons/md";

// const CoursePage = () => {
//   const { id } = useParams();
//   const course = courseItems.find((course) => course.id === id);

//   // Initialize state to store the current chapter and content
//   const [currentChapterIndex, setCurrentChapterIndex] = React.useState(0);
//   const [currentContentIndex, setCurrentContentIndex] = React.useState(0);

//   // Update the current chapter and content when a section or content is clicked
//   const handleSectionClick = (chapterIndex) => {
//     setCurrentChapterIndex(chapterIndex);
//     setCurrentContentIndex(0); // Reset content index when a new section is clicked
//   };

//   const handleContentClick = (contentIndex) => {
//     setCurrentContentIndex(contentIndex);
//   };

//   // Retrieve the current chapter and content based on the state
//   const currentChapter = course.chapters[currentChapterIndex];
//   const currentContent =
//     currentChapter && currentChapter.content[currentContentIndex];

//   const [openSection, setOpenSection] = React.useState(null);

//   return (
//     <>
//       <div className="flex">
//         <section className="w-[350px] h-screen py-10 p-4 shadow-xl bg-white overflow-y-auto">
//           <div className="px-2">Logo</div>
//           <h4 className="font-bold my-6 px-2">Course Content</h4>
//           <div className="flex flex-col">
//             {course.chapters.map((course, index) => (
//               <div key={index} className="py-4 border-b border-gray-200">
//                 <div
//                   className="text-[14px] font-bold px-2 cursor-pointer mb-3"
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <h3
//                     className="flex items-center"
//                     onClick={() =>
//                       setOpenSection(
//                         openSection === course.section ? null : course.section
//                       )
//                     }
//                   >
//                     Section <span>{course.section}:</span>
//                     <span className="ml-2">{course.name}</span>
//                     {/* {openSection ? (
//                       <MdOutlineKeyboardArrowUp className="text-[20px] font-bold" />
//                     ) : (
//                       <MdOutlineKeyboardArrowDown className="text-[20px] font-bold" />
//                     )} */}
//                   </h3>
//                 </div>
//                 {openSection === course.section && (
//                   <div>
//                     {course.content.map((course, index) => (
//                       <div
//                         className="hover:bg-gray-200 px-2 py-1 rounded-sm cursor-pointer w-full transition-all"
//                         key={index}
//                         onClick={() => handleContentClick(index)}
//                       >
//                         <p className="text-[13px]">{course.name}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//         <main className="w-9/12 flex justify-center pt-[50px] bg-gray-100">
//           <div className="w-8/12">
//             <div className="w-full h-[380px] mx-auto rounded-lg overflow-hidden shadow-lg bg-black">
//               <ReactPlayer
//                 url={currentContent.videourl}
//                 width="100%"
//                 height="100%"
//                 controls={true}
//               />
//             </div>
//             <article>
//               <h2 className="text-[18px] my-4">
//                 Overview <span></span>
//               </h2>
//               <h4 className="text-[23px] font-bold">{currentContent.name}</h4>
//               <p className="text-[15px]">{currentContent.overview}</p>
//             </article>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default CoursePage;

"use client";
// Import necessary modules
import React from "react";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";
import { courseItems } from "../../../data";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

// Define the CoursePage component
const CoursePage = () => {
  // Get the course ID from the URL
  const { id } = useParams();

  // Find the course with the matching ID
  const course = courseItems.find((course) => course.id === id);

  // Initialize state to store the current chapter and content
  const [currentChapterIndex, setCurrentChapterIndex] = React.useState(0);
  const [currentContentIndex, setCurrentContentIndex] = React.useState(0);

  // Initialize state to track open sections
  const [openSections, setOpenSections] = React.useState([]);

  // Update the current chapter and content when a section or content is clicked
  const handleSectionClick = (chapterIndex) => {
    setCurrentChapterIndex(chapterIndex);
    setCurrentContentIndex(0); // Reset content index when a new section is clicked
  };

  const handleContentClick = (contentIndex) => {
    setCurrentContentIndex(contentIndex);
  };

  // Toggle the completion status of a content item
  const toggleCompletion = (contentId) => {
    // Implement your completion logic here
  };

  // Check if a section is open
  const isSectionOpen = (section) => {
    return openSections.includes(section);
  };

  // Toggle the open status of a section
  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => {
      if (prevOpenSections.includes(section)) {
        return prevOpenSections.filter(
          (openSection) => openSection !== section
        );
      } else {
        return [...prevOpenSections, section];
      }
    });
  };

  // Retrieve the current chapter and content based on the state
  const currentChapter = course.chapters[currentChapterIndex];
  const currentContent =
    currentChapter && currentChapter.content[currentContentIndex];

  // Render the component
  return (
    <>
      <div className="flex bg-inherit rounded-lg overflow-hidden">
        <section className="w-[350px] h-screen py-10 p-4 shadow-lg bg-gray-900 overflow-y-auto">
          {/* Sidebar content */}
          <div className="px-2">Logo</div>
          <h4 className="font-bold my-6 px-2">Course Content</h4>
          <div className="flex flex-col">
            {course.chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className="py-4 border-b border-gray-200">
                <div
                  className="text-[14px] font-bold px-2 cursor-pointer mb-3"
                  onClick={() => handleSectionClick(chapterIndex)}
                >
                  <h3
                    className="flex items-center"
                    onClick={() => toggleSection(chapter.section)}
                  >
                    Section <span>{chapter.section}:</span>
                    <span className="ml-2">{chapter.name}</span>
                    {isSectionOpen(chapter.section) ? (
                      <MdOutlineKeyboardArrowUp className="text-[20px] font-bold" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="text-[20px] font-bold" />
                    )}
                  </h3>
                </div>
                {isSectionOpen(chapter.section) && (
                  <div>
                    {chapter.content.map((content, contentIndex) => (
                      <div
                        className="hover:bg-gray-200 px-2 py-1 rounded-sm cursor-pointer w-full transition-all flex items-center gap-1"
                        key={contentIndex}
                        onClick={() => handleContentClick(contentIndex)}
                      >
                        <input
                          type="checkbox"
                          // checked={/* Implement logic to check if content is completed */}
                          onChange={() => toggleCompletion(content.id)}
                          className="mr-2"
                        />
                        <p className="text-[13px]">{content.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <main className="w-9/12 flex justify-center pt-[50px] bg-gray-100 text-black">
          {/* Main content */}
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

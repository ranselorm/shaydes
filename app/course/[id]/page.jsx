import { courseItems } from "../../../data";

const CoursePage = () => {
  return (
    <>
      <div className="flex">
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
                      <h4 className="py-2 text-[14px] hover:bg-gray-200">
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
        <main className="">Main content</main>
      </div>
    </>
  );
};

export default CoursePage;

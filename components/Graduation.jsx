import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LoginModal from "../components/LoginModal";
import { GiGraduateCap } from "react-icons/gi";

const Graduation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="my-[30px]">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 ">
        <article className="md:w-5/12 flex flex-col gap-4 md:items-start items-center">
          <h3 className="font-semibold text-[20px] lg:text-[25px] flex items-center gap-3">
            54Shaydes Academia
            <GiGraduateCap className="text-[#FAC97A]" />
          </h3>
          <p className="md:text-left text-center">
            I am committed to delivering a personalized and memorable
            experience, ensuring that you look and feel your best as you
            celebrate this significant achievement.
          </p>
          <p className="md:text-left text-center">
            Don't miss the opportunity to secure your spot and make your
            graduation day even more extraordinary with a professionally crafted
            makeup look. Book now and let's make your graduation day a beautiful
            and unforgettable experience!
          </p>
          <Link
            href={"/login"}
            className="bg-gradient-yellow py-2 px-3 rounded-full text-black text-sm font-semibold md:w-4/12 w-full text-center"
          >
            <button>Courses</button>
          </Link>
        </article>
        <div className="w-full md:w-4/12 flex justify-center">
          <div className="relative w-[350px] h-[350px] rounded-lg overflow-hidden">
            <Image src="/grad.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graduation;

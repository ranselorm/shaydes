import React, { useState } from "react";
import Image from "next/image";
import GradModal from "./GradModal";
import { GiGraduateCap } from "react-icons/gi";

const Graduation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="my-[100px]">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 ">
        <article className="md:w-5/12 flex flex-col gap-4 items-start">
          <h3 className="font-semibold text-[20px] lg:text-[25px] flex items-center gap-3">
            Graduation Time
            <GiGraduateCap className="text-[#FAC97A]" />
          </h3>
          <p className="text-left">
            I am committed to delivering a personalized and memorable
            experience, ensuring that you look and feel your best as you
            celebrate this significant achievement. Don't miss the opportunity
            to secure your spot and make your graduation day even more
            extraordinary with a professionally crafted makeup look. Book now
            and let's make your graduation day a beautiful and
            unforgettable experience!
          </p>
          {/* <input
              type="text"
              className="outline-none text-black w-12/12"
              placeholder="Enter your email address"
            /> */}
          <button
            className="bg-btn-gradient py-2 px-3 rounded-full text-black text-sm font-semibold w-4/12"
            onClick={() => setIsModalOpen(true)}
          >
            Register
          </button>
        </article>
        <div className="w-full md:w-4/12">
          <div className="relative w-[350px] h-[350px] rounded-lg overflow-hidden">
            <Image src="/grad.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
      <GradModal isOpen={isModalOpen} onClose={closeModal} db="graduation" />
    </section>
  );
};

export default Graduation;

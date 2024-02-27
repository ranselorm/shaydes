import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiGraduateCap } from "react-icons/gi";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";

const Graduation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, loading } = useAuth();
  console.log(loading);

  return (
    <section className="my-[30px]">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 ">
        <article className="md:w-5/12 flex flex-col gap-4 md:items-start items-center">
          <h3 className="font-semibold text-[20px] lg:text-[25px] flex items-center gap-3">
            54Shaydes Academia
            <GiGraduateCap className="text-[#FAC97A]" />
          </h3>
          <p className="md:text-left text-center">
            Dive into the basics of makeup application, mastering fundamental
            techniques, building a strong foundation and excellent customer
            relation . Learn about skincare and the essential tools to kickstart
            your makeup commercial or personal journey.
          </p>
          {!loading && user ? (
            <Link
              href={"/courses"}
              className="bg-gradient-yellow py-2 px-3 rounded-full text-black text-sm font-semibold md:w-4/12 w-full text-center"
            >
              <button>Courses</button>
            </Link>
          ) : (
            <AuthButton />
          )}
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

"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { bridalItems } from "../data";

const Bridal = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="px-[20px] md:px-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div>
            <h3 className="font-semibold text-[16px] md:text-[22px]">Bridal</h3>
          </div>
        </div>
        {/* <div>
          <Button text="View More" hidden={true} />
          <Button icon={<IoIosArrowRoundForward />} />
        </div> */}
      </div>
      <Slider {...settings} className="mt-[50px]">
        {bridalItems.map(({ id, name, img }) => (
          <div
            className="bg-gray-200 w-[200px] h-[440px] rounded-lg relative"
            key={id}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image src={img} fill alt="" className="object-contain" />
            </div>
            <Link href={`/bridal/${id}`}>
              <div className="bg-black absolute z-50 inset-0 opacity-0 hover:opacity-75 transition-all duration-300 flex items-center justify-center cursor-pointer">
                <p className="text-bold text-[20px]">{name}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Bridal;

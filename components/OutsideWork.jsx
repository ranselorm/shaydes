"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { AiOutlineBuild } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderItems = [
  {
    name: "Traditional",
    img: "/trad.jpg",
  },
  {
    name: "White Wedding",
    img: "/wed.jpg",
  },
  {
    name: "Civil Princess",
    img: "/civil.jpg",
  },
  {
    name: "Reception",
    img: "/reception.jpg",
  },
];

const OutsideWork = () => {
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
    <section className="mt-[80px] lg:mt-[150px] px-[20px] md:px-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div>
            <h3 className="font-semibold text-[16px] md:text-[22px]">Extras</h3>
          </div>
        </div>
        <div>
          <Button text="View More" hidden={true} />
          <Button icon={<IoIosArrowRoundForward />} />
        </div>
      </div>
      <Slider {...settings} className="mt-[50px]">
        {sliderItems.map((item, index) => (
          <div
            className="bg-gray-200 w-[200px] h-[440px] rounded-lg relative"
            key={index}
          >
            <div className="relative w-4/5 h-[350px] lg:h-[400px] mx-auto top-[50px] rounded-lg overflow-hidden">
              <Image src={item.img} fill alt="" className="object-cover" />
            </div>
            <div className="bg-black absolute z-50 inset-0 opacity-0 hover:opacity-75 transition-all duration-300 flex items-center justify-center">
              <p className="text-bold text-[20px]">{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OutsideWork;

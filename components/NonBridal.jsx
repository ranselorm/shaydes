"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "../data";

const NonBridal = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          <article className="">
            <h3 className="font-semibold text-[16px] md:text-[22px]">
              Non Bridal
            </h3>
          </article>
        </div>
        <div>
          <Button text="Coming Next" hidden={true} color="#8d8a8a" />
          <Button icon={<IoIosArrowRoundForward />} />
        </div>
      </div>

      <Slider {...settings} className="mt-[50px]">
        {sliderItems.map((item, index) => (
          <div
            className="relative w-full h-[400px] rounded-lg overflow-hidden"
            key={index}
          >
            <Image src={item.img} fill alt="" className="object-cover" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NonBridal;

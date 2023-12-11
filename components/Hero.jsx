import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center flex-col items-left lg:items-center gap-y-6 pt-12">
        <div>
          <Image src="/lg.png" width={100} height={100} alt="logo" />
        </div>
        <article className="flex justify-center flex-col items-center gap-y-6 w-full lg:w-3/5 lg:text-center mb-8">
          <h2 className="font-semibold  text-[16px] lg:text-[30px] lg:leading-[40px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <p className="text-[#8d8a8a] text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quia, vitae, nobis et vel maiores praesentium doloribus adipisci
            unde tempore architecto!
          </p>
        </article>
        <div className="relative w-full h-[200px] lg:h-[600px] rounded-xl lg:rounded-[20px] overflow-hidden">
          <Image src="/main.jpg" alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

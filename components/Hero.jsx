import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center flex-col items-center gap-y-6">
        <div>
          <h2>logo</h2>
        </div>
        <article className="flex justify-center flex-col items-center gap-y-6 w-full lg:w-3/5 lg:text-center">
          <h2 className="font-semibold  text-[15px] lg:text-[30px] lg:leading-[40px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
          <p className="text-[#8d8a8a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quia, vitae, nobis et vel maiores praesentium doloribus adipisci
            unde tempore architecto!
          </p>
        </article>
        <div className="relative w-full h-[200px] lg:h-[600px] rounded-xl lg:rounded-[20px] overflow-hidden">
          <Image src="/hero.png" alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

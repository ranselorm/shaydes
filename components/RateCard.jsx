"use client";
import Link from "next/link";
import Card from "../components/Card";
import { cardData } from "../data";
const RateCard = () => {
  return (
    <section className="mt-[80px] lg:mt-[150px]" id="rateCardSection">
      <div className="text-center mb-12">
        <div className="bg-[#CFB53B] bg-opacity-25 border border-[#CFB53B] border-opacity-25 px-4 py-1 rounded-full text-[13px] mb-5 w-max mx-auto">
          Pricing
        </div>
        <div className="">
          <h2 className="font-semibold  text-[16px] lg:text-[30px] lg:leading-[40px] mb-3">
            Choose the plan <br className="hidden lg:flex" />
            that fits your needs
          </h2>
          <p className="text-[#8d8a8a] text-[14px] md:text-[16px]">
            Congratulations and welcome to being A 54SHADES BRIDE #54SB
          </p>
        </div>
      </div>
      <div className="flex md:items-center flex-col justify-center gap-12 md:px-12 px-0">
        {cardData.map((item) => (
          <div key={item.name}>
            <h4 className="my-6 font-semibold text-[20px] md:text-[18px] flex flex-col">
              {item.name}
            </h4>
            <div className="">
              {item.categories.map((data) => (
                <div>
                  <p className="mb-2 mt-12 font-bold text-[18px]">
                    {data.name}
                  </p>
                  <div className="flex flex-wrap justify-start gap-4">
                    {data.options.map((data) => (
                      <Card {...data} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="flex flex-wrap md:flex-row flex-col justify-center gap-12">
           
            </div> */}
            <div className="flex flex-wrap md:flex-row flex-col justify-center gap-12">
              {/* {item.categories.map((data) => (
                <div key={data.name}>
                  {data.options.map((data) => (
                    <Card key={data.id} {...data} />
                  ))}
                </div>
              ))} */}
              {/* {item.category.map((card) => (
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  price={card.price}
                  features={card.features}
                  key={card.id}
                  id={card.id}
                  looks={card.looks}
                  days={card.days}
                  looksPrice={card.looksPrice}
                  daysPrice={card.daysPrice}
                />
              ))} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RateCard;

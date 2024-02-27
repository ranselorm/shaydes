"use client";
import Card from "../components/Card";
import { cardData } from "../data";
const RateCard = () => {
  return (
    <section
      className="mt-[80px] lg:mt-[150px] flex justify-center"
      id="rateCardSection"
    >
      <div>
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
        <div className="flex md:items-center justify-center flex-col gap-12 md:px-4 px-0">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center mx-auto px-2 md:px-4"
            >
              <div className="">
                <h4 className="my-6 font-semibold text-[20px] md:text-[18px] flex flex-col">
                  {/* {item.name} */}
                </h4>
                {item.categories.map((data) => (
                  <div key={data.id} className="">
                    <div className="text-center">
                      <p className="mb-6 mt-12 font-bold text-[20px]">
                        {data.name}
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                      {data.options.map((data) => (
                        <Card {...data} key={data.id} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RateCard;

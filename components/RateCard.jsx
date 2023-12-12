import Link from "next/link";
import Card from "../components/Card";
import CardData from "../CardData";

const RateCard = () => {
  return (
    <section className="mt-[80px] lg:mt-[150px]" id="rateCardSection">
      <div className="text-center mb-12">
        <div className="bg-[#CFB53B] bg-opacity-25 border border-[#CFB53B] border-opacity-25 px-4 py-1 rounded-full text-[13px] mb-5 w-max mx-auto">
          Pricing
        </div>
        <h2 className="font-semibold  text-[16px] lg:text-[30px] lg:leading-[40px] mb-3">
          Choose the plan that fits your needs
        </h2>
        <p className="text-[#8d8a8a] text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:px-12 px-0">
        {CardData.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            features={card.features}
            key={card.id}
            id={card.id}
          />
        ))}
      </div>
    </section>
  );
};

export default RateCard;

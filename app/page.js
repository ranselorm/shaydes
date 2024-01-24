import Hero from "../components/Hero";
import Bridal from "../components/Bridal";
import NonBridal from "../components/NonBridal";
import OutsideWork from "../components/OutsideWork";
import RateCard from "../components/RateCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bridal />
      <NonBridal />
      {/* <OutsideWork /> */}
      <RateCard />
    </div>
  );
}

// className = "text-white bg-black/95 p-[20px] md:p-[50px] lg:p-[60px] w-full";

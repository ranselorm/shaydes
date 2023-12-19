import Hero from "../components/Hero";
import Bridal from "../components/Bridal";
import NonBridal from "../components/NonBridal";
import OutsideWork from "../components/OutsideWork";
import RateCard from "../components/RateCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bridal />
      <NonBridal />
      <OutsideWork />
      <RateCard />
    </div>
  );
}

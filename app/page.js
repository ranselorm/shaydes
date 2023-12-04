import Hero from "@/components/Hero";
import Marketing from "@/components/Marketing";
import Natural from "@/components/Natural";
import OutsideWork from "@/components/OutsideWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="">
        <Hero />
        <Marketing />
      </div>
      <Natural />
      <OutsideWork />
      <Footer />
    </div>
  );
}

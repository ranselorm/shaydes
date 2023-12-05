import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

const footerLinks = [
  { title: "Youtube" },
  { title: "LinkedIn" },
  { title: "Instagram" },
  { title: "X.com" },
];
const Footer = () => {
  return (
    <footer className="mt-[80px] lg:mt-[150px]">
      <div className="flex justify-center mb-12">
        <Image src="/lg.png" width={100} height={100} alt="logo" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {footerLinks.map((link, index) => (
          <div
            key={index}
            className="text-[#808080] flex items-center gap-x-2 uppercase cursor-pointer hover:text-[#37f737]"
          >
            {link.title}
            <span>
              <MdOutlineArrowOutward />
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;

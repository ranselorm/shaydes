import { MdOutlineArrowOutward } from "react-icons/md";

const footerLinks = [
  { title: "Youtube" },
  { title: "LinkedIn" },
  { title: "Instagram" },
  { title: "X.com" },
];
const Footer = () => {
  return (
    <footer className="mt-[150px]">
      <h2 className="text-center mb-12">Logo</h2>
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

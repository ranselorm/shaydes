import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaydes",
  description: "Shaydes - Your Home of Beauty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-white bg-black/95 p-[20px] md:p-[70px] lg:p-[100px]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

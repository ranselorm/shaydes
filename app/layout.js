import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaydes",
  description: "Shaydes - Your Home of Beauty",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-white bg-black/95 p-[20px] md:p-[50px] lg:p-[60px] w-full">
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

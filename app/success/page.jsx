"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  // Function to trigger confetti
  const [countdown, setCountdown] = useState(5); // Initialize countdown

  useEffect(() => {
    // Trigger confetti on mount
    // confetti({
    //   zIndex: 1000,
    //   particleCount: 150,
    //   spread: 120,
    //   origin: { y: 0.6 },
    // });
    // Start the countdown
    const intervalId = setInterval(() => {
      setCountdown((currentCountdown) => {
        // When countdown reaches 0, clear the interval and redirect
        if (currentCountdown === 1) {
          clearInterval(intervalId);
          router.push("/"); // Redirect to homepage
        }
        return currentCountdown - 1;
      });
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, [router]);

  return (
    <div className=" text-center h-screen mt-[100px]">
      <h1 className="font-bold text-[30px] md:text-[60px]">Congratulations!</h1>
      <p className="text-[20px]">Your booking was successful!</p>
      <p className="text-sm">Redirecting in {countdown}</p>
      {/* Additional content */}
    </div>
  );
};

export default SuccessPage;

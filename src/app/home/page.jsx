"use client";
import Navbar from "../components/navbar";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Homepage() {
  // Create a ref for the heading element
  const wordRef = useRef(null);

  useEffect(() => {
    const words = ["Aliza Yaseen", "UI/UX Designer", "Front-End Developer"];
    let currentIndex = 0;

    const changeWord = () => {
      if (wordRef.current) {
        wordRef.current.classList.add("fade-out");

        setTimeout(() => {
          currentIndex = (currentIndex + 1) % words.length;
          wordRef.current.innerText = words[currentIndex];
          wordRef.current.classList.remove("fade-out");
          wordRef.current.classList.add("fade-in");
        }, 500);
      }
    };

    const interval = setInterval(changeWord, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div>
      <Navbar />
      <section className="flex justify-around h-screen">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-12 lg:col-span-6 px-[10%] py-10 bg-white flex flex-col justify-center h-full">
            <h1 className="text-2xl lg:text-3xl text-black font-semibold">Its</h1>
            <h1
              ref={wordRef}
              className="text-3xl lg:text-4xl font-bold text-black transition-opacity duration-500 ease-in-out opacity-100"
            >
              Aliza Yaseen
            </h1>
            <p className="py-5 text-sm sm:text-base md:text-lg font-light text-black font-normal">
              I believe design has the power to shape the future, and I strive to create products that inspire and empower users in their everyday lives.
            </p>
            <Link href="/about">
              <button className="px-1 py-4 bg-gray-900 w-[170px] text-white text-sm sm:text-base hover:bg-white hover:text-black hover:border-[1px] border-black rounded transition ease-in font-semibold">
                About Me
              </button>
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6 px-4 relative h-full bg-black"></div>
        </div>
      </section>
    </div>
  );
}

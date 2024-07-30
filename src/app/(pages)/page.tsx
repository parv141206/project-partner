"use client";
import Features from "@/Components/Stateless/Home/Features";
import LandingHeader from "@/Components/Stateless/Home/LandingHeader";
import LanguagesSupported from "@/Components/Stateless/Home/LanguagesSupported";
import Pricing from "@/Components/Stateless/Home/Pricing";
import { calculateTransform } from "@/Utils/scrollUtils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const planeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      if (home) {
        const rect = home.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          setIsVisible(true);
          const scrollPosition = window.scrollY;
          if (planeRef.current) {
            const maxScroll = 500; // Adjust this value based on how far you want to scroll
            //@ts-ignore
            planeRef.current.style.transform = calculateTransform(
              scrollPosition,
              maxScroll,
            );
          }
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div
        ref={planeRef}
        className="absolute left-20 top-5 z-10 h-20 w-20 rotate-0 md:top-32 md:h-80 md:w-80"
      >
        <Image
          src={"/images/yellow-plane.svg"}
          height={500}
          width={500}
          alt="plane"
        />
      </div>
      <div id="home" className="md:min-h-screen">
        <LandingHeader />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <LanguagesSupported />
      </div>
      <div>
        <Pricing />
      </div>
    </div>
  );
}

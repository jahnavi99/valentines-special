"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});


export default function YesPage() {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const heartArray = Array.from({ length: 25 }, (_, i) => i);
    setHearts(heartArray);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-pink-100 overflow-hidden px-6">

      {/* Falling Hearts */}
      {hearts.map((heart) => (
        <span
          key={heart}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 4}s`,
            fontSize: `${16 + Math.random() * 24}px`
          }}
        >
          ❤️
        </span>
      ))}
      <div className="relative min-h-screen bg-pink-100 overflow-hidden flex flex-col items-center justify-center px-6">

      {/* Content Box */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-lg w-full">

        <h3 className=" md:text-2xl font-bold text-pink">
          Brathikipoyav !!! <br/>
          Good boy 😌 you chose "Yes" <br />
          Lekunte anthe Sangathi 😜
        </h3>

      <p className={`${greatVibes.className} shiny-text text-center`}>
          Happy Valentine's Day and Happy Anniversary my love ❤️
        </p>

        <div className="flex justify-center">
          <Image
            src="/Sarath.jpeg"
            alt="My Love"
            width={250}
            height={250}
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </div>
    </div>
  );
}

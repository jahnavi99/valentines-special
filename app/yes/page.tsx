"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Great_Vibes } from "next/font/google";
import { useRouter } from "next/navigation";
import router from "next/router";



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

  const router = useRouter();
const [merged, setMerged] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-pink-100 overflow-hidden pt-0">

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
      <div className="min-h-screen bg-pink-100 flex flex-col items-center pt-6 px-6">

      {/* Content Box */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-lg w-full mx-auto">

        <h3 className=" md:text-2xl font-bold text-pink">
          Brathikipoyav !!! <br/>
          Good boy 😌 you chose "Yes" <br />
          Lekunte anthe Sangathi 😜
        </h3>

      <p className={`${greatVibes.className} shiny-text text-center`}>
          Happy Valentine's Day and Happy Anniversary my love ❤️
        </p>

       <div className="flex justify-center mt-8">
  <div className="heart-container animate-pop">
    <svg viewBox="0 0 32 29.6" className="heart-svg">
      <defs>
        <clipPath id="heartClip">
          <path d="M23.6,0c-3.4,0-6.3,2.4-7.6,4.8C14.7,2.4,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
          c0,9.4,16,21.2,16,21.2s16-11.8,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </clipPath>
      </defs>

      <image
        href="/Sarath.jpeg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#heartClip)"
      />
    </svg>
    {/* Surprise Question */}
<div className="mt-8 flex flex-col items-center gap-4">

  <p className="text-lg md:text-xl font-semibold text-pink-600 text-center">
    The actual surprise isn't yet revealed… <br />
    Do you want to see it? 💌
  </p>

  <div className="relative mt-6 h-16 w-full flex items-center justify-center">

  {!merged ? (
    <div className="flex gap-6">
      <button
        onClick={() => {
          setMerged(true);
          setTimeout(() => {
            router.push("/surprise");
          }, 1200);
        }}
        className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg"
      >
        Yes 💕
      </button>

      <button
        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full shadow-md"
      >
        No 🙈
      </button>
    </div>
  ) : (
    <div className="absolute heart-merge">❤️</div>
  )}

</div>
  </div>
</div>

</div>

  </div>
</div>

</div>
  
  );
}

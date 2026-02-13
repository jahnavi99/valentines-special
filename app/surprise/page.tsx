"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";



export default function Page() {
  const correctOrder = [1,2,3,4,5,6,7,8,9];
  const [tiles, setTiles] = useState<number[]>([]);
  const [firstClick, setFirstClick] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const [showImage, setShowImage] = useState(false);
const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
  }, []);

  useEffect(() => {
  if (JSON.stringify(tiles) === JSON.stringify(correctOrder)) {
  setSolved(true);
  setShowImage(true);

  // 💥 BIG CELEBRATION BLAST

  const duration = 1500;
  const animationEnd = Date.now() + duration;

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // Left side burst
    confetti({
      particleCount,
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      origin: { x: 0 },
    });

    // Right side burst
    confetti({
      particleCount,
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      origin: { x: 1 },
    });

    // Center burst
    confetti({
      particleCount: 30,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
    });

  }, 250);

  // After celebration, show video
  setTimeout(() => {
    setShowImage(false);
    setShowVideo(true);
  }, 2500);
}

  }, [tiles]);

  const handleClick = (index: number) => {
    if (firstClick === null) {
      setFirstClick(index);
    } else {
      const newTiles = [...tiles];
      [newTiles[firstClick], newTiles[index]] =
        [newTiles[index], newTiles[firstClick]];
      setTiles(newTiles);
      setFirstClick(null);
    }
  };

  return (
   <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-6 text-center">

  {!solved && (
    <>
      <h1 className="text-3xl font-bold text-pink-600 mb-8">
        Oh wait not so fast for the reveal 😌 <br />
        Let's see how well you remembered my face. Solve this puzzle first 💕
      </h1>

      <div className="grid grid-cols-3 gap-2 w-[450px] h-[450px]">
        {tiles.map((tile, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="cursor-pointer border-2 border-white"
            style={{
              backgroundImage: "url('/puzzlefinal.jpeg')",
              backgroundSize: "300% 300%",
              backgroundPosition: `${
                ((tile - 1) % 3) * 50
              }% ${
                Math.floor((tile - 1) / 3) * 50
              }%`,
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
    </>
  )}

  {showImage && (
    <div className="blast-animation">
      <img
        src="/puzzlefinal.jpeg"
        className="w-[450px] h-[450px] object-cover rounded-xl shadow-2xl"
      />
    </div>
  )}

  {showVideo && (
    <div className="fade-in">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">
        Our unforgettable Memories in these 2 years 💗
      </h2>

      <video
        src="/memories.mp4"
        controls
        autoPlay
        className="rounded-2xl shadow-2xl w-[800px] md:w-[900px]"
      />
    </div>
  )}

</div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [noPos, setNoPos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

const moveNo = () => {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 80 - 40;
  setNoPos({ x, y });
};



  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 px-4">
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          w-full
          max-w-sm
          sm:max-w-md
          bg-white/85
          backdrop-blur
          rounded-2xl
          shadow-xl
          p-8
          sm:p-10
          flex
          flex-col
          items-center
        "
      >
      <div className="pink-box">
        <h1 className="text-2xl sm:text-3xl font-bold text-rose-600 mb-10">
          Do you feel I'm the right person for you? 💖
        </h1>

        
          <div className="flex justify-center gap-10 mt-8 relative">
          <button
            onClick={() => router.push("/yes")}
            className="
              bg-rose-500
              text-white
              px-6
              py-3
              rounded-full
              shadow-lg
              transition
              hover:scale-110
            "
          >
            Yes 💘
          </button>

          
          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 450 }}
            onMouseEnter={moveNo}
            onClick={moveNo}
            className="
              bg-gray-300 text-gray-700 px-6 py-3
               rounded-full shadow-lg
            "
          >
            No 😜
          </motion.button>
        
        </div>
         <p>"Don't try to chase for No, because you can't 😜"</p>
        </div>
      </motion.section>
    </main>
  );
  
}

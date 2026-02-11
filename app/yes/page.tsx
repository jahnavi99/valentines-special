"use client";

import { motion } from "framer-motion";

export default function YesPage() {
  return (
    <main className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-br from-red-200 via-pink-200 to-rose-200 px-4">
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
          text-center
        "
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-6">
          YAY!!! 💕
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-4">
          I knew you’d say yes 🥰
        </p>

        <p className="text-gray-700">
          Happy Valentine’s Day, my love ❤️
          <br />
          Forever your Valentine.
        </p>

        <div className="text-4xl mt-6">💖💖💖</div>
      </motion.section>
    </main>
  );
}

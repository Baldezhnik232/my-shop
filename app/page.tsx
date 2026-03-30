"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Screen } from "../app/ui/screen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setShowContent(true), 100);

    const fadeOutTimer = setTimeout(() => {
      setShowContent(false);

      setTimeout(() => setLoading(false), 800);
    }, 2500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    // Весь экран изначально имеет нужный вам цвет
    <div className="relative flex h-screen w-full items-center justify-center bg-zinc-50  font-sans">
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="flex h-full w-full items-center justify-center bg-[#D8DDFF] font-sans"
            key="screen-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Screen />
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-zinc-800"
        >
          <main>Welcome to the App</main>
        </motion.div>
      )}
    </div>
  );
}

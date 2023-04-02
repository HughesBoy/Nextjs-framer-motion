"use client"

import "./globals.css";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion'
import { riseAndFade } from "@/utils/Animations";

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate">
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <h1 className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]">
          Animated header
        </h1>
        <motion.div className="text-base leading-[150%] self-end" variants={riseAndFade}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </motion.div>
      </main>
    </motion.div>
  );
}

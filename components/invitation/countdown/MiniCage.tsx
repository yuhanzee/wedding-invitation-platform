"use client";

import Image from "next/image";
import { motion } from "motion/react";

type MiniCageProps = {
  digit: string;
  delay?: number;
};

export default function MiniCage({
  digit,
  delay = 0,
}: MiniCageProps) {
  return (
    <motion.div
      className="relative w-[195px]"
      style={{ transformOrigin: "top center" }}
      animate={{
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <Image
        src="/assets/countdown/cage.svg"
        alt=""
        width={357}
        height={535}
        priority
        className="w-full h-auto object-contain"
      />

      {/* Number */}
      <div
        className="
          absolute
          left-1/2
          top-[63%]
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        "
      >
        <span
          className="
            font-serif
            text-[88px]
            leading-none
            font-medium
            text-[#4A3527]
          "
        >
          {digit}
        </span>
      </div>
    </motion.div>
  );
}
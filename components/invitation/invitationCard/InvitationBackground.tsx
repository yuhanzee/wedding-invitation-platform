

"use client";

import { motion } from "motion/react";

export default function InvitationBackground() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden bg-[#F7F3EA]"
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Petals flowing toward next section */}

      <motion.span
        className="absolute bottom-[110px] left-[18%] text-[24px]"
        animate={{
          y: [0, 35, 70],
          x: [0, 12, -5],
          rotate: [15, 80, 140],
          opacity: [0, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌸
      </motion.span>

      <motion.span
        className="absolute bottom-[55px] right-[20%] text-[18px]"
        animate={{
          y: [0, 25, 55],
          x: [0, -15, 5],
          rotate: [-20, 40, 100],
          opacity: [0, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌸
      </motion.span>

      <motion.span
        className="absolute -bottom-[5px] left-[48%] text-[15px]"
        animate={{
          y: [-20, 15, 40],
          x: [0, 8, -3],
          rotate: [20, 100, 170],
          opacity: [0.7, 0.8, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌸
      </motion.span>
    </motion.div>
  );
}
"use client";

import Image from "next/image";
import { motion } from "motion/react";

type TopFlapProps = {
  isOpen: boolean;
};

export default function TopFlap({
  isOpen,
}: TopFlapProps) {
  return (
    <motion.div
      className="absolute left-0 top-0 w-full pointer-events-none select-none z-10"
      style={{
        transformOrigin: "50% 0%",
        transformStyle: "preserve-3d",
      }}
      initial={false}
      animate={{
        rotateX: isOpen ? -180 : 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <Image
        src="/assets/envelope/top-flap.png"
        alt="Envelope top flap"
        width={280}
        height={110}
        priority
        className="block w-full h-auto"
      />
    </motion.div>
  );
}
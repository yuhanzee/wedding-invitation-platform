"use client";

import { motion } from "motion/react";

type ButterflyColor = {
  wing: string;
  wingLight: string;
  body: string;
  glow: string;
};

type ButterflyItem = {
  id: number;
  top: string;
  size: number;
  duration: number;
  delay: number;
  direction: "left-to-right" | "right-to-left";
  colors: ButterflyColor;
};

const butterflies: ButterflyItem[] = [
  {
    id: 1,
    top: "18%",
    size: 18,
    duration: 18,
    delay: 0,
    direction: "left-to-right",
    colors: {
      wing: "#efb8c7",
      wingLight: "#fde8ee",
      body: "#73555d",
      glow: "rgba(255, 220, 232, 0.75)",
    },
  },
  {
    id: 2,
    top: "38%",
    size: 14,
    duration: 22,
    delay: 4,
    direction: "right-to-left",
    colors: {
      wing: "#d9d2ee",
      wingLight: "#f4f0ff",
      body: "#625d76",
      glow: "rgba(224, 214, 255, 0.7)",
    },
  },
  {
    id: 3,
    top: "62%",
    size: 16,
    duration: 24,
    delay: 8,
    direction: "left-to-right",
    colors: {
      wing: "#f1ddd2",
      wingLight: "#fff7f0",
      body: "#74645e",
      glow: "rgba(255, 237, 220, 0.7)",
    },
  },
  {
    id: 4,
    top: "78%",
    size: 13,
    duration: 20,
    delay: 12,
    direction: "right-to-left",
    colors: {
      wing: "#bfd7e5",
      wingLight: "#edf8ff",
      body: "#4f6878",
      glow: "rgba(202, 234, 255, 0.7)",
    },
  },
];

function Butterfly({
  size,
  colors,
}: {
  size: number;
  colors: ButterflyColor;
}) {
  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
        filter: `drop-shadow(0 0 5px ${colors.glow})`,
      }}
      animate={{
        y: [0, -2, 0, 2, 0],
        rotate: [-3, 3, -2, 2, -3],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Left upper wing */}
      <motion.div
        className="absolute left-0 top-[2px] origin-right rounded-[75%_30%_70%_35%]"
        style={{
          width: size * 0.48,
          height: size * 0.56,
          background: `linear-gradient(135deg, ${colors.wingLight}, ${colors.wing})`,
          border: `1px solid ${colors.wing}`,
        }}
        animate={{
          rotateY: [0, 68, 0],
          rotateZ: [-28, -12, -28],
        }}
        transition={{
          duration: 0.48,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right upper wing */}
      <motion.div
        className="absolute right-0 top-[2px] origin-left rounded-[30%_75%_35%_70%]"
        style={{
          width: size * 0.48,
          height: size * 0.56,
          background: `linear-gradient(225deg, ${colors.wingLight}, ${colors.wing})`,
          border: `1px solid ${colors.wing}`,
        }}
        animate={{
          rotateY: [0, -68, 0],
          rotateZ: [28, 12, 28],
        }}
        transition={{
          duration: 0.48,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lower wings */}
      <div
        className="absolute left-[2px] bottom-[1px] rounded-full"
        style={{
          width: size * 0.34,
          height: size * 0.32,
          background: colors.wing,
          opacity: 0.75,
          transform: "rotate(-22deg)",
        }}
      />

      <div
        className="absolute right-[2px] bottom-[1px] rounded-full"
        style={{
          width: size * 0.34,
          height: size * 0.32,
          background: colors.wing,
          opacity: 0.75,
          transform: "rotate(22deg)",
        }}
      />

      {/* Body */}
      <div
        className="absolute left-1/2 top-[3px] -translate-x-1/2 rounded-full"
        style={{
          width: 2,
          height: size * 0.7,
          background: colors.body,
        }}
      />

      {/* Antennae */}
      <div
        className="absolute left-[46%] top-[-2px] h-[5px] w-px origin-bottom"
        style={{
          background: colors.body,
          transform: "rotate(-30deg)",
        }}
      />

      <div
        className="absolute right-[46%] top-[-2px] h-[5px] w-px origin-bottom"
        style={{
          background: colors.body,
          transform: "rotate(30deg)",
        }}
      />
    </motion.div>
  );
}

const sparkles = [
  { left: "12%", top: "16%", delay: 0.2 },
  { left: "80%", top: "24%", delay: 1.4 },
  { left: "24%", top: "44%", delay: 2.2 },
  { left: "72%", top: "58%", delay: 0.8 },
  { left: "17%", top: "76%", delay: 2.8 },
  { left: "88%", top: "82%", delay: 1.9 },
];

export default function GlobalButterflyMagic() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {butterflies.map((butterfly) => {
        const movingRight =
          butterfly.direction === "left-to-right";

        return (
          <motion.div
            key={butterfly.id}
            className="absolute"
            style={{
              top: butterfly.top,
              left: 0,
            }}
            initial={{
              x: movingRight ? "-8vw" : "108vw",
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: movingRight
                ? ["-8vw", "108vw"]
                : ["108vw", "-8vw"],
              y: [0, -24, 10, -18, 8, 0],
              rotate: movingRight
                ? [-8, 6, -4, 7, -8]
                : [8, -6, 4, -7, 8],
              opacity: [0, 0.95, 1, 0.95, 0],
            }}
            transition={{
              duration: butterfly.duration,
              delay: butterfly.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          >
            <Butterfly
              size={butterfly.size}
              colors={butterfly.colors}
            />
          </motion.div>
        );
      })}

      {sparkles.map((sparkle, index) => (
        <motion.span
          key={index}
          className="absolute block rounded-full bg-white"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: index % 2 === 0 ? 3 : 2,
            height: index % 2 === 0 ? 3 : 2,
            boxShadow:
              "0 0 6px rgba(255,255,255,0.95), 0 0 12px rgba(255,214,231,0.65)",
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 2.5,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
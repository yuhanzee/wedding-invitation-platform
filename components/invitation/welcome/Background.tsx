"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FLOWER = "/assets/envelope/decorations.png";

type FlowerProps = {
  className: string;
  rotate?: number;
  flip?: boolean;
  delay?: number;
};

function Flower({
  className,
  rotate = 0,
  flip = false,
  delay = 0,
}: FlowerProps) {
  return (
    <motion.div
      className={`
        pointer-events-none
        absolute
        ${className}
      `}
      initial={{
        opacity: 0,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay,
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src={FLOWER}
        alt=""
        width={376}
        height={400}
        className="h-auto w-full object-contain"
        style={{
          transform: `
            rotate(${rotate}deg)
            scaleX(${flip ? -1 : 1})
          `,
        }}
      />
    </motion.div>
  );
}

export default function Background() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        bg-[#FFF9F4]
      "
    >
      {/* =====================================================
          CREAM BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_42%,#FFFCF9_0%,#FFF9F5_50%,#FAEEE9_100%)]
        "
      />

      {/* =====================================================
          FLORAL BACKGROUND

          Overall opacity keeps flowers soft.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-[0.45]
        "
      >
        {/* =================================================
            TOP LEFT CORNER
        ================================================= */}

        <Flower
          className="
            -left-[25%]
            -top-[10%]
            w-[65%]
            max-w-[280px]
            opacity-[0.12]
          "
          rotate={-30}
        />

        {/* =================================================
            TOP RIGHT CORNER
        ================================================= */}

        <Flower
          className="
            -right-[25%]
            -top-[9%]
            w-[64%]
            max-w-[275px]
            opacity-[0.11]
          "
          rotate={30}
          flip
          delay={0.05}
        />

        {/* =================================================
            SMALL TOP LEFT DETAIL
        ================================================= */}

        <Flower
          className="
            left-[3%]
            top-[5%]
            w-[16%]
            max-w-[65px]
            opacity-[0.07]
          "
          rotate={70}
          delay={0.1}
        />

        {/* =================================================
            SMALL TOP RIGHT DETAIL
        ================================================= */}

        <Flower
          className="
            right-[3%]
            top-[6%]
            w-[16%]
            max-w-[65px]
            opacity-[0.07]
          "
          rotate={-70}
          flip
          delay={0.1}
        />

        {/* =================================================
            HEADER LEFT

            Kept away from couple names.
        ================================================= */}

        <Flower
          className="
            -left-[18%]
            top-[19%]
            w-[36%]
            max-w-[150px]
            opacity-[0.065]
          "
          rotate={55}
          flip
        />

        {/* =================================================
            HEADER RIGHT
        ================================================= */}

        <Flower
          className="
            -right-[18%]
            top-[20%]
            w-[36%]
            max-w-[150px]
            opacity-[0.065]
          "
          rotate={-55}
        />

        {/* =================================================
            SMALL DETAIL BELOW HEADER LEFT
        ================================================= */}

        <Flower
          className="
            left-[3%]
            top-[28%]
            w-[19%]
            max-w-[78px]
            opacity-[0.05]
          "
          rotate={105}
        />

        {/* =================================================
            SMALL DETAIL BELOW HEADER RIGHT
        ================================================= */}

        <Flower
          className="
            right-[3%]
            top-[29%]
            w-[19%]
            max-w-[78px]
            opacity-[0.05]
          "
          rotate={-105}
          flip
        />

        {/* =================================================
            SMALL CENTER FLOWER

            Positioned WELL BELOW names.
        ================================================= */}

        <Flower
          className="
            left-[40%]
            top-[32%]
            w-[20%]
            max-w-[82px]
            opacity-[0.045]
          "
          rotate={160}
          flip
        />

        {/* =================================================
            UPPER MIDDLE LEFT
        ================================================= */}

        <Flower
          className="
            -left-[19%]
            top-[36%]
            w-[42%]
            max-w-[175px]
            opacity-[0.07]
          "
          rotate={35}
        />

        {/* =================================================
            UPPER MIDDLE RIGHT
        ================================================= */}

        <Flower
          className="
            -right-[19%]
            top-[37%]
            w-[42%]
            max-w-[175px]
            opacity-[0.07]
          "
          rotate={-35}
          flip
        />

        {/* =================================================
            ENVELOPE LEFT

            Very faded because envelope is main focus.
        ================================================= */}

        <Flower
          className="
            -left-[16%]
            top-[45%]
            w-[37%]
            max-w-[150px]
            opacity-[0.055]
          "
          rotate={72}
          flip
        />

        {/* =================================================
            ENVELOPE RIGHT
        ================================================= */}

        <Flower
          className="
            -right-[16%]
            top-[46%]
            w-[37%]
            max-w-[150px]
            opacity-[0.055]
          "
          rotate={-72}
        />

        {/* =================================================
            BELOW ENVELOPE LEFT
        ================================================= */}

        <Flower
          className="
            left-[5%]
            top-[58%]
            w-[26%]
            max-w-[105px]
            opacity-[0.06]
          "
          rotate={115}
        />

        {/* =================================================
            BELOW ENVELOPE RIGHT
        ================================================= */}

        <Flower
          className="
            right-[5%]
            top-[59%]
            w-[26%]
            max-w-[105px]
            opacity-[0.06]
          "
          rotate={-115}
          flip
        />

        {/* =================================================
            SMALL CENTER BELOW ENVELOPE
        ================================================= */}

        <Flower
          className="
            left-[39%]
            top-[64%]
            w-[22%]
            max-w-[90px]
            opacity-[0.045]
          "
          rotate={170}
        />

        {/* =================================================
            LOWER LEFT
        ================================================= */}

        <Flower
          className="
            -left-[18%]
            top-[69%]
            w-[46%]
            max-w-[190px]
            opacity-[0.08]
          "
          rotate={38}
        />

        {/* =================================================
            LOWER RIGHT
        ================================================= */}

        <Flower
          className="
            -right-[18%]
            top-[70%]
            w-[46%]
            max-w-[190px]
            opacity-[0.08]
          "
          rotate={-40}
          flip
        />

        {/* =================================================
            LOWER SMALL LEFT
        ================================================= */}

        <Flower
          className="
            left-[18%]
            top-[77%]
            w-[20%]
            max-w-[82px]
            opacity-[0.05]
          "
          rotate={125}
          flip
        />

        {/* =================================================
            LOWER SMALL RIGHT
        ================================================= */}

        <Flower
          className="
            right-[18%]
            top-[79%]
            w-[20%]
            max-w-[82px]
            opacity-[0.05]
          "
          rotate={-135}
        />

        {/* =================================================
            LOWER CENTER
        ================================================= */}

        <Flower
          className="
            left-[39%]
            top-[85%]
            w-[22%]
            max-w-[90px]
            opacity-[0.055]
          "
          rotate={155}
          flip
        />

        {/* =================================================
            BOTTOM LEFT CORNER
        ================================================= */}

        <Flower
          className="
            -bottom-[11%]
            -left-[26%]
            w-[72%]
            max-w-[305px]
            opacity-[0.13]
          "
          rotate={18}
        />

        {/* =================================================
            BOTTOM RIGHT CORNER
        ================================================= */}

        <Flower
          className="
            -bottom-[10%]
            -right-[27%]
            w-[71%]
            max-w-[300px]
            opacity-[0.12]
          "
          rotate={-24}
          flip
        />

        {/* =================================================
            BOTTOM SMALL LEFT
        ================================================= */}

        <Flower
          className="
            left-[3%]
            top-[88%]
            w-[17%]
            max-w-[70px]
            opacity-[0.05]
          "
          rotate={65}
        />

        {/* =================================================
            BOTTOM SMALL RIGHT
        ================================================= */}

        <Flower
          className="
            right-[3%]
            top-[89%]
            w-[17%]
            max-w-[70px]
            opacity-[0.05]
          "
          rotate={-65}
          flip
        />
      </div>

      {/* =====================================================
          CLEAN AREA BEHIND COUPLE NAMES

          No large flowers should be visible through this area.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-[12%]

          z-[2]

          h-[19%]
          w-[86%]

          -translate-x-1/2

          rounded-[50%]

          bg-[#FFF9F4]/95

          blur-[24px]
        "
      />

      {/* =====================================================
          SOFT ENVELOPE GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-[51%]

          z-[2]

          h-[30%]
          w-[94%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[50%]

          bg-[#FFF9F4]/22

          blur-[30px]
        "
      />

      {/* =====================================================
          GOLD DUST
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[3]">
        <span className="absolute left-[10%] top-[12%] h-[2px] w-[2px] rounded-full bg-[#B4872C]/25" />

        <span className="absolute right-[12%] top-[19%] h-[1.5px] w-[1.5px] rounded-full bg-[#B4872C]/25" />

        <span className="absolute left-[7%] top-[31%] h-[1.5px] w-[1.5px] rounded-full bg-[#B4872C]/20" />

        <span className="absolute right-[9%] top-[38%] h-[2px] w-[2px] rounded-full bg-[#B4872C]/20" />

        <span className="absolute left-[11%] top-[52%] h-[1.5px] w-[1.5px] rounded-full bg-[#B4872C]/20" />

        <span className="absolute right-[13%] top-[59%] h-[2px] w-[2px] rounded-full bg-[#B4872C]/20" />

        <span className="absolute left-[18%] top-[72%] h-[2px] w-[2px] rounded-full bg-[#B4872C]/20" />

        <span className="absolute right-[20%] top-[79%] h-[1.5px] w-[1.5px] rounded-full bg-[#B4872C]/20" />

        <span className="absolute left-[46%] top-[91%] h-[2px] w-[2px] rounded-full bg-[#B4872C]/20" />
      </div>
    </div>
  );
}
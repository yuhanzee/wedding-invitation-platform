

// // "use client";

// // import { motion } from "motion/react";

// // export default function InvitationBackground() {
// //   return (
// //     <motion.div
// //       className="absolute inset-0 overflow-hidden bg-[#F7F3EA]"
// //       animate={{
// //         scale: [1, 1.03, 1],
// //       }}
// //       transition={{
// //         duration: 20,
// //         repeat: Infinity,
// //         ease: "easeInOut",
// //       }}
// //     >
// //       {/* Petals flowing toward next section */}

// //       <motion.span
// //         className="absolute bottom-[110px] left-[18%] text-[24px]"
// //         animate={{
// //           y: [0, 35, 70],
// //           x: [0, 12, -5],
// //           rotate: [15, 80, 140],
// //           opacity: [0, 0.8, 0.4],
// //         }}
// //         transition={{
// //           duration: 6,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       >
// //         🌸
// //       </motion.span>

// //       <motion.span
// //         className="absolute bottom-[55px] right-[20%] text-[18px]"
// //         animate={{
// //           y: [0, 25, 55],
// //           x: [0, -15, 5],
// //           rotate: [-20, 40, 100],
// //           opacity: [0, 0.7, 0.3],
// //         }}
// //         transition={{
// //           duration: 7,
// //           delay: 1,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       >
// //         🌸
// //       </motion.span>

// //       <motion.span
// //         className="absolute -bottom-[5px] left-[48%] text-[15px]"
// //         animate={{
// //           y: [-20, 15, 40],
// //           x: [0, 8, -3],
// //           rotate: [20, 100, 170],
// //           opacity: [0.7, 0.8, 0],
// //         }}
// //         transition={{
// //           duration: 5.5,
// //           delay: 0.5,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       >
// //         🌸
// //       </motion.span>
// //     </motion.div>
// //   );
// // }

// "use client";

// import { motion } from "motion/react";

// export default function InvitationBackground() {
//   return (
//     <motion.div
//       className="
//         absolute
//         inset-0
//         overflow-hidden
//         bg-[#F7F3EA]
//       "
//       animate={{
//         scale: [1, 1.015, 1],
//       }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     >
//       <motion.span
//         className="
//           absolute
//           bottom-[13%]
//           left-[18%]
//           text-[clamp(14px,5vw,24px)]
//         "
//         animate={{
//           y: [0, 35, 70],
//           x: [0, 12, -5],
//           rotate: [15, 80, 140],
//           opacity: [0, 0.8, 0.4],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         🌸
//       </motion.span>

//       <motion.span
//         className="
//           absolute
//           bottom-[7%]
//           right-[20%]
//           text-[clamp(12px,4vw,18px)]
//         "
//         animate={{
//           y: [0, 25, 55],
//           x: [0, -15, 5],
//           rotate: [-20, 40, 100],
//           opacity: [0, 0.7, 0.3],
//         }}
//         transition={{
//           duration: 7,
//           delay: 1,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         🌸
//       </motion.span>

//       <motion.span
//         className="
//           absolute
//           -bottom-[1%]
//           left-[48%]
//           text-[clamp(10px,3.5vw,15px)]
//         "
//         animate={{
//           y: [-20, 15, 40],
//           x: [0, 8, -3],
//           rotate: [20, 100, 170],
//           opacity: [0.7, 0.8, 0],
//         }}
//         transition={{
//           duration: 5.5,
//           delay: 0.5,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         🌸
//       </motion.span>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "motion/react";

export default function InvitationBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* ==================================================
          TOP SOFT DUSTY PINK GLOW
      ================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[-18%]
          h-[55%]
          w-[120%]
          -translate-x-1/2
          rounded-full
          bg-[#7E514D]/10
          blur-[70px]
        "
      />

      {/* ==================================================
          CENTER SOFT LIGHT
      ================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[47%]
          h-[50%]
          w-[90%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/10
          blur-[55px]
        "
      />

      {/* ==================================================
          LEFT WHITE BOTANICAL LINE ART
      ================================================== */}

      <motion.svg
        className="
          absolute
          -left-[12%]
          top-[3%]
          h-[52%]
          w-[58%]
          opacity-[0.34]
        "
        viewBox="0 0 220 520"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        animate={{
          y: [0, -3, 0],
          rotate: [0, -0.4, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* MAIN STEM */}

        <path
          d="
            M28 520
            C22 455 42 410 68 365
            C92 322 78 276 70 235
            C62 191 72 145 100 102
            C119 73 132 38 132 0
          "
          stroke="rgba(255,255,255,0.80)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* LARGE CURVED DECORATIVE LINE */}

        <path
          d="
            M15 405
            C38 330 78 268 125 220
            C165 178 192 127 190 66
          "
          stroke="rgba(255,255,255,0.42)"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* LEFT BRANCH */}

        <path
          d="
            M69 364
            C40 350 22 325 24 293
          "
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* RIGHT BRANCH */}

        <path
          d="
            M72 287
            C111 276 136 248 139 214
          "
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* UPPER LEFT BRANCH */}

        <path
          d="
            M76 199
            C48 184 33 158 38 127
          "
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* UPPER RIGHT BRANCH */}

        <path
          d="
            M99 103
            C127 102 153 84 164 59
          "
          stroke="rgba(255,255,255,0.72)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* LEAVES */}

        <ellipse
          cx="24"
          cy="292"
          rx="11"
          ry="27"
          transform="rotate(-38 24 292)"
          stroke="rgba(255,255,255,0.68)"
          strokeWidth="1"
        />

        <ellipse
          cx="140"
          cy="213"
          rx="11"
          ry="27"
          transform="rotate(37 140 213)"
          stroke="rgba(255,255,255,0.68)"
          strokeWidth="1"
        />

        <ellipse
          cx="38"
          cy="126"
          rx="10"
          ry="25"
          transform="rotate(-36 38 126)"
          stroke="rgba(255,255,255,0.68)"
          strokeWidth="1"
        />

        <ellipse
          cx="165"
          cy="58"
          rx="10"
          ry="25"
          transform="rotate(42 165 58)"
          stroke="rgba(255,255,255,0.68)"
          strokeWidth="1"
        />

        {/* SMALL BUDS */}

        <circle
          cx="68"
          cy="365"
          r="3"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1"
        />

        <circle
          cx="76"
          cy="199"
          r="2.5"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="1"
        />
      </motion.svg>

      {/* ==================================================
          RIGHT FAINT BOTANICAL DETAIL
      ================================================== */}

      <motion.svg
        className="
          absolute
          -right-[20%]
          top-[27%]
          h-[42%]
          w-[50%]
          opacity-[0.13]
        "
        viewBox="0 0 220 520"
        fill="none"
        animate={{
          y: [0, 3, 0],
          rotate: [0, 0.5, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="
            M45 520
            C36 445 72 391 94 340
            C117 288 96 240 104 189
            C111 139 145 88 176 42
          "
          stroke="rgba(255,255,255,0.62)"
          strokeWidth="1"
        />

        <path
          d="
            M94 340
            C65 321 52 296 55 268
          "
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1"
        />

        <path
          d="
            M104 189
            C137 180 158 156 164 127
          "
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1"
        />

        <ellipse
          cx="55"
          cy="267"
          rx="10"
          ry="24"
          transform="rotate(-35 55 267)"
          stroke="rgba(255,255,255,0.55)"
        />

        <ellipse
          cx="164"
          cy="126"
          rx="10"
          ry="24"
          transform="rotate(37 164 126)"
          stroke="rgba(255,255,255,0.55)"
        />
      </motion.svg>

      {/* ==================================================
          VERY FAINT LARGE CURVED RING
      ================================================== */}

      <div
        className="
          absolute
          -left-[30%]
          top-[10%]
          h-[clamp(250px,85vw,520px)]
          w-[clamp(250px,85vw,520px)]
          rounded-full
          border
          border-white/10
        "
      />

      {/* ==================================================
          GOLD DUST
      ================================================== */}

      <motion.span
        className="
          absolute
          left-[17%]
          top-[16%]
          h-[3px]
          w-[3px]
          rounded-full
          bg-[#D9B06C]/70
        "
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="
          absolute
          left-[31%]
          top-[27%]
          h-[2px]
          w-[2px]
          rounded-full
          bg-[#E4BF78]/70
        "
        animate={{
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          delay: 0.8,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="
          absolute
          right-[19%]
          top-[22%]
          h-[3px]
          w-[3px]
          rounded-full
          bg-[#D5AA62]/60
        "
        animate={{
          opacity: [0.2, 0.85, 0.2],
        }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="
          absolute
          right-[11%]
          top-[42%]
          h-[2px]
          w-[2px]
          rounded-full
          bg-[#C89C55]/60
        "
        animate={{
          opacity: [0.15, 0.7, 0.15],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="
          absolute
          bottom-[31%]
          left-[15%]
          h-[2px]
          w-[2px]
          rounded-full
          bg-[#D6AD68]/45
        "
        animate={{
          opacity: [0.15, 0.6, 0.15],
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
        }}
      />

      {/* ==================================================
          FALLING PETAL 1
      ================================================== */}

      <motion.div
        className="
          absolute
          left-[15%]
          top-[21%]
          h-[8px]
          w-[14px]
          rounded-[100%_0_100%_0]
          bg-[#F4CFD0]/70
        "
        animate={{
          y: [0, 80, 170],
          x: [0, 15, -5],
          rotate: [15, 130, 250],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          FALLING PETAL 2
      ================================================== */}

      <motion.div
        className="
          absolute
          right-[16%]
          top-[35%]
          h-[7px]
          w-[12px]
          rounded-[100%_0_100%_0]
          bg-[#F0BFC2]/65
        "
        animate={{
          y: [0, 100, 210],
          x: [0, -15, 8],
          rotate: [45, 170, 290],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 11,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          FALLING PETAL 3
      ================================================== */}

      <motion.div
        className="
          absolute
          left-[38%]
          top-[56%]
          h-[6px]
          w-[11px]
          rounded-[100%_0_100%_0]
          bg-[#EFBFC2]/50
        "
        animate={{
          y: [0, 70, 150],
          x: [0, 10, -5],
          rotate: [10, 130, 260],
          opacity: [0.4, 0.5, 0],
        }}
        transition={{
          duration: 9,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ==================================================
          BOTTOM TRANSITION

          Important:
          ends at exactly #F4EAE5
      ================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[30%]
          w-full
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(244,234,229,0) 0%, rgba(244,234,229,0.35) 35%, rgba(244,234,229,0.82) 72%, #F4EAE5 100%)",
        }}
      />
    </div>
  );
}
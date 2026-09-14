// // import Image from "next/image";

// // type WaxSealProps = {
// //   isOpen?: boolean;
// // };

// // export default function WaxSeal({ isOpen = false }: WaxSealProps) {
// //   return (
// //     <Image
// //       src="/assets/envelope/wax-seal.png"
// //       alt="Wax seal"
// //       width={70}
// //       height={70}
// //       className="absolute left-1/2 z-50 -translate-x-1/2 transition-all duration-[900ms] cubic-bezier(0.4, 0, 0.2, 1)"
// //       style={{
// //         top: isOpen ? "125px" : "110px",
// //         transform: isOpen
// //           ? "translateX(-50%) scale(0.92) rotate(-5deg)"
// //           : "translateX(-50%) scale(1) rotate(0deg)",
// //         filter: isOpen
// //           ? "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))"
// //           : "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))",
// //       }}
// //       priority
// //     />
// //   );
// // }


// import Image from "next/image";

// type WaxSealProps = {
//   isOpen: boolean;
// };

// export default function WaxSeal({
//   isOpen,
// }: WaxSealProps) {
//   return (
//     <Image
//       src="/assets/envelope/wax-seal.png"
//       alt="Wax seal"
//       width={45}
//       height={45}
//       priority
//       className="absolute left-1/2 top-[100px] -translate-x-1/ z-50 transition-all duration-500"
//       style={{
//         opacity: isOpen ? 0 : 1,
//         transform: isOpen
//           ? "translateX(-50%) scale(0.6)"
//           : "translateX(-50%) scale(1)",
//       }}
//     />
//   );
// }

"use client";

import { motion } from "motion/react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

type WaxSealProps = {
  isOpen: boolean;
};

export default function WaxSeal({ isOpen }: WaxSealProps) {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-[100px]
        z-50
        flex
        h-[52px]
        w-[52px]
        -translate-x-1/2
        items-center
        justify-center
        select-none
        pointer-events-none
      "
      initial={false}
      animate={{
        opacity: isOpen ? 0 : 1,
        scale: isOpen ? 0.65 : 1,
        y: isOpen ? -4 : 0,
        rotate: isOpen ? -8 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* ==============================
          IRREGULAR WAX OUTER SHAPE
      ============================== */}

      <div
        className="
          absolute
          inset-0
          rotate-[4deg]
          bg-[#A85F67]
          shadow-[0_5px_10px_rgba(79,39,43,0.30)]
        "
        style={{
          borderRadius:
            "48% 52% 45% 55% / 54% 44% 56% 46%",
        }}
      />

      {/* Extra wax edge */}
      <div
        className="
          absolute
          left-[3px]
          top-[2px]
          h-[47px]
          w-[48px]
          -rotate-[7deg]
          bg-[#B66D74]
        "
        style={{
          borderRadius:
            "54% 46% 52% 48% / 47% 55% 45% 53%",
        }}
      />

      {/* ==============================
          WAX HIGHLIGHT
      ============================== */}

      <div
        className="
          absolute
          left-[9px]
          top-[6px]
          h-[19px]
          w-[22px]
          -rotate-[25deg]
          rounded-full
          bg-white/10
          blur-[1px]
        "
      />

      {/* ==============================
          INNER STAMP
      ============================== */}

      <div
        className="
          absolute
          inset-[7px]
          flex
          items-center
          justify-center
          rounded-full
          border-[1.5px]
          border-[#E3C39A]/80
          shadow-[inset_0_1px_3px_rgba(82,38,43,0.35)]
        "
      >
        {/* SECOND INNER RING */}

        <div
          className="
            absolute
            inset-[3px]
            rounded-full
            border
            border-[#E3C39A]/35
          "
        />

        {/* ==============================
            TOP BOTANICAL DETAIL
        ============================== */}

        <svg
          viewBox="0 0 40 14"
          className="
            absolute
            left-1/2
            top-[3px]
            h-[10px]
            w-[27px]
            -translate-x-1/2
          "
          fill="none"
        >
          <path
            d="M4 11 C12 10 14 5 20 3 C26 5 28 10 36 11"
            stroke="#E3C39A"
            strokeWidth="1"
            strokeLinecap="round"
          />

          <ellipse
            cx="12"
            cy="7"
            rx="3"
            ry="1.5"
            transform="rotate(-25 12 7)"
            fill="#E3C39A"
          />

          <ellipse
            cx="28"
            cy="7"
            rx="3"
            ry="1.5"
            transform="rotate(25 28 7)"
            fill="#E3C39A"
          />

          <circle
            cx="20"
            cy="3"
            r="1.4"
            fill="#E3C39A"
          />
        </svg>

        {/* ==============================
            C & T MONOGRAM
        ============================== */}

        <div
          className={`
            ${cormorant.className}
            relative
            mt-[3px]
            flex
            items-center
            justify-center
            text-[#F0D2A8]
          `}
        >
          <span
            className="
              relative
              z-20
              translate-x-[2px]
              text-[17px]
              font-semibold
              italic
              leading-none
            "
          >
            C
          </span>

          <span
            className="
              relative
              z-30
              mx-[-1px]
              mt-[2px]
              text-[8px]
              italic
            "
          >
            &
          </span>

          <span
            className="
              relative
              z-20
              -translate-x-[2px]
              text-[17px]
              font-semibold
              italic
              leading-none
            "
          >
            T
          </span>
        </div>

        {/* ==============================
            BOTTOM DECORATION
        ============================== */}

        <div
          className="
            absolute
            bottom-[4px]
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-[2px]
          "
        >
          <span className="h-px w-[6px] bg-[#E3C39A]/70" />

          <span
            className="
              h-[3px]
              w-[3px]
              rotate-45
              bg-[#E3C39A]
            "
          />

          <span className="h-px w-[6px] bg-[#E3C39A]/70" />
        </div>
      </div>

      {/* ==============================
          WAX EDGE DOTS / IMPERFECTIONS
      ============================== */}

      <span className="absolute bottom-[3px] left-[13px] h-[2px] w-[2px] rounded-full bg-[#874A52]/50" />

      <span className="absolute right-[5px] top-[17px] h-[3px] w-[3px] rounded-full bg-[#874A52]/40" />

      <span className="absolute bottom-[8px] right-[8px] h-[2px] w-[2px] rounded-full bg-[#D58B91]/50" />
    </motion.div>
  );
}
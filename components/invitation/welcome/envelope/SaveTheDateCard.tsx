// export default function SaveTheDateCard() {
//   return (
//     <div className="w-[145px] h-[145px] bg-[#FAF6F0] border border-[#E9DFD3] rounded-full shadow-md flex items-center justify-center p-3 text-center select-none pointer-events-none">
//       {/* 
//         TODO: Paste your Figma Save the Date Card component code here.
//       */}
//       <div className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold">
//         Save the Date Card
//       </div>
//     </div>
//   );
// }
"use client";

import { motion } from "motion/react";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type SaveTheDateCardProps = {
  groomName?: string;
  brideName?: string;
  weddingDate?: string;
};

export default function SaveTheDateCard({
  groomName = "Chiran",
  brideName = "Teshani",
  weddingDate = "2026-07-07",
}: SaveTheDateCardProps) {
  /* =========================================
     FORMAT DATE
  ========================================= */

  let formattedDate = "JULY 07, 2026";

  if (weddingDate) {
    const date = new Date(`${weddingDate}T00:00:00`);

    if (!Number.isNaN(date.getTime())) {
      formattedDate = date
        .toLocaleDateString("en-US", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
        .toUpperCase();
    }
  }

  return (
    <motion.div
      className="
        relative
        flex
        h-[145px]
        w-[145px]
        select-none
        items-center
        justify-center
        rounded-full
      "
      initial={{
        opacity: 0,
        scale: 0.85,
        rotate: -8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================
          OUTER SHADOW
      ====================================== */}

      <div
        className="
          absolute
          inset-[4px]
          rounded-full
          shadow-[0_12px_30px_rgba(102,69,64,0.22)]
        "
      />

      {/* =====================================
          MAIN CARD
      ====================================== */}

      <div
        className="
          absolute
          inset-[5px]
          rounded-full
          border
          border-[#D8B9AD]
          bg-[#FAF4EE]
        "
      />

      {/* =====================================
          SOFT INNER BLUSH
      ====================================== */}

      <div
        className="
          absolute
          inset-[11px]
          rounded-full
          bg-[radial-gradient(circle,#FFFDF9_0%,#F8EEE8_68%,#EEDBD5_100%)]
        "
      />

      {/* =====================================
          OUTER DECORATIVE RING
      ====================================== */}

      <div
        className="
          absolute
          inset-[9px]
          rounded-full
          border
          border-[#B9917E]/40
        "
      />

      {/* =====================================
          INNER THIN GOLD RING
      ====================================== */}

      <div
        className="
          absolute
          inset-[15px]
          rounded-full
          border
          border-[#B89A70]/30
        "
      />

      {/* =====================================
          TOP ORCHID / PETALS
      ====================================== */}

      <div className="absolute left-1/2 top-[1px] z-20 -translate-x-1/2">
        <div className="relative h-[28px] w-[42px]">
          {/* left petal */}
          <span
            className="
              absolute
              left-[3px]
              top-[7px]
              h-[15px]
              w-[22px]
              -rotate-[28deg]
              rounded-[70%_35%_70%_35%]
              bg-[#DDA8AC]
            "
          />

          {/* right petal */}
          <span
            className="
              absolute
              right-[3px]
              top-[7px]
              h-[15px]
              w-[22px]
              rotate-[28deg]
              rounded-[35%_70%_35%_70%]
              bg-[#D99DA4]
            "
          />

          {/* center petal */}
          <span
            className="
              absolute
              left-1/2
              top-[3px]
              h-[18px]
              w-[14px]
              -translate-x-1/2
              rounded-[70%_70%_55%_55%]
              bg-[#EBC3C4]
            "
          />

          {/* orchid center */}
          <span
            className="
              absolute
              left-1/2
              top-[13px]
              h-[7px]
              w-[7px]
              -translate-x-1/2
              rounded-full
              bg-[#A66F75]
            "
          />
        </div>
      </div>

      {/* =====================================
          LEFT BOTANICAL DETAIL
      ====================================== */}

      <svg
        className="
          absolute
          left-[4px]
          top-[30px]
          z-10
          h-[80px]
          w-[34px]
          opacity-70
        "
        viewBox="0 0 40 100"
        fill="none"
      >
        <path
          d="M35 98 C22 78 24 57 31 40 C36 27 29 13 18 2"
          stroke="#A77C70"
          strokeWidth="1"
        />

        <ellipse
          cx="25"
          cy="67"
          rx="5"
          ry="11"
          transform="rotate(-40 25 67)"
          fill="#D6A5A2"
          fillOpacity="0.75"
        />

        <ellipse
          cx="31"
          cy="43"
          rx="5"
          ry="10"
          transform="rotate(38 31 43)"
          fill="#E2B6B3"
          fillOpacity="0.75"
        />

        <ellipse
          cx="22"
          cy="21"
          rx="4"
          ry="9"
          transform="rotate(-35 22 21)"
          fill="#D9AAA8"
          fillOpacity="0.65"
        />
      </svg>

      {/* =====================================
          RIGHT BOTANICAL DETAIL
      ====================================== */}

      <svg
        className="
          absolute
          right-[4px]
          top-[30px]
          z-10
          h-[80px]
          w-[34px]
          -scale-x-100
          opacity-70
        "
        viewBox="0 0 40 100"
        fill="none"
      >
        <path
          d="M35 98 C22 78 24 57 31 40 C36 27 29 13 18 2"
          stroke="#A77C70"
          strokeWidth="1"
        />

        <ellipse
          cx="25"
          cy="67"
          rx="5"
          ry="11"
          transform="rotate(-40 25 67)"
          fill="#D6A5A2"
          fillOpacity="0.75"
        />

        <ellipse
          cx="31"
          cy="43"
          rx="5"
          ry="10"
          transform="rotate(38 31 43)"
          fill="#E2B6B3"
          fillOpacity="0.75"
        />
      </svg>

      {/* =====================================
          CONTENT
      ====================================== */}

      <div
        className="
          relative
          z-20
          flex
          w-[96px]
          flex-col
          items-center
          justify-center
          text-center
          text-[#695149]
        "
      >
        {/* SAVE */}

        <span
          className={`
            ${greatVibes.className}
            text-[23px]
            leading-[20px]
          `}
        >
          Save
        </span>

        {/* THE */}

        <div
          className="
            my-[3px]
            flex
            w-full
            items-center
            justify-center
            gap-[5px]
          "
        >
          <span className="h-px w-[15px] bg-[#B9947D]/50" />

          <span
            className={`
              ${cormorant.className}
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#9A7768]
            `}
          >
            THE
          </span>

          <span className="h-px w-[15px] bg-[#B9947D]/50" />
        </div>

        {/* DATE */}

        <span
          className={`
            ${greatVibes.className}
            text-[23px]
            leading-[20px]
          `}
        >
          Date
        </span>

        {/* NAMES */}

        <div className="mt-[7px] flex items-center justify-center gap-[3px]">
          <span
            className={`
              ${cormorant.className}
              max-w-[38px]
              truncate
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.08em]
            `}
          >
            {groomName}
          </span>

          <span
            className={`
              ${greatVibes.className}
              text-[9px]
              text-[#B07E7D]
            `}
          >
            &
          </span>

          <span
            className={`
              ${cormorant.className}
              max-w-[38px]
              truncate
              text-[6px]
              font-semibold
              uppercase
              tracking-[0.08em]
            `}
          >
            {brideName}
          </span>
        </div>

        {/* WEDDING DATE */}

        <span
          className={`
            ${cormorant.className}
            mt-[4px]
            whitespace-nowrap
            text-[5.5px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#9B7A6B]
          `}
        >
          {formattedDate}
        </span>
      </div>

      {/* =====================================
          BOTTOM MINI ORCHID
      ====================================== */}

      <div
        className="
          absolute
          bottom-[5px]
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-[2px]
        "
      >
        <span
          className="
            h-[7px]
            w-[11px]
            -rotate-[25deg]
            rounded-[100%_0_100%_0]
            bg-[#DCA9AC]
          "
        />

        <span
          className="
            h-[5px]
            w-[5px]
            rounded-full
            bg-[#A77A72]
          "
        />

        <span
          className="
            h-[7px]
            w-[11px]
            rotate-[25deg]
            rounded-[0_100%_0_100%]
            bg-[#E3B5B7]
          "
        />
      </div>
    </motion.div>
  );
}
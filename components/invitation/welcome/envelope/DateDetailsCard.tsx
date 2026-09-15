// type DateDetailsCardProps = {
//   dateText?: string;
// };

// export default function DateDetailsCard({ dateText }: DateDetailsCardProps) {
//   return (
//     <div className="w-[135px] h-[135px] bg-[#FAF2E9] border border-[#E9DFD3] rounded-full shadow-md flex flex-col items-center justify-center p-3 text-center select-none pointer-events-none">
//       {/* 
//         TODO: Paste your Figma Date Details Card component code here.
//         We pass down the 'dateText' prop if you want to render the date dynamically.
//       */}
//       <div className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold mb-1">
//         Date Details Card
//       </div>
//       {dateText && (
//         <div className="text-[7px] text-neutral-500 font-mono whitespace-pre-line">
//           {dateText}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

type DateDetailsCardProps = {
  dateText?: string;
};

export default function DateDetailsCard({
  dateText = "2026-07-07",
}: DateDetailsCardProps) {
  /* =========================================
     FORMAT DATE
  ========================================= */

  let weekday = "TUESDAY";
  let month = "JULY";
  let day = "07";
  let year = "2026";

  if (dateText) {
    const cleanDate = dateText.trim();

    // ISO format: 2026-07-07
    if (/^\d{4}-\d{2}-\d{2}$/.test(cleanDate)) {
      const date = new Date(`${cleanDate}T00:00:00`);

      if (!Number.isNaN(date.getTime())) {
        weekday = date
          .toLocaleDateString("en-US", {
            weekday: "long",
          })
          .toUpperCase();

        month = date
          .toLocaleDateString("en-US", {
            month: "long",
          })
          .toUpperCase();

        day = String(date.getDate()).padStart(2, "0");

        year = String(date.getFullYear());
      }
    } else {
      // Fallback for already formatted text
      const parsed = new Date(cleanDate);

      if (!Number.isNaN(parsed.getTime())) {
        weekday = parsed
          .toLocaleDateString("en-US", {
            weekday: "long",
          })
          .toUpperCase();

        month = parsed
          .toLocaleDateString("en-US", {
            month: "long",
          })
          .toUpperCase();

        day = String(parsed.getDate()).padStart(2, "0");

        year = String(parsed.getFullYear());
      }
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
        scale: 0.86,
        rotate: 7,
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
      {/* SHADOW */}

      <div
        className="
          absolute
          inset-[4px]
          rounded-full
          shadow-[0_12px_28px_rgba(79,63,57,0.20)]
        "
      />

      {/* PAPER */}

      <div
        className="
          absolute
          inset-[5px]
          rounded-full
          border
          border-[#D9C4B5]
          bg-[#FBF5EE]
        "
      />

      {/* INNER PAPER GRADIENT */}

      <div
        className="
          absolute
          inset-[9px]
          rounded-full
          bg-[radial-gradient(circle_at_45%_35%,#FFFDF9_0%,#FAF2E9_60%,#F0DFD5_100%)]
        "
      />

      {/* OUTER GOLD RING */}

      <div
        className="
          absolute
          inset-[10px]
          rounded-full
          border
          border-[#B58A49]/45
        "
      />

      {/* INNER GOLD RING */}

      <div
        className="
          absolute
          inset-[15px]
          rounded-full
          border
          border-[#C7A66A]/25
        "
      />

      {/* TOP ORNAMENT */}

      <div
        className="
          absolute
          left-1/2
          top-[8px]
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-[3px]
        "
      >
        <span className="h-px w-[15px] bg-[#B4872C]/45" />

        <span
          className="
            h-[5px]
            w-[5px]
            rotate-45
            border
            border-[#B4872C]/60
            bg-[#FAF2E9]
          "
        />

        <span className="h-px w-[15px] bg-[#B4872C]/45" />
      </div>

      {/* LEFT BOTANICAL DETAIL */}

      <svg
        className="
          absolute
          -left-[1px]
          bottom-[17px]
          z-10
          h-[68px]
          w-[35px]
          opacity-50
        "
        viewBox="0 0 40 90"
        fill="none"
      >
        <path
          d="M34 88 C20 69 22 48 30 30 C34 20 28 10 19 2"
          stroke="#8E9A86"
          strokeWidth="1"
        />

        <ellipse
          cx="24"
          cy="60"
          rx="5"
          ry="10"
          transform="rotate(-42 24 60)"
          fill="#AEB9A1"
        />

        <ellipse
          cx="30"
          cy="39"
          rx="4.5"
          ry="9"
          transform="rotate(38 30 39)"
          fill="#C3C9B5"
        />

        <ellipse
          cx="22"
          cy="19"
          rx="4"
          ry="8"
          transform="rotate(-35 22 19)"
          fill="#9EAA95"
        />
      </svg>

      {/* RIGHT BOTANICAL DETAIL */}

      <svg
        className="
          absolute
          -right-[1px]
          top-[18px]
          z-10
          h-[68px]
          w-[35px]
          -scale-x-100
          opacity-50
        "
        viewBox="0 0 40 90"
        fill="none"
      >
        <path
          d="M34 88 C20 69 22 48 30 30 C34 20 28 10 19 2"
          stroke="#8E9A86"
          strokeWidth="1"
        />

        <ellipse
          cx="24"
          cy="60"
          rx="5"
          ry="10"
          transform="rotate(-42 24 60)"
          fill="#AEB9A1"
        />

        <ellipse
          cx="30"
          cy="39"
          rx="4.5"
          ry="9"
          transform="rotate(38 30 39)"
          fill="#C3C9B5"
        />
      </svg>

      {/* CONTENT */}

      <div
        className="
          relative
          z-20
          flex
          w-[92px]
          flex-col
          items-center
          justify-center
          text-center
          text-[#65534B]
        "
      >
        {/* TITLE */}

        <span
          className={`
            ${greatVibes.className}
            text-[18px]
            leading-none
            text-[#A8751E]
          `}
        >
          The Date
        </span>

        {/* WEEKDAY */}

        <span
          className={`
            ${cormorant.className}
            mt-[5px]
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#8A7468]
          `}
        >
          {weekday}
        </span>

        {/* DATE ROW */}

        <div
          className="
            mt-[3px]
            flex
            items-center
            justify-center
            gap-[6px]
          "
        >
          <span className="h-px w-[15px] bg-[#B4872C]/45" />

          <span
            className={`
              ${cormorant.className}
              text-[29px]
              font-semibold
              leading-none
              text-[#5E514B]
            `}
          >
            {day}
          </span>

          <span className="h-px w-[15px] bg-[#B4872C]/45" />
        </div>

        {/* MONTH */}

        <span
          className={`
            ${cormorant.className}
            mt-[2px]
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#765F55]
          `}
        >
          {month}
        </span>

        {/* YEAR */}

        <span
          className={`
            ${cormorant.className}
            mt-[3px]
            text-[6px]
            font-medium
            tracking-[0.22em]
            text-[#A17F6E]
          `}
        >
          {year}
        </span>
      </div>

      {/* BOTTOM ORNAMENT */}

      <div
        className="
          absolute
          bottom-[8px]
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-[3px]
        "
      >
        <span className="h-px w-[11px] bg-[#B4872C]/35" />

        <span className="h-[3px] w-[3px] rotate-45 bg-[#B4872C]/50" />

        <span className="h-px w-[11px] bg-[#B4872C]/35" />
      </div>
    </motion.div>
  );
}

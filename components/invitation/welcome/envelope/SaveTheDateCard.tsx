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

/* =========================================================
   SMALL BLUSH FLOWER
========================================================= */

function BlushFlower({
  size = 20,
}: {
  size?: number;
}) {
  return (
    <div
      className="relative shrink-0"
      style={{
        width: size,
        height: size,
      }}
    >
      <span
        className="
          absolute
          left-1/2
          top-[5%]
          h-[55%]
          w-[38%]
          -translate-x-1/2
          rounded-[60%_60%_50%_50%]
          bg-[#E6AEB5]
        "
      />

      <span
        className="
          absolute
          left-[8%]
          top-[28%]
          h-[40%]
          w-[52%]
          -rotate-[35deg]
          rounded-[60%]
          bg-[#D995A2]
        "
      />

      <span
        className="
          absolute
          right-[8%]
          top-[28%]
          h-[40%]
          w-[52%]
          rotate-[35deg]
          rounded-[60%]
          bg-[#EABAC0]
        "
      />

      <span
        className="
          absolute
          bottom-[3%]
          left-[20%]
          h-[45%]
          w-[42%]
          rotate-[25deg]
          rounded-[60%]
          bg-[#E4A6AF]
        "
      />

      <span
        className="
          absolute
          bottom-[3%]
          right-[20%]
          h-[45%]
          w-[42%]
          -rotate-[25deg]
          rounded-[60%]
          bg-[#F0C5C9]
        "
      />

      <span
        className="
          absolute
          left-1/2
          top-1/2
          h-[22%]
          w-[22%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#B77D82]
          shadow-[0_0_0_1px_rgba(180,135,44,0.28)]
        "
      />
    </div>
  );
}

/* =========================================================
   NAVY LEAF
========================================================= */

function NavyLeaf({
  rotate = 0,
  size = 15,
}: {
  rotate?: number;
  size?: number;
}) {
  return (
    <span
      className="
        block
        rounded-[100%_0_100%_0]
        bg-gradient-to-br
        from-[#334C72]
        to-[#142A4C]
      "
      style={{
        width: size,
        height: size * 0.48,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
}

/* =========================================================
   GOLD BERRY
========================================================= */

function GoldBerry() {
  return (
    <span
      className="
        block
        h-[4px]
        w-[4px]
        rounded-full
        bg-[#B78A39]
        shadow-[0_1px_2px_rgba(91,57,14,0.25)]
      "
    />
  );
}

/* =========================================================
   SAVE THE DATE CARD
========================================================= */

export default function SaveTheDateCard({
  groomName = "Chiran",
  brideName = "Teshani",
  weddingDate = "2026-07-07",
}: SaveTheDateCardProps) {
  let formattedDate = "JULY 07, 2026";

  if (weddingDate) {
    const isoMatch = weddingDate.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

    let date: Date | null = null;

    if (isoMatch) {
      date = new Date(
        Number(isoMatch[1]),
        Number(isoMatch[2]) - 1,
        Number(isoMatch[3])
      );
    } else {
      const parsed = new Date(weddingDate);

      if (!Number.isNaN(parsed.getTime())) {
        date = parsed;
      }
    }

    if (date && !Number.isNaN(date.getTime())) {
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
      {/* =================================================
          SHADOW
      ================================================= */}

      <div
        className="
          absolute
          inset-[3px]
          rounded-full
          shadow-[0_13px_28px_rgba(57,45,49,0.24)]
        "
      />

      {/* =================================================
          MAIN BLUSH PAPER
      ================================================= */}

      <div
        className="
          absolute
          inset-[4px]
          rounded-full
          border
          border-[#D6B6B3]
          bg-[#FBF2EF]
        "
      />

      {/* =================================================
          SOFT INNER PAPER
      ================================================= */}

      <div
        className="
          absolute
          inset-[7px]
          rounded-full

          bg-[radial-gradient(circle_at_50%_42%,#FFFDF9_0%,#FBF3EF_55%,#F1DDD9_100%)]
        "
      />

      {/* =================================================
          DOUBLE GOLD RING
      ================================================= */}

      <div
        className="
          absolute
          inset-[8px]
          rounded-full
          border
          border-[#B88A39]/65
        "
      />

      <div
        className="
          absolute
          inset-[12px]
          rounded-full
          border
          border-[#C8A25D]/35
        "
      />

      {/* =================================================
          TOP LEFT FLORAL CLUSTER
      ================================================= */}

      <div
        className="
          absolute
          left-[4px]
          top-[5px]
          z-20
          h-[58px]
          w-[58px]
        "
      >
        <div className="absolute left-[13px] top-[15px]">
          <BlushFlower size={25} />
        </div>

        <div className="absolute left-[1px] top-[7px]">
          <NavyLeaf rotate={-35} size={18} />
        </div>

        <div className="absolute left-[2px] top-[25px]">
          <NavyLeaf rotate={-65} size={17} />
        </div>

        <div className="absolute left-[12px] top-[40px]">
          <NavyLeaf rotate={-25} size={16} />
        </div>

        <div className="absolute left-[33px] top-[5px]">
          <NavyLeaf rotate={30} size={17} />
        </div>

        <div className="absolute left-[42px] top-[19px]">
          <NavyLeaf rotate={60} size={15} />
        </div>

        <div className="absolute left-[8px] top-[17px]">
          <GoldBerry />
        </div>

        <div className="absolute left-[40px] top-[38px]">
          <GoldBerry />
        </div>
      </div>

      {/* =================================================
          TOP RIGHT FLORAL CLUSTER
      ================================================= */}

      <div
        className="
          absolute
          right-[2px]
          top-[4px]
          z-20
          h-[62px]
          w-[62px]
        "
      >
        <div className="absolute right-[12px] top-[16px]">
          <BlushFlower size={28} />
        </div>

        <div className="absolute right-[1px] top-[6px]">
          <NavyLeaf rotate={35} size={19} />
        </div>

        <div className="absolute right-[1px] top-[28px]">
          <NavyLeaf rotate={65} size={18} />
        </div>

        <div className="absolute right-[14px] top-[44px]">
          <NavyLeaf rotate={25} size={17} />
        </div>

        <div className="absolute right-[37px] top-[4px]">
          <NavyLeaf rotate={-30} size={17} />
        </div>

        <div className="absolute right-[45px] top-[22px]">
          <NavyLeaf rotate={-65} size={15} />
        </div>

        <div className="absolute right-[7px] top-[18px]">
          <GoldBerry />
        </div>

        <div className="absolute right-[41px] top-[42px]">
          <GoldBerry />
        </div>
      </div>

      {/* =================================================
          LEFT SIDE WREATH
      ================================================= */}

      <div
        className="
          absolute
          left-[3px]
          top-[55px]
          z-20
          flex
          flex-col
          items-center
          gap-[1px]
        "
      >
        <NavyLeaf rotate={-70} size={18} />
        <NavyLeaf rotate={-48} size={17} />

        <div className="my-[1px]">
          <BlushFlower size={16} />
        </div>

        <NavyLeaf rotate={-25} size={17} />
      </div>

      {/* =================================================
          RIGHT SIDE WREATH
      ================================================= */}

      <div
        className="
          absolute
          right-[3px]
          top-[58px]
          z-20
          flex
          flex-col
          items-center
          gap-[1px]
        "
      >
        <NavyLeaf rotate={70} size={18} />
        <NavyLeaf rotate={48} size={17} />

        <div className="my-[1px]">
          <BlushFlower size={15} />
        </div>

        <NavyLeaf rotate={25} size={17} />
      </div>

      {/* =================================================
          BOTTOM LEFT CLUSTER
      ================================================= */}

      <div
        className="
          absolute
          bottom-[2px]
          left-[8px]
          z-20
          h-[50px]
          w-[55px]
        "
      >
        <div className="absolute bottom-[7px] left-[10px]">
          <BlushFlower size={25} />
        </div>

        <div className="absolute bottom-[1px] left-[1px]">
          <NavyLeaf rotate={35} size={19} />
        </div>

        <div className="absolute bottom-[24px] left-[1px]">
          <NavyLeaf rotate={65} size={17} />
        </div>

        <div className="absolute bottom-[2px] left-[34px]">
          <NavyLeaf rotate={-25} size={17} />
        </div>

        <div className="absolute bottom-[36px] left-[15px]">
          <GoldBerry />
        </div>
      </div>

      {/* =================================================
          BOTTOM RIGHT CLUSTER
      ================================================= */}

      <div
        className="
          absolute
          bottom-[3px]
          right-[7px]
          z-20
          h-[50px]
          w-[55px]
        "
      >
        <div className="absolute bottom-[8px] right-[11px]">
          <BlushFlower size={23} />
        </div>

        <div className="absolute bottom-[1px] right-[1px]">
          <NavyLeaf rotate={-35} size={19} />
        </div>

        <div className="absolute bottom-[24px] right-[1px]">
          <NavyLeaf rotate={-65} size={17} />
        </div>

        <div className="absolute bottom-[2px] right-[34px]">
          <NavyLeaf rotate={25} size={17} />
        </div>

        <div className="absolute bottom-[36px] right-[15px]">
          <GoldBerry />
        </div>
      </div>

      {/* =================================================
          SMALL GOLD DETAILS AROUND WREATH
      ================================================= */}

      <span className="absolute left-[23px] top-[18px] z-20 h-[3px] w-[3px] rounded-full bg-[#B88A39]" />

      <span className="absolute right-[25px] top-[20px] z-20 h-[3px] w-[3px] rounded-full bg-[#B88A39]" />

      <span className="absolute bottom-[23px] left-[27px] z-20 h-[3px] w-[3px] rounded-full bg-[#B88A39]" />

      <span className="absolute bottom-[22px] right-[27px] z-20 h-[3px] w-[3px] rounded-full bg-[#B88A39]" />

      {/* =================================================
          CLEAN CENTER

          Makes sure wreath never interferes with text.
      ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-[21]

          h-[88px]
          w-[88px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#FBF4EF]/90

          shadow-[0_0_16px_12px_rgba(251,244,239,0.72)]
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-30

          flex
          w-[88px]
          flex-col
          items-center
          justify-center

          text-center
        "
      >
        {/* SAVE */}

        <span
          className={`
            ${greatVibes.className}

            text-[22px]
            leading-[18px]

            text-[#A8751E]
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
            gap-[4px]
          "
        >
          <span className="h-px w-[13px] bg-[#B4872C]/55" />

          <span
            className={`
              ${cormorant.className}

              text-[5.5px]
              font-semibold
              uppercase
              tracking-[0.24em]

              text-[#233B60]
            `}
          >
            THE
          </span>

          <span className="h-px w-[13px] bg-[#B4872C]/55" />
        </div>

        {/* DATE */}

        <span
          className={`
            ${greatVibes.className}

            text-[22px]
            leading-[18px]

            text-[#A8751E]
          `}
        >
          Date
        </span>

        {/* HEART */}

        <div
          className={`
            ${greatVibes.className}

            mt-[3px]

            text-[10px]
            leading-none

            text-[#C78991]
          `}
        >
          ♡
        </div>

        {/* NAMES */}

        <div
          className="
            mt-[2px]
            flex
            w-full
            items-center
            justify-center
            gap-[2px]
          "
        >
          <span
            className={`
              ${cormorant.className}

              max-w-[34px]
              truncate

              text-[5.5px]
              font-semibold
              uppercase
              tracking-[0.06em]

              text-[#243B5E]
            `}
          >
            {groomName}
          </span>

          <span
            className={`
              ${greatVibes.className}

              text-[8px]

              text-[#B77C83]
            `}
          >
            &amp;
          </span>

          <span
            className={`
              ${cormorant.className}

              max-w-[34px]
              truncate

              text-[5.5px]
              font-semibold
              uppercase
              tracking-[0.06em]

              text-[#243B5E]
            `}
          >
            {brideName}
          </span>
        </div>

        {/* DATE */}

        <span
          className={`
            ${cormorant.className}

            mt-[3px]

            whitespace-nowrap

            text-[5px]
            font-semibold
            uppercase
            tracking-[0.1em]

            text-[#8A685B]
          `}
        >
          {formattedDate}
        </span>

        {/* BOTTOM ORNAMENT */}

        <div className="mt-[3px] flex items-center gap-[3px]">
          <span className="h-px w-[9px] bg-[#B4872C]/45" />

          <span className="h-[3px] w-[3px] rotate-45 bg-[#B4872C]/65" />

          <span className="h-px w-[9px] bg-[#B4872C]/45" />
        </div>
      </div>
    </motion.div>
  );
}
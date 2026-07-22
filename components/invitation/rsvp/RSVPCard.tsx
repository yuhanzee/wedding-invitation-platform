"use client";

import Image from "next/image";
import { motion } from "motion/react";
import RSVPForm from "./RSVPForm";

type RSVPCardProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPCard({
  guestName,
  familyCount,
}: RSVPCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 180,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-[315px] h-[510px]"
    >
      {/* White invitation paper */}

      <div
        className="
          absolute
          left-[38px]
          right-[38px]
          top-[58px]
          bottom-[30px]
          rounded-sm
          bg-[#FFFDF9]
          shadow-[0_20px_40px_rgba(0,0,0,.12)]
          z-0
        "
      />

      {/* Lace */}

      <Image
        src="/assets/rsvp/lace-frame.svg"
        alt=""
        fill
        priority
        className="
          object-contain
          pointer-events-none
          select-none
          z-10
        "
      />

      {/* Orchid */}

      <Image
        src="/assets/invitation/right-flowers.svg"
        alt=""
        width={165}
        height={165}
        className="
          absolute
          -top-6
          right-[-30px]
          z-20
          pointer-events-none
          select-none
        "
      />

      {/* Form */}

      <div
        className="
          absolute
          left-[55px]
          right-[55px]
          top-[70px]
          bottom-[55px]
          z-30
        "
      >
        <RSVPForm
          guestName={guestName}
          familyCount={familyCount}
        />
      </div>
    </motion.div>
  );
}
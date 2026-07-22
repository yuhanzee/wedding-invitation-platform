"use client";

import Image from "next/image";
import { motion } from "motion/react";
import RSVPCard from "./RSVPCard";

type RSVPEnvelopeProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPEnvelope({
  guestName,
  familyCount,
}: RSVPEnvelopeProps) {
  return (
    <div className="relative flex h-full w-full items-end justify-center overflow-hidden">

      {/* Envelope Back */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-0 z-20"
      >
        <Image
  src="/assets/envelope/envelope-back.png"
  alt=""
  width={390}
  height={265}
  priority
  className="
    pointer-events-none
    select-none
    w-[410px]
    h-auto
    max-w-none
  "
/>
      </motion.div>

      {/* Card Shadow */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.7,
        }}
        whileInView={{
          opacity: 0.18,
          scaleX: 1,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="
          absolute
          bottom-[220px]
          z-20
          h-8
          w-[240px]
          rounded-full
          bg-black
          blur-xl
        "
      />

      {/* RSVP Card */}

      <motion.div
        initial={{
          y: 260,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-[100px]
          z-30
        "
      >
        <RSVPCard
          guestName={guestName}
          familyCount={familyCount}
        />
      </motion.div>

      {/* Envelope Front */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          delay: 0.15,
        }}
        className="absolute bottom-0 z-40"
      >
        <Image
  src="/assets/envelope/envelope-front.png"
  alt=""
  width={390}
  height={265}
  priority
  className="
    pointer-events-none
    select-none
    w-[410px]
    h-auto
    max-w-none
  "
/>
<motion.button
  className="
    absolute
    left-1/2
    bottom-[88px]
    -translate-x-1/2
    z-50
  "
>
  <span
    className="
      flex
      items-center
      justify-center
      w-[230px]
      h-[48px]
      rounded-full
      border
      border-[#8B7A68]
      bg-[#F8F4ED]
      shadow-[0_4px_10px_rgba(0,0,0,0.15)]
      font-serif
      text-[18px]
      tracking-[0.06em]
      text-[#3C2D29]
      whitespace-nowrap
      transition-all
      duration-300
      hover:-translate-y-[2px]
      hover:shadow-[0_8px_16px_rgba(0,0,0,0.18)]
    "
  >
    CONFIRM RSVP
  </span>
</motion.button>
      </motion.div>

    </div>
  );
}
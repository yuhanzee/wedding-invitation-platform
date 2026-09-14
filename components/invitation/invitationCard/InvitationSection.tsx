
"use client";

import Image from "next/image";
import { motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";

import InvitationBackground from "./InvitationBackground";
import InvitationCard from "./InvitationCard";
import FlyingButterflies from "./FlyingButterflies";

type InvitationSectionProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
  weddingTime?: string;
  poruwaCeremonyTime?: string;
  venue?: string;
};
export default function InvitationSection({
  groomName,
  brideName,
  weddingDate,
  weddingTime,
  poruwaCeremonyTime,
  venue,
}: InvitationSectionProps) {

  return (
    <PhoneFrame>
      <section className="relative h-full w-full overflow-visible">

        {/* BACKGROUND */}
        <InvitationBackground />

        {/* INVITATION CARD */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <InvitationCard
  groomName={groomName}
  brideName={brideName}
  weddingDate={weddingDate}
  weddingTime={weddingTime}
  poruwaCeremonyTime={poruwaCeremonyTime}
  venue={venue}
/>
        </div>

        {/* LEFT FLOWERS */}
        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-[-22px]
            z-30
          "
          animate={{
            y: [0, -2, 0],
            rotate: [0, -0.4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/left-flowers.svg"
            alt=""
            width={180}
            height={1050}
            priority
            className="select-none"
          />
        </motion.div>

        {/* TOP FLOWERS */}
        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-15px]
            top-[-20px]
            z-30
          "
          animate={{
            y: [0, 2, 0],
            rotate: [0, 0.4, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            priority
            className="select-none"
          />
        </motion.div>

        {/* BUTTERFLIES */}
        <FlyingButterflies />

        {/* ============================================================
            BOTTOM CHAINS
            These chains hang from the bottom of this section.
            They are positioned with a large enough height so they
            reach all the way to the bottom edge of the PhoneFrame.
            The CountdownSection mirrors matching chains at its top,
            creating a visually continuous hanging decoration.
        ============================================================ */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-[420px]
            w-full
          "
        >
          {/* LEFT CHAIN */}
          <div
            className="
              absolute
              bottom-0
              left-[29%]
              z-20
              h-[220px]
              w-[45px]
              -translate-x-1/2
            "
          >
            <Image
              src="/assets/countdown/chain.png"
              alt=""
              fill
              className="object-cover object-top"
            />
          </div>

          {/* RIGHT CHAIN */}
          <div
            className="
              absolute
              bottom-0
              z-20
              left-[71%]
              h-[220px]
              w-[45px]
              -translate-x-1/2
            "
          >
            <Image
              src="/assets/countdown/chain.png"
              alt=""
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

      </section>
    </PhoneFrame>
  );
}
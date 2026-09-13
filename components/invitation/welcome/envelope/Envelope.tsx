"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

import CardSequence from "./CardSequence";
import ButterflyMagic from "./ButterflyMagic";

type EnvelopeProps = {
  isOpen: boolean;
  onOpen: () => void;
  weddingDate?: string;
};

export default function Envelope({
  isOpen,
  onOpen,
  weddingDate,
}: EnvelopeProps) {
  const [openingStarted, setOpeningStarted] = useState(false);

  const handleOpen = () => {
    if (openingStarted) return;

    setOpeningStarted(true);
    onOpen();
  };

  return (
    <div
      onClick={handleOpen}
      className="relative w-[376px] h-[400px] cursor-pointer"
      style={{
        perspective: "1200px",
      }}
    >
      {/* ENVELOPE BACK */}
      <Image
        src="/assets/envelope/envelope-back.png"
        alt="Envelope back"
        fill
        priority
        sizes="376px"
        className="object-contain pointer-events-none select-none"
        style={{ zIndex: 10 }}
      />

      {/* OPEN TOP FLAP */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 15,
          width: "380px",
          height: "402px",
          left: "50%",
          top: "-0px",
          transform: "translateX(-50%)",
          opacity: openingStarted ? 1 : 0,
          transition: "opacity 300ms ease 500ms",
        }}
      >
        <Image
          src="/assets/envelope/open-top-flap.png"
          alt="Open envelope flap"
          fill
          priority
          sizes="380px"
          className="object-fill select-none"
        />
      </div>

      {/* CARDS */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 25,
        }}
      >
        <CardSequence
          isOpen={openingStarted}
          weddingDate={weddingDate}
        />
      </div>

      {/* ENVELOPE FRONT */}
      <Image
        src="/assets/envelope/envelope-front.png"
        alt="Envelope front"
        fill
        priority
        sizes="376px"
        className="object-contain pointer-events-none select-none"
        style={{ zIndex: 30 }}
      />

{/* CLOSED TOP FLAP */}
<motion.div
  className="absolute pointer-events-none"
  initial={false}
  animate={{
    opacity: openingStarted ? 0 : 1,
  }}
  transition={{
    duration: 0.4,
  }}
  style={{
    zIndex: 35,

    width: "376px",
    height: "380px",

    left: "53%",
    top: "129px",

    transform: "translateX(-50%)",
  }}
>
  <Image
    src="/assets/envelope/top-flap.png"
    alt="Closed envelope flap"
    fill
    priority
    sizes="376px"
    className="object-fill select-none"
  />
</motion.div>

      {/* DECORATIONS */}
      <Image
        src="/assets/envelope/decorations.png"
        alt="Envelope decorations"
        fill
        priority
        sizes="376px"
        className="object-contain pointer-events-none select-none"
        style={{ zIndex: 40 }}
      />

      {/* BUTTERFLY MAGIC */}
      <ButterflyMagic isOpen={openingStarted} />
    </div>
  );
}
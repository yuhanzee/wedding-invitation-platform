"use client";

import { useState } from "react";
import { motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";
import Background from "./Background";
import Header from "./Header";
import EnvelopeSection from "./EnvelopeSection";
import Footer from "./Footer";

type WelcomeScreenProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
};

export default function WelcomeScreen({
  groomName,
  brideName,
  weddingDate,
}: WelcomeScreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PhoneFrame>
      <main className="relative w-full h-full overflow-hidden">
        <Background />

        {/* HEADER */}
        <motion.div
          className="absolute top-[65px] left-0 w-full z-20"
          animate={{
            opacity: isOpen ? 0 : 1,
            y: isOpen ? -20 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Header
            groomName={groomName}
            brideName={brideName}
          />
        </motion.div>

        {/* ENVELOPE - ALWAYS SAME COMPONENT */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <EnvelopeSection
            isOpen={isOpen}
            onOpen={() => setIsOpen(true)}
            weddingDate={weddingDate}
          />
        </div>

        {/* FOOTER */}
        <motion.div
          className="absolute bottom-[55px] left-0 w-full z-20"
          animate={{
            opacity: isOpen ? 0 : 1,
            y: isOpen ? 20 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Footer />
        </motion.div>
      </main>
    </PhoneFrame>
  );
}
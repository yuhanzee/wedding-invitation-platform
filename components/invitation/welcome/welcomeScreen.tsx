"use client";

import { useState } from "react";
import { motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";
import Background from "./Background";
import Header from "./Header";
import EnvelopeSection from "./EnvelopeSection";
import Footer from "./Footer";

import { useInvitationMusic } from "../music/InvitationMusicProvider";

type WelcomeScreenProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
  onComplete: () => void;
};

export default function WelcomeScreen({
  groomName,
  brideName,
  weddingDate,
  onComplete,
}: WelcomeScreenProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { play } = useInvitationMusic();

  const handleOpen = () => {
  if (isOpen) return;

  play();
  setIsOpen(true);

  setTimeout(() => {
    onComplete();
  }, 5000);
};

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

        {/* ENVELOPE */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <EnvelopeSection
            isOpen={isOpen}
            onOpen={handleOpen}
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
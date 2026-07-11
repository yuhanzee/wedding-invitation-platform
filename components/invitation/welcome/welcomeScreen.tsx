"use client";

import { useState } from "react";
import PhoneFrame from "@/components/common/PhoneFrame";

import Background from "./Background";
import Header from "./Header";
import EnvelopeSection from "./EnvelopeSection";

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

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <PhoneFrame>
      <div className="relative w-full h-full overflow-hidden select-none">
        {/* Embossed paper textured background */}
        <Background />

        {/* Interactive content layer */}
        <div className="relative z-10 w-full h-full">
          
          {/* Header text container - fades and translates up out of view */}
          <div
            className="absolute top-[80px] left-0 w-full transition-all duration-[900ms] ease-in-out pointer-events-none"
            style={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "translateY(-50px) scale(0.96)" : "translateY(0) scale(1)",
            }}
          >
            <Header
              groomName={groomName}
              brideName={brideName}
            />
          </div>

          {/* Envelope and Pop-up cards container */}
          <div className="absolute top-[260px] left-1/2 -translate-x-1/2">
            <EnvelopeSection
              isOpen={isOpen}
              onOpen={handleOpen}
              weddingDate={weddingDate}
            />
          </div>

        </div>
      </div>
    </PhoneFrame>
  );
}
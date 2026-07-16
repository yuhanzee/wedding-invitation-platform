"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import WelcomeScreen from "./welcome/welcomeScreen";
import MusicScreen from "./music/MusicScreen";
import InvitationMusicProvider from "./music/InvitationMusicProvider";

type InvitationEngineProps = {
  guest?: any;
  wedding: {
    groomName: string;
    brideName: string;
    weddingDate?: string;
  };
};

export default function InvitationEngine({
  wedding,
  guest,
}: InvitationEngineProps) {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "music"
  >("welcome");

  return (
    <InvitationMusicProvider>
      <AnimatePresence mode="wait">
        {currentScreen === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              filter: "blur(5px)",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <WelcomeScreen
              groomName={wedding.groomName}
              brideName={wedding.brideName}
              weddingDate={wedding.weddingDate}
              onComplete={() => setCurrentScreen("music")}
            />
          </motion.div>
        )}

        {currentScreen === "music" && (
          <motion.div
            key="music"
            initial={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <MusicScreen
              groomName={wedding.groomName}
              brideName={wedding.brideName}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </InvitationMusicProvider>
  );
}
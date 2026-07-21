// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "motion/react";

// import WelcomeScreen from "./welcome/welcomeScreen";
// import MusicScreen from "./music/MusicScreen";
// import InvitationMusicProvider from "./music/InvitationMusicProvider";
// import InvitationSection from "./invitationCard/InvitationSection";

// type InvitationEngineProps = {
//   guest?: any;
//   wedding: {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   venue?: string;
// };
// };

// export default function InvitationEngine({
//   wedding,
// }: InvitationEngineProps) {
//   const [currentScreen, setCurrentScreen] = useState<
//     "welcome" | "invitation"
//   >("welcome");

//   return (
//     <InvitationMusicProvider>
//       <AnimatePresence mode="wait">
//         {currentScreen === "welcome" && (
//           <motion.div
//             key="welcome"
//             initial={{ opacity: 1 }}
//             exit={{
//               opacity: 0,
//               scale: 1.03,
//               filter: "blur(5px)",
//             }}
//             transition={{
//               duration: 1,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <WelcomeScreen
//               groomName={wedding.groomName}
//               brideName={wedding.brideName}
//               weddingDate={wedding.weddingDate}
//               onComplete={() => setCurrentScreen("invitation")}
//             />
//           </motion.div>
//         )}

//         {currentScreen === "invitation" && (
//           <motion.div
//             key="invitation"
//             initial={{
//               opacity: 0,
//               scale: 1.04,
//               filter: "blur(5px)",
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               filter: "blur(0px)",
//             }}
//             transition={{
//               duration: 1.2,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >
//             <div className="w-full">
//   <section className="min-h-screen">
//     <MusicScreen
//       groomName={wedding.groomName}
//       brideName={wedding.brideName}
//     />
//   </section>

//   <InvitationSection
//   groomName={wedding.groomName}
//   brideName={wedding.brideName}
//   weddingDate={wedding.weddingDate}
//   weddingTime={wedding.weddingTime}
//   venue={wedding.venue}
// />
// </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </InvitationMusicProvider>
//   );
// }

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import WelcomeScreen from "./welcome/welcomeScreen";
import MusicScreen from "./music/MusicScreen";
import InvitationMusicProvider from "./music/InvitationMusicProvider";
import InvitationSection from "./invitationCard/InvitationSection";
import CountdownVenueSection from "./countdown/CountdownSection";


type InvitationEngineProps = {
  guest?: unknown;

  wedding: {
    groomName: string;
    brideName: string;
    weddingDate?: string;
    weddingTime?: string;
    venue?: string;
  };
};

export default function InvitationEngine({
  wedding,
}: InvitationEngineProps) {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "invitation"
  >("welcome");

  return (
    <InvitationMusicProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Persists through every invitation screen */}
        {/* <GlobalButterflyMagic /> */}

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
                onComplete={() =>
                  setCurrentScreen("invitation")
                }
              />
            </motion.div>
          )}

          {currentScreen === "invitation" && (
            <motion.div
              key="invitation"
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
             <div className="w-full">

              <section className="min-h-screen">
                <MusicScreen
                  groomName={wedding.groomName}
                  brideName={wedding.brideName}
                />
              </section>

              <section className="min-h-screen">
                <InvitationSection
                  groomName={wedding.groomName}
                  brideName={wedding.brideName}
                  weddingDate={wedding.weddingDate}
                  weddingTime={wedding.weddingTime}
                  venue={wedding.venue}
                />
              </section>

              <section className="min-h-screen">
                <CountdownVenueSection
                  weddingDate={wedding.weddingDate || ""}
                  venue={wedding.venue || ""}
                  mapUrl=""
                />
              </section>

                {/* Add Story, Gallery, Venue and RSVP sections here later.
                    GlobalButterflyMagic continues over all of them. */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </InvitationMusicProvider>
  );
}   
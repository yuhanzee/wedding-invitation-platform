// // "use client";

// // import { useState } from "react";
// // import { AnimatePresence, motion } from "motion/react";

// // import WelcomeScreen from "./welcome/welcomeScreen";
// // import MusicScreen from "./music/MusicScreen";
// // import InvitationMusicProvider from "./music/InvitationMusicProvider";
// // import InvitationSection from "./invitationCard/InvitationSection";
// // import CountdownSection from "./countdown/CountdownSection";
// // import GallerySection from "./gallery/GallerySection";
// // import RSVPSection from "./rsvp/RSVPSection";


// // type InvitationEngineProps = {
// //   guest: {
// //   guestName: string;
// //   familyCount: number;
// // };

// //   wedding: {
// //     groomName: string;
// //     brideName: string;
// //     weddingDate?: string;
// //     weddingTime?: string;
// //     venue?: string;
// //   };
// // };

// // export default function InvitationEngine({
// //   wedding,
// //   guest,
// // }: InvitationEngineProps) {
// //   const [currentScreen, setCurrentScreen] = useState<
// //     "welcome" | "invitation"
// //   >("welcome");

// //   return (
// //     <InvitationMusicProvider>
// //       <div className="relative min-h-screen overflow-x-hidden">
// //         {/* Persists through every invitation screen */}
// //         {/* <GlobalButterflyMagic /> */}

// //         <AnimatePresence mode="wait">
// //           {currentScreen === "welcome" && (
// //             <motion.div
// //               key="welcome"
// //               initial={{ opacity: 1 }}
// //               exit={{
// //                 opacity: 0,
// //                 scale: 1.03,
// //                 filter: "blur(5px)",
// //               }}
// //               transition={{
// //                 duration: 1,
// //                 ease: [0.22, 1, 0.36, 1],
// //               }}
// //             >
// //               <WelcomeScreen
// //                 groomName={wedding.groomName}
// //                 brideName={wedding.brideName}
// //                 weddingDate={wedding.weddingDate}
// //                 onComplete={() =>
// //                   setCurrentScreen("invitation")
// //                 }
// //               />
// //             </motion.div>
// //           )}

// //           {currentScreen === "invitation" && (
// //             <motion.div
// //               key="invitation"
// //               initial={{
// //                 opacity: 0,
// //                 scale: 1.04,
// //                 filter: "blur(5px)",
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 scale: 1,
// //                 filter: "blur(0px)",
// //               }}
// //               transition={{
// //                 duration: 1.2,
// //                 ease: [0.22, 1, 0.36, 1],
// //               }}
// //             >
// //              <div className="w-full">

// //               <section className="min-h-screen">
// //                 <MusicScreen
// //                   groomName={wedding.groomName}
// //                   brideName={wedding.brideName}
// //                 />
// //               </section>

// //               <section className="min-h-screen">
// //                 <InvitationSection
// //                   groomName={wedding.groomName}
// //                   brideName={wedding.brideName}
// //                   weddingDate={wedding.weddingDate}
// //                   weddingTime={wedding.weddingTime}
// //                   venue={wedding.venue}
// //                 />
// //               </section>

// //               <section className="min-h-screen">
// //                 <CountdownSection
// //                   weddingDate={wedding.weddingDate || ""}
// //                   venue={wedding.venue}
// //                 />
// //               </section>

// //               <section className="min-h-screen">
// //                 <GallerySection
// //                   groomName={wedding.groomName}
// //                   brideName={wedding.brideName}
// //                 />
// //               </section>

// //                <RSVPSection
// //                 guestName={guest.guestName}
// //                 familyCount={guest.familyCount}
// //               />
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </InvitationMusicProvider>
// //   );
// // }   

// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "motion/react";

// import WelcomeScreen from "./welcome/welcomeScreen";
// import MusicScreen from "./music/MusicScreen";
// import InvitationMusicProvider from "./music/InvitationMusicProvider";
// import InvitationSection from "./invitationCard/InvitationSection";
// import CountdownSection from "./countdown/CountdownSection";
// import GallerySection from "./gallery/GallerySection";
// import RSVPSection from "./rsvp/RSVPSection";

// type InvitationEngineProps = {
//   guest: {
//     guestName: string;
//     familyCount: number;
//   };

//  wedding: {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   poruwaCeremonyTime?: string;
//   venue?: string;
// };
// };

// const galleryPhotos = [
//   "/assets/gallery/1.jpg",
//   "/assets/gallery/2.jpg",
//   "/assets/gallery/3.jpg",
//   "/assets/gallery/4.jpg",
//   "/assets/gallery/5.jpg",
//   "/assets/gallery/6.jpg",
//   "/assets/gallery/7.jpg",
//   "/assets/gallery/8.jpg",
//   "/assets/gallery/9.jpg",
//   "/assets/gallery/10.jpg",
//   "/assets/gallery/11.jpg",
//   "/assets/gallery/12.jpg",
//   "/assets/gallery/13.jpg",
//   "/assets/gallery/14.jpg",
//   "/assets/gallery/15.jpg",
// ];

// export default function InvitationEngine({
//   wedding,
//   guest,
// }: InvitationEngineProps) {
//   const [currentScreen, setCurrentScreen] = useState<
//     "welcome" | "invitation"
//   >("welcome");

//   return (
//     <InvitationMusicProvider>
//       <div className="relative min-h-screen overflow-x-hidden">
//         <AnimatePresence mode="wait">
//           {/* WELCOME */}
//           {currentScreen === "welcome" && (
//             <motion.div
//               key="welcome"
//               initial={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 1.03,
//                 filter: "blur(5px)",
//               }}
//               transition={{
//                 duration: 1,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               <WelcomeScreen
//                 groomName={wedding.groomName}
//                 brideName={wedding.brideName}
//                 weddingDate={wedding.weddingDate}
//                 onComplete={() =>
//                   setCurrentScreen("invitation")
//                 }
//               />
//             </motion.div>
//           )}

//           {/* MAIN INVITATION */}
//           {currentScreen === "invitation" && (
//             <motion.div
//               key="invitation"
//               initial={{
//                 opacity: 0,
//                 scale: 1.04,
//                 filter: "blur(5px)",
//               }}
//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 filter: "blur(0px)",
//               }}
//               transition={{
//                 duration: 1.2,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             >
//               <div className="w-full">
//                 {/* MUSIC */}
//                 <section className="min-h-screen">
//                   <MusicScreen
//                     groomName={wedding.groomName}
//                     brideName={wedding.brideName}
//                   />
//                 </section>

//                 {/* INVITATION CARD */}
//                 <section className="min-h-screen">
//                   <InvitationSection
//   groomName={wedding.groomName}
//   brideName={wedding.brideName}
//   weddingDate={wedding.weddingDate}
//   weddingTime={wedding.weddingTime}
//   poruwaCeremonyTime={wedding.poruwaCeremonyTime}
//   venue={wedding.venue}
// />
//                 </section>

//                 {/* COUNTDOWN */}
//                 <section className="min-h-screen">
//                   <CountdownSection
//                     weddingDate={
//                       wedding.weddingDate || ""
//                     }
//                     venue={wedding.venue}
//                   />
//                 </section>

//                 {/* SCRAPBOOK GALLERY */}
//                 <section className="min-h-screen">
//                   <GallerySection
//                     groomName={wedding.groomName}
//                     brideName={wedding.brideName}
//                     photos={galleryPhotos}
//                   />
//                 </section>

//                 {/* RSVP */}
//                 <RSVPSection
//                   guestName={guest.guestName}
//                   familyCount={guest.familyCount}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
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
import CountdownSection from "./countdown/CountdownSection";
import GallerySection from "./gallery/GallerySection";
import RSVPSection from "./rsvp/RSVPSection";

type InvitationEngineProps = {
  guest: {
    guestName: string;
    familyCount: number;

    // RSVP information
    token: string;
    attending: boolean | null;
    hasResponded: boolean;
    respondedAt: string | null;
    message: string;
  };

  wedding: {
    groomName: string;
    brideName: string;
    weddingDate?: string;
    weddingTime?: string;
    poruwaCeremonyTime?: string;
    venue?: string;
  };
};

const galleryPhotos = [
  "/assets/gallery/1.jpg",
  "/assets/gallery/2.jpg",
  "/assets/gallery/3.jpg",
  "/assets/gallery/4.jpg",
  "/assets/gallery/5.jpg",
  "/assets/gallery/6.jpg",
  "/assets/gallery/7.jpg",
  "/assets/gallery/8.jpg",
  "/assets/gallery/9.jpg",
  "/assets/gallery/10.jpg",
  "/assets/gallery/11.jpg",
  "/assets/gallery/12.jpg",
  "/assets/gallery/13.jpg",
  "/assets/gallery/14.jpg",
  "/assets/gallery/15.jpg",
];

export default function InvitationEngine({
  wedding,
  guest,
}: InvitationEngineProps) {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "invitation"
  >("welcome");

  return (
    <InvitationMusicProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <AnimatePresence mode="wait">

          {/* =========================================
              WELCOME
          ========================================== */}

          {currentScreen === "welcome" && (
            <motion.div
              key="welcome"
              initial={{
                opacity: 1,
              }}
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

          {/* =========================================
              MAIN INVITATION
          ========================================== */}

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

                {/* =================================
                    MUSIC
                ================================== */}

                <section className="min-h-screen">
                  <MusicScreen
                    groomName={wedding.groomName}
                    brideName={wedding.brideName}
                  />
                </section>

                {/* =================================
                    INVITATION CARD
                ================================== */}

                <section className="min-h-screen">
                  <InvitationSection
                    groomName={wedding.groomName}
                    brideName={wedding.brideName}
                    weddingDate={wedding.weddingDate}
                    weddingTime={wedding.weddingTime}
                    poruwaCeremonyTime={
                      wedding.poruwaCeremonyTime
                    }
                    venue={wedding.venue}
                  />
                </section>

                {/* =================================
                    COUNTDOWN
                ================================== */}

                <section className="min-h-screen">
                  <CountdownSection
                    weddingDate={
                      wedding.weddingDate || ""
                    }
                    venue={wedding.venue}
                  />
                </section>

                {/* =================================
                    SCRAPBOOK GALLERY
                ================================== */}

                <section className="min-h-screen">
                  <GallerySection
                    groomName={wedding.groomName}
                    brideName={wedding.brideName}
                    photos={galleryPhotos}
                  />
                </section>

                {/* =================================
                    RSVP
                ================================== */}

                <RSVPSection
                  guestName={guest.guestName}
                  familyCount={guest.familyCount}
                  token={guest.token}
                  attending={guest.attending}
                  hasResponded={guest.hasResponded}
                  respondedAt={guest.respondedAt}
                  message={guest.message}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </InvitationMusicProvider>
  );
}
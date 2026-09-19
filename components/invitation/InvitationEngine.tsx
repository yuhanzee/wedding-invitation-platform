// // // "use client";

// // // import { useState } from "react";
// // // import { AnimatePresence, motion } from "motion/react";

// // // import WelcomeScreen from "./welcome/welcomeScreen";
// // // import MusicScreen from "./music/MusicScreen";
// // // import InvitationMusicProvider from "./music/InvitationMusicProvider";
// // // import InvitationSection from "./invitationCard/InvitationSection";
// // // import CountdownSection from "./countdown/CountdownSection";
// // // import GallerySection from "./gallery/GallerySection";
// // // import RSVPSection from "./rsvp/RSVPSection";


// // // type InvitationEngineProps = {
// // //   guest: {
// // //   guestName: string;
// // //   familyCount: number;
// // // };

// // //   wedding: {
// // //     groomName: string;
// // //     brideName: string;
// // //     weddingDate?: string;
// // //     weddingTime?: string;
// // //     venue?: string;
// // //   };
// // // };

// // // export default function InvitationEngine({
// // //   wedding,
// // //   guest,
// // // }: InvitationEngineProps) {
// // //   const [currentScreen, setCurrentScreen] = useState<
// // //     "welcome" | "invitation"
// // //   >("welcome");

// // //   return (
// // //     <InvitationMusicProvider>
// // //       <div className="relative min-h-screen overflow-x-hidden">
// // //         {/* Persists through every invitation screen */}
// // //         {/* <GlobalButterflyMagic /> */}

// // //         <AnimatePresence mode="wait">
// // //           {currentScreen === "welcome" && (
// // //             <motion.div
// // //               key="welcome"
// // //               initial={{ opacity: 1 }}
// // //               exit={{
// // //                 opacity: 0,
// // //                 scale: 1.03,
// // //                 filter: "blur(5px)",
// // //               }}
// // //               transition={{
// // //                 duration: 1,
// // //                 ease: [0.22, 1, 0.36, 1],
// // //               }}
// // //             >
// // //               <WelcomeScreen
// // //                 groomName={wedding.groomName}
// // //                 brideName={wedding.brideName}
// // //                 weddingDate={wedding.weddingDate}
// // //                 onComplete={() =>
// // //                   setCurrentScreen("invitation")
// // //                 }
// // //               />
// // //             </motion.div>
// // //           )}

// // //           {currentScreen === "invitation" && (
// // //             <motion.div
// // //               key="invitation"
// // //               initial={{
// // //                 opacity: 0,
// // //                 scale: 1.04,
// // //                 filter: "blur(5px)",
// // //               }}
// // //               animate={{
// // //                 opacity: 1,
// // //                 scale: 1,
// // //                 filter: "blur(0px)",
// // //               }}
// // //               transition={{
// // //                 duration: 1.2,
// // //                 ease: [0.22, 1, 0.36, 1],
// // //               }}
// // //             >
// // //              <div className="w-full">

// // //               <section className="min-h-screen">
// // //                 <MusicScreen
// // //                   groomName={wedding.groomName}
// // //                   brideName={wedding.brideName}
// // //                 />
// // //               </section>

// // //               <section className="min-h-screen">
// // //                 <InvitationSection
// // //                   groomName={wedding.groomName}
// // //                   brideName={wedding.brideName}
// // //                   weddingDate={wedding.weddingDate}
// // //                   weddingTime={wedding.weddingTime}
// // //                   venue={wedding.venue}
// // //                 />
// // //               </section>

// // //               <section className="min-h-screen">
// // //                 <CountdownSection
// // //                   weddingDate={wedding.weddingDate || ""}
// // //                   venue={wedding.venue}
// // //                 />
// // //               </section>

// // //               <section className="min-h-screen">
// // //                 <GallerySection
// // //                   groomName={wedding.groomName}
// // //                   brideName={wedding.brideName}
// // //                 />
// // //               </section>

// // //                <RSVPSection
// // //                 guestName={guest.guestName}
// // //                 familyCount={guest.familyCount}
// // //               />
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </AnimatePresence>
// // //       </div>
// // //     </InvitationMusicProvider>
// // //   );
// // // }   

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
// //     guestName: string;
// //     familyCount: number;
// //   };

// //  wedding: {
// //   groomName: string;
// //   brideName: string;
// //   weddingDate?: string;
// //   weddingTime?: string;
// //   poruwaCeremonyTime?: string;
// //   venue?: string;
// // };
// // };

// // const galleryPhotos = [
// //   "/assets/gallery/1.jpg",
// //   "/assets/gallery/2.jpg",
// //   "/assets/gallery/3.jpg",
// //   "/assets/gallery/4.jpg",
// //   "/assets/gallery/5.jpg",
// //   "/assets/gallery/6.jpg",
// //   "/assets/gallery/7.jpg",
// //   "/assets/gallery/8.jpg",
// //   "/assets/gallery/9.jpg",
// //   "/assets/gallery/10.jpg",
// //   "/assets/gallery/11.jpg",
// //   "/assets/gallery/12.jpg",
// //   "/assets/gallery/13.jpg",
// //   "/assets/gallery/14.jpg",
// //   "/assets/gallery/15.jpg",
// // ];

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
// //         <AnimatePresence mode="wait">
// //           {/* WELCOME */}
// //           {currentScreen === "welcome" && (
// //             <motion.div
// //               key="welcome"
// //               initial={{
// //                 opacity: 1,
// //               }}
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

// //           {/* MAIN INVITATION */}
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
// //               <div className="w-full">
// //                 {/* MUSIC */}
// //                 <section className="min-h-screen">
// //                   <MusicScreen
// //                     groomName={wedding.groomName}
// //                     brideName={wedding.brideName}
// //                   />
// //                 </section>

// //                 {/* INVITATION CARD */}
// //                 <section className="min-h-screen">
// //                   <InvitationSection
// //   groomName={wedding.groomName}
// //   brideName={wedding.brideName}
// //   weddingDate={wedding.weddingDate}
// //   weddingTime={wedding.weddingTime}
// //   poruwaCeremonyTime={wedding.poruwaCeremonyTime}
// //   venue={wedding.venue}
// // />
// //                 </section>

// //                 {/* COUNTDOWN */}
// //                 <section className="min-h-screen">
// //                   <CountdownSection
// //                     weddingDate={
// //                       wedding.weddingDate || ""
// //                     }
// //                     venue={wedding.venue}
// //                   />
// //                 </section>

// //                 {/* SCRAPBOOK GALLERY */}
// //                 <section className="min-h-screen">
// //                   <GallerySection
// //                     groomName={wedding.groomName}
// //                     brideName={wedding.brideName}
// //                     photos={galleryPhotos}
// //                   />
// //                 </section>

// //                 {/* RSVP */}
// //                 <RSVPSection
// //                   guestName={guest.guestName}
// //                   familyCount={guest.familyCount}
// //                 />
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

//     // RSVP information
//     token: string;
//     attending: boolean | null;
//     hasResponded: boolean;
//     respondedAt: string | null;
//     message: string;
//   };

//   wedding: {
//     groomName: string;
//     brideName: string;
//     weddingDate?: string;
//     weddingTime?: string;
//     poruwaCeremonyTime?: string;
//     venue?: string;
//   };
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

//           {/* =========================================
//               WELCOME
//           ========================================== */}

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

//           {/* =========================================
//               MAIN INVITATION
//           ========================================== */}

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

//                 {/* =================================
//                     MUSIC
//                 ================================== */}

//                 <section className="min-h-screen">
//                   <MusicScreen
//                     groomName={wedding.groomName}
//                     brideName={wedding.brideName}
//                   />
//                 </section>

//                 {/* =================================
//                     INVITATION CARD
//                 ================================== */}

//                 <section className="min-h-screen">
//                   <InvitationSection
//                     groomName={wedding.groomName}
//                     brideName={wedding.brideName}
//                     weddingDate={wedding.weddingDate}
//                     weddingTime={wedding.weddingTime}
//                     poruwaCeremonyTime={
//                       wedding.poruwaCeremonyTime
//                     }
//                     venue={wedding.venue}
//                   />
//                 </section>

//                 {/* =================================
//                     COUNTDOWN
//                 ================================== */}

//                 <section className="min-h-screen">
//                   <CountdownSection
//                     weddingDate={
//                       wedding.weddingDate || ""
//                     }
//                     venue={wedding.venue}
//                   />
//                 </section>

//                 {/* =================================
//                     SCRAPBOOK GALLERY
//                 ================================== */}

//                 <section className="min-h-screen">
//                   <GallerySection
//                     groomName={wedding.groomName}
//                     brideName={wedding.brideName}
//                     photos={galleryPhotos}
//                   />
//                 </section>

//                 {/* =================================
//                     RSVP
//                 ================================== */}

//                 <RSVPSection
//                   guestName={guest.guestName}
//                   familyCount={guest.familyCount}
//                   token={guest.token}
//                   attending={guest.attending}
//                   hasResponded={guest.hasResponded}
//                   respondedAt={guest.respondedAt}
//                   message={guest.message}
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </InvitationMusicProvider>
//   );
// }

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

// /* =========================================
//    TYPES
// ========================================= */

// type InvitationEngineProps = {
//   guest: {
//     guestName: string;
//     familyCount: number;

//     // RSVP information
//     token: string;
//     attending: boolean | null;
//     hasResponded: boolean;
//     respondedAt: string | null;
//     message: string;
//   };

//   wedding: {
//     groomName: string;
//     brideName: string;
//     weddingDate?: string;
//     weddingTime?: string;
//     poruwaCeremonyTime?: string;
//     venue?: string;
//   };
// };

// /* =========================================
//    GALLERY PHOTOS
// ========================================= */

// const galleryPhotos = [
//   "/assets/gallery/1.jpeg",
//   "/assets/gallery/2.jpeg",
//   "/assets/gallery/3.jpeg",
//   "/assets/gallery/4.jpeg",
//   "/assets/gallery/5.jpeg",
//   "/assets/gallery/6.jpeg",
//   "/assets/gallery/7.jpeg",
//   "/assets/gallery/8.jpeg",
//   "/assets/gallery/9.jpeg",
//   "/assets/gallery/10.jpeg",
//   "/assets/gallery/11.jpeg",
//   "/assets/gallery/12.jpeg",
//   "/assets/gallery/13.jpeg",
//   "/assets/gallery/14.jpeg",
//   "/assets/gallery/15.jpeg",
// ];

// /* =========================================
//    INVITATION ENGINE
// ========================================= */

// export default function InvitationEngine({
//   wedding,
//   guest,
// }: InvitationEngineProps) {
//   const [currentScreen, setCurrentScreen] = useState<
//     "welcome" | "invitation"
//   >("welcome");

//   return (
//     <InvitationMusicProvider>
//       <div
//         className="
//           relative
//           min-h-screen
//           w-full
//           overflow-x-hidden
//           bg-[#F7F3EA]
//         "
//       >
//         <AnimatePresence mode="wait">

//           {/* =========================================
//               WELCOME SCREEN
//           ========================================== */}

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
//               className="
//                 m-0
//                 w-full
//                 p-0
//               "
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

//           {/* =========================================
//               MAIN INVITATION
//           ========================================== */}

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
//               className="
//                 m-0
//                 w-full
//                 bg-[#F7F3EA]
//                 p-0
//               "
//             >
//               <div
//                 className="
//                   m-0
//                   w-full
//                   bg-[#F7F3EA]
//                   p-0
//                 "
//               >

//                 {/* =================================
//                     MUSIC

//                     No extra min-h-screen wrapper.
//                 ================================== */}

//                 <MusicScreen
//                   groomName={wedding.groomName}
//                   brideName={wedding.brideName}
//                 />

//                 {/* =================================
//                     INVITATION CARD

//                     No extra min-h-screen wrapper.
//                 ================================== */}

//                 <InvitationSection
//                   groomName={wedding.groomName}
//                   brideName={wedding.brideName}
//                   weddingDate={wedding.weddingDate}
//                   weddingTime={wedding.weddingTime}
//                   poruwaCeremonyTime={
//                     wedding.poruwaCeremonyTime
//                   }
//                   venue={wedding.venue}
//                 />

//                 {/* =================================
//                     COUNTDOWN

//                     No extra min-h-screen wrapper.
//                 ================================== */}

//                 <CountdownSection
//                   weddingDate={
//                     wedding.weddingDate || ""
//                   }
//                   venue={wedding.venue}
//                 />

//                 {/* =================================
//                     SCRAPBOOK GALLERY

//                     GallerySection already controls
//                     its own section height.
//                 ================================== */}

//                 <GallerySection
//                   groomName={wedding.groomName}
//                   brideName={wedding.brideName}
//                   photos={galleryPhotos}
//                 />

//                 {/* =================================
//                     RSVP
//                 ================================== */}

//                 <RSVPSection
//                   guestName={guest.guestName}
//                   familyCount={guest.familyCount}
//                   token={guest.token}
//                   attending={guest.attending}
//                   hasResponded={guest.hasResponded}
//                   respondedAt={guest.respondedAt}
//                   message={guest.message}
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

/* =========================================
   TYPES
========================================= */

type InvitationEngineProps = {
  guest: {
    guestName: string;
    familyCount: number;

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

  // true = general invitation without guest details
  // false = normal personalized invitation
  isGeneral?: boolean;
};

/* =========================================
   GALLERY PHOTOS
========================================= */

const galleryPhotos = [
  "/assets/gallery/1.jpeg",
  "/assets/gallery/2.jpeg",
  "/assets/gallery/3.jpeg",
  "/assets/gallery/4.jpeg",
  "/assets/gallery/5.jpeg",
  "/assets/gallery/6.jpeg",
  "/assets/gallery/7.jpeg",
  "/assets/gallery/8.jpeg",
  "/assets/gallery/9.jpeg",
  "/assets/gallery/10.jpeg",
  "/assets/gallery/11.jpeg",
  "/assets/gallery/12.jpeg",
  "/assets/gallery/13.jpeg",
  "/assets/gallery/14.jpeg",
  "/assets/gallery/15.jpeg",
];

/* =========================================
   INVITATION ENGINE
========================================= */

export default function InvitationEngine({
  wedding,
  guest,
  isGeneral = false,
}: InvitationEngineProps) {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "invitation"
  >("welcome");

  return (
    <InvitationMusicProvider>
      <div
        className="
          relative
          min-h-screen
          w-full
          overflow-x-hidden
          bg-[#F7F3EA]
        "
      >
        <AnimatePresence mode="wait">

          {/* =========================================
              WELCOME SCREEN
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
              className="
                m-0
                w-full
                p-0
              "
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
              className="
                m-0
                w-full
                bg-[#F7F3EA]
                p-0
              "
            >
              <div
                className="
                  m-0
                  w-full
                  bg-[#F7F3EA]
                  p-0
                "
              >

                {/* =================================
                    MUSIC
                ================================== */}

                <MusicScreen
                  groomName={wedding.groomName}
                  brideName={wedding.brideName}
                />

                {/* =================================
                    INVITATION CARD
                ================================== */}

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

                {/* =================================
                    COUNTDOWN
                ================================== */}

                <CountdownSection
                  weddingDate={
                    wedding.weddingDate || ""
                  }
                  venue={wedding.venue}
                />

                {/* =================================
                    GALLERY
                ================================== */}

                <GallerySection
                  groomName={wedding.groomName}
                  brideName={wedding.brideName}
                  photos={galleryPhotos}
                />

                {/* =================================
                    RSVP

                    Only personal invitations get
                    the RSVP form.
                ================================== */}

                {!isGeneral && (
                  <RSVPSection
                    guestName={guest.guestName}
                    familyCount={guest.familyCount}
                    token={guest.token}
                    attending={guest.attending}
                    hasResponded={guest.hasResponded}
                    respondedAt={guest.respondedAt}
                    message={guest.message}
                  />
                )}

                {/* =================================
                    GENERAL INVITATION ENDING
                ================================== */}

                {isGeneral && (
                  <section
                    className="
                      flex
                      min-h-[55svh]
                      w-full
                      items-center
                      justify-center
                      bg-[#F7F3EA]
                      px-8
                      py-16
                    "
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        max-w-[330px]
                        text-center
                      "
                    >
                      {/* Decorative top */}

                      <div
                        className="
                          mb-7
                          flex
                          items-center
                          justify-center
                          gap-3
                        "
                      >
                        <span className="h-px w-10 bg-[#B4872C]/45" />

                        <span className="h-2 w-2 rotate-45 border border-[#B4872C]/70" />

                        <span className="h-px w-10 bg-[#B4872C]/45" />
                      </div>

                      <p
                        className="
                          text-[11px]
                          uppercase
                          tracking-[0.32em]
                          text-[#A8751E]
                        "
                      >
                        Together with our families
                      </p>

                      <h2
                        className="
                          mt-5
                          font-serif
                          text-[30px]
                          leading-[1.25]
                          text-[#243B5E]
                        "
                      >
                        We warmly invite you
                      </h2>

                      <p
                        className="
                          mt-3
                          font-serif
                          text-[18px]
                          italic
                          leading-relaxed
                          text-[#7D6963]
                        "
                      >
                        to celebrate our special day
                        with us.
                      </p>

                      <div
                        className="
                          my-7
                          flex
                          items-center
                          justify-center
                          gap-3
                        "
                      >
                        <span className="h-px w-7 bg-[#B4872C]/35" />

                        <span className="text-[13px] text-[#C58F9A]">
                          ♡
                        </span>

                        <span className="h-px w-7 bg-[#B4872C]/35" />
                      </div>

                      <p
                        className="
                          font-serif
                          text-[16px]
                          leading-relaxed
                          text-[#8A746D]
                        "
                      >
                        We look forward to celebrating
                        this beautiful moment with you.
                      </p>

                      <p
                        className="
                          mt-7
                          font-serif
                          text-[17px]
                          font-semibold
                          tracking-[0.04em]
                          text-[#243B5E]
                        "
                      >
                        {wedding.groomName}
                        <span className="mx-2 text-[#B4872C]">
                          &
                        </span>
                        {wedding.brideName}
                      </p>
                    </motion.div>
                  </section>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </InvitationMusicProvider>
  );
}
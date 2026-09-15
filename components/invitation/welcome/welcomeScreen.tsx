// // "use client";

// // import { useState } from "react";
// // import { motion } from "motion/react";

// // import PhoneFrame from "@/components/common/PhoneFrame";
// // import Background from "./Background";
// // import Header from "./Header";
// // import EnvelopeSection from "./EnvelopeSection";
// // import Footer from "./Footer";

// // import { useInvitationMusic } from "../music/InvitationMusicProvider";

// // type WelcomeScreenProps = {
// //   groomName: string;
// //   brideName: string;
// //   weddingDate?: string;
// //   onComplete: () => void;
// // };

// // export default function WelcomeScreen({
// //   groomName,
// //   brideName,
// //   weddingDate,
// //   onComplete,
// // }: WelcomeScreenProps) {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const { play } = useInvitationMusic();

// //   const handleOpen = () => {
// //   if (isOpen) return;

// //   play();
// //   setIsOpen(true);

// //   setTimeout(() => {
// //     onComplete();
// //   }, 5000);
// // };

// //   return (
// //     <PhoneFrame>
// //       <main className="relative w-full h-full overflow-hidden">
// //         <Background />

// //         {/* HEADER */}
// //         <motion.div
// //           className="absolute top-[8svh] left-0 w-full z-20"
// //           animate={{
// //             opacity: isOpen ? 0 : 1,
// //             y: isOpen ? -20 : 0,
// //           }}
// //           transition={{
// //             duration: 0.5,
// //           }}
// //         >
// //           <Header
// //             groomName={groomName}
// //             brideName={brideName}
// //           />
// //         </motion.div>

// //         {/* ENVELOPE */}
// //         <div className="absolute inset-0 z-10 flex items-center justify-center">
// //           <EnvelopeSection
// //             isOpen={isOpen}
// //             onOpen={handleOpen}
// //             weddingDate={weddingDate}
// //           />
// //         </div>

// //         {/* FOOTER */}
// //         <motion.div
// //           className="absolute bottom-[7svh] left-0 w-full z-20"
// //           animate={{
// //             opacity: isOpen ? 0 : 1,
// //             y: isOpen ? 20 : 0,
// //           }}
// //           transition={{
// //             duration: 0.5,
// //           }}
// //         >
// //           <Footer />
// //         </motion.div>
// //       </main>
// //     </PhoneFrame>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion } from "motion/react";

// import PhoneFrame from "@/components/common/PhoneFrame";
// import Background from "./Background";
// import Header from "./Header";
// import EnvelopeSection from "./EnvelopeSection";
// import Footer from "./Footer";

// import { useInvitationMusic } from "../music/InvitationMusicProvider";

// type WelcomeScreenProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   onComplete: () => void;
// };

// export default function WelcomeScreen({
//   groomName,
//   brideName,
//   weddingDate,
//   onComplete,
// }: WelcomeScreenProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const { play } = useInvitationMusic();

//   const handleOpen = () => {
//     if (isOpen) return;

//     play();
//     setIsOpen(true);

//     setTimeout(() => {
//       onComplete();
//     }, 5000);
//   };

//   return (
//     <PhoneFrame>
//       <main className="relative min-h-svh w-full overflow-hidden">
//         {/* BACKGROUND */}
//         <Background />

//         {/* =========================================
//             HEADER

//             Lower than before and connected visually
//             with the envelope.
//         ========================================== */}

//         <motion.div
//           className="
//             absolute
//             left-0
//             top-[15svh]
//             z-20
//             w-full

//             max-h-[700px]:top-[11svh]
//             min-h-[850px]:top-[17svh]
//           "
//           animate={{
//             opacity: isOpen ? 0 : 1,
//             y: isOpen ? -20 : 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//         >
//           <Header
//             groomName={groomName}
//             brideName={brideName}
//           />
//         </motion.div>

//         {/* =========================================
//             ENVELOPE
//         ========================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             z-10
//             flex
//             items-center
//             justify-center

//             translate-y-[2svh]

//             max-h-[700px]:translate-y-[3svh]
//             min-h-[850px]:translate-y-[2svh]
//           "
//         >
//           <EnvelopeSection
//             isOpen={isOpen}
//             onOpen={handleOpen}
//             weddingDate={weddingDate}
//           />
//         </div>

//         {/* =========================================
//             TAP TO OPEN

//             No longer stuck near bottom of screen.
//             It sits underneath the envelope.
//         ========================================== */}

//         <motion.div
//           className="
//             absolute
//             left-0
//             top-[76svh]
//             z-20
//             w-full

//             max-h-[700px]:top-[79svh]
//             min-h-[850px]:top-[73svh]
//           "
//           animate={{
//             opacity: isOpen ? 0 : 1,
//             y: isOpen ? 15 : 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//         >
//           <Footer />
//         </motion.div>
//       </main>
//     </PhoneFrame>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "motion/react";

// import PhoneFrame from "@/components/common/PhoneFrame";
// import Background from "./Background";
// import Header from "./Header";
// import EnvelopeSection from "./EnvelopeSection";
// import Footer from "./Footer";

// import { useInvitationMusic } from "../music/InvitationMusicProvider";

// type WelcomeScreenProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   onComplete: () => void;
// };

// export default function WelcomeScreen({
//   groomName,
//   brideName,
//   weddingDate,
//   onComplete,
// }: WelcomeScreenProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const { play } = useInvitationMusic();

//   const handleOpen = () => {
//     if (isOpen) return;

//     play();
//     setIsOpen(true);

//     setTimeout(() => {
//       onComplete();
//     }, 5000);
//   };

//   return (
//     <PhoneFrame>
//       <main className="relative min-h-svh w-full overflow-hidden">
//         {/* BACKGROUND */}
//         <Background />

//         {/* =========================================
//             HEADER
//             Slightly lower
//         ========================================== */}
//         <motion.div
//           className="
//             absolute
//             left-0
//             top-[18svh]
//             z-20
//             w-full

//             max-h-[700px]:top-[15svh]
//             min-h-[850px]:top-[19svh]
//           "
//           animate={{
//             opacity: isOpen ? 0 : 1,
//             y: isOpen ? -20 : 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//         >
//           <Header
//             groomName={groomName}
//             brideName={brideName}
//           />
//         </motion.div>

//         {/* =========================================
//             ENVELOPE
//             Move whole envelope slightly lower
//         ========================================== */}
//         <div
//           className="
//             absolute
//             inset-0
//             z-10
//             flex
//             items-center
//             justify-center

//             translate-y-[5svh]

//             max-h-[700px]:translate-y-[6svh]
//             min-h-[850px]:translate-y-[4svh]
//           "
//         >
//           <EnvelopeSection
//             isOpen={isOpen}
//             onOpen={handleOpen}
//             weddingDate={weddingDate}
//           />
//         </div>

//         {/* =========================================
//             TAP TO OPEN
//             Follows envelope downward
//         ========================================== */}
//         <motion.div
//           className="
//             absolute
//             left-0
//             top-[calc(50%+245px)]
//             z-20
//             w-full

//             max-[380px]:top-[calc(50%+225px)]

//             max-h-[700px]:top-[calc(50%+215px)]
//             min-h-[850px]:top-[calc(50%+255px)]
//           "
//           animate={{
//             opacity: isOpen ? 0 : 1,
//             y: isOpen ? 15 : 0,
//           }}
//           transition={{
//             duration: 0.5,
//           }}
//         >
//           <Footer />
//         </motion.div>
//       </main>
//     </PhoneFrame>
//   );
// }

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
      <main
        className="
          relative
          min-h-svh
          w-full
          overflow-hidden
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <Background />

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          className="
            absolute
            left-0
            top-[17svh]
            z-20
            w-full

            max-h-[700px]:top-[14svh]
            min-h-[850px]:top-[18svh]
          "
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

        {/* =====================================================
            ENVELOPE

            Scale the complete envelope system together.
            This keeps flap/body/cards/decorations aligned.
        ===================================================== */}

        {/* =========================================
    ENVELOPE
========================================== */}

<div
  className="
    absolute
    left-1/2
    top-[52%]
    z-10

    h-[400px]
    w-[376px]

    origin-center

    -translate-x-1/2
    -translate-y-1/2

    scale-[0.88]

    max-[380px]:scale-[0.86]

    max-h-[700px]:
      top-[51%]
      scale-[0.80]

    min-h-[850px]:
      top-[53%]
      scale-[0.96]
  "
>
  <EnvelopeSection
    isOpen={isOpen}
    onOpen={handleOpen}
    weddingDate={weddingDate}
  />
</div>

        {/* =====================================================
            TAP TO OPEN
        ===================================================== */}

        <motion.div
          className="
            absolute
            left-0
            top-[76%]
            z-20
            w-full

            max-h-[700px]:top-[75%]
            min-h-[850px]:top-[77%]
          "
          animate={{
            opacity: isOpen ? 0 : 1,
            y: isOpen ? 15 : 0,
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
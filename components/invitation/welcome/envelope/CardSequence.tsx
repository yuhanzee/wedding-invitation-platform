"use client";

import { motion } from "motion/react";

import LeftPhotoCard from "./LeftPhotoCard";
import RightPhotoCard from "./RightPhotoCard";
import SaveTheDateCard from "./SaveTheDateCard";
import DateDetailsCard from "./DateDetailsCard";

type CardSequenceProps = {
  isOpen: boolean;
  weddingDate?: string;
};

export default function CardSequence({
  isOpen,
  weddingDate = "MONDAY\nJULY 07, 2026",
}: CardSequenceProps) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* LEFT PHOTO */}
      <motion.div
        className="absolute left-1/2 top-[210px]"
        initial={false}
        animate={
          isOpen
            ? {
                x: -105,
                y: -155,
                rotate: -20,
                scale: 0.8,
                opacity: 1,
              }
            : {
                x: -55,
                y: 0,
                rotate: 0,
                scale: 0.6,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.3,
          delay: isOpen ? 1 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <LeftPhotoCard />
      </motion.div>

      {/* RIGHT PHOTO */}
      <motion.div
        className="absolute left-1/2 top-[210px]"
        initial={false}
        animate={
          isOpen
            ? {
                x: -7,
                y: -165,
                rotate: 10,
                scale: 0.8,
                opacity: 1,
              }
            : {
                x: -55,
                y: 0,
                rotate: 0,
                scale: 0.6,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.35,
          delay: isOpen ? 1.15 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <RightPhotoCard />
      </motion.div>

      {/* SAVE THE DATE */}
      <motion.div
        className="absolute left-1/2 top-[210px]"
        initial={false}
        animate={
          isOpen
            ? {
                x: -5,
                y: -99,
                rotate: 3,
                scale: 0.82,
                opacity: 1,
              }
            : {
                x: -50,
                y: 0,
                scale: 0.5,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.2,
          delay: isOpen ? 1.35 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <SaveTheDateCard />
      </motion.div>

      {/* DATE DETAILS */}
      <motion.div
        className="absolute left-1/2 top-[210px]"
        initial={false}
        animate={
          isOpen
            ? {
                x: -99,
                y: -79,
                rotate: -3,
                scale: 0.99,
                opacity: 1,
              }
            : {
                x: -50,
                y: 0,
                scale: 0.5,
                opacity: 0,
              }
        }
        transition={{
          duration: 1.2,
          delay: isOpen ? 1.55 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <DateDetailsCard dateText={weddingDate} />
      </motion.div>
    </div>
  );
}

// "use client";

// import { motion } from "motion/react";

// import LeftPhotoCard from "./LeftPhotoCard";
// import RightPhotoCard from "./RightPhotoCard";
// import SaveTheDateCard from "./SaveTheDateCard";
// import DateDetailsCard from "./DateDetailsCard";

// type CardSequenceProps = {
//   isOpen: boolean;
//   weddingDate?: string;
// };

// export default function CardSequence({
//   isOpen,
//   weddingDate = "MONDAY\nJULY 07, 2026",
// }: CardSequenceProps) {
//   return (
//     <div className="absolute inset-0 pointer-events-none select-none">

//       {/* LEFT PHOTO */}
//       <motion.div
//         className="absolute left-1/2 top-[210px]"
//         initial={false}
//         animate={
//           isOpen
//             ? {
//                 x: -10,
//                 y: -220,
//                 rotate: -14,
//                 scale: 0.85,
//                 opacity: 1,
//               }
//             : {
//                 x: -55,
//                 y: 0,
//                 rotate: 0,
//                 scale: 0.6,
//                 opacity: 0,
//               }
//         }
//         transition={{
//           duration: 1.3,
//           delay: isOpen ? 1 : 0,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         <LeftPhotoCard />
//       </motion.div>

//       {/* RIGHT PHOTO */}
//       <motion.div
//         className="absolute left-1/2 top-[210px]"
//         initial={false}
//         animate={
//           isOpen
//             ? {
//                 x: -10,
//                 y: -215,
//                 rotate: 13,
//                 scale: 0.85,
//                 opacity: 1,
//               }
//             : {
//                 x: -55,
//                 y: 0,
//                 rotate: 0,
//                 scale: 0.6,
//                 opacity: 0,
//               }
//         }
//         transition={{
//           duration: 1.35,
//           delay: isOpen ? 1.15 : 0,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         <RightPhotoCard />
//       </motion.div>

//       {/* SAVE THE DATE */}
//       <motion.div
//         className="absolute left-1/2 top-[210px]"
//         initial={false}
//         animate={
//           isOpen
//             ? {
//                 x: -20,
//                 y: -150,
//                 rotate: 5,
//                 scale: 0.80,
//                 opacity: 1,
//               }
//             : {
//                 x: -50,
//                 y: 0,
//                 rotate: 0,
//                 scale: 0.5,
//                 opacity: 0,
//               }
//         }
//         transition={{
//           duration: 1.2,
//           delay: isOpen ? 1.35 : 0,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         <SaveTheDateCard />
//       </motion.div>

//       {/* DATE DETAILS */}
//       <motion.div
//         className="absolute left-1/2 top-[210px]"
//         initial={false}
//         animate={
//           isOpen
//             ? {
//                 x: -100,
//                 y: -130,
//                 rotate: -5,
//                 scale: 0.98,
//                 opacity: 1,
//               }
//             : {
//                 x: -50,
//                 y: 0,
//                 rotate: 0,
//                 scale: 0.5,
//                 opacity: 0,
//               }
//         }
//         transition={{
//           duration: 1.2,
//           delay: isOpen ? 1.55 : 0,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         <DateDetailsCard dateText={weddingDate} />
//       </motion.div>

//     </div>
//   );
// }
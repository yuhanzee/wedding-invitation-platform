// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";

// import PhoneFrame from "@/components/common/PhoneFrame";

// import InvitationBackground from "./InvitationBackground";
// import InvitationCard from "./InvitationCard";
// import FlyingButterflies from "./FlyingButterflies";

// type InvitationSectionProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   venue?: string;
// };

// export default function InvitationSection({
//   groomName,
//   brideName,
//   weddingDate,
//   weddingTime,
//   venue,
// }: InvitationSectionProps) {
//   return (
//     <PhoneFrame>
//       <section className="relative h-full w-full overflow-hidden">
//         <InvitationBackground />

//         <div className="absolute inset-0 z-10 flex items-center justify-center">
//           <InvitationCard
//             groomName={groomName}
//             brideName={brideName}
//             weddingDate={weddingDate}
//             weddingTime={weddingTime}
//             venue={venue}
//           />
//         </div>

//         {/* Left flower arrangement above the card */}
//         <motion.div
//           className="absolute left-0 bottom-0 z-30 pointer-events-none"
//           animate={{
//             y: [0, -2, 0],
//             rotate: [0, -0.4, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/left-flowers.svg"
//             alt=""
//             width={180}
//             height={650}
//             priority
//             className="select-none"
//           />
//         </motion.div>

//         {/* Top flower arrangement above the card */}
//         <motion.div
//           className="absolute right-[-15px] top-[-20px] z-30 pointer-events-none"
//           animate={{
//             y: [0, 2, 0],
//             rotate: [0, 0.4, 0],
//           }}
//           transition={{
//             duration: 9,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/top-flowers.svg"
//             alt=""
//             width={220}
//             height={120}
//             priority
//             className="select-none"
//           />
//         </motion.div>

//         <FlyingButterflies />
//       </section>
//     </PhoneFrame>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";

import InvitationBackground from "./InvitationBackground";
import InvitationCard from "./InvitationCard";
import FlyingButterflies from "./FlyingButterflies";

type InvitationSectionProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
  weddingTime?: string;
  poruwaCeremonyTime?: string;
  venue?: string;
};
export default function InvitationSection({
  groomName,
  brideName,
  weddingDate,
  weddingTime,
  poruwaCeremonyTime,
  venue,
}: InvitationSectionProps) {

  return (
    <PhoneFrame>
      <section className="relative h-full w-full overflow-visible">

        {/* BACKGROUND */}
        <InvitationBackground />

        {/* INVITATION CARD */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <InvitationCard
  groomName={groomName}
  brideName={brideName}
  weddingDate={weddingDate}
  weddingTime={weddingTime}
  poruwaCeremonyTime={poruwaCeremonyTime}
  venue={venue}
/>
        </div>

        {/* LEFT FLOWERS */}
        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-[-22px]
            z-30
          "
          animate={{
            y: [0, -2, 0],
            rotate: [0, -0.4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/left-flowers.svg"
            alt=""
            width={180}
            height={1050}
            priority
            className="select-none"
          />
        </motion.div>

        {/* TOP FLOWERS */}
        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-15px]
            top-[-20px]
            z-30
          "
          animate={{
            y: [0, 2, 0],
            rotate: [0, 0.4, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            priority
            className="select-none"
          />
        </motion.div>

        {/* BUTTERFLIES */}
        <FlyingButterflies />

<div
  className="
    pointer-events-none
    absolute
    bottom-0
    left-0
    z-20
    h-[480px]
    w-full
  "
>
  {/* LEFT CHAIN */}
  <div
    className="
      absolute
      bottom-[-80px]
      left-[29%]
      z-20
      h-[180px]
      w-[45px]
      -translate-x-1/2
      overflow-hidden
    "
  >
    <Image
      src="/assets/countdown/chain.png"
      alt=""
      fill
      className="object-cover"
    />
  </div>

  {/* RIGHT CHAIN */}
  <div
    className="
      absolute
      bottom-[-80px]
      z-20
      left-[71%]
      h-[180px]
      w-[45px]
      -translate-x-1/2
      overflow-hidden
    "
  >
    <Image
      src="/assets/countdown/chain.png"
      alt=""
      fill
      className="object-cover"
    />
  </div>
</div>

      </section>
    </PhoneFrame>
  );
}
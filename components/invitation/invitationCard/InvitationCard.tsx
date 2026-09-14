// import Image from "next/image";
// import InvitationContent from "./InvitationContent";
// import InvitationTag from "./InvitationTag";

// type InvitationCardProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   venue?: string;
// };

// export default function InvitationCard({
//   groomName,
//   brideName,
//   weddingDate,
//   weddingTime,
//   venue,
// }: InvitationCardProps) {
//   return (
//     <div className="relative w-[380px] h-[430px] z-20">
//       <Image
//         src="/assets/invitation/card.svg"
//         alt=""
//         fill
//         className="object-contain"
//         priority
//       />

//       <InvitationContent
//         groomName={groomName}
//         brideName={brideName}
//         weddingDate={weddingDate}
//         weddingTime={weddingTime}
//         venue={venue}
//       />

//       <InvitationTag
//         groomName={groomName}
//         brideName={brideName}
//       />
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";

import InvitationContent from "./InvitationContent";
import InvitationTag from "./InvitationTag";

type InvitationCardProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
  weddingTime?: string;
  poruwaCeremonyTime?: string;
  venue?: string;
};

export default function InvitationCard({
  groomName,
  brideName,
  weddingDate,
  weddingTime,
  poruwaCeremonyTime,
  venue,
}: InvitationCardProps) {
  return (
    <motion.div
      className="relative z-20"
      style={{
        width: "min(380px, 92vw)",
        height: "min(430px, 94svh)",
      }}
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Image
        src="/assets/invitation/card.svg"
        alt="Wedding invitation card"
        fill
        priority
        className="pointer-events-none select-none object-contain"
      />

      <InvitationContent
  groomName={groomName}
  brideName={brideName}
  weddingDate={weddingDate}
  weddingTime={weddingTime}
  poruwaCeremonyTime={poruwaCeremonyTime}
  venue={venue}
/>

      <InvitationTag
        groomName={groomName}
        brideName={brideName}
      />
    </motion.div>
  );
}
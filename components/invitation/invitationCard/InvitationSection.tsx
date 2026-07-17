// // "use client";

// // import Image from "next/image";
// // import PhoneFrame from "@/components/common/PhoneFrame";

// // import InvitationBackground from "./InvitationBackground";
// // import InvitationCard from "./InvitationCard";

// // type InvitationSectionProps = {
// //   groomName: string;
// //   brideName: string;
// //   weddingDate?: string;
// //   weddingTime?: string;
// //   venue?: string;
// // };

// // export default function InvitationSection({
// //   groomName,
// //   brideName,
// //   weddingDate,
// //   weddingTime,
// //   venue,
// // }: InvitationSectionProps) {
// //   return (
// //     <PhoneFrame>
// //       <section className="relative h-full w-full overflow-hidden">
// //         <InvitationBackground />

// //         <Image
// //           src="/assets/invitation/left-flowers.svg"
// //           alt=""
// //           width={140}
// //           height={650}
// //           className="absolute left-[0px] bottom-0 z-25 pointer-events-none select-none"
// //           priority
// //         />

// //         <Image
// //           src="/assets/invitation/top-flowers.svg"
// //           alt=""
// //           width={220}
// //           height={120}
// //           className="absolute right-[-15px] top-[-39px] z-25 pointer-events-none select-none"
// //           priority
// //         />

// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <InvitationCard
// //             groomName={groomName}
// //             brideName={brideName}
// //             weddingDate={weddingDate}
// //             weddingTime={weddingTime}
// //             venue={venue}
// //           />
// //         </div>
// //       </section>
// //     </PhoneFrame>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";

// import PhoneFrame from "@/components/common/PhoneFrame";

// import InvitationBackground from "./InvitationBackground";
// import InvitationCard from "./InvitationCard";
// // import FlyingButterflies from "./FlyingButterflies";

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

//         {/* <FlyingButterflies /> */}

//         <motion.div
//           className="absolute left-0 bottom-0 z-30 pointer-events-none"
//           animate={{
//             y: [0, -5, 0],
//             rotate: [0, -1, 0],
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
//             width={140}
//             height={650}
//             priority
//             className="select-none"
//           />
//         </motion.div>

//         <motion.div
//           className="absolute right-[-15px] top-[-39px] z-30 pointer-events-none"
//           animate={{
//             y: [0, 4, 0],
//             rotate: [0, 1, 0],
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

//         <div className="absolute inset-0 flex items-center justify-center">
//           <InvitationCard
//             groomName={groomName}
//             brideName={brideName}
//             weddingDate={weddingDate}
//             weddingTime={weddingTime}
//             venue={venue}
//           />
//         </div>

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
  venue?: string;
};

export default function InvitationSection({
  groomName,
  brideName,
  weddingDate,
  weddingTime,
  venue,
}: InvitationSectionProps) {
  return (
    <PhoneFrame>
      <section className="relative h-full w-full overflow-hidden">
        <InvitationBackground />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <InvitationCard
            groomName={groomName}
            brideName={brideName}
            weddingDate={weddingDate}
            weddingTime={weddingTime}
            venue={venue}
          />
        </div>

        {/* Left flower arrangement above the card */}
        <motion.div
          className="absolute left-0 bottom-0 z-30 pointer-events-none"
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
            width={140}
            height={650}
            priority
            className="select-none"
          />
        </motion.div>

        {/* Top flower arrangement above the card */}
        <motion.div
          className="absolute right-[-15px] top-[-39px] z-30 pointer-events-none"
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

        <FlyingButterflies />
      </section>
    </PhoneFrame>
  );
}

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
//   poruwaCeremonyTime?: string;
//   venue?: string;
// };

// export default function InvitationSection({
//   groomName,
//   brideName,
//   weddingDate,
//   weddingTime,
//   poruwaCeremonyTime,
//   venue,
// }: InvitationSectionProps) {
//   return (
//     <PhoneFrame>
//       <section
//         className="
//           relative
//           min-h-svh
//           w-full
//           overflow-hidden
//           bg-[#F4EAE5]
//         "
//       >
//         {/* BACKGROUND DETAILS */}
//         <InvitationBackground />

//         {/* ==================================================
//             TOP RIGHT ORCHIDS
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             right-[-5%]
//             top-[-1%]
//             z-20
//             w-[clamp(155px,47%,310px)]
//           "
//           animate={{
//             y: [0, 3, 0],
//             rotate: [0, 0.5, 0],
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
//             className="h-auto w-full select-none object-contain"
//           />
//         </motion.div>

//         {/* ==================================================
//             LEFT MIDDLE ORCHID

//             Smaller + faded so it feels like part
//             of the background rather than another focal point.
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             left-[-18%]
//             top-[22%]
//             z-[2]
//             w-[clamp(110px,31%,220px)]
//             opacity-35
//           "
//           animate={{
//             y: [0, -4, 0],
//             rotate: [-7, -5, -7],
//           }}
//           transition={{
//             duration: 11,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/top-flowers.svg"
//             alt=""
//             width={220}
//             height={120}
//             className="h-auto w-full select-none object-contain"
//           />
//         </motion.div>

//         {/* ==================================================
//             RIGHT MIDDLE ORCHID
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             right-[-20%]
//             top-[43%]
//             z-[2]
//             w-[clamp(120px,34%,230px)]
//             opacity-30
//           "
//           animate={{
//             y: [0, 4, 0],
//             rotate: [165, 168, 165],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/top-flowers.svg"
//             alt=""
//             width={220}
//             height={120}
//             className="h-auto w-full select-none object-contain"
//           />
//         </motion.div>

//         {/* ==================================================
//             INVITATION CARD
//         ================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             z-10
//             flex
//             items-center
//             justify-center
//             px-[clamp(6px,2vw,20px)]
// py-[clamp(24px,4svh,50px)]
//           "
//         >
//           <InvitationCard
//             groomName={groomName}
//             brideName={brideName}
//             weddingDate={weddingDate}
//             weddingTime={weddingTime}
//             poruwaCeremonyTime={poruwaCeremonyTime}
//             venue={venue}
//           />
//         </div>

//         {/* ==================================================
//             LARGE BOTTOM LEFT ORCHIDS
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[-2%]
//             left-[-5%]
//             z-30
//             w-[clamp(135px,40%,285px)]
//           "
//           animate={{
//             y: [0, -3, 0],
//             rotate: [0, -0.5, 0],
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
//             height={1050}
//             priority
//             className="h-auto w-full select-none object-contain"
//           />
//         </motion.div>

//         {/* ==================================================
//             SMALL BOTTOM RIGHT ORCHID

//             Helps lead the eye into the countdown.
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[5%]
//             right-[-12%]
//             z-[5]
//             w-[clamp(105px,29%,190px)]
//             opacity-55
//           "
//           animate={{
//             y: [0, -4, 0],
//             rotate: [175, 178, 175],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/top-flowers.svg"
//             alt=""
//             width={220}
//             height={120}
//             className="h-auto w-full select-none object-contain"
//           />
//         </motion.div>

//         {/* ==================================================
//             VERY FAINT ORCHID BEHIND CARD
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             left-[-8%]
//             top-[57%]
//             z-[1]
//             w-[clamp(120px,35%,240px)]
//             opacity-[0.12]
//           "
//           animate={{
//             y: [0, 5, 0],
//             rotate: [-15, -12, -15],
//           }}
//           transition={{
//             duration: 13,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/top-flowers.svg"
//             alt=""
//             width={220}
//             height={120}
//             className="h-auto w-full select-none object-contain"
//           />
//         </motion.div>

//         {/* BUTTERFLIES */}
//         <FlyingButterflies />

//         {/* ==================================================
//             BOTTOM FADE

//             Same color as CountdownSection.
//         ================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             left-0
//             z-[3]
//             h-[12%]
//             w-full
//             bg-gradient-to-b
//             from-transparent
//             to-[#F4EAE5]
//           "
//         />
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
      <section
        className="
          relative
          min-h-svh
          w-full
          overflow-hidden
          bg-[#F4EAE5]
        "
      >
        {/* BACKGROUND */}
        <InvitationBackground />

        {/* ==================================================
            TOP RIGHT ORCHIDS
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-5%]
            top-[-1%]
            z-20

            w-[clamp(155px,47%,310px)]
          "
          animate={{
            y: [0, 3, 0],
            rotate: [0, 0.5, 0],
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
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* ==================================================
            LEFT MIDDLE ORCHID
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-18%]
            top-[22%]
            z-[2]

            w-[clamp(110px,31%,220px)]

            opacity-35
          "
          animate={{
            y: [0, -4, 0],
            rotate: [-7, -5, -7],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* ==================================================
            RIGHT MIDDLE ORCHID
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-20%]
            top-[43%]
            z-[2]

            w-[clamp(120px,34%,230px)]

            opacity-30
          "
          animate={{
            y: [0, 4, 0],
            rotate: [165, 168, 165],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* ==================================================
            LARGE RESPONSIVE INVITATION CARD
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10

            flex
            items-center
            justify-center

            px-0
            py-[clamp(12px,2svh,38px)]
          "
        >
          <InvitationCard
            groomName={groomName}
            brideName={brideName}
            weddingDate={weddingDate}
            weddingTime={weddingTime}
            poruwaCeremonyTime={poruwaCeremonyTime}
            venue={venue}
          />
        </div>

        {/* ==================================================
            LARGE BOTTOM LEFT ORCHIDS
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute

            bottom-[-2%]
            left-[-5%]

            z-30

            w-[clamp(135px,40%,285px)]
          "
          animate={{
            y: [0, -3, 0],
            rotate: [0, -0.5, 0],
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
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* ==================================================
            SMALL BOTTOM RIGHT ORCHID
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute

            bottom-[5%]
            right-[-12%]

            z-[5]

            w-[clamp(105px,29%,190px)]

            opacity-55
          "
          animate={{
            y: [0, -4, 0],
            rotate: [175, 178, 175],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* ==================================================
            FAINT ORCHID BEHIND CARD
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute

            left-[-8%]
            top-[57%]

            z-[1]

            w-[clamp(120px,35%,240px)]

            opacity-[0.12]
          "
          animate={{
            y: [0, 5, 0],
            rotate: [-15, -12, -15],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* BUTTERFLIES */}

        <FlyingButterflies />

        {/* ==================================================
            BOTTOM FADE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute

            bottom-0
            left-0

            z-[3]

            h-[12%]
            w-full

            bg-gradient-to-b
            from-transparent
            to-[#F4EAE5]
          "
        />
      </section>
    </PhoneFrame>
  );
}
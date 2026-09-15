
// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "motion/react";

// // // import InvitationContent from "./InvitationContent";
// // // import InvitationTag from "./InvitationTag";

// // // type InvitationCardProps = {
// // //   groomName: string;
// // //   brideName: string;
// // //   weddingDate?: string;
// // //   weddingTime?: string;
// // //   poruwaCeremonyTime?: string;
// // //   venue?: string;
// // // };

// // // export default function InvitationCard({
// // //   groomName,
// // //   brideName,
// // //   weddingDate,
// // //   weddingTime,
// // //   poruwaCeremonyTime,
// // //   venue,
// // // }: InvitationCardProps) {
// // //   return (
// // //     <motion.div
// // //       className="
// // //         relative
// // //         z-20

// // //         w-[clamp(270px,76%,500px)]
// // //         max-h-[72svh]

// // //         aspect-[380/430]
// // //       "
// // //       initial={{
// // //         opacity: 0,
// // //         scale: 0.94,
// // //         y: 24,
// // //       }}
// // //       whileInView={{
// // //         opacity: 1,
// // //         scale: 1,
// // //         y: 0,
// // //       }}
// // //       viewport={{
// // //         once: true,
// // //         amount: 0.25,
// // //       }}
// // //       transition={{
// // //         duration: 1,
// // //         ease: [0.22,1,0.36,1],
// // //       }}
// // //     >
// // //       <Image
// // //         src="/assets/invitation/card.svg"
// // //         alt="Wedding invitation card"
// // //         fill
// // //         priority
// // //         sizes="(max-width: 600px) 76vw, 500px"
// // //         className="
// // //           pointer-events-none
// // //           select-none
// // //           object-contain
// // //         "
// // //       />

// // //       <InvitationContent
// // //         groomName={groomName}
// // //         brideName={brideName}
// // //         weddingDate={weddingDate}
// // //         weddingTime={weddingTime}
// // //         poruwaCeremonyTime={poruwaCeremonyTime}
// // //         venue={venue}
// // //       />

// // //       <InvitationTag
// // //         groomName={groomName}
// // //         brideName={brideName}
// // //       />
// // //     </motion.div>
// // //   );
// // // }

// // "use client";

// // import Image from "next/image";
// // import { motion } from "motion/react";

// // import InvitationContent from "./InvitationContent";
// // import InvitationTag from "./InvitationTag";

// // type InvitationCardProps = {
// //   groomName: string;
// //   brideName: string;
// //   weddingDate?: string;
// //   weddingTime?: string;
// //   poruwaCeremonyTime?: string;
// //   venue?: string;
// // };

// // export default function InvitationCard({
// //   groomName,
// //   brideName,
// //   weddingDate,
// //   weddingTime,
// //   poruwaCeremonyTime,
// //   venue,
// // }: InvitationCardProps) {
// //   return (
// //     <motion.div
// //       className="
// //         relative
// //         z-20

// //         aspect-[380/430]

// //         w-[min(91vw,430px)]

// //         max-h-[76svh]
// //         max-w-[430px]

// //         max-[380px]:w-[92vw]
// //         max-h-[700px]:w-[82vw]
// //         max-h-[620px]:w-[74vw]

// //         sm:w-[min(86vw,440px)]
// //         md:w-[min(72vw,460px)]
// //         lg:w-[min(62vw,480px)]
// //       "
// //       initial={{
// //         opacity: 0,
// //         scale: 0.94,
// //         y: 24,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         scale: 1,
// //         y: 0,
// //       }}
// //       viewport={{
// //         once: true,
// //         amount: 0.25,
// //       }}
// //       transition={{
// //         duration: 1,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //     >
// //       <Image
// //         src="/assets/invitation/card.svg"
// //         alt="Wedding invitation card"
// //         fill
// //         priority
// //         sizes="
// //           (max-width: 380px) 92vw,
// //           (max-width: 640px) 91vw,
// //           480px
// //         "
// //         className="
// //           pointer-events-none
// //           select-none
// //           object-contain
// //         "
// //       />

// //       <InvitationContent
// //         groomName={groomName}
// //         brideName={brideName}
// //         weddingDate={weddingDate}
// //         weddingTime={weddingTime}
// //         poruwaCeremonyTime={poruwaCeremonyTime}
// //         venue={venue}
// //       />

// //       <InvitationTag
// //         groomName={groomName}
// //         brideName={brideName}
// //       />
// //     </motion.div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";

// import InvitationContent from "./InvitationContent";
// import InvitationTag from "./InvitationTag";

// type InvitationCardProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   poruwaCeremonyTime?: string;
//   venue?: string;
// };

// export default function InvitationCard({
//   groomName,
//   brideName,
//   weddingDate,
//   weddingTime,
//   poruwaCeremonyTime,
//   venue,
// }: InvitationCardProps) {
//   return (
//     <motion.div
//       className="
//         relative
//         z-20

//         aspect-[380/430]

//         w-[min(96vw,455px)]
//         max-w-[455px]

//         max-[380px]:w-[95vw]

//         max-h-[700px]:w-[86vw]
//         max-h-[640px]:w-[79vw]
//         max-h-[580px]:w-[72vw]

//         sm:w-[min(92vw,465px)]
//         md:w-[min(82vw,480px)]
//         lg:w-[min(72vw,500px)]
//         xl:w-[min(65vw,510px)]
//       "
//       initial={{
//         opacity: 0,
//         scale: 0.94,
//         y: 24,
//       }}
//       whileInView={{
//         opacity: 1,
//         scale: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.25,
//       }}
//       transition={{
//         duration: 1,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       <Image
//         src="/assets/invitation/card.svg"
//         alt="Wedding invitation card"
//         fill
//         priority
//         sizes="
//           (max-width: 380px) 95vw,
//           (max-width: 640px) 96vw,
//           (max-width: 1024px) 480px,
//           510px
//         "
//         className="
//           pointer-events-none
//           select-none
//           object-contain
//         "
//       />

//       <InvitationContent
//         groomName={groomName}
//         brideName={brideName}
//         weddingDate={weddingDate}
//         weddingTime={weddingTime}
//         poruwaCeremonyTime={poruwaCeremonyTime}
//         venue={venue}
//       />

//       <InvitationTag
//         groomName={groomName}
//         brideName={brideName}
//       />
//     </motion.div>
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
      className="
        relative
        z-20

        aspect-[380/430]

        w-[97vw]
        max-w-[470px]

        max-[380px]:w-[97vw]

        max-h-[700px]:w-[91vw]
        max-h-[640px]:w-[84vw]
        max-h-[580px]:w-[76vw]

        sm:w-[min(94vw,480px)]
        md:w-[min(84vw,500px)]
        lg:w-[min(74vw,520px)]
      "
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
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
        sizes="
          (max-width: 380px) 97vw,
          (max-width: 640px) 97vw,
          (max-width: 1024px) 500px,
          520px
        "
        className="
          pointer-events-none
          select-none
          object-contain
        "
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
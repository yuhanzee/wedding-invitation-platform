

// // "use client";

// // import Image from "next/image";
// // import { motion } from "motion/react";
// // import { cormorantGaramond } from "@/lib/fonts";

// // type InvitationTagProps = {
// //   groomName: string;
// //   brideName: string;
// // };

// // export default function InvitationTag({
// //   groomName,
// //   brideName,
// // }: InvitationTagProps) {
// //   return (
// //     <motion.div
// //       className="absolute right-[30px] bottom-[-105px] w-[160px] h-[223px] z-20"
// //       initial={{
// //         opacity: 0,
// //         scale: 0.85,
// //         rotate: -10,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         scale: 1,
// //         rotate: 0,
// //       }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: 1.7,
// //         duration: 0.8,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //       animate={{
// //         rotate: [0, 2, -2, 1, -1, 0],
// //       }}
// //     >
// //       <Image
// //         src="/assets/invitation/tag.svg"
// //         alt="Save the Date"
// //         fill
// //         priority
// //         className="pointer-events-none select-none object-contain"
// //       />

// //       <div className="absolute inset-0 flex flex-col items-center pt-[32px] px-2 text-center text-[#2A4858]">

// //         <div className="mt-10 flex h-[84px] w-full flex-col items-center justify-center">

// //           <span
// //             className={`${cormorantGaramond.className} max-w-[80px] truncate text-[7px] font-bold uppercase tracking-[0.10em] leading-tight`}
// //           >
// //             {groomName}
// //           </span>

// //           <span
// //             className={`${cormorantGaramond.className} my-0.5 text-[7px] italic font-semibold opacity-90`}
// //           >
// //             &
// //           </span>

// //           <span
// //             className={`${cormorantGaramond.className} max-w-[80px] truncate text-[7px] font-bold uppercase tracking-[0.10em] leading-tight`}
// //           >
// //             {brideName}
// //           </span>

// //         </div>

// //       </div>
// //     </motion.div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import { cormorantGaramond } from "@/lib/fonts";

// type InvitationTagProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function InvitationTag({
//   groomName,
//   brideName,
// }: InvitationTagProps) {
//   return (
//     <motion.div
//       className="
//         absolute
//         bottom-[-23%]
//         right-[7%]
//         z-30
//         w-[42%]
//         aspect-[160/223]
//       "
//       initial={{
//         opacity: 0,
//         scale: 0.85,
//         rotate: -10,
//       }}
//       whileInView={{
//         opacity: 1,
//         scale: 1,
//         rotate: 0,
//       }}
//       viewport={{
//         once: true,
//       }}
//       transition={{
//         delay: 1.7,
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       animate={{
//         rotate: [0, 1.2, -1.2, 0],
//       }}
//     >
//       {/* TAG SVG */}

//       <Image
//         src="/assets/invitation/tag.svg"
//         alt="Save the Date"
//         fill
//         priority
//         sizes="(max-width: 430px) 42vw, 160px"
//         className="
//           pointer-events-none
//           select-none
//           object-contain
//         "
//       />

//       {/* NAMES */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           flex
//           flex-col
//           items-center
//           px-[8%]
//           pt-[31%]
//           text-center
//           text-[#2A4858]
//         "
//       >
//         <div
//           className="
//             mt-[24%]
//             flex
//             h-[38%]
//             w-full
//             flex-col
//             items-center
//             justify-center
//           "
//         >
//           <span
//             className={`
//               ${cormorantGaramond.className}
//               max-w-[75%]
//               truncate
//               text-[clamp(5px,1.8vw,7px)]
//               font-bold
//               uppercase
//               leading-tight
//               tracking-[0.1em]
//             `}
//           >
//             {groomName}
//           </span>

//           <span
//             className={`
//               ${cormorantGaramond.className}
//               my-[1%]
//               text-[clamp(5px,1.8vw,7px)]
//               font-semibold
//               italic
//               opacity-90
//             `}
//           >
//             &
//           </span>

//           <span
//             className={`
//               ${cormorantGaramond.className}
//               max-w-[75%]
//               truncate
//               text-[clamp(5px,1.8vw,7px)]
//               font-bold
//               uppercase
//               leading-tight
//               tracking-[0.1em]
//             `}
//           >
//             {brideName}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type InvitationTagProps = {
  groomName: string;
  brideName: string;
};

export default function InvitationTag({
  groomName,
  brideName,
}: InvitationTagProps) {
  return (
    <motion.div
      className="
        absolute
        bottom-[-23%]
        right-[7%]
        z-30

        w-[42%]
        aspect-[160/223]
      "
      initial={{
        opacity: 0,
        scale: 0.85,
        rotate: -8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 1.7,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        rotate: [0, 1.2, -1.2, 0],
      }}
    >
      <Image
        src="/assets/invitation/tag.svg"
        alt="Save the Date"
        fill
        priority
        sizes="200px"
        className="
          pointer-events-none
          select-none
          object-contain
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          flex
          flex-col
          items-center

          px-[10%]
          pt-[31%]

          text-center
          text-[#2A4858]
        "
      >
        <div
          className="
            mt-[24%]
            flex
            h-[38%]
            w-full
            flex-col
            items-center
            justify-center
          "
        >
          <span
            className={`
              ${cormorantGaramond.className}

              max-w-[78%]
              truncate

              text-[clamp(5px,1.25vw,8px)]

              font-bold
              uppercase
              leading-tight
              tracking-[0.1em]
            `}
          >
            {groomName}
          </span>

          <span
            className={`
              ${cormorantGaramond.className}

              my-[2%]
              text-[clamp(5px,1.25vw,8px)]
              font-semibold
              italic
            `}
          >
            &
          </span>

          <span
            className={`
              ${cormorantGaramond.className}

              max-w-[78%]
              truncate

              text-[clamp(5px,1.25vw,8px)]

              font-bold
              uppercase
              leading-tight
              tracking-[0.1em]
            `}
          >
            {brideName}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
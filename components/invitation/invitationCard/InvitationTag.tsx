// import Image from "next/image";
// import { greatVibes, cormorantGaramond } from "@/lib/fonts";

// type InvitationTagProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function InvitationTag({
//   groomName,
//   brideName,
// }: InvitationTagProps) {
//   return (
//     <div className="absolute right-[30px] bottom-[-105px] w-[160px] h-[223px] z-30">
//       {/* Background tag image */}
//       <Image
//         src="/assets/invitation/tag.svg"
//         alt="Save the Date Tag"
//         fill
//         className="object-contain"
//         priority
//       />

//       {/* Overlay text */}
//       <div className="absolute inset-0 flex flex-col items-center pt-[32px] px-2 text-center text-[#2A4858]">
//         {/* <span className={`${greatVibes.className} text-[15px] leading-none mb-1 text-[#2a4858] font-normal`}>
//           Save the Date
//         </span> */}

//         <div className="flex flex-col items-center justify-center h-[84px] w-full mt-10">
//           <span className={`${cormorantGaramond.className} text-[7px] tracking-[0.10em] font-bold uppercase leading-tight max-w-[80px] truncate`}>
//             {groomName}
//           </span>
//           <span className={`${cormorantGaramond.className} text-[7px] italic font-semibold my-0.5 opacity-90`}>
//             &
//           </span>
//           <span className={`${cormorantGaramond.className} text-[7px] tracking-[0.10em] font-bold uppercase leading-tight max-w-[80px] truncate`}>
//             {brideName}
//           </span>
//         </div>
//       </div>
//     </div>
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
      className="absolute right-[30px] bottom-[-105px] w-[160px] h-[223px] z-30"
      initial={{
        opacity: 0,
        scale: 0.85,
        rotate: -10,
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
        rotate: [0, 2, -2, 1, -1, 0],
      }}
    >
      <Image
        src="/assets/invitation/tag.svg"
        alt="Save the Date"
        fill
        priority
        className="pointer-events-none select-none object-contain"
      />

      <div className="absolute inset-0 flex flex-col items-center pt-[32px] px-2 text-center text-[#2A4858]">

        <div className="mt-10 flex h-[84px] w-full flex-col items-center justify-center">

          <span
            className={`${cormorantGaramond.className} max-w-[80px] truncate text-[7px] font-bold uppercase tracking-[0.10em] leading-tight`}
          >
            {groomName}
          </span>

          <span
            className={`${cormorantGaramond.className} my-0.5 text-[7px] italic font-semibold opacity-90`}
          >
            &
          </span>

          <span
            className={`${cormorantGaramond.className} max-w-[80px] truncate text-[7px] font-bold uppercase tracking-[0.10em] leading-tight`}
          >
            {brideName}
          </span>

        </div>

      </div>
    </motion.div>
  );
}
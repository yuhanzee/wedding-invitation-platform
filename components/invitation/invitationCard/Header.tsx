// // // type HeaderProps = {
// // //   className?: string;
// // // };

// // // export default function Header({ className = "" }: HeaderProps) {
// // //   return (
// // //     <div
// // //       className={`absolute top-[42px] left-1/2 -translate-x-1/2 w-[185px] text-center ${className}`}
// // //     >
// // //       <p className="text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[#6C625E]">
// // //         WE HAVE THE HONOR OF
// // //       </p>

// // //       <p className="text-[13px] leading-[18px] tracking-[0.08em] uppercase text-[#6C625E]">
// // //         INVITING YOU TO
// // //       </p>
// // //     </div>
// // //   );
// // // }

// // import { cormorantGaramond } from "@/lib/fonts";

// // export default function Header() {
// //   return (
// //     <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[220px] text-center select-none">
// //       <p className={`${cormorantGaramond.className} text-[11px] sm:text-[12px] tracking-[0.18em] text-[#6C625E] leading-relaxed font-semibold opacity-90`}>
// //         WE HAVE THE HONOR OF
// //       </p>

// //       <p className={`${cormorantGaramond.className} text-[11px] sm:text-[12px] tracking-[0.18em] text-[#6C625E] leading-relaxed font-semibold mt-0.5 opacity-90`}>
// //         INVITING YOU TO
// //       </p>
// //     </div>
// //   );
// // }

// import { cormorantGaramond } from "@/lib/fonts";

// export default function Header() {
//   return (
//     <div className="absolute top-[84px] left-1/2 -translate-x-1/2 w-[170px] text-center z-20">
//       <p
//         className={`${cormorantGaramond.className} uppercase text-[10px] tracking-[0.14em] leading-[10px] text-[#625853]`}
//       >
//         WE HAVE THE HONOR OF
//       </p>

//       <p
//         className={`${cormorantGaramond.className} uppercase text-[10px] tracking-[0.14em] leading-[10px] text-[#625853] mt-[2px]`}
//       >
//         INVITING YOU TO
//       </p>
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

export default function Header() {
  return (
    <motion.div
      className="absolute top-[84px] left-1/2 -translate-x-1/2 w-[170px] text-center z-20"
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className={`${cormorantGaramond.className} uppercase text-[10px] tracking-[0.14em] leading-[10px] text-[#625853]`}
      >
        WE HAVE THE HONOR OF
      </p>

      <p
        className={`${cormorantGaramond.className} uppercase text-[10px] tracking-[0.14em] leading-[10px] text-[#625853] mt-[2px]`}
      >
        INVITING YOU TO
      </p>
    </motion.div>
  );
}
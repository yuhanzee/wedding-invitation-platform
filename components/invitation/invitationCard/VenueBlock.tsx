// // import { cormorantGaramond } from "@/lib/fonts";

// // type VenueBlockProps = {
// //   venue?: string;
// // };

// // export default function VenueBlock({
// //   venue,
// // }: VenueBlockProps) {
// //   return (
// //     <p className={`${cormorantGaramond.className} absolute top-[315px] left-0 right-0 text-center text-[12px] sm:text-[13px] tracking-[0.14em] text-[#6C625E] font-bold uppercase px-6 leading-relaxed select-none`}>
// //       {venue || "SHANGRI-LA, COLOMBO"}
// //     </p>
// //   );
// // }

// import { cormorantGaramond } from "@/lib/fonts";

// type VenueBlockProps = {
//   venue?: string;
// };

// export default function VenueBlock({
//   venue,
// }: VenueBlockProps) {
    
//     console.log("Venue:", venue);

//   if (!venue) return null;

//   return (
//     <div className="absolute top-[311px] left-1/2 -translate-x-1/2 w-[180px] text-center z-20">
//       <p
//         className={`${cormorantGaramond.className} uppercase text-[11px] tracking-[0.12em] text-[#625853]`}
//       >
//         {venue}
//       </p>
//     </div>
//   );
// }


"use client";

import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type VenueBlockProps = {
  venue?: string;
};

export default function VenueBlock({
  venue,
}: VenueBlockProps) {
  if (!venue) return null;

  return (
    <motion.div
      className="absolute top-[311px] left-1/2 -translate-x-1/2 w-[180px] text-center z-20"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 1.4,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className={`${cormorantGaramond.className} uppercase text-[11px] tracking-[0.12em] text-[#625853]`}
      >
        {venue}
      </p>
    </motion.div>
  );
}


// // "use client";

// // import { motion } from "motion/react";
// // import { cormorantGaramond } from "@/lib/fonts";

// // type VenueBlockProps = {
// //   venue?: string;
// // };

// // export default function VenueBlock({
// //   venue,
// // }: VenueBlockProps) {
// //   if (!venue) return null;

// //   return (
// //     <motion.div
// //       className="absolute top-[311px] left-1/2 -translate-x-1/2 w-[180px] text-center z-20"
// //       initial={{ opacity: 0, y: 15 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: 1.4,
// //         duration: 0.6,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //     >
// //       <p
// //         className={`${cormorantGaramond.className} uppercase text-[11px] tracking-[0.12em] text-[#625853]`}
// //       >
// //         {venue}
// //       </p>
// //     </motion.div>
// //   );
// // }

// "use client";

// import { motion } from "motion/react";
// import { cormorantGaramond } from "@/lib/fonts";

// type VenueBlockProps = {
//   venue?: string;
// };

// export default function VenueBlock({
//   venue,
// }: VenueBlockProps) {
//   if (!venue) return null;

//   return (
//     <motion.div
//       className="
//         absolute
//         left-1/2
//         top-[72%]
//         z-20
//         w-[50%]
//         -translate-x-1/2
//         text-center
//       "
//       initial={{
//         opacity: 0,
//         y: 12,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//       }}
//       transition={{
//         delay: 1.4,
//         duration: 0.6,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       <p
//         className={`
//           ${cormorantGaramond.className}
//           text-[clamp(8px,2.6vw,11px)]
//           uppercase
//           leading-[1.15]
//           tracking-[0.12em]
//           text-[#625853]
//         `}
//       >
//         {venue}
//       </p>
//     </motion.div>
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
      className="
        absolute
        left-1/2
        top-[72%]
        z-20

        w-[52%]
        -translate-x-1/2
        text-center
      "
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 1.4,
        duration: 0.6,
      }}
    >
      <p
        className={`
          ${cormorantGaramond.className}

          text-[clamp(8px,1.8vw,12px)]
          uppercase
          leading-[1.2]
          tracking-[0.12em]
          text-[#625853]
        `}
      >
        {venue}
      </p>
    </motion.div>
  );
}
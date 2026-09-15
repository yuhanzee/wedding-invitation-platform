

// // // // "use client";

// // // // import { motion } from "motion/react";
// // // // import { cormorantGaramond } from "@/lib/fonts";

// // // // type VenueBlockProps = {
// // // //   venue?: string;
// // // // };

// // // // export default function VenueBlock({
// // // //   venue,
// // // // }: VenueBlockProps) {
// // // //   if (!venue) return null;

// // // //   return (
// // // //     <motion.div
// // // //       className="
// // // //         absolute
// // // //         left-1/2
// // // //         top-[72%]
// // // //         z-20

// // // //         w-[52%]
// // // //         -translate-x-1/2
// // // //         text-center
// // // //       "
// // // //       initial={{
// // // //         opacity: 0,
// // // //         y: 10,
// // // //       }}
// // // //       whileInView={{
// // // //         opacity: 1,
// // // //         y: 0,
// // // //       }}
// // // //       viewport={{ once: true }}
// // // //       transition={{
// // // //         delay: 1.4,
// // // //         duration: 0.6,
// // // //       }}
// // // //     >
// // // //       <p
// // // //         className={`
// // // //           ${cormorantGaramond.className}

// // // //           text-[clamp(8px,1.8vw,12px)]
// // // //           uppercase
// // // //           leading-[1.2]
// // // //           tracking-[0.12em]
// // // //           text-[#625853]
// // // //         `}
// // // //       >
// // // //         {venue}
// // // //       </p>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "motion/react";
// // // import { cormorantGaramond } from "@/lib/fonts";

// // // type VenueBlockProps = {
// // //   venue?: string;
// // // };

// // // export default function VenueBlock({
// // //   venue,
// // // }: VenueBlockProps) {
// // //   if (!venue) return null;

// // //   return (
// // //     <motion.div
// // //       className="
// // //         absolute
// // //         left-1/2
// // //         top-[73%]
// // //         z-20

// // //         w-[60%]

// // //         -translate-x-1/2

// // //         text-center
// // //       "
// // //       initial={{
// // //         opacity: 0,
// // //         y: 10,
// // //       }}
// // //       whileInView={{
// // //         opacity: 1,
// // //         y: 0,
// // //       }}
// // //       viewport={{ once: true }}
// // //       transition={{
// // //         delay: 1.4,
// // //         duration: 0.6,
// // //       }}
// // //     >
// // //       <p
// // //         className={`
// // //           ${cormorantGaramond.className}

// // //           text-[clamp(10px,2.8vw,14px)]

// // //           uppercase

// // //           leading-[1.2]

// // //           tracking-[0.1em]

// // //           text-[#625853]
// // //         `}
// // //       >
// // //         {venue}
// // //       </p>
// // //     </motion.div>
// // //   );
// // // }

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
// //       className="
// //         absolute
// //         left-1/2
// //         top-[74%]
// //         z-20

// //         w-[66%]

// //         -translate-x-1/2

// //         text-center
// //       "
// //       initial={{
// //         opacity: 0,
// //         y: 10,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       viewport={{
// //         once: true,
// //       }}
// //       transition={{
// //         delay: 1.4,
// //         duration: 0.6,
// //       }}
// //     >
// //       <p
// //         className={`
// //           ${cormorantGaramond.className}

// //           text-[clamp(10px,3vw,15px)]

// //           font-semibold
// //           uppercase

// //           leading-[1.25]
// //           tracking-[0.06em]

// //           text-[#554B47]
// //         `}
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

//   const isLongVenue = venue.length > 28;
//   const isVeryLongVenue = venue.length > 48;

//   return (
//     <motion.div
//       className="
//         absolute
//         left-1/2
//         top-[78%]
//         z-20

//         w-[68%]

//         -translate-x-1/2

//         text-center
//       "
//       initial={{
//         opacity: 0,
//         y: 10,
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
//       }}
//     >
//       {/* SMALL DECORATIVE LINE */}

//       <div
//         className="
//           mx-auto
//           mb-[4%]

//           h-px
//           w-[22%]

//           bg-[#C9A990]/70
//         "
//       />

//       <p
//         className={`
//           ${cormorantGaramond.className}

//           mx-auto

//           font-semibold
//           uppercase

//           text-[#554B47]

//           ${
//             isVeryLongVenue
//               ? `
//                 max-w-[95%]
//                 text-[clamp(7px,2.1vw,10px)]
//                 leading-[1.25]
//                 tracking-[0.035em]
//               `
//               : isLongVenue
//               ? `
//                 max-w-[92%]
//                 text-[clamp(8px,2.4vw,12px)]
//                 leading-[1.25]
//                 tracking-[0.045em]
//               `
//               : `
//                 max-w-[90%]
//                 text-[clamp(10px,2.8vw,14px)]
//                 leading-[1.2]
//                 tracking-[0.06em]
//               `
//           }
//         `}
//       >
//         {venue}
//       </p>
//     </motion.div>
//   );
// }

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

//   const cleanedVenue = venue
//     .replace(/\s*,\s*/g, ", ")
//     .replace(/\s+/g, " ")
//     .trim();

//   const isLongVenue = cleanedVenue.length > 28;
//   const isVeryLongVenue = cleanedVenue.length > 45;

//   return (
//     <motion.div
//       className="
//         absolute
//         left-1/2
//         top-[79%]
//         z-20

//         w-[78%]

//         -translate-x-1/2
//         text-center
//       "
//       initial={{
//         opacity: 0,
//         y: 8,
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
//       }}
//     >
//       <p
//         className={`
//           ${cormorantGaramond.className}

//           mx-auto
//           block

//           break-words

//           font-semibold
//           uppercase

//           text-[#554B47]

//           ${
//             isVeryLongVenue
//               ? `
//                 max-w-[100%]
//                 text-[clamp(8px,2.35vw,11px)]
//                 leading-[1.15]
//                 tracking-[0.025em]
//               `
//               : isLongVenue
//               ? `
//                 max-w-[98%]
//                 text-[clamp(9px,2.6vw,12px)]
//                 leading-[1.18]
//                 tracking-[0.035em]
//               `
//               : `
//                 max-w-[94%]
//                 text-[clamp(10px,2.9vw,14px)]
//                 leading-[1.2]
//                 tracking-[0.05em]
//               `
//           }
//         `}
//       >
//         {cleanedVenue}
//       </p>
//     </motion.div>
//   );
// }

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

//   const cleanedVenue = venue
//     .replace(/\s*,\s*/g, ", ")
//     .replace(/\s+/g, " ")
//     .trim();

//   const commaIndex = cleanedVenue.indexOf(",");

//   let firstLine = cleanedVenue;
//   let secondLine = "";

//   if (
//     cleanedVenue.length > 22 &&
//     commaIndex !== -1
//   ) {
//     firstLine = cleanedVenue
//       .slice(0, commaIndex + 1)
//       .trim();

//     secondLine = cleanedVenue
//       .slice(commaIndex + 1)
//       .trim();
//   }

//   const isVeryLong = cleanedVenue.length > 45;

//   return (
//     <motion.div
//       className="
//         absolute
//         left-1/2
//         top-[79%]
//         z-20
//         w-[72%]
//         -translate-x-1/2
//         text-center
//       "
//       initial={{
//         opacity: 0,
//         y: 8,
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
//       }}
//     >
//       <p
//         className={`
//           ${cormorantGaramond.className}

//           mx-auto

//           font-semibold
//           uppercase

//           text-[#554B47]

//           ${
//             isVeryLong
//               ? `
//                 text-[clamp(8px,2.25vw,11px)]
//                 leading-[1.25]
//                 tracking-[0.025em]
//               `
//               : `
//                 text-[clamp(10px,2.8vw,14px)]
//                 leading-[1.3]
//                 tracking-[0.04em]
//               `
//           }
//         `}
//       >
//         <span className="block">
//           {firstLine}
//         </span>

//         {secondLine && (
//           <span className="mt-[2%] block">
//             {secondLine}
//           </span>
//         )}
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

/* =========================================================
   SPLIT LONG VENUE INTO READABLE LINES
========================================================= */

function splitVenueIntoLines(
  venue: string,
  maxCharsPerLine: number
) {
  // Prefer commas as natural breaking points
  const sections = venue
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  const lines: string[] = [];

  for (const section of sections) {
    // Try adding this section to the previous line
    if (lines.length > 0) {
      const previousLine = lines[lines.length - 1];

      const combined = `${previousLine}, ${section}`;

      if (combined.length <= maxCharsPerLine) {
        lines[lines.length - 1] = combined;
        continue;
      }
    }

    // Section itself fits
    if (section.length <= maxCharsPerLine) {
      lines.push(section);
      continue;
    }

    // Section is very long, split by words
    const words = section.split(/\s+/);

    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine
        ? `${currentLine} ${word}`
        : word;

      if (testLine.length <= maxCharsPerLine) {
        currentLine = testLine;
      } else {
        if (currentLine) {
          lines.push(currentLine);
        }

        currentLine = word;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }
  }

  // Maximum 3 lines.
  // If more content exists, merge it into line 3.
  if (lines.length > 3) {
    return [
      lines[0],
      lines[1],
      lines.slice(2).join(" "),
    ];
  }

  return lines;
}

export default function VenueBlock({
  venue,
}: VenueBlockProps) {
  if (!venue) return null;

  /* =========================================================
     CLEAN VENUE
  ========================================================= */

  const cleanedVenue = venue
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s+/g, " ")
    .trim();

  /* =========================================================
     DETERMINE SIZE
  ========================================================= */

  const length = cleanedVenue.length;

  const isShort = length <= 22;
  const isMedium = length > 22 && length <= 40;
  const isLong = length > 40 && length <= 65;
  const isVeryLong = length > 65;

  /* =========================================================
     CREATE LINES
  ========================================================= */

  const maxCharsPerLine = isVeryLong
    ? 24
    : isLong
    ? 27
    : isMedium
    ? 30
    : 40;

  const venueLines = splitVenueIntoLines(
    cleanedVenue,
    maxCharsPerLine
  );

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-[79%]
        z-20

        w-[76%]

        -translate-x-1/2

        text-center
      "
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 1.4,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
          VENUE
      ===================================================== */}

      <div
        className={`
          ${cormorantGaramond.className}

          mx-auto

          flex
          w-full
          flex-col
          items-center
          justify-center

          font-semibold
          uppercase

          text-[#554B47]

          ${
            isShort
              ? `
                text-[clamp(10px,2.9vw,14px)]
                leading-[1.25]
                tracking-[0.05em]
              `
              : isMedium
              ? `
                text-[clamp(9px,2.6vw,13px)]
                leading-[1.25]
                tracking-[0.04em]
              `
              : isLong
              ? `
                text-[clamp(8px,2.3vw,11px)]
                leading-[1.25]
                tracking-[0.03em]
              `
              : `
                text-[clamp(7px,2vw,10px)]
                leading-[1.2]
                tracking-[0.02em]
              `
          }
        `}
      >
        {venueLines.map((line, index) => (
          <span
            key={`${line}-${index}`}
            className={`
              block
              max-w-full

              ${
                index > 0
                  ? "mt-[1.5%]"
                  : ""
              }
            `}
          >
            {line}
            {index < venueLines.length - 1 &&
            cleanedVenue.includes(`${line},`)
              ? ","
              : ""}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
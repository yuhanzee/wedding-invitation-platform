// // "use client";

// // import { motion } from "motion/react";
// // import { cormorantGaramond } from "@/lib/fonts";

// // type DateBlockProps = {
// //   weddingDate?: string;
// //   weddingTime?: string;
// //   poruwaCeremonyTime?: string;
// // };

// // export default function DateBlock({
// //   weddingDate,
// //   weddingTime,
// //   poruwaCeremonyTime,
// // }: DateBlockProps) {
// //   let date: Date | null = null;

// //   if (weddingDate) {
// //     // Handles YYYY-MM-DD format
// //     const isoMatch = weddingDate.match(
// //       /^(\d{4})-(\d{2})-(\d{2})$/
// //     );

// //     if (isoMatch) {
// //       const year = Number(isoMatch[1]);
// //       const month = Number(isoMatch[2]);
// //       const day = Number(isoMatch[3]);

// //       const parsedDate = new Date(year, month - 1, day);

// //       if (!Number.isNaN(parsedDate.getTime())) {
// //         date = parsedDate;
// //       }
// //     } else {
// //       // Handles older values such as "October 08, 2026"
// //       const parsedDate = new Date(weddingDate);

// //       if (!Number.isNaN(parsedDate.getTime())) {
// //         date = parsedDate;
// //       }
// //     }
// //   }

// //   // Safe fallback values
// //   const year = date ? date.getFullYear() : "";
// //   const day = date ? date.getDate() : "";

// //   const weekday = date
// //     ? date
// //         .toLocaleDateString("en-US", {
// //           weekday: "short",
// //         })
// //         .toUpperCase()
// //     : "";

// //   const month = date
// //     ? date
// //         .toLocaleDateString("en-US", {
// //           month: "long",
// //         })
// //         .toUpperCase()
// //     : "";

// //   return (
// //     <motion.div
// //       className="absolute top-[199px] left-1/2 -translate-x-1/2 w-[165px] text-[#665B56] z-20"
// //       initial={{ opacity: 0, y: 25 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: 1,
// //         duration: 0.8,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //     >
// //       {/* YEAR */}
// //       <p
// //         className={`${cormorantGaramond.className} text-center text-[18px] tracking-[0.1em]`}
// //       >
// //         {year}
// //       </p>

// //       {/* DATE ROW */}
// //       <div className="mt-0 flex items-center justify-between">
// //         {/* WEEKDAY */}
// //         <div className="w-[36px] text-right">
// //           <div
// //             className={`${cormorantGaramond.className} text-[12px] uppercase`}
// //           >
// //             {weekday}
// //           </div>
// //         </div>

// //         <div className="h-[30px] w-px bg-[#D4B7A4]" />

// //         {/* DAY */}
// //         <div
// //           className={`${cormorantGaramond.className} text-[46px] leading-none`}
// //         >
// //           {day}
// //         </div>

// //         <div className="h-[30px] w-px bg-[#D4B7A4]" />

// //         {/* TIME */}
// //         <div className="w-[36px]">
// //           <div
// //             className={`${cormorantGaramond.className} text-[10px] uppercase`}
// //           >
// //             AT
// //           </div>

// //           {weddingTime && (
// //             <div
// //               className={`${cormorantGaramond.className} text-[10px]`}
// //             >
// //               {weddingTime}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* MONTH */}
// //       <p
// //         className={`${cormorantGaramond.className} mt-[6px] text-center text-[13px] tracking-[0.18em]`}
// //       >
// //         {month}
// //       </p>
// //       {poruwaCeremonyTime && (
// //   <div className="mt-[4px] text-center">
// //     <p
// //       className={`${cormorantGaramond.className} text-[9px] uppercase tracking-[0.12em]`}
// //     >
// //       Poruwa Ceremony
// //     </p>

// //     <p
// //       className={`${cormorantGaramond.className} text-[10px]`}
// //     >
// //       {poruwaCeremonyTime}
// //     </p>
// //   </div>
// // )}
// //     </motion.div>
// //   );
// // }

// "use client";

// import { motion } from "motion/react";
// import { cormorantGaramond } from "@/lib/fonts";

// type DateBlockProps = {
//   weddingDate?: string;
//   weddingTime?: string;
//   poruwaCeremonyTime?: string;
// };

// export default function DateBlock({
//   weddingDate,
//   weddingTime,
//   poruwaCeremonyTime,
// }: DateBlockProps) {
//   let date: Date | null = null;

//   /* =========================================
//      SAFE DATE PARSING
//   ========================================== */

//   if (weddingDate) {
//     // Supports: 2026-10-08
//     const isoMatch = weddingDate.match(
//       /^(\d{4})-(\d{2})-(\d{2})$/
//     );

//     if (isoMatch) {
//       const year = Number(isoMatch[1]);
//       const month = Number(isoMatch[2]);
//       const day = Number(isoMatch[3]);

//       const parsedDate = new Date(
//         year,
//         month - 1,
//         day
//       );

//       if (!Number.isNaN(parsedDate.getTime())) {
//         date = parsedDate;
//       }
//     } else {
//       // Also supports:
//       // October 08, 2026
//       const parsedDate = new Date(weddingDate);

//       if (!Number.isNaN(parsedDate.getTime())) {
//         date = parsedDate;
//       }
//     }
//   }

//   /* =========================================
//      DATE VALUES
//   ========================================== */

//   const year = date ? date.getFullYear() : "";
//   const day = date ? date.getDate() : "";

//   const weekday = date
//     ? date
//         .toLocaleDateString("en-US", {
//           weekday: "short",
//         })
//         .toUpperCase()
//     : "";

//   const month = date
//     ? date
//         .toLocaleDateString("en-US", {
//           month: "long",
//         })
//         .toUpperCase()
//     : "";

//   /* =========================================
//      WEDDING TIME
//      Converts:
//      09:15 AM - 03:30 PM

//      into:
//      09:15 AM
//      03:30 PM
//   ========================================== */

//   const timeParts = weddingTime
//     ? weddingTime
//         .split(/\s*-\s*/)
//         .map((time) => time.trim())
//         .filter(Boolean)
//     : [];

//   return (
//     <motion.div
//       className="
//         absolute
//         left-1/2
//         top-[199px]
//         z-20
//         w-[175px]
//         -translate-x-1/2
//         text-[#665B56]

//         max-[340px]:top-[202px]
//         max-[340px]:w-[165px]
//       "
//       initial={{
//         opacity: 0,
//         y: 25,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//       }}
//       transition={{
//         delay: 1,
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       {/* =====================================
//           YEAR
//       ====================================== */}

//       <p
//         className={`
//           ${cormorantGaramond.className}
//           text-center
//           text-[16px]
//           leading-none
//           tracking-[0.12em]

//           max-[340px]:text-[14px]
//         `}
//       >
//         {year}
//       </p>

//       {/* =====================================
//           DATE ROW
//       ====================================== */}

//       <div
//         className="
//           mt-[7px]
//           grid
//           grid-cols-[44px_1px_48px_1px_58px]
//           items-center
//           justify-center
//           gap-[7px]

//           max-[340px]:
//           grid-cols-[38px_1px_43px_1px_54px]
//           max-[340px]:gap-[5px]
//         "
//       >
//         {/* WEEKDAY */}

//         <div className="text-right">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[11px]
//               uppercase
//               tracking-[0.08em]

//               max-[340px]:text-[10px]
//             `}
//           >
//             {weekday}
//           </p>
//         </div>

//         {/* DIVIDER */}

//         <div className="h-[32px] w-px bg-[#D4B7A4]" />

//         {/* DAY */}

//         <div className="text-center">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[42px]
//               leading-none

//               max-[340px]:text-[38px]
//             `}
//           >
//             {day}
//           </p>
//         </div>

//         {/* DIVIDER */}

//         <div className="h-[32px] w-px bg-[#D4B7A4]" />

//         {/* WEDDING TIME */}

//         <div className="text-left">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mb-[1px]
//               text-[8px]
//               uppercase
//               tracking-[0.12em]
//             `}
//           >
//             AT
//           </p>

//           {timeParts.length > 0 && (
//             <div
//               className={`
//                 ${cormorantGaramond.className}
//                 whitespace-nowrap
//                 text-[8px]
//                 leading-[11px]

//                 max-[340px]:text-[7px]
//               `}
//             >
//               {timeParts.map((time, index) => (
//                 <p key={`${time}-${index}`}>
//                   {time}
//                 </p>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* =====================================
//           MONTH
//       ====================================== */}

//       <p
//         className={`
//           ${cormorantGaramond.className}
//           mt-[7px]
//           text-center
//           text-[11px]
//           uppercase
//           tracking-[0.18em]

//           max-[340px]:text-[10px]
//         `}
//       >
//         {month}
//       </p>

//       {/* =====================================
//           PORUWA CEREMONY
//       ====================================== */}

//       {poruwaCeremonyTime && (
//         <div className="mt-[6px] text-center">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               whitespace-nowrap
//               text-[8px]
//               uppercase
//               leading-[10px]
//               tracking-[0.1em]

//               max-[340px]:text-[7px]
//             `}
//           >
//             Poruwa Ceremony
//           </p>

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mt-[1px]
//               text-[9px]
//               leading-none
//               tracking-[0.06em]

//               max-[340px]:text-[8px]
//             `}
//           >
//             AT {poruwaCeremonyTime}
//           </p>
//         </div>
//       )}
//     </motion.div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type DateBlockProps = {
  weddingDate?: string;
  weddingTime?: string;
  poruwaCeremonyTime?: string;
};

export default function DateBlock({
  weddingDate,
  weddingTime,
  poruwaCeremonyTime,
}: DateBlockProps) {
  let date: Date | null = null;

  /* =========================================
     SAFE DATE PARSING
  ========================================== */

  if (weddingDate) {
    // Supports: 2026-10-08
    const isoMatch = weddingDate.match(
      /^(\d{4})-(\d{2})-(\d{2})$/
    );

    if (isoMatch) {
      const year = Number(isoMatch[1]);
      const month = Number(isoMatch[2]);
      const day = Number(isoMatch[3]);

      const parsedDate = new Date(
        year,
        month - 1,
        day
      );

      if (!Number.isNaN(parsedDate.getTime())) {
        date = parsedDate;
      }
    } else {
      // Also supports: October 08, 2026
      const parsedDate = new Date(weddingDate);

      if (!Number.isNaN(parsedDate.getTime())) {
        date = parsedDate;
      }
    }
  }

  /* =========================================
     DATE VALUES
  ========================================== */

  const year = date ? date.getFullYear() : "";
  const day = date ? date.getDate() : "";

  const weekday = date
    ? date
        .toLocaleDateString("en-US", {
          weekday: "short",
        })
        .toUpperCase()
    : "";

  const month = date
    ? date
        .toLocaleDateString("en-US", {
          month: "long",
        })
        .toUpperCase()
    : "";

  /* =========================================
     WEDDING TIME
     09:15 AM - 03:30 PM
     becomes two lines
  ========================================== */

  const timeParts = weddingTime
    ? weddingTime
        .split(/\s*-\s*/)
        .map((time) => time.trim())
        .filter(Boolean)
    : [];

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-[199px]
        z-20
        w-[175px]
        -translate-x-1/2
        text-[#665B56]

        max-[340px]:top-[202px]
        max-[340px]:w-[165px]
      "
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================
          MONTH
      ====================================== */}

      <p
        className={`
          ${cormorantGaramond.className}
          text-center
          text-[13px]
          uppercase
          leading-none
          tracking-[0.18em]

          max-[340px]:text-[11px]
        `}
      >
        {month}
      </p>

      {/* =====================================
          DATE ROW
      ====================================== */}

      <div
        className="
          mt-[7px]
          grid
          grid-cols-[44px_1px_48px_1px_58px]
          items-center
          justify-center
          gap-[7px]

          max-[340px]:grid-cols-[38px_1px_43px_1px_54px]
          max-[340px]:gap-[5px]
        "
      >
        {/* WEEKDAY */}

        <div className="text-right">
          <p
            className={`
              ${cormorantGaramond.className}
              text-[11px]
              uppercase
              tracking-[0.08em]

              max-[340px]:text-[10px]
            `}
          >
            {weekday}
          </p>
        </div>

        {/* LEFT DIVIDER */}

        <div className="h-[32px] w-px bg-[#D4B7A4]" />

        {/* DAY */}

        <div className="text-center">
          <p
            className={`
              ${cormorantGaramond.className}
              text-[42px]
              leading-none

              max-[340px]:text-[38px]
            `}
          >
            {day}
          </p>
        </div>

        {/* RIGHT DIVIDER */}

        <div className="h-[32px] w-px bg-[#D4B7A4]" />

        {/* WEDDING TIME */}

        <div className="text-left">
          <p
            className={`
              ${cormorantGaramond.className}
              mb-[1px]
              text-[8px]
              uppercase
              tracking-[0.12em]
            `}
          >
            AT
          </p>

          {timeParts.length > 0 && (
            <div
              className={`
                ${cormorantGaramond.className}
                whitespace-nowrap
                text-[8px]
                leading-[11px]

                max-[340px]:text-[7px]
              `}
            >
              {timeParts.map((time, index) => (
                <p key={`${time}-${index}`}>
                  {time}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* =====================================
          YEAR
      ====================================== */}

      <p
        className={`
          ${cormorantGaramond.className}
          mt-[7px]
          text-center
          text-[12px]
          leading-none
          tracking-[0.14em]

          max-[340px]:text-[11px]
        `}
      >
        {year}
      </p>

      {/* =====================================
          PORUWA CEREMONY
      ====================================== */}

      {poruwaCeremonyTime && (
        <div className="mt-[7px] text-center">
          <p
            className={`
              ${cormorantGaramond.className}
              whitespace-nowrap
              text-[8px]
              uppercase
              leading-[10px]
              tracking-[0.1em]

              max-[340px]:text-[7px]
            `}
          >
            Poruwa Ceremony
          </p>

          <p
            className={`
              ${cormorantGaramond.className}
              mt-[2px]
              text-[9px]
              leading-none
              tracking-[0.06em]

              max-[340px]:text-[8px]
            `}
          >
            AT {poruwaCeremonyTime}
          </p>
        </div>
      )}
    </motion.div>
  );
}
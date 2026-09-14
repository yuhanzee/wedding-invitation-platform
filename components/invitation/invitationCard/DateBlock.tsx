

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

// //   /* =========================================
// //      SAFE DATE PARSING
// //   ========================================== */

// //   if (weddingDate) {
// //     // Supports: 2026-10-08
// //     const isoMatch = weddingDate.match(
// //       /^(\d{4})-(\d{2})-(\d{2})$/
// //     );

// //     if (isoMatch) {
// //       const year = Number(isoMatch[1]);
// //       const month = Number(isoMatch[2]);
// //       const day = Number(isoMatch[3]);

// //       const parsedDate = new Date(
// //         year,
// //         month - 1,
// //         day
// //       );

// //       if (!Number.isNaN(parsedDate.getTime())) {
// //         date = parsedDate;
// //       }
// //     } else {
// //       // Also supports: October 08, 2026
// //       const parsedDate = new Date(weddingDate);

// //       if (!Number.isNaN(parsedDate.getTime())) {
// //         date = parsedDate;
// //       }
// //     }
// //   }

// //   /* =========================================
// //      DATE VALUES
// //   ========================================== */

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

// //   /* =========================================
// //      WEDDING TIME
// //      09:15 AM - 03:30 PM
// //      becomes two lines
// //   ========================================== */

// //   const timeParts = weddingTime
// //     ? weddingTime
// //         .split(/\s*-\s*/)
// //         .map((time) => time.trim())
// //         .filter(Boolean)
// //     : [];

// //   return (
// //     <motion.div
// //       className="
// //         absolute
// //         left-1/2
// //         top-[199px]
// //         z-20
// //         w-[175px]
// //         -translate-x-1/2
// //         text-[#665B56]

// //         max-[340px]:top-[202px]
// //         max-[340px]:w-[165px]
// //       "
// //       initial={{
// //         opacity: 0,
// //         y: 25,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       viewport={{
// //         once: true,
// //       }}
// //       transition={{
// //         delay: 1,
// //         duration: 0.8,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //     >
// //       {/* =====================================
// //           MONTH
// //       ====================================== */}

// //       <p
// //         className={`
// //           ${cormorantGaramond.className}
// //           text-center
// //           text-[13px]
// //           uppercase
// //           leading-none
// //           tracking-[0.18em]

// //           max-[340px]:text-[11px]
// //         `}
// //       >
// //         {month}
// //       </p>

// //       {/* =====================================
// //           DATE ROW
// //       ====================================== */}

// //       <div
// //         className="
// //           mt-[7px]
// //           grid
// //           grid-cols-[44px_1px_48px_1px_58px]
// //           items-center
// //           justify-center
// //           gap-[7px]

// //           max-[340px]:grid-cols-[38px_1px_43px_1px_54px]
// //           max-[340px]:gap-[5px]
// //         "
// //       >
// //         {/* WEEKDAY */}

// //         <div className="text-right">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}
// //               text-[11px]
// //               uppercase
// //               tracking-[0.08em]

// //               max-[340px]:text-[10px]
// //             `}
// //           >
// //             {weekday}
// //           </p>
// //         </div>

// //         {/* LEFT DIVIDER */}

// //         <div className="h-[32px] w-px bg-[#D4B7A4]" />

// //         {/* DAY */}

// //         <div className="text-center">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}
// //               text-[42px]
// //               leading-none

// //               max-[340px]:text-[38px]
// //             `}
// //           >
// //             {day}
// //           </p>
// //         </div>

// //         {/* RIGHT DIVIDER */}

// //         <div className="h-[32px] w-px bg-[#D4B7A4]" />

// //         {/* WEDDING TIME */}

// //         <div className="text-left">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}
// //               mb-[1px]
// //               text-[8px]
// //               uppercase
// //               tracking-[0.12em]
// //             `}
// //           >
// //             AT
// //           </p>

// //           {timeParts.length > 0 && (
// //             <div
// //               className={`
// //                 ${cormorantGaramond.className}
// //                 whitespace-nowrap
// //                 text-[8px]
// //                 leading-[11px]

// //                 max-[340px]:text-[7px]
// //               `}
// //             >
// //               {timeParts.map((time, index) => (
// //                 <p key={`${time}-${index}`}>
// //                   {time}
// //                 </p>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* =====================================
// //           YEAR
// //       ====================================== */}

// //       <p
// //         className={`
// //           ${cormorantGaramond.className}
// //           mt-[7px]
// //           text-center
// //           text-[12px]
// //           leading-none
// //           tracking-[0.14em]

// //           max-[340px]:text-[11px]
// //         `}
// //       >
// //         {year}
// //       </p>

// //       {/* =====================================
// //           PORUWA CEREMONY
// //       ====================================== */}

// //       {poruwaCeremonyTime && (
// //         <div className="mt-[7px] text-center">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}
// //               whitespace-nowrap
// //               text-[8px]
// //               uppercase
// //               leading-[10px]
// //               tracking-[0.1em]

// //               max-[340px]:text-[7px]
// //             `}
// //           >
// //             Poruwa Ceremony
// //           </p>

// //           <p
// //             className={`
// //               ${cormorantGaramond.className}
// //               mt-[2px]
// //               text-[9px]
// //               leading-none
// //               tracking-[0.06em]

// //               max-[340px]:text-[8px]
// //             `}
// //           >
// //             AT {poruwaCeremonyTime}
// //           </p>
// //         </div>
// //       )}
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

//   if (weddingDate) {
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
//       const parsedDate = new Date(weddingDate);

//       if (!Number.isNaN(parsedDate.getTime())) {
//         date = parsedDate;
//       }
//     }
//   }

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
//         top-[46%]
//         z-20
//         w-[48%]
//         -translate-x-1/2
//         text-[#665B56]
//       "
//       initial={{
//         opacity: 0,
//         y: 18,
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
//       {/* MONTH */}

//       <p
//         className={`
//           ${cormorantGaramond.className}
//           text-center
//           text-[clamp(9px,3vw,13px)]
//           uppercase
//           leading-none
//           tracking-[0.18em]
//         `}
//       >
//         {month}
//       </p>

//       {/* DATE ROW */}

//       <div
//         className="
//           mt-[clamp(4px,1.5vw,7px)]
//           grid
//           grid-cols-[1fr_1px_1fr_1px_1.3fr]
//           items-center
//           gap-[clamp(3px,1.3vw,7px)]
//         "
//       >
//         {/* WEEKDAY */}

//         <div className="text-right">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[clamp(8px,2.6vw,11px)]
//               uppercase
//               tracking-[0.06em]
//             `}
//           >
//             {weekday}
//           </p>
//         </div>

//         {/* LEFT DIVIDER */}

//         <div
//           className="
//             h-[clamp(24px,8vw,32px)]
//             w-px
//             bg-[#D4B7A4]
//           "
//         />

//         {/* DAY */}

//         <div className="text-center">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[clamp(30px,10vw,42px)]
//               leading-none
//             `}
//           >
//             {day}
//           </p>
//         </div>

//         {/* RIGHT DIVIDER */}

//         <div
//           className="
//             h-[clamp(24px,8vw,32px)]
//             w-px
//             bg-[#D4B7A4]
//           "
//         />

//         {/* TIME */}

//         <div className="min-w-0 text-left">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[clamp(6px,2vw,8px)]
//               uppercase
//               tracking-[0.1em]
//             `}
//           >
//             AT
//           </p>

//           {timeParts.length > 0 && (
//             <div
//               className={`
//                 ${cormorantGaramond.className}
//                 whitespace-nowrap
//                 text-[clamp(6px,2vw,8px)]
//                 leading-[1.3]
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

//       {/* YEAR */}

//       <p
//         className={`
//           ${cormorantGaramond.className}
//           mt-[clamp(4px,1.5vw,7px)]
//           text-center
//           text-[clamp(9px,2.8vw,12px)]
//           leading-none
//           tracking-[0.14em]
//         `}
//       >
//         {year}
//       </p>

//       {/* PORUWA */}

//       {poruwaCeremonyTime && (
//         <div
//           className="
//             mt-[clamp(5px,1.5vw,7px)]
//             text-center
//           "
//         >
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               whitespace-nowrap
//               text-[clamp(6px,2vw,8px)]
//               uppercase
//               leading-[1.2]
//               tracking-[0.1em]
//             `}
//           >
//             Poruwa Ceremony
//           </p>

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mt-[2px]
//               text-[clamp(7px,2.2vw,9px)]
//               leading-none
//               tracking-[0.06em]
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

  /* =========================================================
     SAFE DATE PARSING
  ========================================================= */

  if (weddingDate) {
    // Supports YYYY-MM-DD without timezone shifting
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
      // Supports values such as October 08, 2026
      const parsedDate = new Date(weddingDate);

      if (!Number.isNaN(parsedDate.getTime())) {
        date = parsedDate;
      }
    }
  }

  /* =========================================================
     DATE VALUES
  ========================================================= */

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

  /* =========================================================
     WEDDING TIME

     Example:
     09:15 AM - 03:30 PM

     becomes:

     09:15 AM
     03:30 PM
  ========================================================= */

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
        top-[46%]
        z-20

        w-[50%]
        max-w-[260px]

        -translate-x-1/2
        text-[#665B56]
      "
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
          MONTH
      ===================================================== */}

      <p
        className={`
          ${cormorantGaramond.className}

          text-center
          text-[clamp(8px,2.1vw,14px)]

          uppercase
          leading-none
          tracking-[0.18em]
        `}
      >
        {month}
      </p>

      {/* =====================================================
          DATE ROW
      ===================================================== */}

      <div
        className="
          mt-[4%]

          grid
          grid-cols-[1fr_1px_1fr_1px_1.35fr]
          items-center

          gap-[3%]
        "
      >
        {/* WEEKDAY */}

        <div className="min-w-0 text-right">
          <p
            className={`
              ${cormorantGaramond.className}

              whitespace-nowrap
              text-[clamp(7px,1.8vw,12px)]

              uppercase
              leading-none
              tracking-[0.08em]
            `}
          >
            {weekday}
          </p>
        </div>

        {/* LEFT DIVIDER */}

        <div
          className="
            h-[clamp(24px,7vw,40px)]
            w-px
            bg-[#D4B7A4]
          "
        />

        {/* DAY */}

        <div className="min-w-0 text-center">
          <p
            className={`
              ${cormorantGaramond.className}

              text-[clamp(29px,8vw,50px)]
              leading-none
            `}
          >
            {day}
          </p>
        </div>

        {/* RIGHT DIVIDER */}

        <div
          className="
            h-[clamp(24px,7vw,40px)]
            w-px
            bg-[#D4B7A4]
          "
        />

        {/* WEDDING TIME */}

        <div className="min-w-0 text-left">
          <p
            className={`
              ${cormorantGaramond.className}

              mb-[2%]

              text-[clamp(5px,1.3vw,9px)]

              uppercase
              leading-none
              tracking-[0.1em]
            `}
          >
            AT
          </p>

          {timeParts.length > 0 && (
            <div
              className={`
                ${cormorantGaramond.className}

                whitespace-nowrap

                text-[clamp(5px,1.3vw,9px)]
                leading-[1.3]
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

      {/* =====================================================
          YEAR
      ===================================================== */}

      <p
        className={`
          ${cormorantGaramond.className}

          mt-[4%]

          text-center
          text-[clamp(8px,1.8vw,13px)]

          leading-none
          tracking-[0.14em]
        `}
      >
        {year}
      </p>

      {/* =====================================================
          PORUWA CEREMONY
      ===================================================== */}

      {poruwaCeremonyTime && (
        <div
          className="
            mt-[5%]
            text-center
          "
        >
          <p
            className={`
              ${cormorantGaramond.className}

              whitespace-nowrap

              text-[clamp(5px,1.3vw,9px)]

              uppercase
              leading-[1.2]
              tracking-[0.1em]
            `}
          >
            Poruwa Ceremony
          </p>

          <p
            className={`
              ${cormorantGaramond.className}

              mt-[2%]

              text-[clamp(6px,1.5vw,10px)]

              leading-none
              tracking-[0.06em]
            `}
          >
            AT {poruwaCeremonyTime}
          </p>
        </div>
      )}
    </motion.div>
  );
}
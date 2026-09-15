
// // // // // // "use client";

// // // // // // import { motion } from "motion/react";
// // // // // // import { cormorantGaramond } from "@/lib/fonts";

// // // // // // type DateBlockProps = {
// // // // // //   weddingDate?: string;
// // // // // //   weddingTime?: string;
// // // // // //   poruwaCeremonyTime?: string;
// // // // // // };

// // // // // // export default function DateBlock({
// // // // // //   weddingDate,
// // // // // //   weddingTime,
// // // // // //   poruwaCeremonyTime,
// // // // // // }: DateBlockProps) {
// // // // // //   let date: Date | null = null;

// // // // // //   /* =========================================================
// // // // // //      SAFE DATE PARSING
// // // // // //   ========================================================= */

// // // // // //   if (weddingDate) {
// // // // // //     // Supports YYYY-MM-DD without timezone shifting
// // // // // //     const isoMatch = weddingDate.match(
// // // // // //       /^(\d{4})-(\d{2})-(\d{2})$/
// // // // // //     );

// // // // // //     if (isoMatch) {
// // // // // //       const year = Number(isoMatch[1]);
// // // // // //       const month = Number(isoMatch[2]);
// // // // // //       const day = Number(isoMatch[3]);

// // // // // //       const parsedDate = new Date(
// // // // // //         year,
// // // // // //         month - 1,
// // // // // //         day
// // // // // //       );

// // // // // //       if (!Number.isNaN(parsedDate.getTime())) {
// // // // // //         date = parsedDate;
// // // // // //       }
// // // // // //     } else {
// // // // // //       // Supports values such as October 08, 2026
// // // // // //       const parsedDate = new Date(weddingDate);

// // // // // //       if (!Number.isNaN(parsedDate.getTime())) {
// // // // // //         date = parsedDate;
// // // // // //       }
// // // // // //     }
// // // // // //   }

// // // // // //   /* =========================================================
// // // // // //      DATE VALUES
// // // // // //   ========================================================= */

// // // // // //   const year = date ? date.getFullYear() : "";
// // // // // //   const day = date ? date.getDate() : "";

// // // // // //   const weekday = date
// // // // // //     ? date
// // // // // //         .toLocaleDateString("en-US", {
// // // // // //           weekday: "short",
// // // // // //         })
// // // // // //         .toUpperCase()
// // // // // //     : "";

// // // // // //   const month = date
// // // // // //     ? date
// // // // // //         .toLocaleDateString("en-US", {
// // // // // //           month: "long",
// // // // // //         })
// // // // // //         .toUpperCase()
// // // // // //     : "";

// // // // // //   /* =========================================================
// // // // // //      WEDDING TIME

// // // // // //      Example:
// // // // // //      09:15 AM - 03:30 PM

// // // // // //      becomes:

// // // // // //      09:15 AM
// // // // // //      03:30 PM
// // // // // //   ========================================================= */

// // // // // //   const timeParts = weddingTime
// // // // // //     ? weddingTime
// // // // // //         .split(/\s*-\s*/)
// // // // // //         .map((time) => time.trim())
// // // // // //         .filter(Boolean)
// // // // // //     : [];

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       className="
// // // // // //         absolute
// // // // // //         left-1/2
// // // // // //         top-[46%]
// // // // // //         z-20

// // // // // //         w-[50%]
// // // // // //         max-w-[260px]

// // // // // //         -translate-x-1/2
// // // // // //         text-[#665B56]
// // // // // //       "
// // // // // //       initial={{
// // // // // //         opacity: 0,
// // // // // //         y: 18,
// // // // // //       }}
// // // // // //       whileInView={{
// // // // // //         opacity: 1,
// // // // // //         y: 0,
// // // // // //       }}
// // // // // //       viewport={{
// // // // // //         once: true,
// // // // // //         amount: 0.3,
// // // // // //       }}
// // // // // //       transition={{
// // // // // //         delay: 1,
// // // // // //         duration: 0.8,
// // // // // //         ease: [0.22, 1, 0.36, 1],
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* =====================================================
// // // // // //           MONTH
// // // // // //       ===================================================== */}

// // // // // //       <p
// // // // // //         className={`
// // // // // //           ${cormorantGaramond.className}

// // // // // //           text-center
// // // // // //           text-[clamp(8px,2.1vw,14px)]

// // // // // //           uppercase
// // // // // //           leading-none
// // // // // //           tracking-[0.18em]
// // // // // //         `}
// // // // // //       >
// // // // // //         {month}
// // // // // //       </p>

// // // // // //       {/* =====================================================
// // // // // //           DATE ROW
// // // // // //       ===================================================== */}

// // // // // //       <div
// // // // // //         className="
// // // // // //           mt-[4%]

// // // // // //           grid
// // // // // //           grid-cols-[1fr_1px_1fr_1px_1.35fr]
// // // // // //           items-center

// // // // // //           gap-[3%]
// // // // // //         "
// // // // // //       >
// // // // // //         {/* WEEKDAY */}

// // // // // //         <div className="min-w-0 text-right">
// // // // // //           <p
// // // // // //             className={`
// // // // // //               ${cormorantGaramond.className}

// // // // // //               whitespace-nowrap
// // // // // //               text-[clamp(7px,1.8vw,12px)]

// // // // // //               uppercase
// // // // // //               leading-none
// // // // // //               tracking-[0.08em]
// // // // // //             `}
// // // // // //           >
// // // // // //             {weekday}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* LEFT DIVIDER */}

// // // // // //         <div
// // // // // //           className="
// // // // // //             h-[clamp(24px,7vw,40px)]
// // // // // //             w-px
// // // // // //             bg-[#D4B7A4]
// // // // // //           "
// // // // // //         />

// // // // // //         {/* DAY */}

// // // // // //         <div className="min-w-0 text-center">
// // // // // //           <p
// // // // // //             className={`
// // // // // //               ${cormorantGaramond.className}

// // // // // //               text-[clamp(29px,8vw,50px)]
// // // // // //               leading-none
// // // // // //             `}
// // // // // //           >
// // // // // //             {day}
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* RIGHT DIVIDER */}

// // // // // //         <div
// // // // // //           className="
// // // // // //             h-[clamp(24px,7vw,40px)]
// // // // // //             w-px
// // // // // //             bg-[#D4B7A4]
// // // // // //           "
// // // // // //         />

// // // // // //         {/* WEDDING TIME */}

// // // // // //         <div className="min-w-0 text-left">
// // // // // //           <p
// // // // // //             className={`
// // // // // //               ${cormorantGaramond.className}

// // // // // //               mb-[2%]

// // // // // //               text-[clamp(5px,1.3vw,9px)]

// // // // // //               uppercase
// // // // // //               leading-none
// // // // // //               tracking-[0.1em]
// // // // // //             `}
// // // // // //           >
// // // // // //             AT
// // // // // //           </p>

// // // // // //           {timeParts.length > 0 && (
// // // // // //             <div
// // // // // //               className={`
// // // // // //                 ${cormorantGaramond.className}

// // // // // //                 whitespace-nowrap

// // // // // //                 text-[clamp(5px,1.3vw,9px)]
// // // // // //                 leading-[1.3]
// // // // // //               `}
// // // // // //             >
// // // // // //               {timeParts.map((time, index) => (
// // // // // //                 <p key={`${time}-${index}`}>
// // // // // //                   {time}
// // // // // //                 </p>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* =====================================================
// // // // // //           YEAR
// // // // // //       ===================================================== */}

// // // // // //       <p
// // // // // //         className={`
// // // // // //           ${cormorantGaramond.className}

// // // // // //           mt-[4%]

// // // // // //           text-center
// // // // // //           text-[clamp(8px,1.8vw,13px)]

// // // // // //           leading-none
// // // // // //           tracking-[0.14em]
// // // // // //         `}
// // // // // //       >
// // // // // //         {year}
// // // // // //       </p>

// // // // // //       {/* =====================================================
// // // // // //           PORUWA CEREMONY
// // // // // //       ===================================================== */}

// // // // // //       {poruwaCeremonyTime && (
// // // // // //         <div
// // // // // //           className="
// // // // // //             mt-[5%]
// // // // // //             text-center
// // // // // //           "
// // // // // //         >
// // // // // //           <p
// // // // // //             className={`
// // // // // //               ${cormorantGaramond.className}

// // // // // //               whitespace-nowrap

// // // // // //               text-[clamp(5px,1.3vw,9px)]

// // // // // //               uppercase
// // // // // //               leading-[1.2]
// // // // // //               tracking-[0.1em]
// // // // // //             `}
// // // // // //           >
// // // // // //             Poruwa Ceremony
// // // // // //           </p>

// // // // // //           <p
// // // // // //             className={`
// // // // // //               ${cormorantGaramond.className}

// // // // // //               mt-[2%]

// // // // // //               text-[clamp(6px,1.5vw,10px)]

// // // // // //               leading-none
// // // // // //               tracking-[0.06em]
// // // // // //             `}
// // // // // //           >
// // // // // //             AT {poruwaCeremonyTime}
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { motion } from "motion/react";
// // // // // import { cormorantGaramond } from "@/lib/fonts";

// // // // // type DateBlockProps = {
// // // // //   weddingDate?: string;
// // // // //   weddingTime?: string;
// // // // //   poruwaCeremonyTime?: string;
// // // // // };

// // // // // export default function DateBlock({
// // // // //   weddingDate,
// // // // //   weddingTime,
// // // // //   poruwaCeremonyTime,
// // // // // }: DateBlockProps) {
// // // // //   let date: Date | null = null;

// // // // //   if (weddingDate) {
// // // // //     const isoMatch = weddingDate.match(
// // // // //       /^(\d{4})-(\d{2})-(\d{2})$/
// // // // //     );

// // // // //     if (isoMatch) {
// // // // //       const year = Number(isoMatch[1]);
// // // // //       const month = Number(isoMatch[2]);
// // // // //       const day = Number(isoMatch[3]);

// // // // //       const parsedDate = new Date(
// // // // //         year,
// // // // //         month - 1,
// // // // //         day
// // // // //       );

// // // // //       if (!Number.isNaN(parsedDate.getTime())) {
// // // // //         date = parsedDate;
// // // // //       }
// // // // //     } else {
// // // // //       const parsedDate = new Date(weddingDate);

// // // // //       if (!Number.isNaN(parsedDate.getTime())) {
// // // // //         date = parsedDate;
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   const year = date ? date.getFullYear() : "";
// // // // //   const day = date ? date.getDate() : "";

// // // // //   const weekday = date
// // // // //     ? date
// // // // //         .toLocaleDateString("en-US", {
// // // // //           weekday: "short",
// // // // //         })
// // // // //         .toUpperCase()
// // // // //     : "";

// // // // //   const month = date
// // // // //     ? date
// // // // //         .toLocaleDateString("en-US", {
// // // // //           month: "long",
// // // // //         })
// // // // //         .toUpperCase()
// // // // //     : "";

// // // // //   const timeParts = weddingTime
// // // // //     ? weddingTime
// // // // //         .split(/\s*-\s*/)
// // // // //         .map((time) => time.trim())
// // // // //         .filter(Boolean)
// // // // //     : [];

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="
// // // // //         absolute
// // // // //         left-1/2
// // // // //         top-[46%]
// // // // //         z-20

// // // // //         w-[56%]
// // // // //         max-w-[290px]

// // // // //         -translate-x-1/2

// // // // //         text-[#665B56]
// // // // //       "
// // // // //       initial={{
// // // // //         opacity: 0,
// // // // //         y: 18,
// // // // //       }}
// // // // //       whileInView={{
// // // // //         opacity: 1,
// // // // //         y: 0,
// // // // //       }}
// // // // //       viewport={{
// // // // //         once: true,
// // // // //         amount: 0.3,
// // // // //       }}
// // // // //       transition={{
// // // // //         delay: 1,
// // // // //         duration: 0.8,
// // // // //         ease: [0.22, 1, 0.36, 1],
// // // // //       }}
// // // // //     >
// // // // //       {/* MONTH */}

// // // // //       <p
// // // // //         className={`
// // // // //           ${cormorantGaramond.className}

// // // // //           text-center

// // // // //           text-[clamp(10px,3vw,15px)]

// // // // //           uppercase
// // // // //           leading-none
// // // // //           tracking-[0.16em]
// // // // //         `}
// // // // //       >
// // // // //         {month}
// // // // //       </p>

// // // // //       {/* DATE ROW */}

// // // // //       <div
// // // // //         className="
// // // // //           mt-[5%]

// // // // //           grid
// // // // //           grid-cols-[1fr_1px_1.15fr_1px_1.35fr]

// // // // //           items-center

// // // // //           gap-[3%]
// // // // //         "
// // // // //       >
// // // // //         {/* WEEKDAY */}

// // // // //         <div className="min-w-0 text-right">
// // // // //           <p
// // // // //             className={`
// // // // //               ${cormorantGaramond.className}

// // // // //               whitespace-nowrap

// // // // //               text-[clamp(9px,2.6vw,13px)]

// // // // //               uppercase
// // // // //               leading-none
// // // // //               tracking-[0.07em]
// // // // //             `}
// // // // //           >
// // // // //             {weekday}
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* DIVIDER */}

// // // // //         <div
// // // // //           className="
// // // // //             h-[clamp(31px,9vw,46px)]
// // // // //             w-px
// // // // //             bg-[#D4B7A4]
// // // // //           "
// // // // //         />

// // // // //         {/* DAY */}

// // // // //         <div className="min-w-0 text-center">
// // // // //           <p
// // // // //             className={`
// // // // //               ${cormorantGaramond.className}

// // // // //               text-[clamp(36px,11vw,56px)]

// // // // //               leading-[0.85]
// // // // //             `}
// // // // //           >
// // // // //             {day}
// // // // //           </p>
// // // // //         </div>

// // // // //         {/* DIVIDER */}

// // // // //         <div
// // // // //           className="
// // // // //             h-[clamp(31px,9vw,46px)]
// // // // //             w-px
// // // // //             bg-[#D4B7A4]
// // // // //           "
// // // // //         />

// // // // //         {/* WEDDING TIME */}

// // // // //         <div className="min-w-0 text-left">
// // // // //           <p
// // // // //             className={`
// // // // //               ${cormorantGaramond.className}

// // // // //               mb-[4%]

// // // // //               text-[clamp(7px,1.9vw,10px)]

// // // // //               uppercase
// // // // //               leading-none
// // // // //               tracking-[0.1em]
// // // // //             `}
// // // // //           >
// // // // //             AT
// // // // //           </p>

// // // // //           {timeParts.length > 0 && (
// // // // //             <div
// // // // //               className={`
// // // // //                 ${cormorantGaramond.className}

// // // // //                 whitespace-nowrap

// // // // //                 text-[clamp(7px,1.9vw,10px)]

// // // // //                 leading-[1.3]
// // // // //               `}
// // // // //             >
// // // // //               {timeParts.map((time, index) => (
// // // // //                 <p key={`${time}-${index}`}>
// // // // //                   {time}
// // // // //                 </p>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* YEAR */}

// // // // //       <p
// // // // //         className={`
// // // // //           ${cormorantGaramond.className}

// // // // //           mt-[5%]

// // // // //           text-center

// // // // //           text-[clamp(10px,2.7vw,14px)]

// // // // //           leading-none
// // // // //           tracking-[0.14em]
// // // // //         `}
// // // // //       >
// // // // //         {year}
// // // // //       </p>

// // // // //       {/* PORUWA CEREMONY */}

// // // // //       {poruwaCeremonyTime && (
// // // // //         <div
// // // // //           className="
// // // // //             mt-[6%]
// // // // //             text-center
// // // // //           "
// // // // //         >
// // // // //           <p
// // // // //             className={`
// // // // //               ${cormorantGaramond.className}

// // // // //               whitespace-nowrap

// // // // //               text-[clamp(7px,1.9vw,10px)]

// // // // //               uppercase
// // // // //               leading-[1.2]
// // // // //               tracking-[0.09em]
// // // // //             `}
// // // // //           >
// // // // //             Poruwa Ceremony
// // // // //           </p>

// // // // //           <p
// // // // //             className={`
// // // // //               ${cormorantGaramond.className}

// // // // //               mt-[3%]

// // // // //               text-[clamp(8px,2.2vw,11px)]

// // // // //               leading-none
// // // // //               tracking-[0.06em]
// // // // //             `}
// // // // //           >
// // // // //             AT {poruwaCeremonyTime}
// // // // //           </p>
// // // // //         </div>
// // // // //       )}
// // // // //     </motion.div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { motion } from "motion/react";
// // // // import { cormorantGaramond } from "@/lib/fonts";

// // // // type DateBlockProps = {
// // // //   weddingDate?: string;
// // // //   weddingTime?: string;
// // // //   poruwaCeremonyTime?: string;
// // // // };

// // // // export default function DateBlock({
// // // //   weddingDate,
// // // //   weddingTime,
// // // //   poruwaCeremonyTime,
// // // // }: DateBlockProps) {
// // // //   let date: Date | null = null;

// // // //   // =========================================================
// // // //   // SAFE DATE PARSING
// // // //   // =========================================================

// // // //   if (weddingDate) {
// // // //     const isoMatch = weddingDate.match(
// // // //       /^(\d{4})-(\d{2})-(\d{2})$/
// // // //     );

// // // //     if (isoMatch) {
// // // //       const year = Number(isoMatch[1]);
// // // //       const month = Number(isoMatch[2]);
// // // //       const day = Number(isoMatch[3]);

// // // //       const parsedDate = new Date(
// // // //         year,
// // // //         month - 1,
// // // //         day
// // // //       );

// // // //       if (!Number.isNaN(parsedDate.getTime())) {
// // // //         date = parsedDate;
// // // //       }
// // // //     } else {
// // // //       const parsedDate = new Date(weddingDate);

// // // //       if (!Number.isNaN(parsedDate.getTime())) {
// // // //         date = parsedDate;
// // // //       }
// // // //     }
// // // //   }

// // // //   // =========================================================
// // // //   // DATE VALUES
// // // //   // =========================================================

// // // //   const year = date ? date.getFullYear() : "";
// // // //   const day = date ? date.getDate() : "";

// // // //   const weekday = date
// // // //     ? date
// // // //         .toLocaleDateString("en-US", {
// // // //           weekday: "short",
// // // //         })
// // // //         .toUpperCase()
// // // //     : "";

// // // //   const month = date
// // // //     ? date
// // // //         .toLocaleDateString("en-US", {
// // // //           month: "long",
// // // //         })
// // // //         .toUpperCase()
// // // //     : "";

// // // //   // =========================================================
// // // //   // WEDDING TIME
// // // //   // =========================================================

// // // //   const timeParts = weddingTime
// // // //     ? weddingTime
// // // //         .split(/\s*-\s*/)
// // // //         .map((time) => time.trim())
// // // //         .filter(Boolean)
// // // //     : [];

// // // //   return (
// // // //     <motion.div
// // // //       className="
// // // //         absolute
// // // //         left-1/2
// // // //         top-[45%]
// // // //         z-20

// // // //         w-[62%]
// // // //         max-w-[300px]

// // // //         -translate-x-1/2

// // // //         text-[#554B47]
// // // //       "
// // // //       initial={{
// // // //         opacity: 0,
// // // //         y: 18,
// // // //       }}
// // // //       whileInView={{
// // // //         opacity: 1,
// // // //         y: 0,
// // // //       }}
// // // //       viewport={{
// // // //         once: true,
// // // //         amount: 0.3,
// // // //       }}
// // // //       transition={{
// // // //         delay: 1,
// // // //         duration: 0.8,
// // // //         ease: [0.22, 1, 0.36, 1],
// // // //       }}
// // // //     >
// // // //       {/* MONTH */}

// // // //       <p
// // // //         className={`
// // // //           ${cormorantGaramond.className}

// // // //           text-center

// // // //           text-[clamp(11px,3.3vw,16px)]

// // // //           font-semibold
// // // //           uppercase

// // // //           leading-none
// // // //           tracking-[0.13em]
// // // //         `}
// // // //       >
// // // //         {month}
// // // //       </p>

// // // //       {/* DATE ROW */}

// // // //       <div
// // // //         className="
// // // //           mt-[5%]

// // // //           grid
// // // //           grid-cols-[1fr_1px_1.15fr_1px_1.45fr]

// // // //           items-center
// // // //           gap-[3%]
// // // //         "
// // // //       >
// // // //         {/* WEEKDAY */}

// // // //         <div className="min-w-0 text-right">
// // // //           <p
// // // //             className={`
// // // //               ${cormorantGaramond.className}

// // // //               whitespace-nowrap

// // // //               text-[clamp(10px,3vw,14px)]

// // // //               font-semibold
// // // //               uppercase

// // // //               leading-none
// // // //               tracking-[0.06em]
// // // //             `}
// // // //           >
// // // //             {weekday}
// // // //           </p>
// // // //         </div>

// // // //         {/* LEFT DIVIDER */}

// // // //         <div
// // // //           className="
// // // //             h-[clamp(34px,10vw,48px)]
// // // //             w-px
// // // //             bg-[#C9A990]
// // // //           "
// // // //         />

// // // //         {/* DAY */}

// // // //         <div className="min-w-0 text-center">
// // // //           <p
// // // //             className={`
// // // //               ${cormorantGaramond.className}

// // // //               text-[clamp(40px,12vw,60px)]

// // // //               font-medium
// // // //               leading-[0.8]
// // // //             `}
// // // //           >
// // // //             {day}
// // // //           </p>
// // // //         </div>

// // // //         {/* RIGHT DIVIDER */}

// // // //         <div
// // // //           className="
// // // //             h-[clamp(34px,10vw,48px)]
// // // //             w-px
// // // //             bg-[#C9A990]
// // // //           "
// // // //         />

// // // //         {/* TIME */}

// // // //         <div className="min-w-0 text-left">
// // // //           <p
// // // //             className={`
// // // //               ${cormorantGaramond.className}

// // // //               mb-[4%]

// // // //               text-[clamp(8px,2.3vw,11px)]

// // // //               font-semibold
// // // //               uppercase

// // // //               leading-none
// // // //               tracking-[0.08em]
// // // //             `}
// // // //           >
// // // //             AT
// // // //           </p>

// // // //           {timeParts.length > 0 && (
// // // //             <div
// // // //               className={`
// // // //                 ${cormorantGaramond.className}

// // // //                 whitespace-nowrap

// // // //                 text-[clamp(8px,2.3vw,11px)]

// // // //                 font-medium
// // // //                 leading-[1.35]
// // // //               `}
// // // //             >
// // // //               {timeParts.map((time, index) => (
// // // //                 <p key={`${time}-${index}`}>
// // // //                   {time}
// // // //                 </p>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* YEAR */}

// // // //       <p
// // // //         className={`
// // // //           ${cormorantGaramond.className}

// // // //           mt-[6%]

// // // //           text-center

// // // //           text-[clamp(11px,3vw,15px)]

// // // //           font-semibold

// // // //           leading-none
// // // //           tracking-[0.12em]
// // // //         `}
// // // //       >
// // // //         {year}
// // // //       </p>

// // // //       {/* PORUWA CEREMONY */}

// // // //       {poruwaCeremonyTime && (
// // // //         <div
// // // //           className="
// // // //             mt-[7%]
// // // //             text-center
// // // //           "
// // // //         >
// // // //           <p
// // // //             className={`
// // // //               ${cormorantGaramond.className}

// // // //               whitespace-nowrap

// // // //               text-[clamp(9px,2.6vw,12px)]

// // // //               font-semibold
// // // //               uppercase

// // // //               leading-[1.2]
// // // //               tracking-[0.07em]
// // // //             `}
// // // //           >
// // // //             Poruwa Ceremony
// // // //           </p>

// // // //           <p
// // // //             className={`
// // // //               ${cormorantGaramond.className}

// // // //               mt-[3%]

// // // //               text-[clamp(9px,2.7vw,13px)]

// // // //               font-semibold

// // // //               leading-none
// // // //               tracking-[0.05em]
// // // //             `}
// // // //           >
// // // //             AT {poruwaCeremonyTime}
// // // //           </p>
// // // //         </div>
// // // //       )}
// // // //     </motion.div>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "motion/react";
// // // import { cormorantGaramond } from "@/lib/fonts";

// // // type DateBlockProps = {
// // //   weddingDate?: string;
// // //   weddingTime?: string;
// // //   poruwaCeremonyTime?: string;
// // // };

// // // export default function DateBlock({
// // //   weddingDate,
// // //   weddingTime,
// // //   poruwaCeremonyTime,
// // // }: DateBlockProps) {
// // //   let date: Date | null = null;

// // //   if (weddingDate) {
// // //     const isoMatch = weddingDate.match(
// // //       /^(\d{4})-(\d{2})-(\d{2})$/
// // //     );

// // //     if (isoMatch) {
// // //       const year = Number(isoMatch[1]);
// // //       const month = Number(isoMatch[2]);
// // //       const day = Number(isoMatch[3]);

// // //       const parsedDate = new Date(
// // //         year,
// // //         month - 1,
// // //         day
// // //       );

// // //       if (!Number.isNaN(parsedDate.getTime())) {
// // //         date = parsedDate;
// // //       }
// // //     } else {
// // //       const parsedDate = new Date(weddingDate);

// // //       if (!Number.isNaN(parsedDate.getTime())) {
// // //         date = parsedDate;
// // //       }
// // //     }
// // //   }

// // //   const year = date ? date.getFullYear() : "";
// // //   const day = date ? date.getDate() : "";

// // //   const weekday = date
// // //     ? date
// // //         .toLocaleDateString("en-US", {
// // //           weekday: "short",
// // //         })
// // //         .toUpperCase()
// // //     : "";

// // //   const month = date
// // //     ? date
// // //         .toLocaleDateString("en-US", {
// // //           month: "long",
// // //         })
// // //         .toUpperCase()
// // //     : "";

// // //   const timeParts = weddingTime
// // //     ? weddingTime
// // //         .split(/\s*-\s*/)
// // //         .map((time) => time.trim())
// // //         .filter(Boolean)
// // //     : [];

// // //   return (
// // //     <motion.div
// // //       className="
// // //         absolute
// // //         left-1/2
// // //         top-[44.5%]
// // //         z-20

// // //         w-[61%]
// // //         -translate-x-1/2

// // //         text-[#554B47]
// // //       "
// // //       initial={{
// // //         opacity: 0,
// // //         y: 15,
// // //       }}
// // //       whileInView={{
// // //         opacity: 1,
// // //         y: 0,
// // //       }}
// // //       viewport={{
// // //         once: true,
// // //         amount: 0.3,
// // //       }}
// // //       transition={{
// // //         delay: 1,
// // //         duration: 0.8,
// // //         ease: [0.22, 1, 0.36, 1],
// // //       }}
// // //     >
// // //       {/* MONTH */}

// // //       <p
// // //         className={`
// // //           ${cormorantGaramond.className}

// // //           text-center
// // //           text-[clamp(10px,3vw,15px)]

// // //           font-semibold
// // //           uppercase

// // //           leading-none
// // //           tracking-[0.12em]
// // //         `}
// // //       >
// // //         {month}
// // //       </p>

// // //       {/* DATE / DAY / TIME */}

// // //       <div
// // //         className="
// // //           mt-[4%]

// // //           grid
// // //           grid-cols-[1fr_1px_1.15fr_1px_1.5fr]

// // //           items-center
// // //           gap-[3%]
// // //         "
// // //       >
// // //         {/* WEEKDAY */}

// // //         <div className="min-w-0 text-right">
// // //           <p
// // //             className={`
// // //               ${cormorantGaramond.className}

// // //               whitespace-nowrap

// // //               text-[clamp(9px,2.7vw,13px)]

// // //               font-semibold
// // //               uppercase

// // //               leading-none
// // //               tracking-[0.05em]
// // //             `}
// // //           >
// // //             {weekday}
// // //           </p>
// // //         </div>

// // //         {/* DIVIDER */}

// // //         <div
// // //           className="
// // //             h-[clamp(31px,9vw,44px)]
// // //             w-px
// // //             bg-[#C9A990]
// // //           "
// // //         />

// // //         {/* DAY */}

// // //         <div className="min-w-0 text-center">
// // //           <p
// // //             className={`
// // //               ${cormorantGaramond.className}

// // //               text-[clamp(37px,11vw,54px)]

// // //               font-medium
// // //               leading-[0.8]
// // //             `}
// // //           >
// // //             {day}
// // //           </p>
// // //         </div>

// // //         {/* DIVIDER */}

// // //         <div
// // //           className="
// // //             h-[clamp(31px,9vw,44px)]
// // //             w-px
// // //             bg-[#C9A990]
// // //           "
// // //         />

// // //         {/* TIME */}

// // //         <div className="min-w-0 text-left">
// // //           <p
// // //             className={`
// // //               ${cormorantGaramond.className}

// // //               mb-[3%]

// // //               text-[clamp(7px,2.1vw,10px)]

// // //               font-semibold
// // //               uppercase

// // //               leading-none
// // //               tracking-[0.07em]
// // //             `}
// // //           >
// // //             AT
// // //           </p>

// // //           {timeParts.length > 0 && (
// // //             <div
// // //               className={`
// // //                 ${cormorantGaramond.className}

// // //                 whitespace-nowrap

// // //                 text-[clamp(7px,2.1vw,10px)]

// // //                 font-medium
// // //                 leading-[1.25]
// // //               `}
// // //             >
// // //               {timeParts.map((time, index) => (
// // //                 <p key={`${time}-${index}`}>
// // //                   {time}
// // //                 </p>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* YEAR */}

// // //       <p
// // //         className={`
// // //           ${cormorantGaramond.className}

// // //           mt-[5%]

// // //           text-center
// // //           text-[clamp(9px,2.7vw,13px)]

// // //           font-semibold

// // //           leading-none
// // //           tracking-[0.12em]
// // //         `}
// // //       >
// // //         {year}
// // //       </p>

// // //       {/* PORUWA */}

// // //       {poruwaCeremonyTime && (
// // //         <div className="mt-[6%] text-center">
// // //           <p
// // //             className={`
// // //               ${cormorantGaramond.className}

// // //               text-[clamp(8px,2.3vw,11px)]

// // //               font-semibold
// // //               uppercase

// // //               leading-[1.15]
// // //               tracking-[0.06em]
// // //             `}
// // //           >
// // //             Poruwa Ceremony
// // //           </p>

// // //           <p
// // //             className={`
// // //               ${cormorantGaramond.className}

// // //               mt-[2%]

// // //               text-[clamp(8px,2.4vw,11px)]

// // //               font-semibold

// // //               leading-none
// // //               tracking-[0.04em]
// // //             `}
// // //           >
// // //             AT {poruwaCeremonyTime}
// // //           </p>
// // //         </div>
// // //       )}
// // //     </motion.div>
// // //   );
// // // }

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
// //       const parsedDate = new Date(weddingDate);

// //       if (!Number.isNaN(parsedDate.getTime())) {
// //         date = parsedDate;
// //       }
// //     }
// //   }

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
// //         top-[44%]
// //         z-20

// //         w-[63%]

// //         -translate-x-1/2

// //         text-[#554B47]
// //       "
// //       initial={{
// //         opacity: 0,
// //         y: 15,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       viewport={{
// //         once: true,
// //         amount: 0.3,
// //       }}
// //       transition={{
// //         delay: 1,
// //         duration: 0.8,
// //         ease: [0.22,1,0.36,1],
// //       }}
// //     >
// //       {/* MONTH */}

// //       <p
// //         className={`
// //           ${cormorantGaramond.className}

// //           text-center

// //           text-[clamp(10px,3vw,15px)]

// //           font-semibold
// //           uppercase

// //           leading-none
// //           tracking-[0.12em]
// //         `}
// //       >
// //         {month}
// //       </p>

// //       {/* DATE ROW */}

// //       <div
// //         className="
// //           mt-[4%]

// //           grid
// //           grid-cols-[1fr_1px_1.15fr_1px_1.5fr]

// //           items-center

// //           gap-[3%]
// //         "
// //       >
// //         {/* WEEKDAY */}

// //         <div className="min-w-0 text-right">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}

// //               whitespace-nowrap

// //               text-[clamp(9px,2.7vw,13px)]

// //               font-semibold
// //               uppercase

// //               leading-none
// //               tracking-[0.05em]
// //             `}
// //           >
// //             {weekday}
// //           </p>
// //         </div>

// //         {/* DIVIDER */}

// //         <div
// //           className="
// //             h-[clamp(30px,8.5vw,43px)]
// //             w-px
// //             bg-[#C9A990]
// //           "
// //         />

// //         {/* DAY */}

// //         <div className="min-w-0 text-center">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}

// //               text-[clamp(38px,11vw,55px)]

// //               font-medium

// //               leading-[0.8]
// //             `}
// //           >
// //             {day}
// //           </p>
// //         </div>

// //         {/* DIVIDER */}

// //         <div
// //           className="
// //             h-[clamp(30px,8.5vw,43px)]
// //             w-px
// //             bg-[#C9A990]
// //           "
// //         />

// //         {/* TIME */}

// //         <div className="min-w-0 text-left">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}

// //               mb-[2%]

// //               text-[clamp(7px,2vw,10px)]

// //               font-semibold
// //               uppercase

// //               leading-none
// //               tracking-[0.06em]
// //             `}
// //           >
// //             AT
// //           </p>

// //           {timeParts.length > 0 && (
// //             <div
// //               className={`
// //                 ${cormorantGaramond.className}

// //                 whitespace-nowrap

// //                 text-[clamp(7px,2vw,10px)]

// //                 font-medium

// //                 leading-[1.2]
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

// //       {/* YEAR */}

// //       <p
// //         className={`
// //           ${cormorantGaramond.className}

// //           mt-[4%]

// //           text-center

// //           text-[clamp(9px,2.6vw,13px)]

// //           font-semibold

// //           leading-none
// //           tracking-[0.1em]
// //         `}
// //       >
// //         {year}
// //       </p>

// //       {/* PORUWA CEREMONY */}

// //       {poruwaCeremonyTime && (
// //         <div className="mt-[5%] text-center">
// //           <p
// //             className={`
// //               ${cormorantGaramond.className}

// //               text-[clamp(8px,2.25vw,11px)]

// //               font-semibold
// //               uppercase

// //               leading-[1.1]
// //               tracking-[0.055em]
// //             `}
// //           >
// //             Poruwa Ceremony
// //           </p>

// //           <p
// //             className={`
// //               ${cormorantGaramond.className}

// //               mt-[2%]

// //               text-[clamp(8px,2.3vw,11px)]

// //               font-semibold

// //               leading-none
// //               tracking-[0.04em]
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
//         top-[43%]
//         z-20
//         w-[70%]
//         -translate-x-1/2
//         text-[#554B47]
//       "
//       initial={{
//         opacity: 0,
//         y: 15,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.3,
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
//           text-[clamp(11px,3.2vw,16px)]
//           font-semibold
//           uppercase
//           leading-none
//           tracking-[0.11em]
//         `}
//       >
//         {month}
//       </p>

//       {/* DATE ROW */}

//       <div
//         className="
//           mt-[5%]
//           grid
//           grid-cols-[0.9fr_1px_1fr_1px_1.6fr]
//           items-center
//           gap-[3%]
//         "
//       >
//         {/* WEEKDAY */}

//         <div className="min-w-0 text-right">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               whitespace-nowrap
//               text-[clamp(10px,2.8vw,14px)]
//               font-semibold
//               uppercase
//               leading-none
//               tracking-[0.04em]
//             `}
//           >
//             {weekday}
//           </p>
//         </div>

//         {/* LEFT DIVIDER */}

//         <div
//           className="
//             h-[clamp(34px,9.5vw,48px)]
//             w-px
//             bg-[#C9A990]
//           "
//         />

//         {/* DAY */}

//         <div className="min-w-0 text-center">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[clamp(42px,12vw,60px)]
//               font-medium
//               leading-[0.8]
//             `}
//           >
//             {day}
//           </p>
//         </div>

//         {/* RIGHT DIVIDER */}

//         <div
//           className="
//             h-[clamp(34px,9.5vw,48px)]
//             w-px
//             bg-[#C9A990]
//           "
//         />

//         {/* TIME */}

//         <div className="min-w-0 text-left">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mb-[3%]
//               text-[clamp(8px,2.2vw,11px)]
//               font-semibold
//               uppercase
//               leading-none
//               tracking-[0.06em]
//             `}
//           >
//             AT
//           </p>

//           {timeParts.length > 0 && (
//             <div
//               className={`
//                 ${cormorantGaramond.className}
//                 whitespace-nowrap
//                 text-[clamp(8px,2.2vw,11px)]
//                 font-semibold
//                 leading-[1.25]
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
//           mt-[5%]
//           text-center
//           text-[clamp(10px,2.8vw,14px)]
//           font-semibold
//           leading-none
//           tracking-[0.1em]
//         `}
//       >
//         {year}
//       </p>

//       {/* PORUWA */}

//       {poruwaCeremonyTime && (
//         <div className="mt-[7%] text-center">
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[clamp(9px,2.5vw,12px)]
//               font-semibold
//               uppercase
//               leading-[1.1]
//               tracking-[0.05em]
//             `}
//           >
//             Poruwa Ceremony
//           </p>

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mt-[3%]
//               text-[clamp(9px,2.5vw,12px)]
//               font-semibold
//               leading-none
//               tracking-[0.03em]
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
     DATE PARSING
  ========================================================= */

  if (weddingDate) {
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
     TIME
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
        top-[43%]
        z-20

        w-[72%]

        -translate-x-1/2

        text-[#554B47]
      "
      initial={{
        opacity: 0,
        y: 15,
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

          text-[clamp(11px,3.2vw,16px)]

          font-semibold
          uppercase

          leading-none

          tracking-[0.11em]
        `}
      >
        {month}
      </p>

      {/* =====================================================
          CENTERED DATE ROW
      ===================================================== */}

      <div
        className="
          mx-auto
          mt-[5%]

          grid
          w-full

          grid-cols-[1fr_1px_1fr_1px_1fr]

          items-center

          gap-[4%]
        "
      >
        {/* =========================
            WEEKDAY
        ========================= */}

        <div
          className="
            flex
            min-w-0
            items-center
            justify-end
          "
        >
          <p
            className={`
              ${cormorantGaramond.className}

              whitespace-nowrap

              text-[clamp(10px,2.8vw,14px)]

              font-bold
              uppercase

              leading-none

              tracking-[0.05em]
            `}
          >
            {weekday}
          </p>
        </div>

        {/* =========================
            LEFT DIVIDER
        ========================= */}

        <div
          className="
            h-[clamp(34px,9.5vw,48px)]
            w-px

            bg-[#B4872C]/60
          "
        />

        {/* =========================
            DAY
        ========================= */}

        <div
          className="
            flex
            min-w-0
            items-center
            justify-center
          "
        >
          <p
            className={`
              ${cormorantGaramond.className}

              text-[clamp(44px,12.5vw,62px)]

              font-bold

              leading-[0.8]

              text-[#4D4541]
            `}
          >
            {day}
          </p>
        </div>

        {/* =========================
            RIGHT DIVIDER
        ========================= */}

        <div
          className="
            h-[clamp(34px,9.5vw,48px)]
            w-px

            bg-[#B4872C]/60
          "
        />

        {/* =========================
            TIME
        ========================= */}

        <div
          className="
            flex
            min-w-0
            flex-col
            items-start
            justify-center
          "
        >
          <p
            className={`
              ${cormorantGaramond.className}

              mb-[3%]

              text-[clamp(8px,2.15vw,11px)]

              font-bold
              uppercase

              leading-none

              tracking-[0.05em]
            `}
          >
            AT
          </p>

          {timeParts.length > 0 && (
            <div
              className={`
                ${cormorantGaramond.className}

                whitespace-nowrap

                text-[clamp(8px,2.15vw,11px)]

                font-semibold

                leading-[1.25]
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

          mt-[5%]

          text-center

          text-[clamp(10px,2.8vw,14px)]

          font-bold

          leading-none

          tracking-[0.12em]
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
            mt-[7%]
            text-center
          "
        >
          <p
            className={`
              ${cormorantGaramond.className}

              text-[clamp(9px,2.5vw,12px)]

              font-semibold
              uppercase

              leading-[1.1]

              tracking-[0.05em]
            `}
          >
            Poruwa Ceremony
          </p>

          <p
            className={`
              ${cormorantGaramond.className}

              mt-[3%]

              text-[clamp(9px,2.5vw,12px)]

              font-semibold

              leading-none

              tracking-[0.03em]
            `}
          >
            AT {poruwaCeremonyTime}
          </p>
        </div>
      )}
    </motion.div>
  );
}


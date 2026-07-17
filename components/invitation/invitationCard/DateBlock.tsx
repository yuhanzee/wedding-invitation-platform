// // import { cormorantGaramond } from "@/lib/fonts";

// // type DateBlockProps = {
// //   weddingDate?: string;
// //   weddingTime?: string;
// // };

// // export default function DateBlock({
// //   weddingDate,
// //   weddingTime,
// // }: DateBlockProps) {
// //   // Parse date safely in local time zone to avoid UTC offset shifts
// //   let date = new Date();
// //   if (weddingDate) {
// //     if (weddingDate.includes("-")) {
// //       const parts = weddingDate.split("-");
// //       if (parts.length === 3) {
// //         const y = parseInt(parts[0], 10);
// //         const m = parseInt(parts[1], 10) - 1;
// //         const d = parseInt(parts[2], 10);
// //         date = new Date(y, m, d);
// //       } else {
// //         date = new Date(weddingDate);
// //       }
// //     } else {
// //       date = new Date(weddingDate);
// //     }
// //   }

// //   const year = date.getFullYear();
// //   const day = date.getDate();
// //   const weekday = date
// //     .toLocaleDateString("en-US", { weekday: "short" })
// //     .toUpperCase();
// //   const month = date
// //     .toLocaleDateString("en-US", { month: "long" })
// //     .toUpperCase();

// //   return (
// //     <div className="absolute top-[182px] left-0 right-0 flex flex-col items-center select-none text-[#6C625E]">
// //       <p className={`${cormorantGaramond.className} text-[13px] tracking-[0.2em] font-semibold opacity-90`}>
// //         {year}
// //       </p>

// //       <div className="mt-3 flex items-center justify-center gap-3.5 w-full">
// //         <span className={`${cormorantGaramond.className} text-[13px] tracking-[0.1em] font-semibold opacity-95 w-[65px] text-right pr-1`}>
// //           {weekday}
// //         </span>

// //         <div className="w-[1px] h-[34px] bg-[#B89B86]/60"></div>

// //         <span className={`${cormorantGaramond.className} text-[48px] leading-none font-light px-1.5`}>
// //           {day}
// //         </span>

// //         <div className="w-[1px] h-[34px] bg-[#B89B86]/60"></div>

// //         <div className={`${cormorantGaramond.className} flex flex-col items-start w-[65px] pl-1 justify-center`}>
// //           <span className="text-[10px] tracking-[0.1em] font-semibold leading-none opacity-80 mb-0.5">
// //             AT
// //           </span>
// //           <span className="text-[12px] tracking-[0.05em] font-semibold leading-none opacity-95">
// //             {weddingTime || "5 PM"}
// //           </span>
// //         </div>
// //       </div>

// //       <p className={`${cormorantGaramond.className} mt-3.5 text-[14px] tracking-[0.25em] font-bold opacity-90`}>
// //         {month}
// //       </p>
// //     </div>
// //   );
// // }

// import { cormorantGaramond } from "@/lib/fonts";

// type DateBlockProps = {
//   weddingDate?: string;
//   weddingTime?: string;
// };

// export default function DateBlock({
//   weddingDate,
//   weddingTime,
// }: DateBlockProps) {
//   let date = new Date();

//   if (weddingDate) {
//     const [y, m, d] = weddingDate.split("-").map(Number);
//     date = new Date(y, m - 1, d);
//   }

//   const year = date.getFullYear();
//   const day = date.getDate();

//   const weekday = date
//     .toLocaleDateString("en-US", { weekday: "short" })
//     .toUpperCase();

//   const month = date
//     .toLocaleDateString("en-US", { month: "long" })
//     .toUpperCase();

//   return (
//     <div className="absolute top-[199px] left-1/2 -translate-x-1/2 w-[165px] text-[#665B56] z-20">

//       <p
//         className={`${cormorantGaramond.className} text-center text-[18px] tracking-[0.1em]`}
//       >
//         {year}
//       </p>

//       <div className="mt-[0px] flex justify-between items-center">

//         <div className="w-[36px] text-right">
//           <div
//             className={`${cormorantGaramond.className} text-[12px] uppercase`}
//           >
//             {weekday}
//           </div>
//         </div>

//         <div className="w-px h-[30px] bg-[#D4B7A4]" />

//         <div
//           className={`${cormorantGaramond.className} text-[46px] leading-none`}
//         >
//           {day}
//         </div>

//         <div className="w-px h-[30px] bg-[#D4B7A4]" />

//         <div className="w-[36px]">
//   <div
//     className={`${cormorantGaramond.className} text-[10px] uppercase`}
//   >
//     AT
//   </div>

//   {weddingTime && (
//     <div
//       className={`${cormorantGaramond.className} text-[10px]`}
//     >
//       {weddingTime}
//     </div>
//   )}
// </div>
        

//       </div>

//       <p
//         className={`${cormorantGaramond.className} mt-[6px] text-center text-[13px] tracking-[0.18em]`}
//       >
//         {month}
//       </p>

//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type DateBlockProps = {
  weddingDate?: string;
  weddingTime?: string;
};

export default function DateBlock({
  weddingDate,
  weddingTime,
}: DateBlockProps) {
  let date = new Date();

  if (weddingDate) {
    const [y, m, d] = weddingDate.split("-").map(Number);
    date = new Date(y, m - 1, d);
  }

  const year = date.getFullYear();
  const day = date.getDate();

  const weekday = date
    .toLocaleDateString("en-US", { weekday: "short" })
    .toUpperCase();

  const month = date
    .toLocaleDateString("en-US", { month: "long" })
    .toUpperCase();

  return (
    <motion.div
      className="absolute top-[199px] left-1/2 -translate-x-1/2 w-[165px] text-[#665B56] z-20"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className={`${cormorantGaramond.className} text-center text-[18px] tracking-[0.1em]`}
      >
        {year}
      </p>

      <div className="mt-0 flex justify-between items-center">

        <div className="w-[36px] text-right">
          <div
            className={`${cormorantGaramond.className} text-[12px] uppercase`}
          >
            {weekday}
          </div>
        </div>

        <div className="w-px h-[30px] bg-[#D4B7A4]" />

        <div
          className={`${cormorantGaramond.className} text-[46px] leading-none`}
        >
          {day}
        </div>

        <div className="w-px h-[30px] bg-[#D4B7A4]" />

        <div className="w-[36px]">
          <div
            className={`${cormorantGaramond.className} text-[10px] uppercase`}
          >
            AT
          </div>

          {weddingTime && (
            <div
              className={`${cormorantGaramond.className} text-[10px]`}
            >
              {weddingTime}
            </div>
          )}
        </div>

      </div>

      <p
        className={`${cormorantGaramond.className} mt-[6px] text-center text-[13px] tracking-[0.18em]`}
      >
        {month}
      </p>
    </motion.div>
  );
}
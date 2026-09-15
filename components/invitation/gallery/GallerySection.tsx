// "use client";

// import Image from "next/image";
// import {
//   useEffect,
//   useMemo,
//   useState,
// } from "react";
// import {
//   AnimatePresence,
//   motion,
// } from "motion/react";

// import PhoneFrame from "@/components/common/PhoneFrame";
// import FlyingButterflies from "@/components/invitation/invitationCard/FlyingButterflies";
// import { cormorantGaramond } from "@/lib/fonts";

// type GallerySectionProps = {
//   groomName: string;
//   brideName: string;
//   initials?: string;
//   photos: string[];
// };

// const PHOTOS_PER_SPREAD = 3;
// const AUTO_FLIP_TIME = 5000;

// export default function GallerySection({
//   groomName,
//   brideName,
//   initials,
//   photos,
// }: GallerySectionProps) {
//   const [page, setPage] = useState(0);
//   const [direction, setDirection] =
//     useState<1 | -1>(1);

//   const groomLetter =
//     groomName?.trim().charAt(0).toUpperCase() || "";

//   const brideLetter =
//     brideName?.trim().charAt(0).toUpperCase() || "";

//   const displayInitials =
//     initials?.trim() ||
//     `${groomLetter} & ${brideLetter}`;

//   const spreads = useMemo(() => {
//     const result: string[][] = [];

//     for (
//       let i = 0;
//       i < photos.length;
//       i += PHOTOS_PER_SPREAD
//     ) {
//       result.push(
//         photos.slice(i, i + PHOTOS_PER_SPREAD)
//       );
//     }

//     return result;
//   }, [photos]);

//   const totalPages = spreads.length;

//   // AUTO PAGE TURN
//   useEffect(() => {
//     if (totalPages <= 1) return;

//     const timer = window.setInterval(() => {
//       setDirection(1);

//       setPage((current) => {
//         if (current >= totalPages - 1) {
//           return 0;
//         }

//         return current + 1;
//       });
//     }, AUTO_FLIP_TIME);

//     return () => window.clearInterval(timer);
//   }, [totalPages]);

//   const nextPage = () => {
//     setDirection(1);

//     setPage((current) =>
//       current >= totalPages - 1
//         ? 0
//         : current + 1
//     );
//   };

//   const previousPage = () => {
//     setDirection(-1);

//     setPage((current) =>
//       current <= 0
//         ? totalPages - 1
//         : current - 1
//     );
//   };

//   if (!totalPages) return null;

//   const currentPhotos = spreads[page];

//   return (
//     <PhoneFrame>
//       <section
//         className="
//           relative
//           flex
//           min-h-screen
//           w-full
//           flex-col
//           items-center
//           justify-center
//           overflow-hidden
//           bg-[#062D59]
//           px-3
//           py-16
//         "
//       >
//         {/* BACKGROUND */}
//         <Image
//           src="/assets/gallery/background.svg"
//           alt=""
//           fill
//           priority
//           className="
//             pointer-events-none
//             select-none
//             object-cover
//           "
//         />

//         {/* BUTTERFLIES */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             z-10
//           "
//         >
//           <FlyingButterflies />
//         </div>

//         {/* GOLD ROOTS */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1.2,
//           }}
//           className="
//             pointer-events-none
//             absolute
//             left-0
//             top-0
//             z-20
//             w-full
//           "
//         >
//           <Image
//             src="/assets/gallery/top-roots.svg"
//             alt=""
//             width={430}
//             height={190}
//             priority
//             className="
//               h-auto
//               w-full
//               object-contain
//             "
//           />
//         </motion.div>

//         {/* TITLE */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 15,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           className="
//             relative
//             z-30
//             mb-7
//             mt-10
//             text-center
//           "
//         >
//           <h2
//             className={`
//               ${cormorantGaramond.className}
//               text-[40px]
//               italic
//               leading-none
//               text-[#D8B45D]
//             `}
//           >
//             {displayInitials}
//           </h2>

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mt-3
//               text-[10px]
//               uppercase
//               tracking-[0.35em]
//               text-[#F0E4D6]
//             `}
//           >
//             Our Memories
//           </p>
//         </motion.div>

//         {/* ALBUM */}
//         <div
//           className="
//             relative
//             z-30
//             w-full
//             max-w-[min(390px,96vw)]
//             [perspective:1800px]
//           "
//         >
//           {/* BOOK SHADOW */}
//           <div
//             className="
//               absolute
//               -bottom-4
//               left-[7%]
//               h-8
//               w-[86%]
//               rounded-[50%]
//               bg-black/50
//               blur-xl
//             "
//           />

//           {/* BOOK */}
//           <div
//             className="
//               relative
//               aspect-[1.38/1]
//               w-full
//               rounded-[8px]
//               bg-[#E5D7B8]
//               p-[5px]
//               shadow-[0_20px_45px_rgba(0,0,0,0.45)]
//             "
//           >
//             <AnimatePresence
//               initial={false}
//               mode="popLayout"
//               custom={direction}
//             >
//               <motion.div
//                 key={page}
//                 custom={direction}
//                 initial={{
//                   rotateY:
//                     direction === 1 ? 80 : -80,
//                   opacity: 0,
//                 }}
//                 animate={{
//                   rotateY: 0,
//                   opacity: 1,
//                 }}
//                 exit={{
//                   rotateY:
//                     direction === 1 ? -80 : 80,
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 1.15,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 style={{
//                   transformOrigin:
//                     direction === 1
//                       ? "left center"
//                       : "right center",
//                 }}
//                 className="
//                   absolute
//                   inset-[5px]
//                   overflow-hidden
//                   rounded-[5px]
//                   bg-[#FAF5E9]
//                   [backface-visibility:hidden]
//                   [transform-style:preserve-3d]
//                 "
//               >
//                 {/* PAPER TEXTURE */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     opacity-[0.14]
//                   "
//                   style={{
//                     backgroundImage:
//                       "radial-gradient(#705C44 0.5px, transparent 0.5px)",
//                     backgroundSize: "7px 7px",
//                   }}
//                 />

//                 {/* CENTER SPINE */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     bottom-0
//                     left-1/2
//                     top-0
//                     z-40
//                     w-[18px]
//                     -translate-x-1/2
//                     bg-gradient-to-r
//                     from-transparent
//                     via-black/[0.12]
//                     to-transparent
//                   "
//                 />

//                 {/* LEFT PAGE */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     top-0
//                     w-1/2
//                     border-r
//                     border-[#D8CBB4]/70
//                   "
//                 />

//                 {/* RIGHT PAGE */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     right-0
//                     top-0
//                     w-1/2
//                   "
//                 />

//                 {/* PAGE NUMBER */}
//                 <span
//                   className={`
//                     ${cormorantGaramond.className}
//                     absolute
//                     right-4
//                     top-3
//                     z-30
//                     text-[9px]
//                     italic
//                     text-[#8A7766]
//                   `}
//                 >
//                   {String(page + 1).padStart(
//                     2,
//                     "0"
//                   )}
//                 </span>

//                 {/* HANDWRITTEN TITLE */}
//                 <motion.div
//                   initial={{
//                     opacity: 0,
//                     x: -10,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   transition={{
//                     delay: 0.25,
//                   }}
//                   className="
//                     absolute
//                     left-[18px]
//                     top-[18px]
//                     z-20
//                   "
//                 >
//                   <p
//                     className={`
//                       ${cormorantGaramond.className}
//                       text-[23px]
//                       italic
//                       leading-[0.85]
//                       text-[#37261F]
//                     `}
//                   >
//                     Love
//                     <br />
//                     Captured
//                   </p>
//                 </motion.div>

//                 {/* PHOTO 1 */}
//                 {currentPhotos[0] && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.8,
//                       rotate: -8,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                       rotate: -4,
//                     }}
//                     transition={{
//                       delay: 0.2,
//                       duration: 0.7,
//                     }}
//                     className="
//                       absolute
//                       bottom-[22px]
//                       left-[18px]
//                       z-20
//                       h-[150px]
//                       w-[145px]
//                       bg-white
//                       p-[6px]
//                       pb-[22px]
//                       shadow-[0_6px_15px_rgba(0,0,0,0.22)]
//                     "
//                   >
//                     <div className="relative h-full w-full overflow-hidden">
//                       {/* Blurred background fill — same photo, soft bokeh */}
//                       <Image
//                         src={currentPhotos[0]}
//                         alt=""
//                         fill
//                         sizes="150px"
//                         className="object-cover scale-110 blur-sm opacity-50 select-none"
//                         aria-hidden
//                       />
//                       {/* Full uncropped photo on top */}
//                       <Image
//                         src={currentPhotos[0]}
//                         alt={`${groomName} and ${brideName} memory`}
//                         fill
//                         sizes="150px"
//                         className="object-contain relative z-10"
//                       />
//                     </div>

//                     <span
//                       className={`
//                         ${cormorantGaramond.className}
//                         absolute
//                         bottom-[5px]
//                         left-[8px]
//                         text-[8px]
//                         italic
//                         text-[#59473B]
//                       `}
//                     >
//                       together ♡
//                     </span>
//                   </motion.div>
//                 )}

//                 {/* PHOTO 2 */}
//                 {currentPhotos[1] && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.8,
//                       rotate: 8,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                       rotate: 4,
//                     }}
//                     transition={{
//                       delay: 0.35,
//                       duration: 0.7,
//                     }}
//                     className="
//                       absolute
//                       right-[15px]
//                       top-[25px]
//                       z-20
//                       h-[128px]
//                       w-[145px]
//                       bg-white
//                       p-[6px]
//                       pb-[20px]
//                       shadow-[0_6px_15px_rgba(0,0,0,0.22)]
//                     "
//                   >
//                     <div className="relative h-full w-full overflow-hidden">
//                       {/* Blurred background fill */}
//                       <Image
//                         src={currentPhotos[1]}
//                         alt=""
//                         fill
//                         sizes="150px"
//                         className="object-cover scale-110 blur-sm opacity-50 select-none"
//                         aria-hidden
//                       />
//                       {/* Full uncropped photo on top */}
//                       <Image
//                         src={currentPhotos[1]}
//                         alt={`${groomName} and ${brideName} memory`}
//                         fill
//                         sizes="150px"
//                         className="object-contain relative z-10"
//                       />
//                     </div>

//                     <span
//                       className={`
//                         ${cormorantGaramond.className}
//                         absolute
//                         bottom-[4px]
//                         left-[8px]
//                         text-[8px]
//                         italic
//                         text-[#59473B]
//                       `}
//                     >
//                       our story
//                     </span>
//                   </motion.div>
//                 )}

//                 {/* PHOTO 3 */}
//                 {currentPhotos[2] && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.8,
//                       rotate: -5,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       scale: 1,
//                       rotate: -2,
//                     }}
//                     transition={{
//                       delay: 0.5,
//                       duration: 0.7,
//                     }}
//                     className="
//                       absolute
//                       bottom-[18px]
//                       right-[24px]
//                       z-30
//                       h-[102px]
//                       w-[118px]
//                       bg-white
//                       p-[5px]
//                       pb-[18px]
//                       shadow-[0_6px_15px_rgba(0,0,0,0.22)]
//                     "
//                   >
//                     <div className="relative h-full w-full overflow-hidden">
//                       {/* Blurred background fill */}
//                       <Image
//                         src={currentPhotos[2]}
//                         alt=""
//                         fill
//                         sizes="120px"
//                         className="object-cover scale-110 blur-sm opacity-50 select-none"
//                         aria-hidden
//                       />
//                       {/* Full uncropped photo on top */}
//                       <Image
//                         src={currentPhotos[2]}
//                         alt={`${groomName} and ${brideName} memory`}
//                         fill
//                         sizes="120px"
//                         className="object-contain relative z-10"
//                       />
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* TAPE */}
//                 <div
//                   className="
//                     absolute
//                     right-[112px]
//                     top-[14px]
//                     z-40
//                     h-[18px]
//                     w-[55px]
//                     rotate-[3deg]
//                     bg-[#98503A]/80
//                     shadow-sm
//                   "
//                 />

//                 {/* SMALL DECORATIVE TEXT */}
//                 <p
//                   className={`
//                     ${cormorantGaramond.className}
//                     absolute
//                     bottom-[20px]
//                     left-[195px]
//                     z-10
//                     max-w-[70px]
//                     text-center
//                     text-[11px]
//                     italic
//                     leading-tight
//                     text-[#6A5446]
//                   `}
//                 >
//                   love
//                   <br />
//                    ♡
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* PREVIOUS */}
//           <button
//             type="button"
//             onClick={previousPage}
//             aria-label="Previous page"
//             className="
//               absolute
//               left-0
//               top-0
//               z-50
//               h-full
//               w-[18%]
//             "
//           />

//           {/* NEXT */}
//           <button
//             type="button"
//             onClick={nextPage}
//             aria-label="Next page"
//             className="
//               absolute
//               right-0
//               top-0
//               z-50
//               h-full
//               w-[18%]
//             "
//           />
//         </div>

//         {/* PAGE INDICATORS */}
//         <div
//           className="
//             relative
//             z-40
//             mt-7
//             flex
//             items-center
//             gap-[7px]
//           "
//         >
//           {spreads.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               aria-label={`Gallery page ${
//                 index + 1
//               }`}
//               onClick={() => {
//                 setDirection(
//                   index >= page ? 1 : -1
//                 );
//                 setPage(index);
//               }}
//               className={`
//                 h-[5px]
//                 rounded-full
//                 transition-all
//                 duration-500
//                 ${
//                   index === page
//                     ? "w-[22px] bg-[#D8B45D]"
//                     : "w-[5px] bg-[#E9DDD2]/40"
//                 }
//               `}
//             />
//           ))}
//         </div>

//         <p
//           className={`
//             ${cormorantGaramond.className}
//             relative
//             z-30
//             mt-3
//             text-[10px]
//             italic
//             tracking-[0.08em]
//             text-[#E9DDD2]/60
//           `}
//         >
//           turning the pages of our story
//         </p>
//       </section>
//     </PhoneFrame>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";
import FlyingButterflies from "@/components/invitation/invitationCard/FlyingButterflies";
import { cormorantGaramond } from "@/lib/fonts";

type GallerySectionProps = {
  groomName: string;
  brideName: string;
  initials?: string;
  photos: string[];
};

const MAX_PHOTOS = 10;
const AUTO_FLIP_TIME = 5000;

const captions = [
  "where our story began",
  "a little piece of forever",
  "you & me",
  "our favorite kind of day",
  "love in every moment",
  "together is our favorite place",
  "the sweetest memories",
  "always better together",
  "a chapter worth keeping",
  "and so the adventure continues",
];

export default function GallerySection({
  groomName,
  brideName,
  initials,
  photos,
}: GallerySectionProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const groomLetter =
    groomName?.trim().charAt(0).toUpperCase() || "";

  const brideLetter =
    brideName?.trim().charAt(0).toUpperCase() || "";

  const displayInitials =
    initials?.trim() || `${groomLetter} & ${brideLetter}`;

  // Maximum 10 photos
  const galleryPhotos = useMemo(
    () => photos.slice(0, MAX_PHOTOS),
    [photos]
  );

  const totalPages = galleryPhotos.length;

  // ============================================================
  // AUTO PAGE TURN
  // ============================================================

  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setDirection(1);

      setPage((current) =>
        current >= totalPages - 1 ? 0 : current + 1
      );
    }, AUTO_FLIP_TIME);

    return () => window.clearInterval(timer);
  }, [totalPages]);

  const nextPage = () => {
    if (totalPages <= 1) return;

    setDirection(1);

    setPage((current) =>
      current >= totalPages - 1 ? 0 : current + 1
    );
  };

  const previousPage = () => {
    if (totalPages <= 1) return;

    setDirection(-1);

    setPage((current) =>
      current <= 0 ? totalPages - 1 : current - 1
    );
  };

  if (!totalPages) return null;

  const currentPhoto = galleryPhotos[page];

  const pageNumber = String(page + 1).padStart(2, "0");
  const totalPageNumber = String(totalPages).padStart(2, "0");

  // Slight handmade scrapbook variation
  const photoRotation =
    page % 3 === 0 ? -1.1 : page % 3 === 1 ? 1 : -0.35;

  const tapeRotation = page % 2 === 0 ? -4 : 4;

  return (
    <PhoneFrame>
      <section
        className="
          relative
          flex
          min-h-svh
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-[#062D59]

          px-[clamp(8px,3vw,16px)]
          py-[clamp(28px,5svh,55px)]
        "
      >
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <Image
          src="/assets/gallery/background.svg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            pointer-events-none
            select-none
            object-cover
          "
        />

        {/* NAVY DEPTH */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-gradient-to-b
            from-[#062D59]/5
            via-transparent
            to-[#021B35]/40
          "
        />

        {/* =====================================================
            BUTTERFLIES
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
          "
        >
          <FlyingButterflies />
        </div>

        {/* =====================================================
            GOLD ROOTS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            w-full
          "
        >
          <Image
            src="/assets/gallery/top-roots.svg"
            alt=""
            width={430}
            height={190}
            priority
            className="
              h-auto
              w-full
              object-contain
            "
          />
        </motion.div>

        {/* =====================================================
            TITLE
        ===================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-30
            mb-[clamp(14px,2.5svh,24px)]
            mt-[clamp(15px,4svh,40px)]
            shrink-0
            text-center
          "
        >
          <h2
            className={`
              ${cormorantGaramond.className}

              text-[clamp(30px,9vw,44px)]
              italic
              leading-[0.9]
              text-[#D8B45D]
            `}
          >
            {displayInitials}
          </h2>

          <p
            className={`
              ${cormorantGaramond.className}

              mt-[clamp(6px,1.2svh,10px)]

              text-[clamp(8px,2.2vw,10px)]
              uppercase

              tracking-[clamp(0.22em,1vw,0.36em)]

              text-[#F0E4D6]
            `}
          >
            Our Memories
          </p>
        </motion.div>

        {/* =====================================================
            SCRAPBOOK WRAPPER
        ===================================================== */}

        <div
          className="
            relative
            z-30

            w-[min(92vw,390px)]

            max-[380px]:w-[91vw]

            sm:w-[min(86vw,410px)]
            md:w-[min(72vw,430px)]
            lg:w-[min(60vw,450px)]

            [perspective:2000px]
          "
        >
          {/* ===================================================
              SHADOW UNDER BOOK
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-[clamp(10px,2svh,18px)]
              left-[8%]

              h-[clamp(20px,4vw,32px)]
              w-[84%]

              rounded-[50%]

              bg-black/50
              blur-xl
          "
          />

          {/* ===================================================
              GOLD / BROWN BOOK COVER
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[-6px]
              left-[2px]
              right-[2px]
              top-[7px]

              rounded-[clamp(5px,1.5vw,9px)]

              bg-gradient-to-br
              from-[#D0B06B]
              via-[#A67D3B]
              to-[#755323]

              shadow-[0_18px_45px_rgba(0,0,0,0.48)]
          "
          />

          {/* ===================================================
              PAGE STACK
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[-2px]
              left-[6px]
              right-[6px]
              top-[4px]

              rounded-[6px]

              bg-[#D9C9AA]
          "
          />

          {/* PAGE EDGE 1 */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[1px]
              left-[9px]
              right-[9px]

              h-[2px]

              bg-[#F9F0DE]/90
          "
          />

          {/* PAGE EDGE 2 */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[5px]
              left-[8px]
              right-[8px]

              h-px

              bg-[#A99777]/70
          "
          />

          {/* PAGE EDGE 3 */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-[8px]
              left-[10px]
              right-[10px]

              h-px

              bg-[#F7ECD7]/80
          "
          />

          {/* ===================================================
              BOOK PAGE AREA

              Portrait ratio.
              Width controls height automatically.
          =================================================== */}

          <div
            className="
              relative

              aspect-[0.79/1]

              w-full

              overflow-visible

              rounded-[clamp(5px,1.4vw,8px)]

              [transform-style:preserve-3d]
          "
          >
            {/* =================================================
                NEXT PAGE UNDER CURRENT PAGE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-[4px]

                overflow-hidden
                rounded-[5px]

                bg-[#F5ECD9]

                shadow-inner
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-l
                  from-[#A78F6A]/20
                  via-transparent
                  to-transparent
                "
              />

              {/* PAPER DOTS */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.08]
                "
                style={{
                  backgroundImage:
                    "radial-gradient(#705C44 0.5px, transparent 0.5px)",
                  backgroundSize: "7px 7px",
                }}
              />
            </div>

            {/* =================================================
                ANIMATED SCRAPBOOK PAGE
            ================================================= */}

            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              <motion.div
                key={page}
                custom={direction}
                initial={{
                  rotateY: direction === 1 ? 92 : -92,
                  opacity: 0.45,
                  scale: 0.985,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotateY: direction === 1 ? -94 : 94,
                  opacity: 0.15,
                  scale: 0.985,
                }}
                transition={{
                  rotateY: {
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  },

                  opacity: {
                    duration: 0.7,
                  },

                  scale: {
                    duration: 0.8,
                  },
                }}
                style={{
                  transformOrigin:
                    direction === 1
                      ? "left center"
                      : "right center",
                }}
                className="
                  absolute
                  inset-[4px]

                  overflow-hidden

                  rounded-[5px]

                  bg-[#FAF4E7]

                  shadow-[0_8px_25px_rgba(0,0,0,0.24)]

                  [backface-visibility:hidden]
                  [transform-style:preserve-3d]
                "
              >
                {/* =============================================
                    PAPER TEXTURE
                ============================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[1]

                    opacity-[0.12]
                  "
                  style={{
                    backgroundImage:
                      "radial-gradient(#705C44 0.55px, transparent 0.55px)",
                    backgroundSize: "7px 7px",
                  }}
                />

                {/* WARM PAPER SHADING */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[2]

                    bg-gradient-to-br
                    from-white/35
                    via-transparent
                    to-[#A78F6A]/10
                  "
                />

                {/* =============================================
                    BINDING SHADOW
                ============================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute

                    bottom-0
                    left-0
                    top-0

                    z-40

                    w-[clamp(9px,3vw,15px)]

                    bg-gradient-to-r
                    from-black/[0.14]
                    via-black/[0.04]
                    to-transparent
                  "
                />

                {/* RIGHT PAPER EDGE */}

                <div
                  className="
                    pointer-events-none
                    absolute

                    bottom-0
                    right-0
                    top-0

                    z-40

                    w-[clamp(5px,2vw,9px)]

                    bg-gradient-to-l
                    from-[#A78F6A]/25
                    to-transparent
                  "
                />

                {/* =============================================
                    PAGE NUMBER TOP
                ============================================= */}

                <div
                  className="
                    absolute

                    left-[clamp(17px,5vw,24px)]
                    top-[clamp(13px,2.8svh,20px)]

                    z-20

                    flex
                    items-center

                    gap-[clamp(5px,2vw,9px)]
                  "
                >
                  <span
                    className={`
                      ${cormorantGaramond.className}

                      text-[clamp(9px,2.8vw,12px)]
                      italic

                      text-[#806D5E]
                    `}
                  >
                    {pageNumber}
                  </span>

                  <span
                    className="
                      h-px
                      w-[clamp(16px,6vw,26px)]
                      bg-[#C69A48]/70
                    "
                  />

                  <span
                    className={`
                      ${cormorantGaramond.className}

                      text-[clamp(6px,1.8vw,8px)]

                      uppercase

                      tracking-[0.2em]

                      text-[#9B8874]
                    `}
                  >
                    memory
                  </span>
                </div>

                {/* TOP RIGHT HEART */}

                <div
                  className="
                    absolute

                    right-[clamp(16px,5vw,24px)]
                    top-[clamp(12px,2.6svh,19px)]

                    z-20

                    text-[clamp(11px,3.5vw,15px)]

                    text-[#C69A48]
                  "
                >
                  ♡
                </div>

                {/* =============================================
                    LARGE PHOTO / POLAROID
                ============================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: photoRotation,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute

                    left-[6%]
                    right-[6%]

                    top-[clamp(44px,7svh,60px)]
                    bottom-[clamp(52px,7svh,70px)]

                    z-10

                    bg-[#FFFDF9]

                    p-[clamp(5px,1.8vw,8px)]
                    pb-[clamp(27px,7vw,37px)]

                    shadow-[0_8px_22px_rgba(74,53,38,0.23)]
                  "
                >
                  {/* ===========================================
                      PHOTO AREA
                  =========================================== */}

                  <div
                    className="
                      relative

                      h-full
                      w-full

                      overflow-hidden

                      bg-[#E5DBCE]
                    "
                  >
                    {/* BLURRED PHOTO BACKGROUND */}

                    <Image
                      src={currentPhoto}
                      alt=""
                      fill
                      sizes="
                        (max-width: 380px) 82vw,
                        (max-width: 640px) 78vw,
                        380px
                      "
                      aria-hidden
                      className="
                        select-none

                        scale-110
                        object-cover

                        blur-[10px]

                        opacity-35
                      "
                    />

                    {/* SOFT OVERLAY */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-[1]

                        bg-black/[0.035]
                      "
                    />

                    {/* =========================================
                        REAL PHOTO

                        object-contain =
                        NEVER CROPS PHOTO
                    ========================================= */}

                    <Image
                      src={currentPhoto}
                      alt={`${groomName} and ${brideName} memory ${
                        page + 1
                      }`}
                      fill
                      priority={page === 0}
                      sizes="
                        (max-width: 380px) 82vw,
                        (max-width: 640px) 78vw,
                        380px
                      "
                      className="
                        relative
                        z-10

                        object-contain
                      "
                    />
                  </div>

                  {/* ===========================================
                      CAPTION
                  =========================================== */}

                  <div
                    className="
                      absolute

                      bottom-[clamp(5px,1.4vw,8px)]

                      left-[5px]
                      right-[5px]

                      flex
                      items-center
                      justify-center
                    "
                  >
                    <p
                      className={`
                        ${cormorantGaramond.className}

                        max-w-[95%]

                        truncate

                        text-center

                        text-[clamp(8px,2.7vw,12px)]

                        italic

                        tracking-[0.02em]

                        text-[#5F493D]
                      `}
                    >
                      {captions[page % captions.length]} ♡
                    </p>
                  </div>

                  {/* ===========================================
                      SCRAPBOOK TAPE
                  =========================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: tapeRotation,
                    }}
                    transition={{
                      delay: 0.4,
                      duration: 0.5,
                    }}
                    className="
                      absolute

                      left-1/2
                      top-[-10px]

                      z-30

                      h-[clamp(18px,5vw,25px)]
                      w-[clamp(58px,20vw,82px)]

                      -translate-x-1/2

                      bg-[#D8B7A5]/85

                      shadow-[0_2px_5px_rgba(0,0,0,0.13)]
                    "
                  >
                    {/* TAPE TEXTURE */}

                    <div
                      className="
                        absolute
                        inset-0

                        opacity-30
                      "
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, transparent 0px, transparent 5px, rgba(255,255,255,0.45) 6px)",
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* =============================================
                    BOTTOM BOTANICAL SCRAPBOOK DETAIL
                ============================================= */}

                <svg
                  className="
                    pointer-events-none
                    absolute

                    bottom-[clamp(9px,2svh,16px)]
                    left-[clamp(15px,4vw,22px)]

                    z-20

                    h-[clamp(25px,8vw,36px)]
                    w-[clamp(52px,18vw,74px)]

                    opacity-75
                  "
                  viewBox="0 0 70 34"
                  fill="none"
                >
                  <path
                    d="M3 29 C20 24 25 13 39 9 C48 6 56 6 67 3"
                    stroke="#B78B3F"
                    strokeWidth="0.9"
                    strokeLinecap="round"
                  />

                  <path
                    d="M22 20 C13 15 11 20 19 24 C23 26 25 23 22 20Z"
                    stroke="#D7A3AA"
                    strokeWidth="0.8"
                  />

                  <path
                    d="M38 10 C35 3 40 1 43 7 C44 10 41 12 38 10Z"
                    stroke="#0A2D63"
                    strokeWidth="0.8"
                  />

                  <path
                    d="M51 7 C47 2 51 -1 55 4 C57 7 54 9 51 7Z"
                    stroke="#D7A3AA"
                    strokeWidth="0.8"
                  />
                </svg>

                {/* =============================================
                    BOTTOM HEART
                ============================================= */}

                <span
                  className="
                    absolute

                    bottom-[clamp(11px,2svh,18px)]
                    left-1/2

                    z-20

                    -translate-x-1/2

                    text-[clamp(8px,2.8vw,12px)]

                    text-[#D5A0A8]
                  "
                >
                  ♡
                </span>

                {/* =============================================
                    PAGE COUNT
                ============================================= */}

                <p
                  className={`
                    ${cormorantGaramond.className}

                    absolute

                    bottom-[clamp(11px,2svh,18px)]
                    right-[clamp(15px,4vw,23px)]

                    z-20

                    text-[clamp(8px,2.4vw,11px)]

                    italic

                    tracking-[0.08em]

                    text-[#806D5E]
                  `}
                >
                  {pageNumber} / {totalPageNumber}
                </p>

                {/* =============================================
                    PAGE TURN SHADOW

                    This helps the rotating page look like
                    real paper folding.
                ============================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 0.25,
                  }}
                  exit={{
                    opacity: 0.75,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className={`
                    pointer-events-none

                    absolute
                    bottom-0
                    top-0

                    z-50

                    w-[clamp(20px,8vw,38px)]

                    ${
                      direction === 1
                        ? `
                          right-0
                          bg-gradient-to-l
                          from-black/35
                          to-transparent
                        `
                        : `
                          left-0
                          bg-gradient-to-r
                          from-black/35
                          to-transparent
                        `
                    }
                  `}
                />

                {/* =============================================
                    FOLDED PAPER CORNER
                ============================================= */}

                <div
                  className="
                    pointer-events-none

                    absolute

                    bottom-0
                    right-0

                    z-40

                    h-[clamp(16px,5vw,25px)]
                    w-[clamp(16px,5vw,25px)]

                    bg-gradient-to-tl
                    from-[#CBB998]
                    via-[#F3E8D5]
                    to-transparent

                    opacity-70
                  "
                  style={{
                    clipPath:
                      "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===================================================
              LARGE INVISIBLE TOUCH AREAS

              Left side = previous
              Right side = next
          =================================================== */}

          <button
            type="button"
            onClick={previousPage}
            aria-label="Previous scrapbook page"
            className="
              absolute

              bottom-0
              left-0
              top-0

              z-[60]

              w-[16%]

              cursor-pointer
            "
          />

          <button
            type="button"
            onClick={nextPage}
            aria-label="Next scrapbook page"
            className="
              absolute

              bottom-0
              right-0
              top-0

              z-[60]

              w-[16%]

              cursor-pointer
            "
          />
        </div>

        {/* =====================================================
            PAGE INDICATORS
        ===================================================== */}

        <div
          className="
            relative
            z-40

            mt-[clamp(16px,3svh,27px)]

            flex
            shrink-0
            items-center
            justify-center

            gap-[clamp(4px,1.4vw,7px)]
          "
        >
          {galleryPhotos.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to scrapbook page ${index + 1}`}
              onClick={() => {
                if (index === page) return;

                setDirection(index > page ? 1 : -1);
                setPage(index);
              }}
              className={`
                h-[5px]

                rounded-full

                transition-all
                duration-500

                ${
                  index === page
                    ? `
                      w-[clamp(16px,5vw,22px)]
                      bg-[#D8B45D]
                    `
                    : `
                      w-[5px]
                      bg-[#E9DDD2]/40
                    `
                }
              `}
            />
          ))}
        </div>

        {/* =====================================================
            INSTRUCTION
        ===================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className={`
            ${cormorantGaramond.className}

            relative
            z-30

            mt-[clamp(7px,1.5svh,12px)]

            shrink-0

            text-[clamp(8px,2.4vw,10px)]

            italic

            tracking-[0.08em]

            text-[#E9DDD2]/65
          `}
        >
          turning the pages of our story
        </motion.p>

        {/* =====================================================
            SIDE NAVIGATION

            Hidden on extremely narrow screens because the
            book itself already has touch areas.
        ===================================================== */}

        {totalPages > 1 && (
          <>
            <button
              type="button"
              onClick={previousPage}
              aria-label="Previous memory"
              className="
                absolute

                left-[clamp(5px,2vw,15px)]
                top-1/2

                z-40

                hidden
                h-[clamp(28px,8vw,36px)]
                w-[clamp(28px,8vw,36px)]

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#D8B45D]/25

                bg-[#062D59]/40

                text-[clamp(13px,4vw,17px)]
                text-[#D8B45D]/80

                backdrop-blur-[2px]

                min-[390px]:flex
              "
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextPage}
              aria-label="Next memory"
              className="
                absolute

                right-[clamp(5px,2vw,15px)]
                top-1/2

                z-40

                hidden
                h-[clamp(28px,8vw,36px)]
                w-[clamp(28px,8vw,36px)]

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#D8B45D]/25

                bg-[#062D59]/40

                text-[clamp(13px,4vw,17px)]
                text-[#D8B45D]/80

                backdrop-blur-[2px]

                min-[390px]:flex
              "
            >
              ›
            </button>
          </>
        )}
      </section>
    </PhoneFrame>
  );
}
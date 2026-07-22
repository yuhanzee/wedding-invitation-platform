// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "motion/react";
// import PhoneFrame from "@/components/common/PhoneFrame";
// import { cormorantGaramond } from "@/lib/fonts";

// type GallerySectionProps = {
//   groomName: string;
//   brideName: string;
//   initials?: string;
//   quoteText?: string;
//   images?: string[];
// };

// const DEFAULT_IMAGES = [
//   // Group A (First 4 photos)
//   "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&h=600&q=80",
//   "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&h=600&q=80",
//   "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&h=600&q=80",
//   "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&h=600&q=80",
//   // Group B (Second 4 photos)
//   "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&h=600&q=80",
//   "https://images.unsplash.com/photo-1529636798458-92182e65f36b?auto=format&fit=crop&w=600&h=600&q=80",
//   "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&h=600&q=80",
//   "https://images.unsplash.com/photo-1519225495810-7517c2965a7d?auto=format&fit=crop&w=600&h=600&q=80",
// ];

// const DEFAULT_QUOTE = 
//   "Today under the soft gaze of the sky and the joyful melody of love, we invite you to share in our laughter and celebrate our journey. Two hearts, two lives, joined together in friendship and devotion for all the years to come.";

// export default function GallerySection({
//   groomName,
//   brideName,
//   initials,
//   quoteText = DEFAULT_QUOTE,
//   images = DEFAULT_IMAGES,
// }: GallerySectionProps) {
//   // We transition between Set 0 (index 0-3) and Set 1 (index 4-7)
//   const [activeSet, setActiveSet] = useState<0 | 1>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSet((prev) => (prev === 0 ? 1 : 0));
//     }, 6000); // Transition every 6 seconds

//     return () => clearInterval(interval);
//   }, []);

//   // Compute initials if not overridden
//   const groomLetter = groomName ? groomName.trim().charAt(0).toLowerCase() : "";
//   const brideLetter = brideName ? brideName.trim().charAt(0).toLowerCase() : "";
//   const displayInitials = initials || `${groomLetter} & ${brideLetter}`;

//   // Get current 4 images based on activeSet
//   const currentImages = activeSet === 0 ? images.slice(0, 4) : images.slice(4, 8);

//   return (
//     <PhoneFrame>
//       <section className="relative w-full h-full overflow-hidden flex flex-col justify-between py-12 px-6">
//         {/* Animated Background SVG (matching standard invitation pages) */}
//         <motion.div
//           className="absolute inset-0 z-0"
//           animate={{
//             scale: [1, 1.03, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/background.svg"
//             alt=""
//             fill
//             priority
//             className="pointer-events-none select-none object-cover"
//           />
//         </motion.div>

//         {/* Top Roots - Scroll entry slide-down animation */}
//         <motion.div
//           className="absolute left-0 top-0 w-full z-30 pointer-events-none"
//           initial={{ y: -60, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true, amount: 0.1 }}
//           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <Image
//             src="/assets/gallery/top-roots.svg"
//             alt="Roots Border"
//             width={430}
//             height={160}
//             priority
//             className="w-full h-auto select-none pointer-events-none"
//           />
//         </motion.div>

//         {/* Main Content Area */}
//         <div className="relative z-20 flex flex-col items-center justify-center h-full w-full pt-16">
          
//           {/* Elegant Outline Box Border - Scroll entry fade/scale-up animation */}
//           <motion.div
//             className="relative w-full max-w-[340px] border border-[#2d2825]/30 py-8 px-5 flex flex-col items-center"
//             initial={{ opacity: 0, scale: 0.94 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//           >
            
//             {/* Couple initials Monogram badge overlapping the top border line */}
//             <motion.div
//               className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#faf8f6] px-5 flex items-center justify-center`}
//               initial={{ opacity: 0, y: -20, scale: 0.8 }}
//               whileInView={{ opacity: 1, y: -12, scale: 1 }} // keeps overlap offset
//               viewport={{ once: true }}
//               transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
//             >
//               <span 
//                 className={`${cormorantGaramond.className} italic text-[36px] font-normal leading-none text-[#C5A880] tracking-wide select-none`}
//                 style={{ textShadow: "0.5px 0.5px 0px rgba(0,0,0,0.05)" }}
//               >
//                 {displayInitials}
//               </span>
//             </motion.div>

//             {/* Custom Quote text */}
//             <motion.p
//               className={`${cormorantGaramond.className} text-[13px] leading-relaxed text-[#625853] text-center px-2 pt-3 select-none`}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               “{quoteText}”
//             </motion.p>

//             {/* 2x2 Image Grid */}
//             <motion.div 
//               className="grid grid-cols-2 gap-3 mt-7 w-full"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//             >
//               {currentImages.map((src, i) => {
//                 // Generate a custom animation key to force rerender when image changes
//                 const imageKey = `${activeSet}-${i}`;
                
//                 return (
//                   <div 
//                     key={i} 
//                     className="relative aspect-square w-full bg-[#f2ece5] overflow-hidden rounded-[2px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#ede7e0]"
//                   >
//                     <AnimatePresence mode="popLayout">
//                       <motion.div
//                         key={imageKey}
//                         className="absolute inset-0 w-full h-full"
//                         initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
//                         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                         exit={{ opacity: 0, scale: 1.05, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
//                         transition={{
//                           duration: 0.9,
//                           delay: i * 0.15, // Staggered transition across the 4 squares
//                           ease: [0.22, 1, 0.36, 1]
//                         }}
//                       >
//                         <Image
//                           src={src}
//                           alt={`Couple photo ${i + 1}`}
//                           fill
//                           sizes="(max-width: 430px) 150px, 200px"
//                           priority={i < 2}
//                           className="object-cover pointer-events-none select-none"
//                         />
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </motion.div>

//           </motion.div>
//         </div>

//       </section>
//     </PhoneFrame>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "motion/react";
import PhoneFrame from "@/components/common/PhoneFrame";
import { cormorantGaramond } from "@/lib/fonts";

type GallerySectionProps = {
  groomName: string;
  brideName: string;

  // Optional custom content
  initials?: string;
  quoteText?: string;

  // Four photos supplied separately for each wedding
  photo1?: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
};

const DEFAULT_QUOTE =
  "Today under the soft gaze of the sky and the joyful melody of love, we invite you to share in our laughter and celebrate our journey. Two hearts, two lives, joined together in friendship and devotion for all the years to come.";

export default function GallerySection({
  groomName,
  brideName,
  initials,
  quoteText = DEFAULT_QUOTE,
  photo1,
  photo2,
  photo3,
  photo4,
}: GallerySectionProps) {
  const groomLetter = groomName?.trim().charAt(0).toLowerCase() || "";
  const brideLetter = brideName?.trim().charAt(0).toLowerCase() || "";

  const displayInitials =
    initials?.trim() || `${groomLetter} & ${brideLetter}`;

  const photos = [photo1, photo2, photo3, photo4];

  return (
    <PhoneFrame>
      <section
        className="
          relative
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#062D59]
          px-7
          pb-10
          pt-24
        "
      >
        {/* Navy embossed background */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/gallery/background.svg"
            alt=""
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="
              pointer-events-none
              select-none
              object-cover
            "
          />
        </motion.div>

        {/* Golden roots at the top */}
        <motion.div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            w-full
          "
          initial={{
            opacity: 0,
            y: -45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 1.25,
            ease: [0.22, 1, 0.36, 1],
          }}
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
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* Main gallery frame */}
        <motion.div
          className="
            relative
            z-20
            mt-16
            w-full
            max-w-[330px]
            border
            border-[#E5CF96]/65
            px-5
            pb-6
            pt-9
          "
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Initials overlapping top border */}
          <motion.div
            className="
              absolute
              left-1/2
              top-0
              z-30
              -translate-x-1/2
              -translate-y-1/2
              bg-[#062D59]
              px-5
            "
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <span
              className={`
                ${cormorantGaramond.className}
                whitespace-nowrap
                text-[42px]
                font-normal
                italic
                leading-none
                tracking-[0.04em]
                text-[#D8B45D]
              `}
              style={{
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              {displayInitials}
            </span>
          </motion.div>

          {/* Custom quote */}
          <motion.p
            className={`
              ${cormorantGaramond.className}
              mx-auto
              max-w-[270px]
              text-center
              text-[13px]
              font-normal
              leading-[1.45]
              text-[#E9DDD2]
            `}
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
          >
            {quoteText}
          </motion.p>

          {/* Four manually supplied photos */}
          <motion.div
            className="
              mt-7
              grid
              w-full
              grid-cols-2
              gap-3
            "
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  border
                  border-[#E5CF96]/60
                  bg-[#F3EFE9]
                "
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.94,
                    y: 14,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {photo ? (
                  <Image
                    src={photo}
                    alt={`${groomName} and ${brideName} gallery photo ${
                      index + 1
                    }`}
                    fill
                    sizes="(max-width: 430px) 145px, 160px"
                    className="
                      select-none
                      object-cover
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      bg-[#F3EFE9]
                    "
                  >
                    <span
                      className={`
                        ${cormorantGaramond.className}
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8B7B70]
                      `}
                    >
                      Photo {index + 1}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </PhoneFrame>
  );
}

// // // // // "use client";

// // // // // import Image from "next/image";
// // // // // import { motion } from "motion/react";

// // // // // import PhoneFrame from "@/components/common/PhoneFrame";

// // // // // import InvitationBackground from "./InvitationBackground";
// // // // // import InvitationCard from "./InvitationCard";
// // // // // import FlyingButterflies from "./FlyingButterflies";

// // // // // type InvitationSectionProps = {
// // // // //   groomName: string;
// // // // //   brideName: string;
// // // // //   weddingDate?: string;
// // // // //   weddingTime?: string;
// // // // //   poruwaCeremonyTime?: string;
// // // // //   venue?: string;
// // // // // };
// // // // // export default function InvitationSection({
// // // // //   groomName,
// // // // //   brideName,
// // // // //   weddingDate,
// // // // //   weddingTime,
// // // // //   poruwaCeremonyTime,
// // // // //   venue,
// // // // // }: InvitationSectionProps) {

// // // // //   return (
// // // // //     <PhoneFrame>
// // // // //       <section className="relative h-full w-full overflow-visible">

// // // // //         {/* BACKGROUND */}
// // // // //         <InvitationBackground />

// // // // //         {/* INVITATION CARD */}
// // // // //         <div className="absolute inset-0 z-10 flex items-center justify-center">
// // // // //           <InvitationCard
// // // // //   groomName={groomName}
// // // // //   brideName={brideName}
// // // // //   weddingDate={weddingDate}
// // // // //   weddingTime={weddingTime}
// // // // //   poruwaCeremonyTime={poruwaCeremonyTime}
// // // // //   venue={venue}
// // // // // />
// // // // //         </div>

// // // // //         {/* LEFT FLOWERS */}
// // // // //         <motion.div
// // // // //           className="
// // // // //             pointer-events-none
// // // // //             absolute
// // // // //             bottom-0
// // // // //             left-[-22px]
// // // // //             z-30
// // // // //           "
// // // // //           animate={{
// // // // //             y: [0, -2, 0],
// // // // //             rotate: [0, -0.4, 0],
// // // // //           }}
// // // // //           transition={{
// // // // //             duration: 8,
// // // // //             repeat: Infinity,
// // // // //             ease: "easeInOut",
// // // // //           }}
// // // // //         >
// // // // //           <Image
// // // // //             src="/assets/invitation/left-flowers.svg"
// // // // //             alt=""
// // // // //             width={180}
// // // // //             height={1050}
// // // // //             priority
// // // // //             className="select-none"
// // // // //           />
// // // // //         </motion.div>

// // // // //         {/* TOP FLOWERS */}
// // // // //         <motion.div
// // // // //           className="
// // // // //             pointer-events-none
// // // // //             absolute
// // // // //             right-[-15px]
// // // // //             top-[-20px]
// // // // //             z-30
// // // // //           "
// // // // //           animate={{
// // // // //             y: [0, 2, 0],
// // // // //             rotate: [0, 0.4, 0],
// // // // //           }}
// // // // //           transition={{
// // // // //             duration: 9,
// // // // //             repeat: Infinity,
// // // // //             ease: "easeInOut",
// // // // //           }}
// // // // //         >
// // // // //           <Image
// // // // //             src="/assets/invitation/top-flowers.svg"
// // // // //             alt=""
// // // // //             width={220}
// // // // //             height={120}
// // // // //             priority
// // // // //             className="select-none"
// // // // //           />
// // // // //         </motion.div>

// // // // //         {/* BUTTERFLIES */}
// // // // //         <FlyingButterflies />

// // // // //         {/* ============================================================
// // // // //             BOTTOM CHAINS
// // // // //             These chains hang from the bottom of this section.
// // // // //             They are positioned with a large enough height so they
// // // // //             reach all the way to the bottom edge of the PhoneFrame.
// // // // //             The CountdownSection mirrors matching chains at its top,
// // // // //             creating a visually continuous hanging decoration.
// // // // //         ============================================================ */}

// // // // //         <div
// // // // //           className="
// // // // //             pointer-events-none
// // // // //             absolute
// // // // //             bottom-0
// // // // //             left-0
// // // // //             z-20
// // // // //             h-[420px]
// // // // //             w-full
// // // // //           "
// // // // //         >
// // // // //           {/* LEFT CHAIN */}
// // // // //           <div
// // // // //             className="
// // // // //               absolute
// // // // //               bottom-0
// // // // //               left-[29%]
// // // // //               z-20
// // // // //               h-[220px]
// // // // //               w-[45px]
// // // // //               -translate-x-1/2
// // // // //             "
// // // // //           >
// // // // //             <Image
// // // // //               src="/assets/countdown/chain.png"
// // // // //               alt=""
// // // // //               fill
// // // // //               className="object-cover object-top"
// // // // //             />
// // // // //           </div>

// // // // //           {/* RIGHT CHAIN */}
// // // // //           <div
// // // // //             className="
// // // // //               absolute
// // // // //               bottom-0
// // // // //               z-20
// // // // //               left-[71%]
// // // // //               h-[220px]
// // // // //               w-[45px]
// // // // //               -translate-x-1/2
// // // // //             "
// // // // //           >
// // // // //             <Image
// // // // //               src="/assets/countdown/chain.png"
// // // // //               alt=""
// // // // //               fill
// // // // //               className="object-cover object-top"
// // // // //             />
// // // // //           </div>
// // // // //         </div>

// // // // //       </section>
// // // // //     </PhoneFrame>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import Image from "next/image";
// // // // import { motion } from "motion/react";

// // // // import PhoneFrame from "@/components/common/PhoneFrame";

// // // // import InvitationBackground from "./InvitationBackground";
// // // // import InvitationCard from "./InvitationCard";
// // // // import FlyingButterflies from "./FlyingButterflies";

// // // // type InvitationSectionProps = {
// // // //   groomName: string;
// // // //   brideName: string;
// // // //   weddingDate?: string;
// // // //   weddingTime?: string;
// // // //   poruwaCeremonyTime?: string;
// // // //   venue?: string;
// // // // };

// // // // export default function InvitationSection({
// // // //   groomName,
// // // //   brideName,
// // // //   weddingDate,
// // // //   weddingTime,
// // // //   poruwaCeremonyTime,
// // // //   venue,
// // // // }: InvitationSectionProps) {
// // // //   return (
// // // //     <PhoneFrame>
// // // //       <section
// // // //         className="
// // // //           relative
// // // //           h-full
// // // //           w-full
// // // //           overflow-visible
// // // //         "
// // // //       >
// // // //         {/* ==================================================
// // // //             BACKGROUND
// // // //         ================================================== */}

// // // //         <InvitationBackground />

// // // //         {/* ==================================================
// // // //             INVITATION CARD
// // // //         ================================================== */}

// // // //         <div
// // // //           className="
// // // //             absolute
// // // //             inset-0
// // // //             z-10
// // // //             flex
// // // //             items-center
// // // //             justify-center
// // // //           "
// // // //         >
// // // //           <InvitationCard
// // // //             groomName={groomName}
// // // //             brideName={brideName}
// // // //             weddingDate={weddingDate}
// // // //             weddingTime={weddingTime}
// // // //             poruwaCeremonyTime={poruwaCeremonyTime}
// // // //             venue={venue}
// // // //           />
// // // //         </div>

// // // //         {/* ==================================================
// // // //             LEFT FLOWERS
// // // //         ================================================== */}

// // // //         <motion.div
// // // //           className="
// // // //             pointer-events-none
// // // //             absolute
// // // //             bottom-0
// // // //             left-[-22px]
// // // //             z-30
// // // //           "
// // // //           animate={{
// // // //             y: [0, -2, 0],
// // // //             rotate: [0, -0.4, 0],
// // // //           }}
// // // //           transition={{
// // // //             duration: 8,
// // // //             repeat: Infinity,
// // // //             ease: "easeInOut",
// // // //           }}
// // // //         >
// // // //           <Image
// // // //             src="/assets/invitation/left-flowers.svg"
// // // //             alt=""
// // // //             width={180}
// // // //             height={1050}
// // // //             priority
// // // //             className="
// // // //               h-auto
// // // //               select-none
// // // //             "
// // // //           />
// // // //         </motion.div>

// // // //         {/* ==================================================
// // // //             TOP FLOWERS
// // // //         ================================================== */}

// // // //         <motion.div
// // // //           className="
// // // //             pointer-events-none
// // // //             absolute
// // // //             right-[-15px]
// // // //             top-[-20px]
// // // //             z-30
// // // //           "
// // // //           animate={{
// // // //             y: [0, 2, 0],
// // // //             rotate: [0, 0.4, 0],
// // // //           }}
// // // //           transition={{
// // // //             duration: 9,
// // // //             repeat: Infinity,
// // // //             ease: "easeInOut",
// // // //           }}
// // // //         >
// // // //           <Image
// // // //             src="/assets/invitation/top-flowers.svg"
// // // //             alt=""
// // // //             width={220}
// // // //             height={120}
// // // //             priority
// // // //             className="
// // // //               h-auto
// // // //               select-none
// // // //             "
// // // //           />
// // // //         </motion.div>

// // // //         {/* ==================================================
// // // //             BUTTERFLIES
// // // //         ================================================== */}

// // // //         <FlyingButterflies />
// // // //       </section>
// // // //     </PhoneFrame>
// // // //   );
// // // // }

// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "motion/react";

// // // import PhoneFrame from "@/components/common/PhoneFrame";

// // // import InvitationBackground from "./InvitationBackground";
// // // import InvitationCard from "./InvitationCard";
// // // import FlyingButterflies from "./FlyingButterflies";

// // // type InvitationSectionProps = {
// // //   groomName: string;
// // //   brideName: string;
// // //   weddingDate?: string;
// // //   weddingTime?: string;
// // //   poruwaCeremonyTime?: string;
// // //   venue?: string;
// // // };

// // // export default function InvitationSection({
// // //   groomName,
// // //   brideName,
// // //   weddingDate,
// // //   weddingTime,
// // //   poruwaCeremonyTime,
// // //   venue,
// // // }: InvitationSectionProps) {
// // //   return (
// // //     <PhoneFrame>
// // //       <section
// // //         className="
// // //           relative
// // //           min-h-svh
// // //           w-full
// // //           overflow-hidden
// // //           bg-[#F7F3EA]
// // //         "
// // //       >
// // //         {/* BACKGROUND */}

// // //         <InvitationBackground />

// // //         {/* ==================================================
// // //             CARD
// // //         ================================================== */}

// // //         <div
// // //           className="
// // //             absolute
// // //             inset-0
// // //             z-10
// // //             flex
// // //             items-center
// // //             justify-center

// // //             px-[clamp(12px,4vw,40px)]
// // //             py-[clamp(30px,6svh,70px)]
// // //           "
// // //         >
// // //           <InvitationCard
// // //             groomName={groomName}
// // //             brideName={brideName}
// // //             weddingDate={weddingDate}
// // //             weddingTime={weddingTime}
// // //             poruwaCeremonyTime={poruwaCeremonyTime}
// // //             venue={venue}
// // //           />
// // //         </div>

// // //         {/* ==================================================
// // //             LEFT FLOWERS
// // //         ================================================== */}

// // //         <motion.div
// // //           className="
// // //             pointer-events-none
// // //             absolute
// // //             bottom-0
// // //             left-[-4%]
// // //             z-30

// // //             w-[clamp(125px,40%,280px)]
// // //           "
// // //           animate={{
// // //             y: [0, -2, 0],
// // //             rotate: [0, -0.35, 0],
// // //           }}
// // //           transition={{
// // //             duration: 8,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //         >
// // //           <Image
// // //             src="/assets/invitation/left-flowers.svg"
// // //             alt=""
// // //             width={180}
// // //             height={1050}
// // //             priority
// // //             className="
// // //               h-auto
// // //               w-full
// // //               select-none
// // //               object-contain
// // //             "
// // //           />
// // //         </motion.div>

// // //         {/* ==================================================
// // //             TOP FLOWERS
// // //         ================================================== */}

// // //         <motion.div
// // //           className="
// // //             pointer-events-none
// // //             absolute
// // //             right-[-3%]
// // //             top-[-1%]
// // //             z-30

// // //             w-[clamp(150px,48%,320px)]
// // //           "
// // //           animate={{
// // //             y: [0, 2, 0],
// // //             rotate: [0, 0.35, 0],
// // //           }}
// // //           transition={{
// // //             duration: 9,
// // //             repeat: Infinity,
// // //             ease: "easeInOut",
// // //           }}
// // //         >
// // //           <Image
// // //             src="/assets/invitation/top-flowers.svg"
// // //             alt=""
// // //             width={220}
// // //             height={120}
// // //             priority
// // //             className="
// // //               h-auto
// // //               w-full
// // //               select-none
// // //               object-contain
// // //             "
// // //           />
// // //         </motion.div>

// // //         <FlyingButterflies />
// // //       </section>
// // //     </PhoneFrame>
// // //   );
// // // }

// // "use client"; import Image from "next/image"; import { motion } from "motion/react"; import PhoneFrame from "@/components/common/PhoneFrame"; import InvitationBackground from "./InvitationBackground"; import InvitationCard from "./InvitationCard"; import FlyingButterflies from "./FlyingButterflies"; type InvitationSectionProps = { groomName: string; brideName: string; weddingDate?: string; weddingTime?: string; poruwaCeremonyTime?: string; venue?: string; }; export default function InvitationSection({ groomName, brideName, weddingDate, weddingTime, poruwaCeremonyTime, venue, }: InvitationSectionProps) { return ( <PhoneFrame> <section className=" relative min-h-svh w-full overflow-hidden bg-[#F7F3EA] " > {/* BACKGROUND */} <InvitationBackground /> {/* ================================================== CARD ================================================== */} <div className=" absolute inset-0 z-10 flex items-center justify-center px-[clamp(12px,4vw,40px)] py-[clamp(30px,6svh,70px)] " > <InvitationCard groomName={groomName} brideName={brideName} weddingDate={weddingDate} weddingTime={weddingTime} poruwaCeremonyTime={poruwaCeremonyTime} venue={venue} /> </div> {/* ================================================== LEFT FLOWERS ================================================== */} <motion.div className=" pointer-events-none absolute bottom-0 left-[-4%] z-30 w-[clamp(125px,40%,280px)] " animate={{ y: [0, -2, 0], rotate: [0, -0.35, 0], }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", }} > <Image src="/assets/invitation/left-flowers.svg" alt="" width={180} height={1050} priority className=" h-auto w-full select-none object-contain " /> </motion.div> {/* ================================================== TOP FLOWERS ================================================== */} <motion.div className=" pointer-events-none absolute right-[-3%] top-[-1%] z-30 w-[clamp(150px,48%,320px)] " animate={{ y: [0, 2, 0], rotate: [0, 0.35, 0], }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", }} > <Image src="/assets/invitation/top-flowers.svg" alt="" width={220} height={120} priority className=" h-auto w-full select-none object-contain " /> </motion.div> <FlyingButterflies /> </section> </PhoneFrame> ); }

// // "use client";

// // import { motion } from "motion/react";

// // export default function InvitationBackground() {
// //   return (
// //     <div
// //       className="
// //         pointer-events-none
// //         absolute
// //         inset-0
// //         overflow-hidden
// //         bg-[#F7F3EA]
// //       "
// //     >
// //       {/* ==================================================
// //           SOFT PAPER LIGHT
// //       ================================================== */}

// //       <div
// //         className="
// //           absolute
// //           left-1/2
// //           top-[42%]
// //           h-[65%]
// //           w-[85%]
// //           -translate-x-1/2
// //           -translate-y-1/2
// //           rounded-full
// //           bg-[radial-gradient(circle,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.25)_40%,transparent_72%)]
// //           blur-[25px]
// //         "
// //       />

// //       {/* ==================================================
// //           VERY SOFT BLUSH AREAS
// //       ================================================== */}

// //       <div
// //         className="
// //           absolute
// //           -left-[30%]
// //           top-[18%]
// //           h-[42%]
// //           w-[70%]
// //           rounded-full
// //           bg-[#E7B9B8]/[0.08]
// //           blur-[60px]
// //         "
// //       />

// //       <div
// //         className="
// //           -right-[30%]
// //           absolute
// //           bottom-[12%]
// //           h-[45%]
// //           w-[70%]
// //           rounded-full
// //           bg-[#DDB5B4]/[0.07]
// //           blur-[65px]
// //         "
// //       />

// //       {/* ==================================================
// //           LEFT BOTANICAL CURVE
// //       ================================================== */}

// //       <svg
// //         className="
// //           absolute
// //           left-[-10%]
// //           top-[18%]
// //           h-[45%]
// //           w-[45%]
// //           opacity-[0.13]
// //         "
// //         viewBox="0 0 200 500"
// //         fill="none"
// //       >
// //         <path
// //           d="
// //             M40 500
// //             C30 420 95 380 72 305
// //             C52 240 98 185 78 115
// //             C68 80 78 42 112 0
// //           "
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <path
// //           d="M70 350 C35 335 25 305 40 285"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <path
// //           d="M72 305 C110 290 120 260 105 238"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <path
// //           d="M78 210 C45 195 38 165 50 145"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <ellipse
// //           cx="38"
// //           cy="284"
// //           rx="10"
// //           ry="20"
// //           transform="rotate(-40 38 284)"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <ellipse
// //           cx="108"
// //           cy="237"
// //           rx="10"
// //           ry="20"
// //           transform="rotate(35 108 237)"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <ellipse
// //           cx="48"
// //           cy="144"
// //           rx="9"
// //           ry="18"
// //           transform="rotate(-35 48 144)"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />
// //       </svg>

// //       {/* ==================================================
// //           RIGHT BOTANICAL CURVE
// //       ================================================== */}

// //       <svg
// //         className="
// //           absolute
// //           bottom-[7%]
// //           right-[-13%]
// //           h-[38%]
// //           w-[42%]
// //           rotate-180
// //           opacity-[0.10]
// //         "
// //         viewBox="0 0 200 500"
// //         fill="none"
// //       >
// //         <path
// //           d="
// //             M40 500
// //             C30 420 95 380 72 305
// //             C52 240 98 185 78 115
// //             C68 80 78 42 112 0
// //           "
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <path
// //           d="M70 350 C35 335 25 305 40 285"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />

// //         <path
// //           d="M72 305 C110 290 120 260 105 238"
// //           stroke="#C4A27D"
// //           strokeWidth="1"
// //         />
// //       </svg>

// //       {/* ==================================================
// //           TINY GOLD DUST
// //       ================================================== */}

// //       <motion.div
// //         className="
// //           absolute
// //           left-[14%]
// //           top-[31%]
// //           h-[3px]
// //           w-[3px]
// //           rounded-full
// //           bg-[#B99761]/40
// //         "
// //         animate={{
// //           opacity: [0.2, 0.7, 0.2],
// //         }}
// //         transition={{
// //           duration: 3,
// //           repeat: Infinity,
// //         }}
// //       />

// //       <motion.div
// //         className="
// //           absolute
// //           right-[15%]
// //           top-[42%]
// //           h-[2px]
// //           w-[2px]
// //           rounded-full
// //           bg-[#B99761]/40
// //         "
// //         animate={{
// //           opacity: [0.2, 0.8, 0.2],
// //         }}
// //         transition={{
// //           duration: 4,
// //           delay: 1,
// //           repeat: Infinity,
// //         }}
// //       />

// //       <motion.div
// //         className="
// //           absolute
// //           bottom-[31%]
// //           left-[24%]
// //           h-[2px]
// //           w-[2px]
// //           rounded-full
// //           bg-[#B99761]/35
// //         "
// //         animate={{
// //           opacity: [0.15, 0.7, 0.15],
// //         }}
// //         transition={{
// //           duration: 3.5,
// //           delay: 2,
// //           repeat: Infinity,
// //         }}
// //       />

// //       <motion.div
// //         className="
// //           absolute
// //           bottom-[23%]
// //           right-[24%]
// //           h-[3px]
// //           w-[3px]
// //           rounded-full
// //           bg-[#D9A9AC]/35
// //         "
// //         animate={{
// //           opacity: [0.15, 0.6, 0.15],
// //         }}
// //         transition={{
// //           duration: 4,
// //           delay: 0.5,
// //           repeat: Infinity,
// //         }}
// //       />

// //       {/* ==================================================
// //           VERY FAINT DECORATIVE RINGS
// //       ================================================== */}

// //       <div
// //         className="
// //           absolute
// //           left-[-22%]
// //           top-[44%]
// //           h-[clamp(150px,45vw,300px)]
// //           w-[clamp(150px,45vw,300px)]
// //           rounded-full
// //           border
// //           border-[#C5A585]/[0.06]
// //         "
// //       />

// //       <div
// //         className="
// //           absolute
// //           left-[-17%]
// //           top-[47%]
// //           h-[clamp(120px,37vw,250px)]
// //           w-[clamp(120px,37vw,250px)]
// //           rounded-full
// //           border
// //           border-[#C5A585]/[0.05]
// //         "
// //       />

// //       {/* ==================================================
// //           BOTTOM SEAMLESS FADE

// //           Keeps Invitation -> Countdown continuous.
// //       ================================================== */}

// //       <div
// //         className="
// //           absolute
// //           bottom-0
// //           left-0
// //           h-[20%]
// //           w-full
// //           bg-gradient-to-b
// //           from-transparent
// //           to-[#F7F3EA]
// //         "
// //       />
// //     </div>
// //   );
// // }

// // "use client";

// // import Image from "next/image";
// // import { motion } from "motion/react";

// // import PhoneFrame from "@/components/common/PhoneFrame";
// // import InvitationBackground from "./InvitationBackground";
// // import InvitationCard from "./InvitationCard";
// // import FlyingButterflies from "./FlyingButterflies";

// // type InvitationSectionProps = {
// //   groomName: string;
// //   brideName: string;
// //   weddingDate?: string;
// //   weddingTime?: string;
// //   poruwaCeremonyTime?: string;
// //   venue?: string;
// // };

// // export default function InvitationSection({
// //   groomName,
// //   brideName,
// //   weddingDate,
// //   weddingTime,
// //   poruwaCeremonyTime,
// //   venue,
// // }: InvitationSectionProps) {
// //   return (
// //     <PhoneFrame>
// //       <section
// //         className="
// //           relative
// //           min-h-svh
// //           w-full
// //           overflow-hidden
// //           bg-[#E3BFBD]
// //         "
// //       >
// //         {/* BACKGROUND */}
// //         <InvitationBackground />

// //         {/* INVITATION CARD */}
// //         <div
// //           className="
// //             absolute
// //             inset-0
// //             z-10
// //             flex
// //             items-center
// //             justify-center
// //             px-[clamp(12px,4vw,40px)]
// //             py-[clamp(30px,6svh,70px)]
// //           "
// //         >
// //           <InvitationCard
// //             groomName={groomName}
// //             brideName={brideName}
// //             weddingDate={weddingDate}
// //             weddingTime={weddingTime}
// //             poruwaCeremonyTime={poruwaCeremonyTime}
// //             venue={venue}
// //           />
// //         </div>

// //         {/* LEFT FLOWERS */}
// //         <motion.div
// //           className="
// //             pointer-events-none
// //             absolute
// //             bottom-0
// //             left-[-4%]
// //             z-30
// //             w-[clamp(125px,40%,280px)]
// //           "
// //           animate={{
// //             y: [0, -2, 0],
// //             rotate: [0, -0.35, 0],
// //           }}
// //           transition={{
// //             duration: 8,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         >
// //           <Image
// //             src="/assets/invitation/left-flowers.svg"
// //             alt=""
// //             width={180}
// //             height={1050}
// //             priority
// //             className="h-auto w-full select-none object-contain"
// //           />
// //         </motion.div>

// //         {/* TOP FLOWERS */}
// //         <motion.div
// //           className="
// //             pointer-events-none
// //             absolute
// //             right-[-3%]
// //             top-[-1%]
// //             z-30
// //             w-[clamp(150px,48%,320px)]
// //           "
// //           animate={{
// //             y: [0, 2, 0],
// //             rotate: [0, 0.35, 0],
// //           }}
// //           transition={{
// //             duration: 9,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         >
// //           <Image
// //             src="/assets/invitation/top-flowers.svg"
// //             alt=""
// //             width={220}
// //             height={120}
// //             priority
// //             className="h-auto w-full select-none object-contain"
// //           />
// //         </motion.div>

// //         {/* BUTTERFLIES */}
// //         <FlyingButterflies />
// //       </section>
// //     </PhoneFrame>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";

// import PhoneFrame from "@/components/common/PhoneFrame";
// import InvitationBackground from "./InvitationBackground";
// import InvitationCard from "./InvitationCard";
// import FlyingButterflies from "./FlyingButterflies";

// type InvitationSectionProps = {
//   groomName: string;
//   brideName: string;
//   weddingDate?: string;
//   weddingTime?: string;
//   poruwaCeremonyTime?: string;
//   venue?: string;
// };

// export default function InvitationSection({
//   groomName,
//   brideName,
//   weddingDate,
//   weddingTime,
//   poruwaCeremonyTime,
//   venue,
// }: InvitationSectionProps) {
//   return (
//     <PhoneFrame>
//       <section
//         className="
//           relative
//           min-h-svh
//           w-full
//           overflow-hidden
//         "
//       style={{
//   background:
//     "linear-gradient(to bottom, #8F6860 0%, #A97972 20%, #BE918B 40%, #D3ACA7 60%, #E5CFCA 80%, #F4EAE5 100%)",
// }}
//       >
//         {/* ==================================================
//             DECORATIVE BACKGROUND
//         ================================================== */}

//         <InvitationBackground />

//         {/* ==================================================
//             INVITATION CARD
//         ================================================== */}

//         <div
//           className="
//             absolute
//             inset-0
//             z-10
//             flex
//             items-center
//             justify-center
//             px-[clamp(12px,4vw,40px)]
//             py-[clamp(30px,6svh,70px)]
//           "
//         >
//           <InvitationCard
//             groomName={groomName}
//             brideName={brideName}
//             weddingDate={weddingDate}
//             weddingTime={weddingTime}
//             poruwaCeremonyTime={poruwaCeremonyTime}
//             venue={venue}
//           />
//         </div>

//         {/* ==================================================
//             LEFT ORCHIDS
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             bottom-0
//             left-[-4%]
//             z-30
//             w-[clamp(125px,40%,280px)]
//           "
//           animate={{
//             y: [0, -2, 0],
//             rotate: [0, -0.35, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/left-flowers.svg"
//             alt=""
//             width={180}
//             height={1050}
//             priority
//             className="
//               h-auto
//               w-full
//               select-none
//               object-contain
//             "
//           />
//         </motion.div>

//         {/* ==================================================
//             TOP RIGHT ORCHIDS
//         ================================================== */}

//         <motion.div
//           className="
//             pointer-events-none
//             absolute
//             right-[-3%]
//             top-[-1%]
//             z-30
//             w-[clamp(150px,48%,320px)]
//           "
//           animate={{
//             y: [0, 2, 0],
//             rotate: [0, 0.35, 0],
//           }}
//           transition={{
//             duration: 9,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <Image
//             src="/assets/invitation/top-flowers.svg"
//             alt=""
//             width={220}
//             height={120}
//             priority
//             className="
//               h-auto
//               w-full
//               select-none
//               object-contain
//             "
//           />
//         </motion.div>

//         {/* ==================================================
//             BUTTERFLIES
//         ================================================== */}

//         <FlyingButterflies />
//       </section>
//     </PhoneFrame>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";
import InvitationBackground from "./InvitationBackground";
import InvitationCard from "./InvitationCard";
import FlyingButterflies from "./FlyingButterflies";

type InvitationSectionProps = {
  groomName: string;
  brideName: string;
  weddingDate?: string;
  weddingTime?: string;
  poruwaCeremonyTime?: string;
  venue?: string;
};

export default function InvitationSection({
  groomName,
  brideName,
  weddingDate,
  weddingTime,
  poruwaCeremonyTime,
  venue,
}: InvitationSectionProps) {
  return (
    <PhoneFrame>
      <section
        className="
          relative
          min-h-svh
          w-full
          overflow-hidden
          bg-[#F4EAE5]
        "
      >
        {/* BACKGROUND DETAILS */}
        <InvitationBackground />

        {/* ==================================================
            TOP RIGHT ORCHIDS
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-5%]
            top-[-1%]
            z-20
            w-[clamp(155px,47%,310px)]
          "
          animate={{
            y: [0, 3, 0],
            rotate: [0, 0.5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            priority
            className="h-auto w-full select-none object-contain"
          />
        </motion.div>

        {/* ==================================================
            LEFT MIDDLE ORCHID

            Smaller + faded so it feels like part
            of the background rather than another focal point.
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-18%]
            top-[22%]
            z-[2]
            w-[clamp(110px,31%,220px)]
            opacity-35
          "
          animate={{
            y: [0, -4, 0],
            rotate: [-7, -5, -7],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="h-auto w-full select-none object-contain"
          />
        </motion.div>

        {/* ==================================================
            RIGHT MIDDLE ORCHID
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            right-[-20%]
            top-[43%]
            z-[2]
            w-[clamp(120px,34%,230px)]
            opacity-30
          "
          animate={{
            y: [0, 4, 0],
            rotate: [165, 168, 165],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="h-auto w-full select-none object-contain"
          />
        </motion.div>

        {/* ==================================================
            INVITATION CARD
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-center
            px-[clamp(12px,4vw,40px)]
            py-[clamp(30px,6svh,70px)]
          "
        >
          <InvitationCard
            groomName={groomName}
            brideName={brideName}
            weddingDate={weddingDate}
            weddingTime={weddingTime}
            poruwaCeremonyTime={poruwaCeremonyTime}
            venue={venue}
          />
        </div>

        {/* ==================================================
            LARGE BOTTOM LEFT ORCHIDS
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-[-2%]
            left-[-5%]
            z-30
            w-[clamp(135px,40%,285px)]
          "
          animate={{
            y: [0, -3, 0],
            rotate: [0, -0.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/left-flowers.svg"
            alt=""
            width={180}
            height={1050}
            priority
            className="h-auto w-full select-none object-contain"
          />
        </motion.div>

        {/* ==================================================
            SMALL BOTTOM RIGHT ORCHID

            Helps lead the eye into the countdown.
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            bottom-[5%]
            right-[-12%]
            z-[5]
            w-[clamp(105px,29%,190px)]
            opacity-55
          "
          animate={{
            y: [0, -4, 0],
            rotate: [175, 178, 175],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="h-auto w-full select-none object-contain"
          />
        </motion.div>

        {/* ==================================================
            VERY FAINT ORCHID BEHIND CARD
        ================================================== */}

        <motion.div
          className="
            pointer-events-none
            absolute
            left-[-8%]
            top-[57%]
            z-[1]
            w-[clamp(120px,35%,240px)]
            opacity-[0.12]
          "
          animate={{
            y: [0, 5, 0],
            rotate: [-15, -12, -15],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/invitation/top-flowers.svg"
            alt=""
            width={220}
            height={120}
            className="h-auto w-full select-none object-contain"
          />
        </motion.div>

        {/* BUTTERFLIES */}
        <FlyingButterflies />

        {/* ==================================================
            BOTTOM FADE

            Same color as CountdownSection.
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-[3]
            h-[12%]
            w-full
            bg-gradient-to-b
            from-transparent
            to-[#F4EAE5]
          "
        />
      </section>
    </PhoneFrame>
  );
}
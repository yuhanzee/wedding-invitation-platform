// // // // // import Image from "next/image";

// // // // // type TopFlapProps = {
// // // // //   isOpen: boolean;
// // // // // };

// // // // // export default function TopFlap({ isOpen }: TopFlapProps) {
// // // // //   return (
// // // // //     <div
// // // // //       className="absolute top-0 left-0 w-full h-full transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) select-none"
// // // // //       style={{
// // // // //         transformOrigin: "top center",
// // // // //         transform: isOpen ? "rotateX(180deg)" : "rotateX(0deg)",
// // // // //         zIndex: isOpen ? 10 : 40,
// // // // //         transformStyle: "preserve-3d",
// // // // //       }}
// // // // //     >
// // // // //       <div
// // // // //         className="w-full h-full relative"
// // // // //         style={{
// // // // //           clipPath: "polygon(0 0, 100% 0, 50% 50%)",
// // // // //         }}
// // // // //       >
// // // // //         <Image
// // // // //           src="/assets/envelope/envelope-body.png"
// // // // //           alt="Envelope top flap texture"
// // // // //           fill
// // // // //           priority
// // // // //           className="object-cover"
// // // // //         />
        
// // // // //         {/* Shadow overlay to create depth during the fold */}
// // // // //         <div
// // // // //           className="absolute inset-0 bg-black/40 transition-opacity duration-[1000ms] pointer-events-none"
// // // // //           style={{
// // // // //             opacity: isOpen ? 0.35 : 0,
// // // // //             clipPath: "polygon(0 0, 100% 0, 50% 50%)",
// // // // //           }}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import Image from "next/image";

// // // // type TopFlapProps = {
// // // //   isOpen: boolean;
// // // // };

// // // // export default function TopFlap({
// // // //   isOpen,
// // // // }: TopFlapProps) {
// // // //   return (
// // // //     <div
// // // //       className="
// // // //         absolute
// // // //         top-0
// // // //         left-0
// // // //         w-full
// // // //         h-[115px]
// // // //         select-none
// // // //         pointer-events-none
// // // //         transition-transform
// // // //         duration-[1000ms]
// // // //         ease-in-out
// // // //       "
// // // //       style={{
// // // //         transformOrigin: "top center",
// // // //         transform: isOpen
// // // //           ? "rotateX(180deg)"
// // // //           : "rotateX(0deg)",
// // // //         transformStyle: "preserve-3d",
// // // //         zIndex: isOpen ? 10 : 40,
// // // //       }}
// // // //     >
// // // //       <Image
// // // //         src="/assets/envelope/top-flap.png"
// // // //         alt="Envelope top flap"
// // // //         fill
// // // //         priority
// // // //         className="object-contain"
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // import Image from "next/image";

// // // type TopFlapProps = {
// // //   isOpen: boolean;
// // // };

// // // export default function TopFlap({
// // //   isOpen,
// // // }: TopFlapProps) {
// // //   return (
// // //     <div
// // //       className="
// // //         absolute
// // //         left-0
// // //         top-0
// // //         w-full
// // //         h-[105px]
// // //         select-none
// // //         pointer-events-none
// // //         transition-transform
// // //         duration-[1000ms]
// // //         ease-in-out
// // //       "
// // //       style={{
// // //         transformOrigin: "top center",
// // //         transform: isOpen
// // //           ? "rotateX(180deg)"
// // //           : "rotateX(0deg)",
// // //         transformStyle: "preserve-3d",
// // //         zIndex: isOpen ? 5 : 40,
// // //       }}
// // //     >
// // //       <Image
// // //         src="/assets/envelope/top-flap.png"
// // //         alt="Envelope top flap"
// // //         fill
// // //         priority
// // //         className="object-fill"
// // //       />
// // //     </div>
// // //   );
// // // }

// // import Image from "next/image";

// // type TopFlapProps = {
// //   isOpen: boolean;
// // };

// // export default function TopFlap({
// //   isOpen,
// // }: TopFlapProps) {
// //   return (
// //     <div
// //       className="absolute inset-0 select-none pointer-events-none"
// //       style={{
// //         zIndex: isOpen ? 10 : 40,
// //         perspective: "1000px",
// //       }}
// //     >
// //       <div
// //         className="absolute inset-[-50] transition-transform duration-[1000ms] ease-in-out"
// //         style={{
// //           transformOrigin: "top center",
// //           transform: isOpen
// //             ? "rotateX(180deg)"
// //             : "rotateX(0deg)",
// //           transformStyle: "preserve-3d",
// //         }}
// //       >
// //         <Image
// //           src="/assets/envelope/top-flap.png"
// //           alt="Envelope top flap"
// //           fill
// //           priority
// //           className="object-contain"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// import Image from "next/image";

// type TopFlapProps = {
//   isOpen: boolean;
// };

// export default function TopFlap({
//   isOpen,
// }: TopFlapProps) {
//   return (
//     <div
//       className="absolute top-[-60] left-0 w-full h-[300px] select-none pointer-events-none"
//       style={{
//         zIndex: isOpen ? 10 : 40,
//         perspective: "1000px",
//       }}
//     >
//       <div
//         className="relative w-full h-full transition-transform duration-[1000ms] ease-in-out"
//         style={{
//           transformOrigin: "top center",
//           transform: isOpen
//             ? "rotateX(180deg)"
//             : "rotateX(0deg)",
//           transformStyle: "preserve-3d",
//         }}
//       >
//         <Image
//           src="/assets/envelope/top-flap.png"
//           alt="Envelope top flap"
//           fill
//           priority
//           className="object-fill"
//         />
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// type TopFlapProps = {
//   isOpen: boolean;
// };

// export default function TopFlap({
//   isOpen,
// }: TopFlapProps) {
//   return (
//     <div
//       className="absolute left-[-37] top-[-103] z-40 w-87 pointer-events-none select-none"
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       <div
//         className="relative w-full transition-transform duration-[1000ms] ease-in-out"
//         style={{
//           transformOrigin: "top center",
//           transform: isOpen
//             ? "rotateX(180deg)"
//             : "rotateX(0deg)",
//           transformStyle: "preserve-3d",
//         }}
//       >
//         <Image
//           src="/assets/envelope/top-flap.png"
//           alt="Envelope top flap"
//           width={340}
//           height={115}
//           priority
//           className="block w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";

// type TopFlapProps = {
//   isOpen: boolean;
// };

// export default function TopFlap({
//   isOpen,
// }: TopFlapProps) {
//   return (
//     <motion.div
//       className="absolute left-0 top-0 w-full z-40 pointer-events-none"
//       style={{
//         transformOrigin: "top center",
//         transformStyle: "preserve-3d",
//       }}
//       initial={false}
//       animate={{
//         rotateX: isOpen ? 180 : 0,
//       }}
//       transition={{
//         duration: 1.15,
//         ease: [0.65, 0, 0.35, 1],
//       }}
//     >
//       <Image
//         src="/assets/envelope/top-flap.png"
//         alt="Envelope top flap"
//         width={280}
//         height={110}
//         priority
//         className="block w-full h-auto"
//       />
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";

type TopFlapProps = {
  isOpen: boolean;
};

export default function TopFlap({
  isOpen,
}: TopFlapProps) {
  return (
    <motion.div
      className="absolute left-0 top-0 w-full pointer-events-none select-none z-10"
      style={{
        transformOrigin: "50% 0%",
        transformStyle: "preserve-3d",
      }}
      initial={false}
      animate={{
        rotateX: isOpen ? -180 : 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1],
      }}
    >
      <Image
        src="/assets/envelope/top-flap.png"
        alt="Envelope top flap"
        width={280}
        height={110}
        priority
        className="block w-full h-auto"
      />
    </motion.div>
  );
}
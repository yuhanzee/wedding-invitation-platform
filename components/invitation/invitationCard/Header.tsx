

// // // "use client";

// // // import { motion } from "motion/react";
// // // import { cormorantGaramond } from "@/lib/fonts";

// // // export default function Header() {
// // //   return (
// // //     <motion.div
// // //       className="
// // //         absolute
// // //         left-1/2
// // //         top-[19.5%]
// // //         z-20

// // //         w-[48%]
// // //         -translate-x-1/2
// // //         text-center
// // //       "
// // //       initial={{
// // //         opacity: 0,
// // //         y: -10,
// // //       }}
// // //       whileInView={{
// // //         opacity: 1,
// // //         y: 0,
// // //       }}
// // //       viewport={{ once: true }}
// // //       transition={{
// // //         delay: 0.2,
// // //         duration: 0.7,
// // //         ease: [0.22, 1, 0.36, 1],
// // //       }}
// // //     >
// // //       <p
// // //         className={`
// // //           ${cormorantGaramond.className}

// // //           text-[clamp(7px,1.6vw,11px)]
// // //           uppercase
// // //           leading-[1.1]
// // //           tracking-[0.14em]
// // //           text-[#625853]
// // //         `}
// // //       >
// // //         WE HAVE THE HONOR OF
// // //       </p>

// // //       <p
// // //         className={`
// // //           ${cormorantGaramond.className}

// // //           mt-[2%]
// // //           text-[clamp(7px,1.6vw,11px)]
// // //           uppercase
// // //           leading-[1.1]
// // //           tracking-[0.14em]
// // //           text-[#625853]
// // //         `}
// // //       >
// // //         INVITING YOU TO
// // //       </p>
// // //     </motion.div>
// // //   );
// // // }

// // "use client";

// // import { motion } from "motion/react";
// // import { cormorantGaramond } from "@/lib/fonts";

// // export default function Header() {
// //   return (
// //     <motion.div
// //       className="
// //         absolute
// //         left-1/2
// //         top-[19%]
// //         z-20

// //         w-[52%]

// //         -translate-x-1/2
// //         text-center
// //       "
// //       initial={{
// //         opacity: 0,
// //         y: -10,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         y: 0,
// //       }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: 0.2,
// //         duration: 0.7,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //     >
// //       <p
// //         className={`
// //           ${cormorantGaramond.className}

// //           text-[clamp(8px,2.4vw,12px)]

// //           uppercase
// //           leading-[1.15]
// //           tracking-[0.12em]

// //           text-[#625853]
// //         `}
// //       >
// //         WE HAVE THE HONOR OF
// //       </p>

// //       <p
// //         className={`
// //           ${cormorantGaramond.className}

// //           mt-[3%]

// //           text-[clamp(8px,2.4vw,12px)]

// //           uppercase
// //           leading-[1.15]
// //           tracking-[0.12em]

// //           text-[#625853]
// //         `}
// //       >
// //         INVITING YOU TO
// //       </p>
// //     </motion.div>
// //   );
// // }

// "use client";

// import { motion } from "motion/react";
// import { cormorantGaramond } from "@/lib/fonts";

// export default function Header() {
//   return (
//     <motion.div
//       className="
//         absolute
//         left-1/2
//         top-[18.5%]
//         z-20

//         w-[58%]

//         -translate-x-1/2
//         text-center
//       "
//       initial={{
//         opacity: 0,
//         y: -10,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       viewport={{
//         once: true,
//       }}
//       transition={{
//         delay: 0.2,
//         duration: 0.7,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//     >
//       <p
//         className={`
//           ${cormorantGaramond.className}

//           text-[clamp(9px,2.8vw,13px)]

//           font-medium
//           uppercase

//           leading-[1.15]
//           tracking-[0.1em]

//           text-[#554B47]
//         `}
//       >
//         WE HAVE THE HONOR OF
//       </p>

//       <p
//         className={`
//           ${cormorantGaramond.className}

//           mt-[3%]

//           text-[clamp(9px,2.8vw,13px)]

//           font-medium
//           uppercase

//           leading-[1.15]
//           tracking-[0.1em]

//           text-[#554B47]
//         `}
//       >
//         INVITING YOU TO
//       </p>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

export default function Header() {
  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-[17.5%]
        z-20
        w-[64%]
        -translate-x-1/2
        text-center
      "
      initial={{
        opacity: 0,
        y: -8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <p
        className={`
          ${cormorantGaramond.className}
          text-[clamp(10px,3vw,14px)]
          font-semibold
          uppercase
          leading-[1.15]
          tracking-[0.09em]
          text-[#554B47]
        `}
      >
        WE HAVE THE HONOR OF
      </p>

      <p
        className={`
          ${cormorantGaramond.className}
          mt-[3%]
          text-[clamp(10px,3vw,14px)]
          font-semibold
          uppercase
          leading-[1.15]
          tracking-[0.09em]
          text-[#554B47]
        `}
      >
        INVITING YOU TO
      </p>
    </motion.div>
  );
}
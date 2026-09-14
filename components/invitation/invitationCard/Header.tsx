
// // "use client";

// // import { motion } from "motion/react";
// // import { cormorantGaramond } from "@/lib/fonts";

// // export default function Header() {
// //   return (
// //     <motion.div
// //       className="absolute top-[84px] left-1/2 -translate-x-1/2 w-[170px] text-center z-20"
// //       initial={{ opacity: 0, y: -15 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: 0.2,
// //         duration: 0.7,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //     >
// //       <p
// //         className={`${cormorantGaramond.className} uppercase text-[10px] tracking-[0.14em] leading-[10px] text-[#625853]`}
// //       >
// //         WE HAVE THE HONOR OF
// //       </p>

// //       <p
// //         className={`${cormorantGaramond.className} uppercase text-[10px] tracking-[0.14em] leading-[10px] text-[#625853] mt-[2px]`}
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
//         top-[19.5%]
//         z-20
//         w-[45%]
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
//           text-[clamp(7px,2.3vw,10px)]
//           uppercase
//           leading-[1.05]
//           tracking-[0.14em]
//           text-[#625853]
//         `}
//       >
//         WE HAVE THE HONOR OF
//       </p>

//       <p
//         className={`
//           ${cormorantGaramond.className}
//           mt-[2px]
//           text-[clamp(7px,2.3vw,10px)]
//           uppercase
//           leading-[1.05]
//           tracking-[0.14em]
//           text-[#625853]
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
        top-[19.5%]
        z-20

        w-[48%]
        -translate-x-1/2
        text-center
      "
      initial={{
        opacity: 0,
        y: -10,
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

          text-[clamp(7px,1.6vw,11px)]
          uppercase
          leading-[1.1]
          tracking-[0.14em]
          text-[#625853]
        `}
      >
        WE HAVE THE HONOR OF
      </p>

      <p
        className={`
          ${cormorantGaramond.className}

          mt-[2%]
          text-[clamp(7px,1.6vw,11px)]
          uppercase
          leading-[1.1]
          tracking-[0.14em]
          text-[#625853]
        `}
      >
        INVITING YOU TO
      </p>
    </motion.div>
  );
}
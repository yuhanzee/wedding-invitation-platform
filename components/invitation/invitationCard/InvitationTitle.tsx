

// // "use client";

// // import { motion } from "motion/react";
// // import { greatVibes } from "@/lib/fonts";

// // type InvitationTitleProps = {
// //   groomName?: string;
// //   brideName?: string;
// // };

// // export default function InvitationTitle({}: InvitationTitleProps) {
// //   return (
// //     <div className="absolute top-[126px] left-1/2 -translate-x-1/2 text-center z-20">

// //       <motion.p
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{
// //           delay: 0.45,
// //           duration: 0.6,
// //         }}
// //         className={`${greatVibes.className} text-[27px] leading-none text-[#6B605B]`}
// //       >
// //         Our
// //       </motion.p>

// //       <motion.h2
// //         initial={{ opacity: 0, y: 25 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{
// //           delay: 0.7,
// //           duration: 0.7,
// //         }}
// //         className={`${greatVibes.className} text-[38px] leading-[44px] text-[#6B605B]`}
// //       >
// //         Wedding
// //       </motion.h2>

// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "motion/react";
// import { greatVibes } from "@/lib/fonts";

// type InvitationTitleProps = {
//   groomName?: string;
//   brideName?: string;
// };

// export default function InvitationTitle(
//   {}: InvitationTitleProps
// ) {
//   return (
//     <div
//       className="
//         absolute
//         left-1/2
//         top-[29%]
//         z-20
//         -translate-x-1/2
//         text-center
//       "
//     >
//       <motion.p
//         initial={{
//           opacity: 0,
//           y: 15,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//         }}
//         transition={{
//           delay: 0.45,
//           duration: 0.6,
//         }}
//         className={`
//           ${greatVibes.className}
//           whitespace-nowrap
//           text-[clamp(20px,6.5vw,27px)]
//           leading-none
//           text-[#6B605B]
//         `}
//       >
//         Our
//       </motion.p>

//       <motion.h2
//         initial={{
//           opacity: 0,
//           y: 18,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//         }}
//         transition={{
//           delay: 0.7,
//           duration: 0.7,
//         }}
//         className={`
//           ${greatVibes.className}
//           whitespace-nowrap
//           text-[clamp(29px,9vw,38px)]
//           leading-[1.1]
//           text-[#6B605B]
//         `}
//       >
//         Wedding
//       </motion.h2>
//     </div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { greatVibes } from "@/lib/fonts";

type InvitationTitleProps = {
  groomName?: string;
  brideName?: string;
};

export default function InvitationTitle(
  {}: InvitationTitleProps
) {
  return (
    <div
      className="
        absolute
        left-1/2
        top-[29%]
        z-20
        -translate-x-1/2
        text-center
      "
    >
      <motion.p
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className={`
          ${greatVibes.className}

          whitespace-nowrap
          text-[clamp(20px,5vw,34px)]
          leading-none
          text-[#6B605B]
        `}
      >
        Our
      </motion.p>

      <motion.h2
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.7,
        }}
        className={`
          ${greatVibes.className}

          whitespace-nowrap
          text-[clamp(30px,7vw,48px)]
          leading-[1.05]
          text-[#6B605B]
        `}
      >
        Wedding
      </motion.h2>
    </div>
  );
}
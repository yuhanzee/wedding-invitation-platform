// // // import { greatVibes } from "@/lib/fonts";

// // // export default function InvitationTitle() {
// // //   return (
// // // // InvitationTitle
// // // <div className="absolute top-[92px] left-1/2 -translate-x-1/2">      <p className="text-[26px] italic text-[#7b7b7b]">
// // //         Our
// // //       </p>

// // //       <h1
// // //         className={`${greatVibes.className} text-[54px] text-[#6d6d6d] leading-none -mt-1`}
// // //       >
// // //         Wedding
// // //       </h1>
// // //     </div>
// // //   );
// // // }

// // import { greatVibes } from "@/lib/fonts";

// // type InvitationTitleProps = {
// //   groomName?: string;
// //   brideName?: string;
// // };

// // export default function InvitationTitle({}: InvitationTitleProps) {
// //   return (
// //     <div className="absolute top-[100px] left-1/2 -translate-x-1/2 text-center select-none w-full">
// //       <p
// //         className={`${greatVibes.className} text-[32px] text-[#6C625E] leading-none`}
// //       >
// //         Our
// //       </p>

// //       <h2
// //         className={`${greatVibes.className} text-[54px] text-[#6C625E] leading-none -mt-1 font-light`}
// //       >
// //         Wedding
// //       </h2>
// //     </div>
// //   );
// // }

// import { greatVibes } from "@/lib/fonts";

// type InvitationTitleProps = {
//   groomName?: string;
//   brideName?: string;
// };

// export default function InvitationTitle({}: InvitationTitleProps) {
//   return (
//     <div className="absolute top-[126px] left-1/2 -translate-x-1/2 text-center z-20">
//       <p
//         className={`${greatVibes.className} text-[27px] leading-none text-[#6B605B]`}
//       >
//         Our
//       </p>

//       <h2
//         className={`${greatVibes.className} text-[38px] leading-[44px] text-[#6B605B]`}
//       >
//         Wedding
//       </h2>
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

export default function InvitationTitle({}: InvitationTitleProps) {
  return (
    <div className="absolute top-[126px] left-1/2 -translate-x-1/2 text-center z-20">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className={`${greatVibes.className} text-[27px] leading-none text-[#6B605B]`}
      >
        Our
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.7,
        }}
        className={`${greatVibes.className} text-[38px] leading-[44px] text-[#6B605B]`}
      >
        Wedding
      </motion.h2>

    </div>
  );
}
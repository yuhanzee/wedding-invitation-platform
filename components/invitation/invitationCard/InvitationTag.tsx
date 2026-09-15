

// // "use client";

// // import Image from "next/image";
// // import { motion } from "motion/react";
// // import { cormorantGaramond } from "@/lib/fonts";

// // type InvitationTagProps = {
// //   groomName: string;
// //   brideName: string;
// // };

// // export default function InvitationTag({
// //   groomName,
// //   brideName,
// // }: InvitationTagProps) {
// //   return (
// //     <motion.div
// //       className="
// //         absolute
// //         bottom-[-23%]
// //         right-[7%]
// //         z-30

// //         w-[42%]
// //         aspect-[160/223]
// //       "
// //       initial={{
// //         opacity: 0,
// //         scale: 0.85,
// //         rotate: -8,
// //       }}
// //       whileInView={{
// //         opacity: 1,
// //         scale: 1,
// //         rotate: 0,
// //       }}
// //       viewport={{ once: true }}
// //       transition={{
// //         delay: 1.7,
// //         duration: 0.8,
// //         ease: [0.22, 1, 0.36, 1],
// //       }}
// //       animate={{
// //         rotate: [0, 1.2, -1.2, 0],
// //       }}
// //     >
// //       <Image
// //         src="/assets/invitation/tag.svg"
// //         alt="Save the Date"
// //         fill
// //         priority
// //         sizes="200px"
// //         className="
// //           pointer-events-none
// //           select-none
// //           object-contain
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0

// //           flex
// //           flex-col
// //           items-center

// //           px-[10%]
// //           pt-[31%]

// //           text-center
// //           text-[#2A4858]
// //         "
// //       >
// //         <div
// //           className="
// //             mt-[24%]
// //             flex
// //             h-[38%]
// //             w-full
// //             flex-col
// //             items-center
// //             justify-center
// //           "
// //         >
// //           <span
// //             className={`
// //               ${cormorantGaramond.className}

// //               max-w-[78%]
// //               truncate

// //               text-[clamp(5px,1.25vw,8px)]

// //               font-bold
// //               uppercase
// //               leading-tight
// //               tracking-[0.1em]
// //             `}
// //           >
// //             {groomName}
// //           </span>

// //           <span
// //             className={`
// //               ${cormorantGaramond.className}

// //               my-[2%]
// //               text-[clamp(5px,1.25vw,8px)]
// //               font-semibold
// //               italic
// //             `}
// //           >
// //             &
// //           </span>

// //           <span
// //             className={`
// //               ${cormorantGaramond.className}

// //               max-w-[78%]
// //               truncate

// //               text-[clamp(5px,1.25vw,8px)]

// //               font-bold
// //               uppercase
// //               leading-tight
// //               tracking-[0.1em]
// //             `}
// //           >
// //             {brideName}
// //           </span>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import { cormorantGaramond } from "@/lib/fonts";

// type InvitationTagProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function InvitationTag({
//   groomName,
//   brideName,
// }: InvitationTagProps) {
//   return (
//     <motion.div
//       className="
//         absolute

//         bottom-[-20%]
//         right-[5%]

//         z-30

//         aspect-[160/223]

//         w-[39%]
//         max-w-[175px]
//       "
//       initial={{
//         opacity: 0,
//         scale: 0.85,
//         rotate: -8,
//       }}
//       whileInView={{
//         opacity: 1,
//         scale: 1,
//         rotate: 0,
//       }}
//       viewport={{ once: true }}
//       transition={{
//         delay: 1.7,
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       animate={{
//         rotate: [0, 1.2, -1.2, 0],
//       }}
//     >
//       <Image
//         src="/assets/invitation/tag.svg"
//         alt="Save the Date"
//         fill
//         priority
//         sizes="(max-width: 430px) 40vw, 175px"
//         className="
//           pointer-events-none
//           select-none
//           object-contain
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0

//           flex
//           flex-col
//           items-center

//           px-[10%]
//           pt-[31%]

//           text-center
//           text-[#2A4858]
//         "
//       >
//         <div
//           className="
//             mt-[24%]

//             flex
//             h-[38%]
//             w-full

//             flex-col
//             items-center
//             justify-center
//           "
//         >
//           <span
//             className={`
//               ${cormorantGaramond.className}

//               max-w-[82%]
//               truncate

//               text-[clamp(6px,1.8vw,9px)]

//               font-bold
//               uppercase

//               leading-tight

//               tracking-[0.08em]
//             `}
//           >
//             {groomName}
//           </span>

//           <span
//             className={`
//               ${cormorantGaramond.className}

//               my-[2%]

//               text-[clamp(6px,1.8vw,9px)]

//               font-semibold
//               italic
//             `}
//           >
//             &amp;
//           </span>

//           <span
//             className={`
//               ${cormorantGaramond.className}

//               max-w-[82%]
//               truncate

//               text-[clamp(6px,1.8vw,9px)]

//               font-bold
//               uppercase

//               leading-tight

//               tracking-[0.08em]
//             `}
//           >
//             {brideName}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type InvitationTagProps = {
  groomName: string;
  brideName: string;
};

export default function InvitationTag({
  groomName,
  brideName,
}: InvitationTagProps) {
  return (
    <motion.div
      className="
        absolute

        bottom-[-19%]
        right-[4%]

        z-30

        aspect-[160/223]

        w-[38%]
        max-w-[180px]
      "
      initial={{
        opacity: 0,
        scale: 0.85,
        rotate: -8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 1.7,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      animate={{
        rotate: [0, 1.2, -1.2, 0],
      }}
    >
      <Image
        src="/assets/invitation/tag.svg"
        alt="Save the Date"
        fill
        priority
        sizes="
          (max-width: 430px) 38vw,
          180px
        "
        className="
          pointer-events-none
          select-none
          object-contain
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          flex
          flex-col
          items-center

          px-[10%]
          pt-[31%]

          text-center
          text-[#2A4858]
        "
      >
        <div
          className="
            mt-[24%]

            flex
            h-[38%]
            w-full

            flex-col
            items-center
            justify-center
          "
        >
          <span
            className={`
              ${cormorantGaramond.className}

              max-w-[82%]
              truncate

              text-[clamp(7px,2vw,10px)]

              font-bold
              uppercase

              leading-tight
              tracking-[0.07em]
            `}
          >
            {groomName}
          </span>

          <span
            className={`
              ${cormorantGaramond.className}

              my-[2%]

              text-[clamp(7px,2vw,10px)]

              font-semibold
              italic
            `}
          >
            &amp;
          </span>

          <span
            className={`
              ${cormorantGaramond.className}

              max-w-[82%]
              truncate

              text-[clamp(7px,2vw,10px)]

              font-bold
              uppercase

              leading-tight
              tracking-[0.07em]
            `}
          >
            {brideName}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
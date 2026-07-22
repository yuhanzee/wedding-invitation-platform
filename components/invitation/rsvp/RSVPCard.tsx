// // // // // "use client";

// // // // // import Image from "next/image";

// // // // // export default function RSVPCard() {
// // // // //   return (
// // // // //     <div className="relative w-[270px]">

// // // // //       <Image
// // // // //         src="/assets/invitation/card.svg"
// // // // //         alt=""
// // // // //         width={270}
// // // // //         height={430}
// // // // //         priority
// // // // //       />

// // // // //     </div>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import Image from "next/image";

// // // // export default function RSVPCard() {
// // // //   return (
// // // //     <div
// // // //       className="
// // // //         relative
// // // //         w-[290px]
// // // //         select-none
// // // //       "
// // // //     >
// // // //       <Image
// // // //         src="/assets/invitation/card.svg"
// // // //         alt=""
// // // //         width={245}
// // // //         height={330}
// // // //         priority
// // // //         className="w-full h-auto"
// // // //       />
// // // //     </div>
// // // //   );
// // // // }

// // // // // "use client";

// // // // // import Image from "next/image";

// // // // // export default function RSVPCard() {
// // // // //   return (
// // // // //     <div className="relative w-[245px]">
// // // // //       <Image
// // // // //         src="/assets/invitation/card.svg"
// // // // //         alt=""
// // // // //         width={245}
// // // // //         height={330}
// // // // //         priority
// // // // //         className="w-full h-auto select-none"
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // "use client";

// // // import Image from "next/image";
// // // import RSVPForm from "./RSVPForm";

// // // export default function RSVPCard() {
// // //   return (
// // //     <div
// // //       className="
// // //         relative
// // //         w-[310px]
// // //         aspect-[245/330]
// // //         select-none
// // //       "
// // //     >
// // //       {/* Card Background */}
// // //       <Image
// // //         src="/assets/invitation/card.svg"
// // //         alt=""
// // //         fill
// // //         priority
// // //         className="pointer-events-none object-contain"
// // //       />

// // //       {/* Form */}
// // //       <div
// // //         className="
// // //           absolute
// // //           inset-0
// // //           z-10
// // //           px-16
// // //           pt-6
// // //           pb-8
// // //         "
// // //       >
// // //        <RSVPForm
// // //   guestName="Dilmith Ranasinghe"
// // //   familyCount={2}
// // // />
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import Image from "next/image";
// // import RSVPForm from "./RSVPForm";

// // type RSVPCardProps = {
// //   guestName?: string;
// //   familyCount?: number;
// // };

// // export default function RSVPCard({
// //   guestName,
// //   familyCount,
// // }: RSVPCardProps) {
// //   return (
// //     <div className="relative h-[500px] w-[315px] select-none">
// //       <div
// //         className="
// //           absolute
// //           inset-[29px_37px_31px]
// //           bg-[#fffaf5]
// //           shadow-[0_14px_35px_rgba(48,34,33,0.18)]
// //         "
// //       />

// //       <Image
// //         src="/assets/rsvp/lace-frame.svg"
// //         alt=""
// //         fill
// //         priority
// //         sizes="315px"
// //         className="pointer-events-none z-10 object-fill"
// //       />

// //       <div
// //         className="
// //           absolute
// //           inset-x-[54px]
// //           bottom-[58px]
// //           top-[66px]
// //           z-20
// //         "
// //       >
// //         <RSVPForm
// //           guestName={guestName}
// //           familyCount={familyCount}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import RSVPForm from "./RSVPForm";

// type RSVPCardProps = {
//   guestName?: string;
//   familyCount?: number;
// };

// export default function RSVPCard({
//   guestName,
//   familyCount,
// }: RSVPCardProps) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 120,
//         rotate: -1.5,
//         scale: 0.96,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         rotate: 0,
//         scale: 1,
//       }}
//       viewport={{
//         once: false,
//         amount: 0.2,
//       }}
//       transition={{
//         duration: 1.25,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className="relative w-[320px] h-[510px]"
//     >
//       {/* White Paper */}

//       <div
//         className="
//           absolute
//          left-[26px]
// right-[26px]
// top-[30px]
// bottom-[30px]
//           rounded-sm
//           bg-[#FCFAF7]
//           shadow-[0_20px_45px_rgba(0,0,0,.18)]
//         "
//       />

//       {/* Lace */}

//       <Image
//         src="/assets/rsvp/lace-frame.svg"
//         alt=""
//         fill
//         priority
//         className="
//           pointer-events-none
//           select-none
//           object-contain
//           z-10
//         "
//       />

//       {/* Form */}

//       <div
//         className="
//           absolute
//           left-[62px]
//           right-[62px]
//           top-[38px]
//           bottom-[70px]
//           z-20
//         "
//       >
//         <RSVPForm
//           guestName={guestName}
//           familyCount={familyCount}
//         />
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import RSVPForm from "./RSVPForm";

type RSVPCardProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPCard({
  guestName,
  familyCount,
}: RSVPCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 180,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-[315px] h-[510px]"
    >
      {/* White invitation paper */}

      <div
        className="
          absolute
          left-[38px]
          right-[38px]
          top-[58px]
          bottom-[30px]
          rounded-sm
          bg-[#FFFDF9]
          shadow-[0_20px_40px_rgba(0,0,0,.12)]
          z-0
        "
      />

      {/* Lace */}

      <Image
        src="/assets/rsvp/lace-frame.svg"
        alt=""
        fill
        priority
        className="
          object-contain
          pointer-events-none
          select-none
          z-10
        "
      />

      {/* Orchid */}

      <Image
        src="/assets/invitation/right-flowers.svg"
        alt=""
        width={165}
        height={165}
        className="
          absolute
          -top-6
          right-[-30px]
          z-20
          pointer-events-none
          select-none
        "
      />

      {/* Form */}

      <div
        className="
          absolute
          left-[55px]
          right-[55px]
          top-[70px]
          bottom-[55px]
          z-30
        "
      >
        <RSVPForm
          guestName={guestName}
          familyCount={familyCount}
        />
      </div>
    </motion.div>
  );
}
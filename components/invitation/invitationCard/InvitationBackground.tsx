// import Image from "next/image";

// export default function InvitationBackground() {
//   return (
//     <Image
//       src="/assets/invitation/background.svg"
//       alt="Invitation Background"
//       fill
//       priority
//       className="object-cover"
//     />
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function InvitationBackground() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/assets/invitation/background.svg"
        alt="Invitation Background"
        fill
        priority
        className="pointer-events-none select-none object-cover"
      />
    </motion.div>
  );
}
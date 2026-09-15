// "use client";

// import Image from "next/image";

// import PhoneFrame from "@/components/common/PhoneFrame";
// import MusicPlayer from "./MusicPlayer";

// type MusicScreenProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function MusicScreen({
//   groomName,
//   brideName,
// }: MusicScreenProps) {
//   return (
//     <PhoneFrame>
//       <main className="relative h-full w-full overflow-hidden">
//         {/* COUPLE BACKGROUND */}
//         <Image
//           src="/assets/music/couple-background.jpeg"
//           alt={`${groomName} and ${brideName}`}
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* MUSIC CONTENT */}
//         <div className="absolute inset-0 z-10">
//           <MusicPlayer
//             groomName={groomName}
//             brideName={brideName}
//           />
//         </div>
//       </main>
//     </PhoneFrame>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";
import MusicPlayer from "./MusicPlayer";
import { cormorantGaramond } from "@/lib/fonts";

type MusicScreenProps = {
  groomName: string;
  brideName: string;
};

export default function MusicScreen({
  groomName,
  brideName,
}: MusicScreenProps) {
  return (
    <PhoneFrame>
      <main
        className="
          relative
          min-h-svh
          w-full
          overflow-hidden
          bg-[#F7F3EA]
        "
      >
        {/* BACKGROUND */}

        <Image
          src="/assets/music/couple-background.jpeg"
          alt={`${groomName} and ${brideName}`}
          fill
          priority
          sizes="(max-width: 430px) 100vw, 430px"
          className="object-cover"
        />

        {/* MUSIC PLAYER */}

        <div className="absolute inset-0 z-10">
          <MusicPlayer
            groomName={groomName}
            brideName={brideName}
          />
        </div>

        {/* BOTTOM FADE */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-[17%]
            w-full
            bg-gradient-to-t
            from-[#F8EDE1]/85
            via-[#F8EDE1]/25
            to-transparent
          "
        />

        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            pointer-events-none
            absolute
            bottom-[2.8svh]
            left-1/2
            z-30
            flex
            -translate-x-1/2
            flex-col
            items-center
          "
        >
          {/* LINES + ARROW */}

          <div className="flex items-center gap-3">
            <div
              className="
                h-px
                w-[clamp(35px,12vw,55px)]
                bg-[#B4872C]/60
              "
            />

            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                border
                border-[#B4872C]/80
                bg-white/20
                backdrop-blur-[2px]
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#A67820"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <div
              className="
                h-px
                w-[clamp(35px,12vw,55px)]
                bg-[#B4872C]/60
              "
            />
          </div>

          {/* TEXT */}

          <p
            className={`
              ${cormorantGaramond.className}
              mt-[7px]
              whitespace-nowrap
              text-[clamp(8px,2.2vw,10px)]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#80601F]
            `}
          >
            Scroll Down
          </p>
        </motion.div>
      </main>
    </PhoneFrame>
  );
}
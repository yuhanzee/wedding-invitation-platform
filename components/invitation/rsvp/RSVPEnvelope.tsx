// "use client";

// import { motion } from "motion/react";
// import RSVPCard from "./RSVPCard";

// type RSVPEnvelopeProps = {
//   guestName?: string;
//   familyCount?: number;
// };

// export default function RSVPEnvelope({
//   guestName,
//   familyCount,
// }: RSVPEnvelopeProps) {
//   return (
//     <div
//       className="
//         relative
//         mx-auto
//         min-h-[850px]
//         w-full
//         max-w-[430px]
//         overflow-hidden
//       "
//     >
//       {/* =====================================================
//           COMPLETE ENVELOPE AREA
//       ====================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 25,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.18,
//         }}
//         transition={{
//           duration: 0.7,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           absolute
//           left-1/2
//           top-[150px]
//           h-[650px]
//           w-[360px]
//           max-w-[94vw]
//           -translate-x-1/2
//         "
//       >
//         {/* =================================================
//             ENVELOPE BACK

//             This sits BEHIND the RSVP card.
//         ================================================== */}

//         <div
//           className="
//             absolute
//             bottom-[20px]
//             left-0
//             z-10
//             h-[235px]
//             w-full
//             overflow-hidden
//             rounded-[3px]
//             bg-[#082E61]
//             shadow-[0_22px_45px_rgba(25,30,40,0.20)]
//           "
//         >
//           {/* subtle texture */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               opacity-[0.08]
//             "
//             style={{
//               backgroundImage: `
//                 radial-gradient(
//                   rgba(255,255,255,.9) .4px,
//                   transparent .4px
//                 )
//               `,
//               backgroundSize: "4px 4px",
//             }}
//           />

//           {/* subtle lighting */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               bg-gradient-to-br
//               from-white/[0.05]
//               via-transparent
//               to-black/[0.12]
//             "
//           />
//         </div>

//         {/* =================================================
//             BACK OPEN FLAP

//             Small triangle visible behind the card.
//         ================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[205px]
//             left-1/2
//             z-[12]
//             h-[105px]
//             w-[330px]
//             -translate-x-1/2
//             bg-[#123A70]
//           "
//           style={{
//             clipPath:
//               "polygon(0 100%, 50% 0, 100% 100%)",
//           }}
//         />

//         {/* =================================================
//             RSVP CARD

//             THIS is the important animation.

//             Initial:
//             Card is pushed DOWN into envelope.

//             whileInView:
//             Card rises UP out of envelope.
//         ================================================== */}

//         <motion.div
//           initial={{
//             y: 330,
//             opacity: 0.95,
//             scale: 0.97,
//           }}
//           whileInView={{
//             y: 0,
//             opacity: 1,
//             scale: 1,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.22,
//           }}
//           transition={{
//             y: {
//               duration: 1.65,
//               delay: 0.2,
//               ease: [0.16, 1, 0.3, 1],
//             },

//             opacity: {
//               duration: 0.5,
//               delay: 0.15,
//             },

//             scale: {
//               duration: 1.4,
//               delay: 0.2,
//               ease: [0.16, 1, 0.3, 1],
//             },
//           }}
//           className="
//             absolute
//             left-1/2
//             top-0
//             z-30
//             -translate-x-1/2
//           "
//         >
//           <RSVPCard
//             guestName={guestName}
//             familyCount={familyCount}
//           />
//         </motion.div>

//         {/* =================================================
//             LEFT FRONT ENVELOPE PANEL

//             IMPORTANT:
//             z-40 means it stays IN FRONT of the card.
//             This creates the illusion that card is inside.
//         ================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[20px]
//             left-0
//             z-40
//             h-[235px]
//             w-[58%]
//             overflow-hidden
//             bg-[#123A70]
//           "
//           style={{
//             clipPath:
//               "polygon(0 0, 100% 56%, 100% 100%, 0 100%)",
//           }}
//         >
//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-br
//               from-white/[0.045]
//               to-black/[0.10]
//             "
//           />
//         </div>

//         {/* =================================================
//             RIGHT FRONT ENVELOPE PANEL
//         ================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[20px]
//             right-0
//             z-40
//             h-[235px]
//             w-[58%]
//             overflow-hidden
//             bg-[#0C3368]
//           "
//           style={{
//             clipPath:
//               "polygon(100% 0, 0 56%, 0 100%, 100% 100%)",
//           }}
//         >
//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-bl
//               from-white/[0.035]
//               to-black/[0.11]
//             "
//           />
//         </div>

//         {/* =================================================
//             FRONT BOTTOM PANEL

//             This covers the bottom of the RSVP card.
//         ================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[20px]
//             left-0
//             z-50
//             h-[145px]
//             w-full
//             overflow-hidden
//             bg-[#0A3064]
//           "
//           style={{
//   clipPath: "polygon(0 100%, 0 75%, 50% 5%, 100% 75%, 100% 100%)",
// }}
//         >
//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-t
//               from-black/[0.10]
//               to-white/[0.025]
//             "
//           />
//         </div>

//                 {/* =================================================
//             ENVELOPE OUTLINE
//         ================================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[20px]
//             left-0
//             z-[55]
//             h-[235px]
//             w-full
//             rounded-[3px]
//             border
//             border-[#D2B16B]/20
//           "
//         />

//         {/* =================================================
//             CONFIRM RSVP BUTTON
//         ================================================== */}

//         <motion.button
//           type="submit"
//           form="rsvp-form"
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.97 }}
//           className="
//             absolute
//             bottom-[70px]
//             left-1/2
//             z-[70]
//             -translate-x-1/2

//             flex
//             h-[42px]
//             w-[180px]
//             items-center
//             justify-center

//             rounded-[6px]
//             border
//             border-white
//             bg-transparent

//             font-serif
//             text-[9px]
//             uppercase
//             tracking-[0.22em]
//             text-white

//             shadow-[0_4px_12px_rgba(0,0,0,0.10)]

//             transition-colors
//             duration-300

//             hover:bg-white/10
//           "
//         >
//           Confirm RSVP
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import RSVPCard from "./RSVPCard";

type RSVPEnvelopeProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPEnvelope({
  guestName,
  familyCount,
}: RSVPEnvelopeProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div
      className="
        relative
        mx-auto
        min-h-[850px]
        w-full
        max-w-[430px]
        overflow-hidden
      "
    >
      {/* =====================================================
          COMPLETE ENVELOPE AREA
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.18,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-[150px]
          h-[650px]
          w-[360px]
          max-w-[94vw]
          -translate-x-1/2
        "
      >
        {/* =================================================
            ENVELOPE BACK
        ================================================== */}

        <div
          className="
            absolute
            bottom-[20px]
            left-0
            z-10
            h-[235px]
            w-full
            overflow-hidden
            rounded-[3px]
            bg-[#082E61]
            shadow-[0_22px_45px_rgba(25,30,40,0.20)]
          "
        >
          {/* Texture */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.08]
            "
            style={{
              backgroundImage: `
                radial-gradient(
                  rgba(255,255,255,.9) .4px,
                  transparent .4px
                )
              `,
              backgroundSize: "4px 4px",
            }}
          />

          {/* Lighting */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.05]
              via-transparent
              to-black/[0.12]
            "
          />
        </div>

        {/* =================================================
            BACK OPEN FLAP
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[205px]
            left-1/2
            z-[12]
            h-[105px]
            w-[330px]
            -translate-x-1/2
            bg-[#123A70]
          "
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
          }}
        />

        {/* =================================================
            RSVP CARD
        ================================================== */}

        <motion.div
          initial={{
            y: 330,
            opacity: 0.95,
            scale: 0.97,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.22,
          }}
          transition={{
            y: {
              duration: 1.65,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            },
            opacity: {
              duration: 0.5,
              delay: 0.15,
            },
            scale: {
              duration: 1.4,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="
            absolute
            left-1/2
            top-0
            z-30
            -translate-x-1/2
          "
        >
          <RSVPCard
            guestName={guestName}
            familyCount={familyCount}
            onSubmitted={() => setIsSubmitted(true)}
          />
        </motion.div>

        {/* =================================================
            LEFT FRONT ENVELOPE PANEL
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[20px]
            left-0
            z-40
            h-[235px]
            w-[58%]
            overflow-hidden
            bg-[#123A70]
          "
          style={{
            clipPath:
              "polygon(0 0, 100% 56%, 100% 100%, 0 100%)",
          }}
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.045]
              to-black/[0.10]
            "
          />
        </div>

        {/* =================================================
            RIGHT FRONT ENVELOPE PANEL
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[20px]
            right-0
            z-40
            h-[235px]
            w-[58%]
            overflow-hidden
            bg-[#0C3368]
          "
          style={{
            clipPath:
              "polygon(100% 0, 0 56%, 0 100%, 100% 100%)",
          }}
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-bl
              from-white/[0.035]
              to-black/[0.11]
            "
          />
        </div>

        {/* =================================================
            FRONT BOTTOM PANEL
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[20px]
            left-0
            z-50
            h-[145px]
            w-full
            overflow-hidden
            bg-[#0A3064]
          "
          style={{
            clipPath:
              "polygon(0 100%, 0 75%, 50% 5%, 100% 75%, 100% 100%)",
          }}
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/[0.10]
              to-white/[0.025]
            "
          />
        </div>

        {/* =================================================
            ENVELOPE OUTLINE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[20px]
            left-0
            z-[55]
            h-[235px]
            w-full
            rounded-[3px]
            border
            border-[#D2B16B]/20
          "
        />

        {/* =================================================
            CONFIRM RSVP BUTTON

            IMPORTANT:
            disappears after successful submission
        ================================================== */}

        <AnimatePresence>
          {!isSubmitted && (
            <motion.button
              key="confirm-rsvp"
              type="submit"
              form="rsvp-form"

              initial={{
                opacity: 0,
                y: 8,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.9,
                y: 5,
              }}

              transition={{
                duration: 0.3,
              }}

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}

              className="
                absolute
                bottom-[70px]
                left-1/2
                z-[70]
                -translate-x-1/2

                flex
                h-[42px]
                w-[180px]
                items-center
                justify-center

                rounded-[6px]
                border
                border-white
                bg-transparent

                font-serif
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white

                shadow-[0_4px_12px_rgba(0,0,0,0.10)]

                transition-colors
                duration-300

                hover:bg-white/10
              "
            >
              Confirm RSVP
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import RSVPForm from "./RSVPForm";
// import { cormorantGaramond } from "@/lib/fonts";

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
//       className="
//         relative
//         h-[500px]
//         w-[300px]
//       "
//     >
//       {/* ==========================================
//           LACE WRAPPER
//       =========================================== */}

//       <div
//         className="
//           absolute
//           inset-0
//           z-10
//         "
//       >
//         <Image
//           src="/assets/rsvp/lace-frame.svg"
//           alt=""
//           fill
//           priority
//           sizes="300px"
//           className="
//             pointer-events-none
//             select-none
//             object-fill
//           "
//         />
//       </div>

//       {/* ==========================================
//           PAPER INSIDE THE LACE

//           Smaller than lace so lace wraps around it.
//       =========================================== */}

//       <div
//         className="
//           absolute
//           left-[34px]
//           right-[34px]
//           top-[70px]
//           bottom-[20px]
//           z-20
//           bg-[#FFFDF8]
//           shadow-[0_8px_24px_rgba(65,45,35,0.08)]
//         "
//       >
//         {/* Fine inner border */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-[7px]
//             border
//             border-[#D8BD8B]/45
//           "
//         />

//         {/* Corner details */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             left-[12px]
//             top-[12px]
//             h-[14px]
//             w-[14px]
//             border-l
//             border-t
//             border-[#CDAA68]/45
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             right-[12px]
//             top-[12px]
//             h-[14px]
//             w-[14px]
//             border-r
//             border-t
//             border-[#CDAA68]/45
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[12px]
//             left-[12px]
//             h-[14px]
//             w-[14px]
//             border-b
//             border-l
//             border-[#CDAA68]/45
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[12px]
//             right-[12px]
//             h-[14px]
//             w-[14px]
//             border-b
//             border-r
//             border-[#CDAA68]/45
//           "
//         />

//         {/* ======================================
//             CARD CONTENT
//         ======================================= */}

//         <div
//           className="
//             relative
//             z-30
//             flex
//             h-full
//             flex-col
//             px-[16px]
//             pb-[18px]
//             pt-[18px]
//           "
//         >
//           {/* Kindly Reply */}

//           <div className="mb-[13px] text-center">
//             <p
//               className={`
//                 ${cormorantGaramond.className}
//                 text-[7px]
//                 uppercase
//                 tracking-[0.36em]
//                 text-[#98735E]
//               `}
//             >
//               Kindly Reply
//             </p>

//             <div
//               className="
//                 mx-auto
//                 mt-[7px]
//                 flex
//                 w-[68px]
//                 items-center
//                 gap-[6px]
//               "
//             >
//               <span
//                 className="
//                   h-px
//                   flex-1
//                   bg-[#C8A365]/45
//                 "
//               />

//               <span
//                 className="
//                   text-[5px]
//                   text-[#B88B45]
//                 "
//               >
//                 ◆
//               </span>

//               <span
//                 className="
//                   h-px
//                   flex-1
//                   bg-[#C8A365]/45
//                 "
//               />
//             </div>
//           </div>

//           {/* Actual working RSVP form */}

//           <div className="min-h-0 flex-1">
//             <RSVPForm
//               guestName={guestName}
//               familyCount={familyCount}
//             />
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import RSVPForm from "./RSVPForm";
import { cormorantGaramond } from "@/lib/fonts";

type RSVPCardProps = {
  guestName?: string;
  familyCount?: number;
  onSubmitted?: () => void;
};

export default function RSVPCard({
  guestName,
  familyCount,
  onSubmitted,
}: RSVPCardProps) {
  return (
    <motion.div
      className="
        relative
        h-[500px]
        w-[300px]
      "
    >
      {/* ==========================================
          LACE WRAPPER
      =========================================== */}

      <div
        className="
          absolute
          inset-0
          z-10
        "
      >
        <Image
          src="/assets/rsvp/lace-frame.svg"
          alt=""
          fill
          priority
          sizes="300px"
          className="
            pointer-events-none
            select-none
            object-fill
          "
        />
      </div>

      {/* ==========================================
          PAPER INSIDE THE LACE
      =========================================== */}

      <div
        className="
          absolute
          left-[34px]
          right-[34px]
          top-[70px]
          bottom-[20px]
          z-20
          bg-[#FFFDF8]
          shadow-[0_8px_24px_rgba(65,45,35,0.08)]
        "
      >
        {/* Fine inner border */}
        <div
          className="
            pointer-events-none
            absolute
            inset-[7px]
            border
            border-[#D8BD8B]/45
          "
        />

        {/* Top-left corner */}
        <div
          className="
            pointer-events-none
            absolute
            left-[12px]
            top-[12px]
            h-[14px]
            w-[14px]
            border-l
            border-t
            border-[#CDAA68]/45
          "
        />

        {/* Top-right corner */}
        <div
          className="
            pointer-events-none
            absolute
            right-[12px]
            top-[12px]
            h-[14px]
            w-[14px]
            border-r
            border-t
            border-[#CDAA68]/45
          "
        />

        {/* Bottom-left corner */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[12px]
            left-[12px]
            h-[14px]
            w-[14px]
            border-b
            border-l
            border-[#CDAA68]/45
          "
        />

        {/* Bottom-right corner */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-[12px]
            right-[12px]
            h-[14px]
            w-[14px]
            border-b
            border-r
            border-[#CDAA68]/45
          "
        />

        {/* ======================================
            CARD CONTENT
        ======================================= */}

        <div
          className="
            relative
            z-30
            flex
            h-full
            flex-col
            px-[16px]
            pb-[18px]
            pt-[18px]
          "
        >
          {/* Kindly Reply */}

          <div className="mb-[13px] text-center">
            <p
              className={`
                ${cormorantGaramond.className}
                text-[7px]
                uppercase
                tracking-[0.36em]
                text-[#98735E]
              `}
            >
              Kindly Reply
            </p>

            <div
              className="
                mx-auto
                mt-[7px]
                flex
                w-[68px]
                items-center
                gap-[6px]
              "
            >
              <span
                className="
                  h-px
                  flex-1
                  bg-[#C8A365]/45
                "
              />

              <span className="text-[5px] text-[#B88B45]">
                ◆
              </span>

              <span
                className="
                  h-px
                  flex-1
                  bg-[#C8A365]/45
                "
              />
            </div>
          </div>

          {/* ======================================
              WORKING RSVP FORM
          ======================================= */}

          <div className="min-h-0 flex-1">
            <RSVPForm
              guestName={guestName}
              familyCount={familyCount}
              onSubmitted={onSubmitted}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
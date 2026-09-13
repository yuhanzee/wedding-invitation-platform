
// "use client";

// import PhoneFrame from "@/components/common/PhoneFrame";
// import RSVPEnvelope from "./RSVPEnvelope";
// import { cormorantGaramond } from "@/lib/fonts";

// type RSVPSectionProps = {
//   guestName?: string;
//   familyCount?: number;
// };

// export default function RSVPSection({
//   guestName = "Guest",
//   familyCount = 1,
// }: RSVPSectionProps) {
//   return (
//     <PhoneFrame>
//       <section
//         className="
//           relative
//           min-h-[900px]
//           w-full
//           overflow-hidden
//           bg-[#F8F3EA]
//         "
//       >
//         {/* =========================================
//             SUBTLE PAPER TEXTURE
//         ========================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             inset-0
//             opacity-[0.12]
//           "
//           style={{
//             backgroundImage: `
//               radial-gradient(
//                 rgba(100,78,55,.22) .4px,
//                 transparent .4px
//               )
//             `,
//             backgroundSize: "5px 5px",
//           }}
//         />

//         {/* =========================================
//             SOFT BACKGROUND GLOW
//         ========================================== */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             left-1/2
//             top-[140px]
//             h-[450px]
//             w-[400px]
//             -translate-x-1/2
//             rounded-full
//             bg-[#E9DCC7]/25
//             blur-[90px]
//           "
//         />

//         {/* =========================================
//             RSVP HEADER
//         ========================================== */}

//         <header
//           className="
//             pointer-events-none
//             absolute
//             left-1/2
//             top-[34px]
//             z-[80]
//             w-full
//             -translate-x-1/2
//             text-center
//           "
//         >
//           <p
//             className={`
//               ${cormorantGaramond.className}
//               text-[10px]
//               italic
//               tracking-[0.06em]
//               text-[#9A806A]
//             `}
//           >
//             We hope you&apos;ll join us
//           </p>

//           <h2
//             className={`
//               ${cormorantGaramond.className}
//               mt-2
//               text-[35px]
//               font-normal
//               leading-none
//               tracking-[0.22em]
//               text-[#062D59]
//             `}
//           >
//             RSVP
//           </h2>

//           {/* Gold divider */}

//           <div
//             className="
//               mx-auto
//               mt-[14px]
//               flex
//               w-[125px]
//               items-center
//               gap-[9px]
//             "
//           >
//             <span className="h-px flex-1 bg-[#C6A15D]/50" />

//             <span className="text-[7px] text-[#B88C47]">
//               ◆
//             </span>

//             <span className="h-px flex-1 bg-[#C6A15D]/50" />
//           </div>

//           <p
//             className="
//               mt-[10px]
//               text-[7px]
//               uppercase
//               tracking-[0.4em]
//               text-[#8B7668]
//             "
//           >
//             For our big day
//           </p>
//         </header>

//         {/* =========================================
//             RSVP CARD + ENVELOPE
//         ========================================== */}

//         <RSVPEnvelope
//           guestName={guestName}
//           familyCount={familyCount}
//         />
//       </section>
//     </PhoneFrame>
//   );
// }


"use client";

import Image from "next/image";
import PhoneFrame from "@/components/common/PhoneFrame";
import RSVPEnvelope from "./RSVPEnvelope";
import { cormorantGaramond } from "@/lib/fonts";

type RSVPSectionProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPSection({
  guestName = "Guest",
  familyCount = 1,
}: RSVPSectionProps) {
  return (
    <PhoneFrame>
      <section
        className="
          relative
          min-h-[900px]
          w-full
          overflow-hidden
          bg-[#F8F3EA]
        "
      >
        {/* =========================================
            BACKGROUND IMAGE
        ========================================== */}

        <Image
          src="/assets/rsvp/rsvp-background.jpg"
          alt=""
          fill
          priority
          className="
            pointer-events-none
            z-0
            select-none
            object-cover
            object-center
          "
        />

        {/* =========================================
            SUBTLE PAPER TEXTURE
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            opacity-[0.12]
          "
          style={{
            backgroundImage: `
              radial-gradient(
                rgba(100,78,55,.22) .4px,
                transparent .4px
              )
            `,
            backgroundSize: "5px 5px",
          }}
        />

        {/* =========================================
            SOFT BACKGROUND GLOW
        ========================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[140px]
            z-10
            h-[450px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-[#E9DCC7]/25
            blur-[90px]
          "
        />

        {/* =========================================
            RSVP HEADER
        ========================================== */}

        <header
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[34px]
            z-[80]
            w-full
            -translate-x-1/2
            text-center
          "
        >
          <p
            className={`
              ${cormorantGaramond.className}
              text-[10px]
              italic
              tracking-[0.06em]
              text-[#9A806A]
            `}
          >
            We hope you&apos;ll join us
          </p>

          <h2
            className={`
              ${cormorantGaramond.className}
              mt-2
              text-[35px]
              font-normal
              leading-none
              tracking-[0.22em]
              text-[#062D59]
            `}
          >
            RSVP
          </h2>

          {/* Gold divider */}

          <div
            className="
              mx-auto
              mt-[14px]
              flex
              w-[125px]
              items-center
              gap-[9px]
            "
          >
            <span className="h-px flex-1 bg-[#C6A15D]/50" />

            <span className="text-[7px] text-[#B88C47]">
              ◆
            </span>

            <span className="h-px flex-1 bg-[#C6A15D]/50" />
          </div>

          <p
            className="
              mt-[10px]
              text-[7px]
              uppercase
              tracking-[0.4em]
              text-[#8B7668]
            "
          >
            For our big day
          </p>
        </header>

        {/* =========================================
            RSVP CARD + ENVELOPE
        ========================================== */}

        <div className="relative z-20">
          <RSVPEnvelope
            guestName={guestName}
            familyCount={familyCount}
          />
        </div>
      </section>
    </PhoneFrame>
  );
}
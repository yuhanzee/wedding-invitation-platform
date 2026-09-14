
"use client";

import Image from "next/image";
import PhoneFrame from "@/components/common/PhoneFrame";
import MiniCageCountdown from "./MiniCageCountdown";
import { cormorantGaramond } from "@/lib/fonts";
import { motion } from "motion/react";

type Props = {
  weddingDate: string;
  venue?: string;
};

export default function CountdownSection({
  weddingDate,
  venue = "THE WEDDING VENUE",
}: Props) {
  // Opens the venue directly in Google Maps
  const mapSearchUrl = venue
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        venue
      )}`
    : "#";

  // Real Google map shown inside the invitation
  const mapEmbedUrl = venue
    ? `https://maps.google.com/maps?q=${encodeURIComponent(
        venue
      )}&z=15&output=embed`
    : "";

  return (
    <PhoneFrame>
      <section
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          bg-[#F7F3EA]
          px-6
          py-12
        "
      >

        {/* ==================================================
            CONTINUOUS CHAINS FROM INVITATION SECTION
            Positioned at the very top of this section at the
            same horizontal positions as the chains at the
            bottom of InvitationSection — creates a seamless
            visual continuation of the hanging decoration.
        ================================================== */}

        {/* LEFT TOP CHAIN */}
        <div
          className="
            pointer-events-none
            absolute
            top-0
            left-[29%]
            z-20
            h-[180px]
            w-[45px]
            -translate-x-1/2
          "
        >
          <Image
            src="/assets/countdown/chain.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>

        {/* RIGHT TOP CHAIN */}
        <div
          className="
            pointer-events-none
            absolute
            top-0
            left-[71%]
            z-20
            h-[180px]
            w-[45px]
            -translate-x-1/2
          "
        >
          <Image
            src="/assets/countdown/chain.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>

        {/* ==================================================
            FALLING PETALS
        ================================================== */}

<div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">

  <motion.div
    className="absolute -top-[25px] left-[25%]"
    animate={{
      y: [-20, 100, 220],
      x: [0, 15, -8],
      rotate: [0, 100, 220],
      opacity: [0.8, 0.7, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/assets/petal.png"
      alt=""
      width={22}
      height={22}
    />
  </motion.div>


  <motion.div
    className="absolute -top-[15px] left-[55%]"
    animate={{
      y: [-20, 120, 250],
      x: [0, -18, 10],
      rotate: [60, 180, 300],
      opacity: [0.7, 0.6, 0],
    }}
    transition={{
      duration: 8,
      delay: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/assets/petal.png"
      alt=""
      width={17}
      height={17}
    />
  </motion.div>


  <motion.div
    className="absolute -top-[30px] right-[15%]"
    animate={{
      y: [-20, 90, 200],
      x: [0, 12, -12],
      rotate: [120, 230, 340],
      opacity: [0.6, 0.6, 0],
    }}
    transition={{
      duration: 7.5,
      delay: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="/assets/petal.png"
      alt=""
      width={14}
      height={14}
    />
  </motion.div>

</div>
        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-20
            flex
            h-full
            w-full
            flex-col
            items-center
          "
        >
          {/* ==================================================
              COUNTDOWN
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              pt-6
            "
          >
            <MiniCageCountdown weddingDate={weddingDate} />
          </div>

          {/* ==================================================
              VENUE SECTION
          ================================================== */}

          <div
            className="
              mt-auto
              flex
              w-full
              flex-col
              items-center
              pb-[15svh]
            "
          >


            {/* ==================================================
                VIEW ON MAPS BUTTON
            ================================================== */}

            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                border
                border-[#001F5B]
                bg-transparent
                px-6
                py-[10px]
                font-serif
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#001F5B]
                transition-all
                duration-300
                hover:bg-[#001F5B]
                hover:text-white
              "
            >
              View on Maps
            </a>

            {/* ==================================================
                MINIMAL REAL MAP
            ================================================== */}

            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${venue} on Google Maps`}
              className="
                group
                relative
                mt-6
                block
                w-full
                max-w-[min(270px,80vw)]
              "
            >
              {/* ==================================================
                  SMALL LOCATION PIN
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  z-30
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <div
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#BDA77D]
                    bg-[#F8F3E9]
                    shadow-[0_2px_6px_rgba(80,60,40,0.10)]
                  "
                >
                  <svg
                    width="11"
                    height="14"
                    viewBox="0 0 12 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="
                        M6 14
                        C6 14 11 9.1 11 5.5
                        C11 2.46 8.76 1 6 1
                        C3.24 1 1 2.46 1 5.5
                        C1 9.1 6 14 6 14Z
                      "
                      stroke="#806A53"
                      strokeWidth="1"
                    />

                    <circle
                      cx="6"
                      cy="5.5"
                      r="1.6"
                      fill="#806A53"
                    />
                  </svg>
                </div>
              </div>

              {/* ==================================================
                  MAP FRAME
              ================================================== */}

              <div
                className="
                  overflow-hidden
                  rounded-[4px]
                  border
                  border-[#BDA77D]/70
                  bg-[#F8F3E9]
                  p-[3px]
                  transition-all
                  duration-300
                  group-hover:border-[#9E865E]
                  group-hover:shadow-[0_5px_14px_rgba(70,50,35,0.10)]
                "
              >
                {/* ==================================================
                    REAL GOOGLE MAP
                ================================================== */}

                <div
                  className="
                    relative
                    h-[115px]
                    w-full
                    overflow-hidden
                    rounded-[2px]
                    bg-[#EEE9DF]
                  "
                >
                  {mapEmbedUrl && (
                    <iframe
                      src={mapEmbedUrl}
                      title={`${venue} map`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        border-0
                        brightness-[1.05]
                        contrast-[0.9]
                        saturate-[0.55]
                      "
                    />
                  )}

                  {/* Soft cream tone over map */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[#F8F0DF]/[0.08]
                    "
                  />

                  {/* Very subtle inner border */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[3px]
                      border
                      border-white/40
                    "
                  />
                </div>
              </div>

              {/* ==================================================
                  VENUE NAME
              ================================================== */}

              <p
                className={`
                  ${cormorantGaramond.className}
                  mt-2
                  line-clamp-1
                  text-center
                  text-[11px]
                  font-medium
                  tracking-[0.04em]
                  text-[#69594F]
                `}
              >
                {venue}
              </p>
            </a>
          </div>
        </div>

        {/* ==================================================
            BOTTOM FLOWERS

            Keep this absolute at the bottom.
            These flowers/roots create the transition
            into your navy gallery section.
        ================================================== */}

        <Image
          src="/assets/countdown/bottom-flowers.svg"
          alt=""
          width={390}
          height={180}
          priority
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-30
            h-auto
            w-full
            select-none
          "
        />
      </section>
    </PhoneFrame>
  );
}
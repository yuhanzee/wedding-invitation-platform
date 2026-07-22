"use client";

import Image from "next/image";
import { motion } from "motion/react";
import PhoneFrame from "@/components/common/PhoneFrame";
import FlyingButterflies from "@/components/invitation/invitationCard/FlyingButterflies";
import { cormorantGaramond } from "@/lib/fonts";

type GallerySectionProps = {
  groomName: string;
  brideName: string;

  initials?: string;
  quoteText?: string;

  photo1?: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
};

const DEFAULT_QUOTE =
  "Today under the soft gaze of the sky and the joyful melody of love, we invite you to share in our laughter and celebrate our journey. Two hearts, two lives, joined together in friendship and devotion for all the years to come.";

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const rootsVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const frameVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 28,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.05,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const initialsVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const quoteVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const photoGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const photoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.93,
    y: 18,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function GallerySection({
  groomName,
  brideName,
  initials,
  quoteText = DEFAULT_QUOTE,
  photo1,
  photo2,
  photo3,
  photo4,
}: GallerySectionProps) {
  const groomLetter =
    groomName?.trim().charAt(0).toLowerCase() || "";

  const brideLetter =
    brideName?.trim().charAt(0).toLowerCase() || "";

  const displayInitials =
    initials?.trim() || `${groomLetter} & ${brideLetter}`;

  const photos = [photo1, photo2, photo3, photo4];

  return (
    <PhoneFrame>
      <motion.section
        className="
          relative
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#062D59]
          px-7
          pb-10
          pt-24
        "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.22,
        }}
      >
        {/* Navy embossed background */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/gallery/background.svg"
            alt=""
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="
              pointer-events-none
              select-none
              object-cover
            "
          />
        </motion.div>

        {/* Butterfly animation */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
            overflow-hidden
          "
        >
          <FlyingButterflies />
        </div>

        {/* Golden roots */}
        <motion.div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            w-full
          "
          variants={rootsVariants}
        >
          <Image
            src="/assets/gallery/top-roots.svg"
            alt=""
            width={430}
            height={190}
            priority
            className="
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>

        {/* Main gallery frame */}
        <motion.div
          className="
            relative
            z-20
            mt-16
            w-full
            max-w-[330px]
            border
            border-[#E5CF96]/65
            px-5
            pb-6
            pt-9
          "
          variants={frameVariants}
        >
          {/* Initials */}
          <motion.div
            className="
              absolute
              left-1/2
              top-0
              z-30
              -translate-x-1/2
              -translate-y-1/2
              bg-[#062D59]
              px-5
            "
            variants={initialsVariants}
          >
            <span
              className={`
                ${cormorantGaramond.className}
                whitespace-nowrap
                text-[42px]
                font-normal
                italic
                leading-none
                tracking-[0.04em]
                text-[#D8B45D]
              `}
              style={{
                textShadow: "0 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              {displayInitials}
            </span>
          </motion.div>

          {/* Custom quote */}
          <motion.p
            className={`
              ${cormorantGaramond.className}
              mx-auto
              max-w-[270px]
              text-center
              text-[13px]
              font-normal
              leading-[1.45]
              text-[#E9DDD2]
            `}
            variants={quoteVariants}
          >
            {quoteText}
          </motion.p>

          {/* Four custom wedding photos */}
          <motion.div
            className="
              mt-7
              grid
              w-full
              grid-cols-2
              gap-3
            "
            variants={photoGridVariants}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="
                  relative
                  aspect-square
                  w-full
                  overflow-hidden
                  border
                  border-[#E5CF96]/60
                  bg-[#F3EFE9]
                "
                variants={photoVariants}
              >
                {photo ? (
                  <Image
                    src={photo}
                    alt={`${groomName} and ${brideName} gallery photo ${
                      index + 1
                    }`}
                    fill
                    sizes="(max-width: 430px) 145px, 160px"
                    className="
                      select-none
                      object-cover
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      bg-[#F3EFE9]
                    "
                  >
                    <span
                      className={`
                        ${cormorantGaramond.className}
                        text-[11px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8B7B70]
                      `}
                    >
                      Photo {index + 1}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </PhoneFrame>
  );
}
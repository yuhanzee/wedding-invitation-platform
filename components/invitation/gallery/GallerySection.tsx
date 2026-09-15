"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";

import PhoneFrame from "@/components/common/PhoneFrame";
import FlyingButterflies from "@/components/invitation/invitationCard/FlyingButterflies";
import { cormorantGaramond } from "@/lib/fonts";

type GallerySectionProps = {
  groomName: string;
  brideName: string;
  initials?: string;
  photos: string[];
};

const PHOTOS_PER_SPREAD = 3;
const AUTO_FLIP_TIME = 5000;

export default function GallerySection({
  groomName,
  brideName,
  initials,
  photos,
}: GallerySectionProps) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] =
    useState<1 | -1>(1);

  const groomLetter =
    groomName?.trim().charAt(0).toUpperCase() || "";

  const brideLetter =
    brideName?.trim().charAt(0).toUpperCase() || "";

  const displayInitials =
    initials?.trim() ||
    `${groomLetter} & ${brideLetter}`;

  const spreads = useMemo(() => {
    const result: string[][] = [];

    for (
      let i = 0;
      i < photos.length;
      i += PHOTOS_PER_SPREAD
    ) {
      result.push(
        photos.slice(i, i + PHOTOS_PER_SPREAD)
      );
    }

    return result;
  }, [photos]);

  const totalPages = spreads.length;

  // AUTO PAGE TURN
  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setDirection(1);

      setPage((current) => {
        if (current >= totalPages - 1) {
          return 0;
        }

        return current + 1;
      });
    }, AUTO_FLIP_TIME);

    return () => window.clearInterval(timer);
  }, [totalPages]);

  const nextPage = () => {
    setDirection(1);

    setPage((current) =>
      current >= totalPages - 1
        ? 0
        : current + 1
    );
  };

  const previousPage = () => {
    setDirection(-1);

    setPage((current) =>
      current <= 0
        ? totalPages - 1
        : current - 1
    );
  };

  if (!totalPages) return null;

  const currentPhotos = spreads[page];

  return (
    <PhoneFrame>
      <section
        className="
          relative
          flex
          min-h-screen
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          bg-[#062D59]
          px-3
          py-16
        "
      >
        {/* BACKGROUND */}
        <Image
          src="/assets/gallery/background.svg"
          alt=""
          fill
          priority
          className="
            pointer-events-none
            select-none
            object-cover
          "
        />

        {/* BUTTERFLIES */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-10
          "
        >
          <FlyingButterflies />
        </div>

        {/* GOLD ROOTS */}
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            w-full
          "
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
              object-contain
            "
          />
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="
            relative
            z-30
            mb-7
            mt-10
            text-center
          "
        >
          <h2
            className={`
              ${cormorantGaramond.className}
              text-[40px]
              italic
              leading-none
              text-[#D8B45D]
            `}
          >
            {displayInitials}
          </h2>

          <p
            className={`
              ${cormorantGaramond.className}
              mt-3
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#F0E4D6]
            `}
          >
            Our Memories
          </p>
        </motion.div>

        {/* ALBUM */}
        <div
          className="
            relative
            z-30
            w-full
            max-w-[min(390px,96vw)]
            [perspective:1800px]
          "
        >
          {/* BOOK SHADOW */}
          <div
            className="
              absolute
              -bottom-4
              left-[7%]
              h-8
              w-[86%]
              rounded-[50%]
              bg-black/50
              blur-xl
            "
          />

          {/* BOOK */}
          <div
            className="
              relative
              aspect-[1.38/1]
              w-full
              rounded-[8px]
              bg-[#E5D7B8]
              p-[5px]
              shadow-[0_20px_45px_rgba(0,0,0,0.45)]
            "
          >
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              <motion.div
                key={page}
                custom={direction}
                initial={{
                  rotateY:
                    direction === 1 ? 80 : -80,
                  opacity: 0,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateY:
                    direction === 1 ? -80 : 80,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin:
                    direction === 1
                      ? "left center"
                      : "right center",
                }}
                className="
                  absolute
                  inset-[5px]
                  overflow-hidden
                  rounded-[5px]
                  bg-[#FAF5E9]
                  [backface-visibility:hidden]
                  [transform-style:preserve-3d]
                "
              >
                {/* PAPER TEXTURE */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.14]
                  "
                  style={{
                    backgroundImage:
                      "radial-gradient(#705C44 0.5px, transparent 0.5px)",
                    backgroundSize: "7px 7px",
                  }}
                />

                {/* CENTER SPINE */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    top-0
                    z-40
                    w-[18px]
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-transparent
                    via-black/[0.12]
                    to-transparent
                  "
                />

                {/* LEFT PAGE */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    top-0
                    w-1/2
                    border-r
                    border-[#D8CBB4]/70
                  "
                />

                {/* RIGHT PAGE */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    top-0
                    w-1/2
                  "
                />

                {/* PAGE NUMBER */}
                <span
                  className={`
                    ${cormorantGaramond.className}
                    absolute
                    right-4
                    top-3
                    z-30
                    text-[9px]
                    italic
                    text-[#8A7766]
                  `}
                >
                  {String(page + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                {/* HANDWRITTEN TITLE */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="
                    absolute
                    left-[18px]
                    top-[18px]
                    z-20
                  "
                >
                  <p
                    className={`
                      ${cormorantGaramond.className}
                      text-[23px]
                      italic
                      leading-[0.85]
                      text-[#37261F]
                    `}
                  >
                    Love
                    <br />
                    Captured
                  </p>
                </motion.div>

                {/* PHOTO 1 */}
                {currentPhotos[0] && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: -8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: -4,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.7,
                    }}
                    className="
                      absolute
                      bottom-[22px]
                      left-[18px]
                      z-20
                      h-[150px]
                      w-[145px]
                      bg-white
                      p-[6px]
                      pb-[22px]
                      shadow-[0_6px_15px_rgba(0,0,0,0.22)]
                    "
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Blurred background fill — same photo, soft bokeh */}
                      <Image
                        src={currentPhotos[0]}
                        alt=""
                        fill
                        sizes="150px"
                        className="object-cover scale-110 blur-sm opacity-50 select-none"
                        aria-hidden
                      />
                      {/* Full uncropped photo on top */}
                      <Image
                        src={currentPhotos[0]}
                        alt={`${groomName} and ${brideName} memory`}
                        fill
                        sizes="150px"
                        className="object-contain relative z-10"
                      />
                    </div>

                    <span
                      className={`
                        ${cormorantGaramond.className}
                        absolute
                        bottom-[5px]
                        left-[8px]
                        text-[8px]
                        italic
                        text-[#59473B]
                      `}
                    >
                      together ♡
                    </span>
                  </motion.div>
                )}

                {/* PHOTO 2 */}
                {currentPhotos[1] && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: 8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 4,
                    }}
                    transition={{
                      delay: 0.35,
                      duration: 0.7,
                    }}
                    className="
                      absolute
                      right-[15px]
                      top-[25px]
                      z-20
                      h-[128px]
                      w-[145px]
                      bg-white
                      p-[6px]
                      pb-[20px]
                      shadow-[0_6px_15px_rgba(0,0,0,0.22)]
                    "
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Blurred background fill */}
                      <Image
                        src={currentPhotos[1]}
                        alt=""
                        fill
                        sizes="150px"
                        className="object-cover scale-110 blur-sm opacity-50 select-none"
                        aria-hidden
                      />
                      {/* Full uncropped photo on top */}
                      <Image
                        src={currentPhotos[1]}
                        alt={`${groomName} and ${brideName} memory`}
                        fill
                        sizes="150px"
                        className="object-contain relative z-10"
                      />
                    </div>

                    <span
                      className={`
                        ${cormorantGaramond.className}
                        absolute
                        bottom-[4px]
                        left-[8px]
                        text-[8px]
                        italic
                        text-[#59473B]
                      `}
                    >
                      our story
                    </span>
                  </motion.div>
                )}

                {/* PHOTO 3 */}
                {currentPhotos[2] && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: -5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: -2,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.7,
                    }}
                    className="
                      absolute
                      bottom-[18px]
                      right-[24px]
                      z-30
                      h-[102px]
                      w-[118px]
                      bg-white
                      p-[5px]
                      pb-[18px]
                      shadow-[0_6px_15px_rgba(0,0,0,0.22)]
                    "
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Blurred background fill */}
                      <Image
                        src={currentPhotos[2]}
                        alt=""
                        fill
                        sizes="120px"
                        className="object-cover scale-110 blur-sm opacity-50 select-none"
                        aria-hidden
                      />
                      {/* Full uncropped photo on top */}
                      <Image
                        src={currentPhotos[2]}
                        alt={`${groomName} and ${brideName} memory`}
                        fill
                        sizes="120px"
                        className="object-contain relative z-10"
                      />
                    </div>
                  </motion.div>
                )}

                {/* TAPE */}
                <div
                  className="
                    absolute
                    right-[112px]
                    top-[14px]
                    z-40
                    h-[18px]
                    w-[55px]
                    rotate-[3deg]
                    bg-[#98503A]/80
                    shadow-sm
                  "
                />

                {/* SMALL DECORATIVE TEXT */}
                <p
                  className={`
                    ${cormorantGaramond.className}
                    absolute
                    bottom-[20px]
                    left-[195px]
                    z-10
                    max-w-[70px]
                    text-center
                    text-[11px]
                    italic
                    leading-tight
                    text-[#6A5446]
                  `}
                >
                  love
                  <br />
                   ♡
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousPage}
            aria-label="Previous page"
            className="
              absolute
              left-0
              top-0
              z-50
              h-full
              w-[18%]
            "
          />

          {/* NEXT */}
          <button
            type="button"
            onClick={nextPage}
            aria-label="Next page"
            className="
              absolute
              right-0
              top-0
              z-50
              h-full
              w-[18%]
            "
          />
        </div>

        {/* PAGE INDICATORS */}
        <div
          className="
            relative
            z-40
            mt-7
            flex
            items-center
            gap-[7px]
          "
        >
          {spreads.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Gallery page ${
                index + 1
              }`}
              onClick={() => {
                setDirection(
                  index >= page ? 1 : -1
                );
                setPage(index);
              }}
              className={`
                h-[5px]
                rounded-full
                transition-all
                duration-500
                ${
                  index === page
                    ? "w-[22px] bg-[#D8B45D]"
                    : "w-[5px] bg-[#E9DDD2]/40"
                }
              `}
            />
          ))}
        </div>

        <p
          className={`
            ${cormorantGaramond.className}
            relative
            z-30
            mt-3
            text-[10px]
            italic
            tracking-[0.08em]
            text-[#E9DDD2]/60
          `}
        >
          turning the pages of our story
        </p>
      </section>
    </PhoneFrame>
  );
}
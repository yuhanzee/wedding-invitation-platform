"use client";

import MiniCage from "./MiniCage";
import useDaysRemaining from "./useDaysRemaining";


type Props = {
  weddingDate: string;
};

export default function MiniCageCountdown({
  weddingDate,
}: Props) {
  const days = useDaysRemaining(weddingDate);

  const display =
    days > 99 ? "99+" : String(days).padStart(2, "0");

  const showPlus = display === "99+";

  return (
    <section className="relative flex w-full flex-col items-center">

      <h2
  className="
    absolute
    left-1/2
    top-[34%]
    -translate-x-1/2
    z-30
    whitespace-nowrap
    font-serif
    text-[22px]
    uppercase
    tracking-[0.35em]
    text-[#5C432F]
    pointer-events-none
  "
>
  JUST
</h2>

      

      {/* Cages */}
      <div className="relative z-10 flex mt-22 items-start justify-center">
        {/* Left Cage */}
        <MiniCage
          digit={display[0]}
          delay={0}
        />

        {/* Right Cage */}
        <div className="relative -ml-10">
          <MiniCage
            digit={display[1]}
            delay={0.35}
          />

          {showPlus && (
            <span
              className="
                absolute
                right-[18px]
                top-[69%]
                -translate-y-1/2
                font-serif
                text-[30px]
                font-medium
                text-[#4A3527]
              "
            >
              +
            </span>
          )}
        </div>
      </div>

      {/* Bottom Text */}
      <p
        className="
          relative
          z-20
          mt-8
          whitespace-nowrap
          font-serif
          text-[13px]
          uppercase
          tracking-[0.35em]
          text-[#5C432F]
        "
      >
        DAYS TO FOREVER
      </p>
    </section>
  );
}
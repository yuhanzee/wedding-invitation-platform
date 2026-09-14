"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type Props = {
  weddingDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function MinimalCountdown({
  weddingDate,
}: Props) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const target = new Date(weddingDate).getTime();
      const now = Date.now();

      if (Number.isNaN(target)) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const difference = Math.max(target - now, 0);

      return {
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [weddingDate]);

  const items = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[430px]
      "
    >
      {/* SMALL INTRO */}

      <motion.div
        initial={{
          opacity: 0,
          y: 14,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
        }}
        className="text-center"
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.34em]
            text-[#A08863]

            min-[380px]:text-[9px]

            sm:text-[10px]
          "
        >
          Counting down
        </p>

        <h2
          className={`
            ${cormorantGaramond.className}

            mt-2
            text-[28px]
            font-normal
            italic
            leading-[1]
            text-[#49372C]

            min-[380px]:text-[31px]

            sm:text-[35px]

            md:text-[38px]
          `}
        >
          until we say “I do”
        </h2>
      </motion.div>

      {/* TOP GOLD ORNAMENT */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
        }}
        className="
          mx-auto
          mt-6
          flex
          w-[72%]
          items-center
          justify-center
          gap-3

          sm:mt-7
        "
      >
        <div
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            to-[#B89A5C]/50
          "
        />

        <div
          className="
            h-[5px]
            w-[5px]
            rotate-45
            border
            border-[#B89A5C]/70
          "
        />

        <div
          className="
            h-px
            flex-1
            bg-gradient-to-l
            from-transparent
            to-[#B89A5C]/50
          "
        />
      </motion.div>

      {/* COUNTDOWN NUMBERS */}

      <div
        className="
          mt-7
          grid
          w-full
          grid-cols-4
          items-start

          sm:mt-9
        "
      >
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1 + index * 0.08,
            }}
            className="
              relative
              flex
              min-w-0
              flex-col
              items-center
              justify-center
              px-[2px]
            "
          >
            {/* NUMBER */}

            <span
              className={`
                ${cormorantGaramond.className}

                tabular-nums
                text-[34px]
                font-normal
                leading-none
                tracking-[-0.04em]
                text-[#49372C]

                min-[350px]:text-[37px]

                min-[380px]:text-[41px]

                min-[410px]:text-[44px]

                sm:text-[48px]

                md:text-[52px]
              `}
            >
              {String(item.value).padStart(2, "0")}
            </span>

            {/* LABEL */}

            <span
              className="
                mt-2
                text-center
                text-[7px]
                font-medium
                uppercase
                tracking-[0.10em]
                text-[#9C8563]

                min-[370px]:text-[8px]
                min-[370px]:tracking-[0.14em]

                sm:mt-3
                sm:text-[9px]
                sm:tracking-[0.18em]
              "
            >
              {item.label}
            </span>

            {/* VERTICAL SEPARATOR */}

            {index < items.length - 1 && (
              <div
                className="
                  absolute
                  right-0
                  top-[2px]
                  h-[38px]
                  w-px
                  bg-gradient-to-b
                  from-transparent
                  via-[#B89A5C]/40
                  to-transparent

                  sm:h-[45px]
                "
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* BOTTOM DECORATION */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
        className="
          mt-7
          flex
          items-center
          justify-center
          gap-2

          sm:mt-9
        "
      >
        <div
          className="
            h-px
            w-6
            bg-[#B89A5C]/35
          "
        />

        <span
          className="
            font-serif
            text-[12px]
            leading-none
            text-[#B89A5C]
          "
        >
          ♡
        </span>

        <div
          className="
            h-px
            w-6
            bg-[#B89A5C]/35
          "
        />
      </motion.div>
    </div>
  );
}
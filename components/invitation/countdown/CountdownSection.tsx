"use client";

import Image from "next/image";
import PhoneFrame from "@/components/common/PhoneFrame";
import MiniCageCountdown from "./MiniCageCountdown";
import { cormorantGaramond } from "@/lib/fonts";

type Props = {
  weddingDate: string;
  venue?: string;
};

export default function CountdownSection({
  weddingDate,
  venue = "THE WEDDING VENUE",
}: Props) {
  return (
    <PhoneFrame>
      <section className="relative w-full h-full overflow-hidden flex flex-col justify-between py-12 px-6">
        {/* Background */}
        <Image
          src="/assets/countdown/background.svg"
          alt=""
          fill
          priority
          className="object-cover z-0"
        />

        {/* Top Flowers */}
        <Image
          src="/assets/countdown/top-flowers.svg"
          alt=""
          width={390}
          height={180}
          priority
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-auto
            w-full
          "
        />

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-between h-full w-full">
          {/* Top Section: Countdown */}
          <div className="w-full flex flex-col items-center pt-6">
            <MiniCageCountdown weddingDate={weddingDate} />
          </div>

          {/* Middle Section: Map */}
          <div className="w-full flex flex-col items-center my-auto">
            {/* <a
              href={venue ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[260px] h-[170px] overflow-hidden flex items-center justify-center transition-transform hover:scale-[1.02] duration-300 shadow-sm rounded-lg"
            >
              <Image
                src="/assets/countdown/map.svg"
                alt="Wedding Venue Map"
                fill
                priority
                className="object-cover select-none pointer-events-none mix-blend-multiply"
              />
            </a> */}
          </div>

          <h3 className={`${cormorantGaramond.className} uppercase text-[14px] tracking-[0.25em] text-[#625853] mb-4 font-medium select-none`}>
              THE WEDDING VENUE
            </h3>
          {/* Bottom Section: Venue & Button */}
          <div className="w-full flex flex-col items-center pb-50">
            
            <a
              href={venue ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex
    items-center
    justify-center
    border
    border-[#001F5B]
    bg-transparent
    px-5
    py-2
    font-serif
    text-[11px]
    uppercase
    tracking-[0.18em]
    text-[#001F5B]
    transition-colors
    duration-300
    hover:bg-[#001F5B]
    hover:text-white
  ">
              View on Maps
            </a>
          </div>
        </div>

        {/* Bottom Flowers */}
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
          "
        />
      </section>
    </PhoneFrame>
  );
}
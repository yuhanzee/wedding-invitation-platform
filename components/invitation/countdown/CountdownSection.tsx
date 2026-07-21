"use client";

import Image from "next/image";
import PhoneFrame from "@/components/common/PhoneFrame";
import MiniCageCountdown from "./MiniCageCountdown";

type Props = {
  weddingDate: string;
};

export default function CountdownSection({
  weddingDate,
}: Props) {
  return (
    <PhoneFrame>
      <section className="relative min-h-[760px] w-full overflow-hidden">
        {/* Background */}
        <Image
          src="/assets/countdown/background.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* Countdown */}
        <div
          className="
            absolute
            left-1/2
            top-[17%]
            z-20
            w-full
            -translate-x-1/2
            -translate-y-1/2
            px-3
          "
        >
          <MiniCageCountdown weddingDate={weddingDate} />
        </div>

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
            bottom-46
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
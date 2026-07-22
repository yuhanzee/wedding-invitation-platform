
"use client";

import Image from "next/image";
import PhoneFrame from "@/components/common/PhoneFrame";
import RSVPEnvelope from "./RSVPEnvelope";

type RSVPSectionProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPSection({
  guestName = "Dilmith Ranasinghe",
  familyCount = 2,
}: RSVPSectionProps) {
  return (
    <PhoneFrame>
      <section className="relative h-full min-h-screen w-full overflow-hidden bg-[#f8f3ec]">
        {/* <Image
          src="/assets/envelope/background.png"
          alt=""
          fill
          priority
          sizes="430px"
          className="pointer-events-none select-none object-cover"
        /> */}

        {/* <div className="absolute right-0 top-16 z-30 pointer-events-none">
  <Image
    src="/assets/invitation/left-flowers.svg"
    alt=""
    width={190}
    height={230}
    className="h-auto w-auto"
    priority
  />
</div> */}

        <div
  className="
    absolute
    top-10
    left-1/2
    z-30
    -translate-x-1/2
    text-center
    pointer-events-none
  "
>
  <h2 className="font-serif text-[34px] tracking-[0.18em] text-[#062D59]">
    RSVP
  </h2>

  <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-[#8A7A6E]">
    FOR OUR BIG DAY
  </p>
</div>
          <RSVPEnvelope
            guestName={guestName}
            familyCount={familyCount}
          />
        
      </section>
    </PhoneFrame>
  );
}
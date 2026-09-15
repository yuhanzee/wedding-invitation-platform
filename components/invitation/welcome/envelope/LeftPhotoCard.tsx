import Image from "next/image";

export default function LeftPhotoCard() {
  return (
    <div
      className="
        relative
        h-[145px]
        w-[115px]
        select-none
        overflow-hidden
        rounded-[2px]
        border
        border-[#E8DED4]
        bg-[#FFFDF9]
        p-[7px]
        pb-[22px]
        shadow-[0_8px_18px_rgba(64,48,42,0.22)]
        pointer-events-none
      "
    >
      {/* PHOTO */}
      <div className="relative h-full w-full overflow-hidden bg-[#F5EEE8]">
        <Image
          src="/assets/envelope/left-photo-card.jpeg"
          alt="Couple photo"
          fill
          priority
          sizes="115px"
          className="object-cover"
        />
      </div>

      {/* POLAROID PAPER HIGHLIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[2px]
          ring-1
          ring-inset
          ring-white/60
        "
      />

      {/* SMALL GOLD DETAIL */}
      <div
        className="
          absolute
          bottom-[9px]
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-[4px]
        "
      >
        <span className="h-px w-[14px] bg-[#B4872C]/35" />

        <span className="h-[3px] w-[3px] rotate-45 bg-[#B4872C]/50" />

        <span className="h-px w-[14px] bg-[#B4872C]/35" />
      </div>
    </div>
  );
}
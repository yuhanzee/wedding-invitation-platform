// export default function TapToOpen() {
//   return (
//     <p className="uppercase tracking-[4px] text-sm text-gray-500">
//       Tap to Open
//     </p>
//   );
// }

export default function TapToOpen() {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-[clamp(7px,2.5vw,12px)]
      "
    >
      {/* LEFT LINE */}

      <span
        className="
          h-px
          w-[clamp(20px,7vw,34px)]

          bg-gradient-to-r
          from-transparent
          to-[#B8873E]
        "
      />

      {/* TEXT */}

      <p
        className="
          whitespace-nowrap
          uppercase

          text-[clamp(8px,2.5vw,11px)]
          font-medium

          tracking-[clamp(0.18em,0.8vw,0.32em)]

          bg-gradient-to-b
          from-[#EBCF8C]
          via-[#B8873E]
          to-[#80551F]

          bg-clip-text
          text-transparent
        "
      >
        Tap to Open
      </p>

      {/* RIGHT LINE */}

      <span
        className="
          h-px
          w-[clamp(20px,7vw,34px)]

          bg-gradient-to-l
          from-transparent
          to-[#B8873E]
        "
      />
    </div>
  );
}
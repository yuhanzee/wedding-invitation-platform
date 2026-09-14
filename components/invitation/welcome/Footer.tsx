// // // import TapToOpen from "./TapToOpen";

// // export default function Footer() {
// //   return (
// //     <footer className="flex w-full items-center justify-center">
// //       <TapToOpen />
// //     </footer>
// //   );
// // }

// import TapToOpen from "./TapToOpen";

// export default function Footer() {
//   return (
//     <footer className="flex w-full items-center justify-center">
//       <TapToOpen />
//     </footer>
//   );
// }

export default function TapToOpen() {
  return (
    <div className="flex items-center justify-center gap-[clamp(7px,2.5vw,12px)]">
      {/* LEFT GOLD LINE */}
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
          from-[#F1D79A]
          via-[#B8873E]
          to-[#7D541F]

          bg-clip-text
          text-transparent
        "
      >
        Tap to Open
      </p>

      {/* RIGHT GOLD LINE */}
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
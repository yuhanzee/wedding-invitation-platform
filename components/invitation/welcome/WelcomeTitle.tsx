// export default function WelcomeTitle() {
//   return (
//     <p className="text-[#6B6B6B] text-[11px] tracking-[0.08em] text-center">
//       WELCOME TO THE WEDDING OF
//     </p>
//   );
// }

export default function WelcomeTitle() {
  return (
    <p
      className="
        text-center
        uppercase

        text-[clamp(8px,2.5vw,11px)]
        tracking-[clamp(0.12em,0.5vw,0.2em)]

        bg-gradient-to-b
        from-[#F1D79A]
        via-[#B8873E]
        to-[#7D541F]

        bg-clip-text
        text-transparent

        drop-shadow-[0_1px_1px_rgba(255,244,205,0.35)]
      "
    >
      WELCOME TO THE WEDDING OF
    </p>
  );
}
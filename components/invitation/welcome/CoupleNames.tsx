// // import { Great_Vibes } from "next/font/google";

// // const greatVibes = Great_Vibes({
// //   weight: "400",
// //   subsets: ["latin"],
// // });

// // type CoupleNamesProps = {
// //   groomName: string;
// //   brideName: string;
// // };

// // export default function CoupleNames({
// //   groomName,
// //   brideName,
// // }: CoupleNamesProps) {
// //   return (
// //     <h1
// //       className={`${greatVibes.className} text-[#1f1f1f] text-[42px] text-center leading-tight`}
// //     >
// //       {groomName} & {brideName}
// //     </h1>
// //   );
// // }

// import { greatVibes } from "@/lib/fonts";

// type CoupleNamesProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function CoupleNames({
//   groomName,
//   brideName,
// }: CoupleNamesProps) {
//   return (
//     <h1
//       className={`${greatVibes.className} text-[#1f1f1f] text-[clamp(30px,11vw,42px)] text-center leading-tight px-4`}
//     >
//       {groomName} &amp; {brideName}
//     </h1>
//   );
// }

import { greatVibes } from "@/lib/fonts";

type CoupleNamesProps = {
  groomName: string;
  brideName: string;
};

export default function CoupleNames({
  groomName,
  brideName,
}: CoupleNamesProps) {
  return (
    <h1
      className={`
        ${greatVibes.className}

        mt-[2px]
        px-3

        whitespace-nowrap
        text-center

        text-[clamp(27px,9vw,40px)]
        leading-[1.05]

        bg-gradient-to-b
        from-[#F5DFA4]
        via-[#C09145]
        to-[#7A501C]

        bg-clip-text
        text-transparent

        drop-shadow-[0_1px_1px_rgba(91,56,15,0.18)]
      `}
    >
      {groomName} &amp; {brideName}
    </h1>
  );
}
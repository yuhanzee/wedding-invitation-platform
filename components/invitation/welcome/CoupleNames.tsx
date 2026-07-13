import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

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
      className={`${greatVibes.className} text-[#1f1f1f] text-[42px] text-center leading-tight`}
    >
      {groomName} & {brideName}
    </h1>
  );
}
// import WelcomeTitle from "./WelcomeTitle";
// import CoupleNames from "./CoupleNames";

// type HeaderProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function Header({
//   groomName,
//   brideName,
// }: HeaderProps) {
//   return (
//     <header className="w-full flex flex-col items-center pt-[100px]">
//       <WelcomeTitle />

//       <div className="mt-3">
//         <CoupleNames
//           groomName={groomName}
//           brideName={brideName}
//         />
//       </div>
//     </header>
//   );
// }

import WelcomeTitle from "./WelcomeTitle";
import CoupleNames from "./CoupleNames";

type HeaderProps = {
  groomName: string;
  brideName: string;
};

export default function Header({
  groomName,
  brideName,
}: HeaderProps) {
  return (
    <header className="flex-[3] flex flex-col items-center justify-end pb-6">
      <WelcomeTitle />

      <CoupleNames
        groomName={groomName}
        brideName={brideName}
      />
    </header>
  );
}
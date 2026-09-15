// "use client";

// import { greatVibes } from "@/lib/fonts";

// import AudioPlayer from "./AudioPlayer";
// import PlayerControls from "./PlayerControls";

// type MusicPlayerProps = {
//   groomName: string;
//   brideName: string;
// };

// export default function MusicPlayer({
//   groomName,
//   brideName,
// }: MusicPlayerProps) {
//   return (
//     <div className="absolute inset-0 flex flex-col items-center">

//       {/* Couple Names */}
//       <div className="mt-[95px] text-center px-4">
//         <h1
//           className={`${greatVibes.className} text-[clamp(50px,17vw,68px)] text-[#6E6E6E] leading-none`}
//         >
//           {groomName}
//         </h1>

//         <h2
//           className={`${greatVibes.className} text-[clamp(50px,17vw,68px)] text-[#6E6E6E] leading-none -mt-1`}
//         >
//           &amp; {brideName}
//         </h2>
//       </div>

//       {/* Audio Player */}
//       <div className="mt-8 flex flex-col items-center">
//         <AudioPlayer />

//         <PlayerControls />
//       </div>

//     </div>
//   );
// }

"use client";

import { greatVibes } from "@/lib/fonts";

import AudioPlayer from "./AudioPlayer";
import PlayerControls from "./PlayerControls";

type MusicPlayerProps = {
  groomName: string;
  brideName: string;
};

export default function MusicPlayer({
  groomName,
  brideName,
}: MusicPlayerProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center">

      {/* ================================================
          COUPLE NAMES
      ================================================= */}

      <div className="mt-[95px] px-4 text-center">

        {/* GROOM NAME */}

        <h1
          className={`
            ${greatVibes.className}

            text-[clamp(50px,17vw,68px)]

            leading-none

            text-[#B4872C]

            drop-shadow-[0_1px_1px_rgba(100,65,10,0.12)]
          `}
        >
          {groomName}
        </h1>

        {/* BRIDE NAME */}

        <h2
          className={`
            ${greatVibes.className}

            -mt-1

            text-[clamp(50px,17vw,68px)]

            leading-none

            text-[#B4872C]

            drop-shadow-[0_1px_1px_rgba(100,65,10,0.12)]
          `}
        >
          &amp; {brideName}
        </h2>

      </div>

      {/* ================================================
          AUDIO PLAYER
      ================================================= */}

      <div className="mt-8 flex flex-col items-center">

        <AudioPlayer />

        <PlayerControls />

      </div>

    </div>
  );
}
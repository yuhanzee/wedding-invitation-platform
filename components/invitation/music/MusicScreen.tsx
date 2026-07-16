"use client";

import Image from "next/image";

import PhoneFrame from "@/components/common/PhoneFrame";
import MusicPlayer from "./MusicPlayer";

type MusicScreenProps = {
  groomName: string;
  brideName: string;
};

export default function MusicScreen({
  groomName,
  brideName,
}: MusicScreenProps) {
  return (
    <PhoneFrame>
      <main className="relative h-full w-full overflow-hidden">
        {/* COUPLE BACKGROUND */}
        <Image
          src="/assets/music/couple-background.jpg"
          alt={`${groomName} and ${brideName}`}
          fill
          priority
          className="object-cover"
        />

        {/* MUSIC CONTENT */}
        <div className="absolute inset-0 z-10">
          <MusicPlayer
            groomName={groomName}
            brideName={brideName}
          />
        </div>
      </main>
    </PhoneFrame>
  );
}
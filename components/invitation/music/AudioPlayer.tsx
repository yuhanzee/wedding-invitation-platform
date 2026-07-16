"use client";

import { useInvitationMusic } from "./InvitationMusicProvider";

function formatTime(seconds: number) {
  if (!seconds || Number.isNaN(seconds)) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function AudioPlayer() {
  const {
    currentTime,
    duration,
  } = useInvitationMusic();

  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <div className="w-[240px]">

      {/* Progress */}
      <div className="relative h-[2px] rounded-full bg-[#CFCFCF]">

        <div
          className="absolute left-0 top-0 h-full rounded-full bg-[#6E6E6E]"
          style={{
            width: `${progress}%`,
          }}
        />

        <div
          className="absolute top-1/2 w-3 h-3 rounded-full bg-[#6E6E6E] -translate-y-1/2 -translate-x-1/2"
          style={{
            left: `${progress}%`,
          }}
        />

      </div>

      {/* Time */}
      <div className="mt-2 flex justify-between text-[12px] text-[#6E6E6E]">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

    </div>
  );
}
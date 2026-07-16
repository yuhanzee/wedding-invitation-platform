"use client";

import { useInvitationMusic } from "./InvitationMusicProvider";

import ShuffleIcon from "./icons/ShuffleIcon";
import PreviousIcon from "./icons/PreviousIcon";
import NextIcon from "./icons/NextIcon";
import PlayIcon from "./icons/PlayIcon";
import PauseIcon from "./icons/PauseIcon";
import RepeatIcon from "./icons/RepeatIcon";

export default function PlayerControls() {
  const {
    isPlaying,
    toggle,
  } = useInvitationMusic();

  return (
    <div className="flex items-center justify-center gap-6 mt-5 text-[#6E6E6E]">

      <button>
        <ShuffleIcon className="w-5 h-5" />
      </button>

      <button>
        <PreviousIcon className="w-5 h-5" />
      </button>

      <button
        onClick={toggle}
        className="w-12 h-12 rounded-full border border-[#6E6E6E] flex items-center justify-center hover:scale-105 transition"
      >
        {isPlaying ? (
          <PauseIcon className="w-6 h-6" />
        ) : (
          <PlayIcon className="w-6 h-6 ml-1" />
        )}
      </button>

      <button>
        <NextIcon className="w-5 h-5" />
      </button>

      <button>
        <RepeatIcon className="w-5 h-5" />
      </button>

    </div>
  );
}
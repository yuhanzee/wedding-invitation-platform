"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type MusicContextType = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seek: (time: number) => void;
};

const MusicContext = createContext<MusicContextType | null>(null);

type InvitationMusicProviderProps = {
  children: ReactNode;
};

export default function InvitationMusicProvider({
  children,
}: InvitationMusicProviderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio(
      "/assets/music/audio/wedding-song.mp3"
    );

    audio.loop = true;

    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    return () => {
      audio.pause();

      audio.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      audio.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    };
  }, []);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const seek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        play,
        pause,
        toggle,
        seek,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useInvitationMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error(
      "useInvitationMusic must be used inside InvitationMusicProvider"
    );
  }

  return context;
}
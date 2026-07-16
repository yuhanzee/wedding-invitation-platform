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
  play: () => Promise<void>;
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

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );

    audio.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    audio.addEventListener(
      "play",
      handlePlay
    );

    audio.addEventListener(
      "pause",
      handlePause
    );

    audio.addEventListener(
      "ended",
      handleEnded
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

      audio.removeEventListener(
        "play",
        handlePlay
      );

      audio.removeEventListener(
        "pause",
        handlePause
      );

      audio.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, []);

  const play = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
    } catch (error) {
      console.error(
        "Unable to play audio:",
        error
      );
    }
  };

  const pause = () => {
    audioRef.current?.pause();
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
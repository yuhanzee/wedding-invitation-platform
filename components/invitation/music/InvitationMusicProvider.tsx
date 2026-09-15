// "use client";

// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from "react";

// type MusicContextType = {
//   isPlaying: boolean;
//   currentTime: number;
//   duration: number;
//   play: () => Promise<void>;
//   pause: () => void;
//   toggle: () => void;
//   seek: (time: number) => void;
// };

// const MusicContext = createContext<MusicContextType | null>(null);

// type InvitationMusicProviderProps = {
//   children: ReactNode;
// };

// export default function InvitationMusicProvider({
//   children,
// }: InvitationMusicProviderProps) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//     const audio = new Audio(
//       "/assets/music/audio/wedding-song.mp3"
//     );

//     audio.loop = true;

//     audioRef.current = audio;

//     const handleTimeUpdate = () => {
//       setCurrentTime(audio.currentTime);
//     };

//     const handleLoadedMetadata = () => {
//       setDuration(audio.duration);
//     };

//     const handlePlay = () => {
//       setIsPlaying(true);
//     };

//     const handlePause = () => {
//       setIsPlaying(false);
//     };

//     const handleEnded = () => {
//       setIsPlaying(false);
//     };

//     audio.addEventListener(
//       "timeupdate",
//       handleTimeUpdate
//     );

//     audio.addEventListener(
//       "loadedmetadata",
//       handleLoadedMetadata
//     );

//     audio.addEventListener(
//       "play",
//       handlePlay
//     );

//     audio.addEventListener(
//       "pause",
//       handlePause
//     );

//     audio.addEventListener(
//       "ended",
//       handleEnded
//     );

//     return () => {
//       audio.pause();

//       audio.removeEventListener(
//         "timeupdate",
//         handleTimeUpdate
//       );

//       audio.removeEventListener(
//         "loadedmetadata",
//         handleLoadedMetadata
//       );

//       audio.removeEventListener(
//         "play",
//         handlePlay
//       );

//       audio.removeEventListener(
//         "pause",
//         handlePause
//       );

//       audio.removeEventListener(
//         "ended",
//         handleEnded
//       );
//     };
//   }, []);

//   const play = async () => {
//     if (!audioRef.current) return;

//     try {
//       await audioRef.current.play();
//     } catch (error) {
//       console.error(
//         "Unable to play audio:",
//         error
//       );
//     }
//   };

//   const pause = () => {
//     audioRef.current?.pause();
//   };

//   const toggle = () => {
//     if (isPlaying) {
//       pause();
//     } else {
//       play();
//     }
//   };

//   const seek = (time: number) => {
//     if (!audioRef.current) return;

//     audioRef.current.currentTime = time;
//     setCurrentTime(time);
//   };

//   return (
//     <MusicContext.Provider
//       value={{
//         isPlaying,
//         currentTime,
//         duration,
//         play,
//         pause,
//         toggle,
//         seek,
//       }}
//     >
//       {children}
//     </MusicContext.Provider>
//   );
// }

// export function useInvitationMusic() {
//   const context = useContext(MusicContext);

//   if (!context) {
//     throw new Error(
//       "useInvitationMusic must be used inside InvitationMusicProvider"
//     );
//   }

//   return context;
// }

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
    audio.preload = "auto";

    audioRef.current = audio;

    // =========================================================
    // AUDIO STATE EVENTS
    // =========================================================

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

    // =========================================================
    // STOP MUSIC WHEN USER LEAVES / HIDES THE INVITATION
    // =========================================================

    const stopMusic = () => {
      audio.pause();
      setIsPlaying(false);
    };

    // Browser tab becomes hidden.
    // Examples:
    // - user switches apps
    // - user minimizes browser
    // - user changes browser tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopMusic();
      }
    };

    // Important for mobile Safari / Chrome.
    // Fires when the page is being navigated away from
    // or stored in the back-forward cache.
    const handlePageHide = () => {
      stopMusic();
    };

    // Extra protection for normal page closing/navigation.
    const handleBeforeUnload = () => {
      stopMusic();
    };

    // =========================================================
    // AUDIO LISTENERS
    // =========================================================

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

    // =========================================================
    // PAGE / BROWSER LISTENERS
    // =========================================================

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    window.addEventListener(
      "pagehide",
      handlePageHide
    );

    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );

    // =========================================================
    // CLEANUP
    // =========================================================

    return () => {
      stopMusic();

      // Completely disconnect the audio source.
      audio.removeAttribute("src");
      audio.load();

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

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      window.removeEventListener(
        "pagehide",
        handlePageHide
      );

      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );

      audioRef.current = null;
    };
  }, []);

  // ===========================================================
  // PLAY
  // ===========================================================

  const play = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      await audio.play();
    } catch (error) {
      console.error(
        "Unable to play invitation music:",
        error
      );
    }
  };

  // ===========================================================
  // PAUSE
  // ===========================================================

  const pause = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();
  };

  // ===========================================================
  // TOGGLE
  // ===========================================================

  const toggle = () => {
    const audio = audioRef.current;

    if (!audio) return;

    // Use the actual audio state rather than React state.
    if (audio.paused) {
      void play();
    } else {
      pause();
    }
  };

  // ===========================================================
  // SEEK
  // ===========================================================

  const seek = (time: number) => {
    const audio = audioRef.current;

    if (!audio) return;

    const safeTime = Math.max(
      0,
      Math.min(
        time,
        Number.isFinite(audio.duration)
          ? audio.duration
          : time
      )
    );

    audio.currentTime = safeTime;
    setCurrentTime(safeTime);
  };

  // ===========================================================
  // PROVIDER
  // ===========================================================

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
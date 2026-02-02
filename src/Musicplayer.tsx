import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MusicPlayerProps {
  isPlaying: boolean; // Controlled by the parent (App.tsx)
}

export default function MusicPlayer({ isPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      // Try to play when the prop changes to true
      audioRef.current.play().catch((e) => console.log("Playback failed:", e));
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setMuted(!muted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="/music/song.mp3" // Put your mp3 in public/music/
      />

      {/* Floating Control Button */}
      {isPlaying && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={toggleMute}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-pink-200 text-pink-600 hover:bg-pink-50 transition-all"
        >
          {muted ? "🔇" : "🎵"}
        </motion.button>
      )}
    </div>
  );
}

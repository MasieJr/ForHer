import { useState } from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import MusicPlayer from "./Musicplayer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [error, setError] = useState("");

  const SECRETS = [
    "wifee",
    "love",
    "forever",
    "2024",
    "gojasi",
    "baddie",
    "mrs Seremu",
    "seremu",
    "wife",
    "mine",
    "my wife",
    "my girl",
  ];

  const handleUnlock = () => {
    // Normalize input (trim whitespace and make lowercase)
    const cleanInput = passcode.toLowerCase().trim();

    if (SECRETS.includes(cleanInput)) {
      // 1. Unlock the view
      setIsUnlocked(true);
      // 2. Start the music
      setPlayMusic(true);
      // 3. Clear any errors
      setError("");
    } else {
      setError("Wrong password! Hint: What are you? ❤️");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUnlock();
    }
  };

  return (
    <>
      <Analytics />
      <MusicPlayer isPlaying={playMusic} />

      {isUnlocked ? (
        // VIEW 2: The Timeline (Success State)
        <Timeline />
      ) : (
        // VIEW 1: The Login Gate
        <div className="min-h-screen wi flex flex-col items-center justify-center bg-pink-50 text-red-800 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border-2 border-pink-100"
          >
            <div className="text-4xl mb-4">💌</div>
            <h1 className="text-2xl font-bold mb-2">
              For My Persom - Dalubuhle Seremu
            </h1>
            <p className="text-gray-600 mb-6 text-sm">
              Enter the secret code to open.
            </p>

            <input
              type="text"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Im your man"
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4 text-center text-gray-800"
            />

            <button
              onClick={handleUnlock}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-md"
            >
              Unlock
            </button>

            {/* Error Message with a small animation key */}
            {error && (
              <motion.p
                key={error} // restarts animation on new error
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                className="text-red-500 text-xs mt-3 font-medium"
              >
                {error}
              </motion.p>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}

export default App;

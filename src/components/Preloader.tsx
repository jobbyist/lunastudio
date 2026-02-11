import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lunaLoveLogo from "@/assets/LUNALOVE.png";

// Beauty-related quotes
const beautyQuotes = [
  "Beauty begins the moment you decide to be yourself.",
  "Confidence is the best makeup you can wear.",
  "Invest in your hair, it is the crown you never take off.",
  "Beauty is power; a smile is its sword.",
  "Life is too short to have boring hair.",
  "Your hair is your best accessory.",
  "Beautiful hair is the best revenge.",
  "Love the hair you have before you get the hair you want.",
  "Good hair speaks louder than words.",
  "Embrace your natural beauty and enhance it with confidence.",
];

// Duration constants (in milliseconds)
const MIN_DURATION = 5000; // 5 seconds
const MAX_DURATION = 10000; // 10 seconds

// Helper function to get a random quote
const getRandomQuote = () => {
  return beautyQuotes[Math.floor(Math.random() * beautyQuotes.length)];
};

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [quote] = useState(() => getRandomQuote());

  useEffect(() => {
    // Check if preloader has been shown in this session
    const hasShownPreloader = sessionStorage.getItem("hasShownPreloader");
    
    if (hasShownPreloader) {
      // Skip preloader if already shown in this session
      setIsLoading(false);
      return;
    }

    // Random duration between 5-10 seconds
    const duration = Math.floor(Math.random() * (MAX_DURATION - MIN_DURATION)) + MIN_DURATION;
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, interval);

    // Close preloader after progress completes
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Mark that preloader has been shown in this session
      sessionStorage.setItem("hasShownPreloader", "true");
    }, duration + 500); // Add 500ms buffer

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo */}
          <motion.img
            src={lunaLoveLogo}
            alt="Luna Lux Hair"
            className="w-48 h-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Loading bar container */}
          <motion.div
            className="w-64 sm:w-80 flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Progress bar background */}
            <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
              {/* Progress bar fill with gradient and glow */}
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, hsl(340, 75%, 65%) 0%, hsl(340, 75%, 85%) 50%, hsl(347, 34%, 82%) 100%)",
                  width: `${progress}%`,
                  boxShadow: "0 0 12px hsl(340, 75%, 75%), 0 0 24px hsl(340, 75%, 70% / 0.5), 0 0 40px hsl(340, 75%, 65% / 0.3)",
                }}
                initial={{ width: 0 }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            {/* Beauty quote */}
            <motion.p
              className="text-sm text-center px-4 italic text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              "{quote}"
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

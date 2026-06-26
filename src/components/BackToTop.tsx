import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      } else {
        setScrollProgress(0);
      }

      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call to set status if already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG parameters for the dynamic progress ring
  const radius = 22;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 40, rotate: -30 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 18
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 30, 
            rotate: 30, 
            transition: { duration: 0.2 } 
          }}
          className="fixed right-4 bottom-22 md:bottom-24 z-40"
        >
          {/* Subtle Attention-Grabbing Ping Effect */}
          <div className="absolute inset-0 rounded-full bg-suncell-orange/20 animate-ping pointer-events-none scale-105" />

          <motion.button
            id="back-to-top-button"
            onClick={scrollToTop}
            className="relative w-12 h-12 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.45)] border border-white/10 select-none group cursor-pointer focus:outline-none"
            whileHover={{ 
              scale: 1.12, 
              backgroundColor: "#141414",
              boxShadow: "0 0 25px rgba(255,107,0,0.8)"
            }}
            whileTap={{ scale: 0.92 }}
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            {/* SVG Dynamic Scroll Progress Ring */}
            <svg
              className="absolute -rotate-90 w-full h-full p-0.5 pointer-events-none"
              viewBox="0 0 44 44"
            >
              <circle
                className="text-white/10"
                stroke="currentColor"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={22}
                cy={22}
              />
              <motion.circle
                stroke="#FF6B00"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={22}
                cy={22}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
              />
            </svg>

            {/* Inner Premium Chevron Up - moves/bounces on hover */}
            <motion.div
              className="relative z-10 flex items-center justify-center text-suncell-orange group-hover:text-white transition-colors duration-200"
              variants={{
                initial: { y: 0 },
                hover: { 
                  y: -3,
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5,
                    ease: "easeInOut"
                  }
                }
              }}
              initial="initial"
              whileHover="hover"
            >
              <ChevronUp size={22} className="stroke-[2.5]" />
            </motion.div>

            {/* Gradient Deep Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-suncell-orange/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

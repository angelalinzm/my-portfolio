"use client";

import { motion } from "framer-motion";

const easeInOut = [0.45, 0, 0.55, 1] as const;

const wobbleAnim = {
  rotate: [0, 1.5, -1, 1, -1.5, 0],
  y: [0, -5, 3, -4, 2, 0],
};

const wobbleTrans = (delay: number, duration = 6) => ({
  duration,
  repeat: Infinity,
  ease: easeInOut,
  delay,
});


interface ShapeProps {
  color: string;
  style?: React.CSSProperties;
  delay?: number;
}

function WobblyFlower({ color, style, delay = 0 }: ShapeProps) {
  return (
    <motion.div
      style={style}
      animate={wobbleAnim}
      transition={wobbleTrans(delay)}
      className="absolute"
    >
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <motion.path
          d="M45 15 C55 5, 70 10, 70 22 C70 30, 62 35, 55 38 C65 40, 75 48, 72 58 C69 68, 56 68, 50 62 C50 72, 44 80, 35 78 C26 76, 23 65, 28 57 C20 60, 10 56, 10 46 C10 36, 20 32, 28 33 C20 27, 18 15, 27 10 C36 5, 43 12, 45 15Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity={0.22}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.22 }}
          transition={{ duration: 1.6, delay, ease: easeInOut }}
        />
        <motion.path
          d="M38,45 A7,7 0 1,0 52,45 A7,7 0 1,0 38,45"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.22 }}
          transition={{ duration: 0.4, delay: delay + 1.4, ease: easeInOut }}
        />
      </svg>
    </motion.div>
  );
}

function WobblyHexagon({ color, style, delay = 0 }: ShapeProps) {
  return (
    <motion.div
      style={style}
      animate={{ rotate: [0, -1.5, 1, -1, 1.5, 0], y: [0, -5, 3, -4, 2, 0] }}
      transition={wobbleTrans(delay, 7)}
      className="absolute"
    >
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <motion.path
          d="M40 8 L68 24 L68 56 L40 72 L12 56 L12 24 Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.4, delay, ease: easeInOut }}
        />
      </svg>
    </motion.div>
  );
}

function WobblyCircle({ color, style, delay = 0 }: ShapeProps) {
  return (
    <motion.div
      style={style}
      animate={{ rotate: [0, 1.5, -1, 1, -1.5, 0], y: [0, 4, -5, 3, -2, 0] }}
      transition={wobbleTrans(delay, 8)}
      className="absolute"
    >
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        <motion.path
          d="M7,35 A28,28 0 1,0 63,35 A28,28 0 1,0 7,35"
          stroke={color}
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.2, delay, ease: easeInOut }}
        />
      </svg>
    </motion.div>
  );
}

function WobblySquiggle({ color, style, delay = 0 }: ShapeProps) {
  return (
    <motion.div
      style={style}
      animate={wobbleAnim}
      transition={wobbleTrans(delay, 5)}
      className="absolute"
    >
      <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
        <motion.path
          d="M5 20 C10 5, 20 35, 30 20 C40 5, 50 35, 55 20"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.22 }}
          transition={{ duration: 1.0, delay, ease: easeInOut }}
        />
      </svg>
    </motion.div>
  );
}

function WobblyTriangle({ color, style, delay = 0 }: ShapeProps) {
  return (
    <motion.div
      style={style}
      animate={wobbleAnim}
      transition={wobbleTrans(delay, 6.5)}
      className="absolute"
    >
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
        <motion.path
          d="M27 6 L50 46 L4 46 Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 1.1, delay, ease: easeInOut }}
        />
      </svg>
    </motion.div>
  );
}

export default function HandDrawnShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <WobblyFlower color="#16a34a" style={{ top: "80px", left: "20px" }} delay={0} />
      <WobblySquiggle color="#4f46e5" style={{ top: "180px", left: "60px" }} delay={0.3} />
      <WobblyHexagon color="#4f46e5" style={{ top: "70px", right: "40px" }} delay={0.2} />
      <WobblyTriangle color="#fb923c" style={{ top: "165px", right: "100px" }} delay={0.5} />
      <WobblyCircle color="#0284c7" style={{ bottom: "160px", left: "50px" }} delay={0.4} />
      <WobblySquiggle color="#f472b6" style={{ bottom: "240px", left: "130px" }} delay={0.6} />
      <WobblyFlower color="#f472b6" style={{ bottom: "140px", right: "30px" }} delay={0.1} />
      <WobblyCircle color="#2dd4bf" style={{ bottom: "260px", right: "110px" }} delay={0.7} />
    </div>
  );
}

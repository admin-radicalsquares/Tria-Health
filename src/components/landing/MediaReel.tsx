import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

function getCumulativeDeaths() {
  const start = new Date(2026, 0, 1); // Jan 1 2026
  const now = new Date();
  const days = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(days, 1) * 485;
}

const MediaReel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v).toLocaleString("en-IN"));
  const [hasAnimated, setHasAnimated] = useState(false);
  const cumulativeDeaths = useMemo(() => getCumulativeDeaths(), []);
  const cumulativeCount = useMotionValue(0);
  const cumulativeDisplay = useTransform(cumulativeCount, (v) => Math.round(v).toLocaleString("en-IN"));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animate(count, 485, { duration: 3, delay: 0.5, ease: [0.16, 1, 0.3, 1] });
      animate(cumulativeCount, cumulativeDeaths, { duration: 3.5, delay: 4, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, hasAnimated, cumulativeCount, cumulativeDeaths]);

  // Flatline dramatic flash — triggers when ECG reaches the flatline
  const [flatlined, setFlatlined] = useState(false);
  useEffect(() => {
    if (hasAnimated) {
      // ECG starts at delay 3, duration 3. Flatline starts ~65% through = ~5s after animation start
      const timer = setTimeout(() => setFlatlined(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-32">
      {/* Pulsing background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-destructive/[0.06]"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasAnimated ? {
              opacity: [0, 0.4, 0],
              scale: [0.8, 1.1, 1.3],
            } : {}}
            transition={{
              duration: 4,
              delay: i * 0.6 + 1,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Core glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={hasAnimated ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="h-[400px] w-[400px] rounded-full bg-destructive/[0.08] blur-[120px]" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-destructive/40"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 11) % 70}%`,
          }}
          animate={{
            y: [0, -40 - i * 5, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-[46vh] bg-gradient-to-t from-foreground/10 via-foreground/[0.04] to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center px-8">
        {/* Label */}
        <motion.p
          className="mb-10 text-[11px] font-medium uppercase tracking-[0.4em] text-destructive/60"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1 }}
        >
          The Human Cost. Every Single Day.
        </motion.p>

        {/* Counter with ECG heartbeat */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Red flash overlay on flatline */}
          <motion.div
            className="fixed inset-0 bg-destructive/20 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={flatlined ? { opacity: [0, 0.4, 0] } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.span
            className="relative text-[clamp(5rem,14vw,10rem)] font-bold tabular-nums tracking-[-0.06em] text-destructive leading-none"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={isInView ? {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              x: flatlined ? [0, -6, 6, -4, 4, 0] : 0,
            } : {}}
            transition={{
              opacity: { delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] },
              filter: { delay: 0.3, duration: 1.5, ease: [0.16, 1, 0.3, 1] },
              x: { duration: 0.4, ease: "easeOut" },
            }}
          >
            <motion.span>{display}</motion.span>
          </motion.span>

          {/* Description - right under 485 */}
          <motion.p
            className="mt-4 max-w-2xl px-5 py-3 text-center text-[clamp(1.2rem,2.5vw,1.6rem)] font-medium leading-snug tracking-[-0.02em] text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
          >
            People die every day due to delay in emergency care
          </motion.p>

          {/* ECG heartbeat line: 2 beats then flatline */}
          <motion.div
            className="mt-6 w-[clamp(200px,40vw,400px)] h-[60px] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg
              viewBox="0 0 400 60"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <motion.path
                d="M0,30 L40,30 L50,30 L58,12 L66,48 L74,6 L82,54 L88,26 L95,30 L140,30 L150,30 L158,12 L166,48 L174,6 L182,54 L188,26 L195,30 L400,30"
                fill="none"
                stroke="hsl(var(--destructive))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                animate={hasAnimated ? { pathLength: [0, 1], opacity: [0.6, 0.8] } : {}}
                transition={{
                  pathLength: { delay: 3, duration: 3, ease: "linear" },
                  opacity: { delay: 3, duration: 0.5 },
                }}
              />
              <motion.path
                d="M0,30 L40,30 L50,30 L58,12 L66,48 L74,6 L82,54 L88,26 L95,30 L140,30 L150,30 L158,12 L166,48 L174,6 L182,54 L188,26 L195,30 L400,30"
                fill="none"
                stroke="hsl(var(--destructive))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="blur(6px)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={hasAnimated ? { pathLength: [0, 1], opacity: [0, 0.25] } : {}}
                transition={{
                  pathLength: { delay: 3, duration: 3, ease: "linear" },
                  opacity: { delay: 3, duration: 0.5 },
                }}
              />
            </svg>
          </motion.div>

          {/* Cumulative deaths since Jan 1 2026 */}
          <motion.div
            className="mt-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 4, duration: 1.2 }}
          >
            <motion.span className="text-[clamp(2rem,5vw,3.5rem)] font-bold tabular-nums tracking-[-0.04em] text-destructive/80 leading-none">
              <motion.span>{cumulativeDisplay}</motion.span>
              <span className="text-destructive/40">+</span>
            </motion.span>
            <p className="mt-2 text-sm text-foreground/50">
              lives lost since January 1, 2026
            </p>
          </motion.div>

          {/* 1 in every 2 minutes */}
          <motion.div
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-5 py-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 5, duration: 0.8 }}
          >
            <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-[13px] font-semibold tracking-wide text-destructive">
              1 death every 2 minutes
            </span>
          </motion.div>
        </div>

        {/* Emotional anchor */}
        <motion.div
          className="relative z-30 mt-14 max-w-3xl text-center px-7 py-6"
          initial={{ opacity: 0, y: 10 }}
          animate={flatlined ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          <p className="text-[22px] leading-relaxed text-foreground font-semibold">
            Your mother. Your father. Your brother. Your sister.
          </p>
          <motion.p
            className="mt-3 text-[19px] font-bold text-destructive"
            initial={{ opacity: 0 }}
            animate={flatlined ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
          >
            This isn't a statistic. It's someone's family. Every single day.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-destructive/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default MediaReel;

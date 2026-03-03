import { motion } from "framer-motion";
import heroCity from "@/assets/cityscape-sunrise.jpg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Top gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={heroCity}
          alt="City skyline during golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/0 to-background/90" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/30"
          style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
        <motion.div
          className="mb-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-accent">
            TRIA
          </span>
          <span className="text-[clamp(2rem,4vw,3rem)] font-light tracking-tight text-foreground/60">
            Health
          </span>
        </motion.div>

        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#ffc15a]/90 bg-background/25 backdrop-blur-sm px-4 py-1.5 shadow-[0_0_26px_rgba(255,193,90,0.85)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffc15a] animate-pulse shadow-[0_0_24px_rgba(255,193,90,1)]" />
          <span className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.35em] text-[#ffc15a]">
            Stealth Mode
          </span>
        </motion.div>

        <motion.p
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.4em] text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Emergency Response Infrastructure
        </motion.p>

        <motion.h1
          className="mb-8 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground"
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          The Five-Minute
          <br />
          <motion.span
            className="text-accent inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Lifeline.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-12 max-w-lg text-[17px] leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Converting the Golden Hour into Golden Minutes through AI-powered
          rapid emergency response.
        </motion.p>

        <motion.a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-[14px] font-medium text-accent-foreground transition-all duration-300 hover:bg-accent/85 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Request Pilot Proposal
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.a>
      </div>

      {/* Bottom gradient blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background z-20 pointer-events-none" />

      <motion.div
        className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

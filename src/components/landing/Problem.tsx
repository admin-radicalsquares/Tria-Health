import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import trafficImg from "@/assets/ambulance-traffic-real.png";

const stats = [
  { value: 59, suffix: " min", prefix: "", label: "Average care start time in urban emergencies", isDestructive: true },
  { value: 80000, suffix: "", prefix: "1 : ", label: "Ambulance density, grossly inadequate", isDestructive: false },
  { value: 50, suffix: "%", prefix: "30–", label: "Deaths due to delayed first response", isDestructive: true },
];

function AnimatedStat({ value, suffix, prefix, label, index, isDestructive }: { value: number; suffix: string; prefix?: string; label: string; index: number; isDestructive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    if (value >= 1000) return `${prefix || ""}${Math.round(v).toLocaleString("en-IN")}${suffix}`;
    return `${prefix || ""}${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span className={`block text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] ${isDestructive ? 'text-destructive' : 'text-accent'}`}>
        <motion.span>{display}</motion.span>
      </motion.span>
      <span className="mt-2 block text-base text-foreground/60 leading-relaxed">{label}</span>
      <motion.div
        className={`mt-6 h-[1px] ${isDestructive ? 'bg-destructive/15' : 'bg-accent/15'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}

const Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.4], [1.1, 1]);

  return (
    <section ref={sectionRef} id="problem" className="relative bg-background overflow-hidden">
      {/* Top gradient blend from previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-10 py-20 md:py-28">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-accent">
            The Crisis
          </p>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">
            The Golden Hour,
            <br />
            <span className="text-accent">lost to traffic.</span>
          </h2>
        </motion.div>

        {/* Side-by-side: stats left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Stats */}
          <div className="space-y-8">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                index={i}
                isDestructive={stat.isDestructive}
              />
            ))}
          </div>

          {/* Image */}
          <motion.div
            className="relative overflow-hidden rounded-xl aspect-[4/5]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
              <img
                src={trafficImg}
                alt="Traffic congestion delaying emergency response"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

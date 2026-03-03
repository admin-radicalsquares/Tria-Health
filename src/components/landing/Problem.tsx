import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";
import trafficImg from "@/assets/ambulance-traffic-real.png";

const stats = [
  // National scale crisis
  {
    value: 180000,
    suffix: "",
    prefix: "~",
    label: "Annual road fatalities alone in India",
    isDestructive: true,
  },
  {
    value: 40,
    suffix: " Lakh+",
    prefix: "",
    label: "Serious accidents yearly",
    isDestructive: true,
  },
  {
    value: 15,
    suffix: "%",
    prefix: "Only ~",
    label: "Victims receive critical care in less than 1 hour",
    isDestructive: true,
  },
  {
    value: 11,
    suffix: "%",
    prefix: "~",
    label: "Of global emergency deaths occur in India (~195 countries)",
    isDestructive: true,
  },
  // Existing crisis stats
  {
    value: 59,
    suffix: " min",
    prefix: "",
    label: "Average care start time in urban emergencies",
    isDestructive: true,
  },
  {
    value: 80000,
    suffix: "",
    prefix: "1 : ",
    label: "Ambulance density, grossly inadequate",
    isDestructive: false,
  },
  {
    value: 50,
    suffix: "%",
    prefix: "30–",
    label: "Deaths due to delayed first response",
    isDestructive: true,
  },
];

const additionalMetrics = [
  {
    highlight: "90%",
    text: " of ambulances operate without equipment/oxygen",
  },
  {
    highlight: "95%",
    text: " of ambulances have untrained or unskilled personnel",
  },
  {
    highlight: "98.5%",
    text: " of ambulances exist only to carry dead bodies",
  },
];

function AnimatedStat({
  value,
  suffix,
  prefix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    if (value >= 1000)
      return `${prefix || ""}${Math.round(v).toLocaleString("en-IN")}${suffix}`;
    return `${prefix || ""}${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.5,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.span className="block text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-destructive">
        <motion.span>{display}</motion.span>
      </motion.span>
      <span className="mt-2 block text-base text-foreground/60 leading-relaxed">
        {label}
      </span>
      <motion.div
        className="mt-6 h-[1px] bg-destructive/25"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.15 + 0.3,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
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
    <section
      ref={sectionRef}
      id="problem"
      className="relative bg-background overflow-hidden"
    >
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
          <p className="mb-4 text-[27px] font-medium uppercase tracking-[0.45em] text-accent">
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
          <div className="grid gap-10 md:grid-cols-2">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                index={i}
              />
            ))}

            {/* Additional metrics hover text centered in bottom space */}
            <div className="relative md:col-span-2 mt-12 flex justify-center">
              <div className="group inline-flex items-center gap-3 text-[11px] md:text-[12px] font-normal uppercase tracking-[0.35em] text-destructive cursor-pointer">
                <span>Additional metrics</span>
                <span className="text-[10px] md:text-[11px] text-destructive/70 group-hover:translate-x-1 transition-transform">
                  (hover to view)
                </span>

                <div className="pointer-events-none absolute bottom-full left-1/2 mb-4 w-[min(380px,90vw)] -translate-x-1/2 rounded-lg border border-destructive/40 bg-background/95 px-5 py-4 shadow-xl shadow-destructive/40 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-20">
                  <ul className="space-y-1.5 text-xs md:text-sm text-foreground/70 leading-relaxed">
                    {additionalMetrics.map((item) => (
                      <li
                        key={item.highlight + item.text}
                        className="flex gap-2"
                      >
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-destructive/70 flex-shrink-0" />
                        <span>
                          <span className="text-destructive">
                            {item.highlight}
                          </span>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            className="relative overflow-hidden rounded-xl aspect-[4/5]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ y: imageY, scale: imageScale }}
            >
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

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { AlertTriangle, Heart, Siren, Clock, Ambulance, Globe } from "lucide-react";
import andhraPradesh from "@/assets/andhra-pradesh.jpg";
import medicalKit from "@/assets/medical-kit.jpg";

const metrics = [
  { number: 180000, suffix: "", prefix: "~", description: "Annual road fatalities in India", icon: AlertTriangle },
  { number: 40, suffix: " Lakh+", prefix: "", description: "Serious accidents yearly", icon: Siren },
  { number: 80000, suffix: "", prefix: "1 : ", description: "Ambulance per citizens, grossly inadequate", icon: Ambulance },
  { number: 15, suffix: "%", prefix: "Only ~", description: "Victims receive critical care in less than 1 hour", icon: Clock },
  { number: 11, suffix: "%", prefix: "~", description: "Of global emergency deaths occur in India (~195 countries)", icon: Globe },
];

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    if (value >= 1000) return `${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`;
    return `${prefix}${Math.round(v)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2.5, ease: [0.16, 1, 0.3, 1] });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const ImpactMetrics = () => {
  return (
    <section id="impact" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-[1440px] px-10">
        {/* Paradigm Shift */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Paradigm Shift
          </p>
          <h3 className="text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground mb-16">
            From reactive to <span className="text-accent">immediate.</span>
          </h3>

          {/* Side-by-side comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Model */}
            <motion.div
              className="group relative overflow-hidden rounded-xl border border-border/40 bg-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={andhraPradesh}
                  alt="Current emergency response - ambulance in traffic"
                  className="h-full w-full object-cover brightness-[0.8] saturate-[0.85] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur-md px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                    Current
                  </span>
                </div>
                <div className="absolute bottom-5 right-5">
                  <span className="text-[4rem] font-bold tracking-[-0.04em] text-foreground/20 leading-none">59m</span>
                </div>
              </div>
              <div className="p-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/50 mb-4">Current Model</p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-[3.5rem] font-bold tracking-[-0.04em] text-foreground leading-none">59</span>
                  <span className="text-lg font-light text-muted-foreground">min avg.</span>
                </div>
                <ul className="text-base text-muted-foreground leading-relaxed mb-8 space-y-2.5">
                  <li>60+ minute average EMS response time</li>
                  <li>Ambulances stuck in traffic gridlock</li>
                  <li>High mortality and disability rates</li>
                </ul>
                <div className="h-2 bg-border/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-muted-foreground/25 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <span className="mt-3 block text-[11px] text-muted-foreground/40">Response timeline</span>
              </div>
            </motion.div>

            {/* TRIA Model */}
            <motion.div
              className="group relative overflow-hidden rounded-xl border border-accent/40 bg-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={medicalKit}
                  alt="TRIA drone delivering medical kit"
                  className="h-full w-full object-cover brightness-[0.8] saturate-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 backdrop-blur-md px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    TRIA
                  </span>
                </div>
                <div className="absolute bottom-5 right-5">
                  <span className="text-[4rem] font-bold tracking-[-0.04em] text-accent/20 leading-none">5m</span>
                </div>
              </div>
              <div className="p-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent/50 mb-4">TRIA Model</p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-[3.5rem] font-bold tracking-[-0.04em] text-accent leading-none">5</span>
                  <span className="text-lg font-light text-muted-foreground">min avg.</span>
                  <motion.span
                    className="ml-3 inline-flex items-center rounded-full bg-destructive/15 border border-destructive/25 px-4 py-1.5 text-[12px] font-bold text-destructive tracking-wide"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                  >
                    12× faster
                  </motion.span>
                </div>
                <ul className="text-base text-muted-foreground leading-relaxed mb-8 space-y-2.5">
                  <li>~5 min response, 90% receive care on time</li>
                  <li>Tech & network powered, bypasses traffic</li>
                  <li>High survival rate, reduce deaths by 80%</li>
                </ul>
                <div className="h-2 bg-border/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "8.5%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <span className="mt-3 block text-[11px] text-accent/40">Response timeline</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scale heading */}
        <motion.div
          className="mt-32 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-accent">
            The Scale
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            Impact at national scale.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground max-w-xl">
            Starting with India and expanding to create a global impact across nations with challenging infrastructure and capital constraints.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.description}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-border/50 bg-card p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-accent/20 bg-accent/5">
                  <Icon className="h-4 w-4 text-accent/70" strokeWidth={1.5} />
                </div>
                <span className="block text-[2rem] font-bold tracking-[-0.04em] leading-tight text-accent">
                  <AnimatedCounter value={metric.number} prefix={metric.prefix} suffix={metric.suffix} />
                </span>
                <span className="mt-2 block text-[13px] leading-relaxed text-muted-foreground">
                  {metric.description}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;

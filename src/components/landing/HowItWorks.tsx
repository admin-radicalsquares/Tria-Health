import { motion } from "framer-motion";
import { Zap, Package, Cpu, Building2 } from "lucide-react";

const steps = [
  { num: "01", title: "Drone Dispatch", desc: "Automated launch from nearest hub within 90 seconds of alert.", icon: Zap },
  { num: "02", title: "Medical Kit Delivery", desc: "Professional trauma kit dropped at emergency location.", icon: Package },
  { num: "03", title: "AI-Guided Stabilization", desc: "Real-time video guidance for bystander or ground doctor.", icon: Cpu },
  { num: "04", title: "EMS Handoff", desc: "Patient stabilized and ready for ambulance transport.", icon: Building2 },
];

const HowItWorks = () => {
  return (
    <section className="bg-background py-32 md:py-44">
      <div className="mx-auto max-w-[1440px] px-10">
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Operations
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            How TRIA works.
          </h2>
        </motion.div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connection line */}
          <div className="absolute top-20 left-[12.5%] right-[12.5%] hidden h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card p-8 md:p-10 hover:border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Step icon with pulse */}
                <motion.div
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/5"
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent) / 0.5)" }}
                >
                  <Icon className="h-6 w-6 text-accent/60" strokeWidth={1.5} />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-accent/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                </motion.div>

                <span className="mb-2 block text-[11px] font-semibold tracking-[0.3em] text-accent/40 group-hover:text-accent/70 transition-colors duration-300">
                  STEP {step.num}
                </span>
                <h3 className="mb-3 text-[17px] font-semibold tracking-[-0.01em] text-foreground">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">{step.desc}</p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent/30 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { motion } from "framer-motion";
import andhraPradeshClean from "@/assets/paradigm-shift-current-model.png";
import medicalKit from "@/assets/medical-kit.jpg";

const SystemShift = () => {
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
            Paradigm Shift
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            From reactive to proactive.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-border/50 hover:border-destructive/30 transition-colors duration-500"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src={andhraPradeshClean}
              alt="Ambulance stuck in traffic"
              className="h-full w-full object-cover brightness-[0.55] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-destructive/70">
                Current Model
              </p>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] text-foreground">
                Traffic Dependent
              </h3>
              <p className="mt-2 text-[14px] text-muted-foreground">
                Average 59-minute response. Lives lost in transit.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-border/50 hover:border-accent/30 transition-colors duration-500"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <img
              src={medicalKit}
              alt="TRIA medical kit delivery"
              className="h-full w-full object-cover brightness-[0.45] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent/70">
                TRIA Model
              </p>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[-0.03em] text-accent">
                Immediate Stabilization
              </h3>
              <p className="mt-2 text-[14px] text-muted-foreground">
                5-minute medical response. Bypass traffic entirely.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemShift;

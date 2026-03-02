import { motion } from "framer-motion";
import droneDelivery from "@/assets/drone-delivery.jpg";
import doctorResponse from "@/assets/doctor-response.jpg";

const DualLayerSystem = () => {
  return (
    <section id="technology" className="relative overflow-hidden bg-background py-32 md:py-44">
      <div className="mx-auto max-w-[1440px] px-10">
        <motion.div
          className="mb-24 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Two-Layer Architecture
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            A synchronized air-and-ground
            <br />
            response network.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            className="group relative overflow-hidden rounded-lg border border-border/50 bg-card hover:border-accent/30 transition-colors duration-500"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src={droneDelivery}
                alt="Medical drone carrying emergency kit"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <div className="p-8 md:p-10">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                Layer 01
              </p>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                The Air Network
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                Distributed medical drones deliver professional trauma kits over traffic gridlock — reaching emergencies in under 5 minutes from strategically positioned launch hubs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-lg border border-border/50 bg-card hover:border-accent/30 transition-colors duration-500"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src={doctorResponse}
                alt="Doctor responding to emergency"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            </div>
            <div className="p-8 md:p-10">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
                Layer 02
              </p>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                The Ground Doctor Network
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                AI-matched medical professionals activated within minutes. A distributed network of verified doctors, nurses, and paramedics within proximity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mx-auto mt-20 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex items-start justify-between">
            <motion.div
              className="absolute top-5 left-[10%] right-[10%] h-[1px] bg-accent/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
            
            {[
              { time: "0 min", label: "Emergency Alert" },
              { time: "< 2 min", label: "Drone Dispatch" },
              { time: "< 5 min", label: "Kit Arrival" },
              { time: "5–8 min", label: "Stabilization" },
              { time: "10+ min", label: "EMS Handoff" },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                className="relative z-10 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <motion.div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-background"
                  whileHover={{ scale: 1.2, borderColor: "hsl(var(--accent))" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[11px] font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
                </motion.div>
                <span className="text-[13px] font-semibold text-foreground">{step.time}</span>
                <span className="mt-1 text-[11px] text-muted-foreground max-w-[80px]">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DualLayerSystem;

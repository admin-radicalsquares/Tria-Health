import { motion } from "framer-motion";
import { Heart, Shield, MapPin, TrendingDown } from "lucide-react";
import emsHandoff from "@/assets/ems-handoff.jpg";

const impacts = [
  { stat: "~250,000", desc: "Lives saved annually", icon: Heart },
  { stat: "30–40%", desc: "Improved response coverage", icon: MapPin },
  { stat: "50,000+", desc: "Severe cases preserved", icon: Shield },
  { stat: "~3%", desc: "GDP impact reduction", icon: TrendingDown },
];

const PublicImpact = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-10">
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
            Public Outcomes
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
            Measurable impact.
          </h2>
        </motion.div>

        {/* Full-width hero image with overlaid stats */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={emsHandoff}
            alt="Paramedic emergency response team in action"
            className="h-[500px] w-full object-cover brightness-[0.3] saturate-[0.6] md:h-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* Stats overlay */}
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-14">
            <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4 md:gap-x-0">
              {impacts.map((item, i) => (
                <motion.div
                  key={item.stat}
                  className="flex h-full flex-col md:px-8 md:first:pl-0 md:last:pr-0 md:border-r md:border-accent/10 md:last:border-r-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
                >
                  <item.icon className="mb-3 h-4 w-4 text-accent" />
                  <span className="block text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em] text-foreground">
                    {item.stat}
                  </span>
                  <p className="mt-2 flex-1 text-[13px] leading-snug text-muted-foreground">
                    {item.desc}
                  </p>
                  <motion.div
                    className="mt-5 h-px bg-accent/20"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicImpact;

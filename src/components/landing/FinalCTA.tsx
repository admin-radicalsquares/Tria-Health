import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import cityscapeImg from "@/assets/cityscape-sunrise.jpg";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={cityscapeImg}
          alt="Cityscape at sunrise"
          className="h-full w-full object-cover brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/80" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mb-10 mx-auto max-w-xl text-balance text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-foreground">
          Partner with <span className="text-accent">TRIA</span>.
          <br />
          <span className="inline-block md:-translate-x-60 md:whitespace-nowrap">
            Join our <span className="text-accent">Exclusive Partners</span> - Driven by{" "}
            <span className="text-accent">Social Impact</span>, above all.
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a
            href="mailto:info@triahealth.in"
            className="rounded-full bg-accent px-8 py-3.5 text-[14px] font-medium text-accent-foreground transition-all duration-300 hover:bg-accent/85 hover:shadow-[0_0_40px_hsl(var(--accent)/0.3)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              trackEvent("cta_click", {
                cta_label: "Connect With Us",
                section: "final_cta",
              })
            }
          >
            Connect With Us
          </motion.a>
          <motion.a
            href="#"
            className="rounded-full border border-foreground/20 px-8 py-3.5 text-[14px] font-medium text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              trackEvent("cta_click", {
                cta_label: "Partnership engagement",
                section: "final_cta",
              })
            }
          >
            Partnership engagement
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;

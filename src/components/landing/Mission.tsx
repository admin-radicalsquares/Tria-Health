import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1440px] px-10 py-20 md:py-28">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-accent">
            Our Mission
          </p>

          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground">
            The{" "}
            <span className="text-accent">5‑Minute</span>{" "}
            Lifeline
          </h2>

          <motion.div
            className="mx-auto my-8 h-px w-16 bg-accent/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.p
            className="text-[clamp(1.1rem,2vw,1.35rem)] leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Converting the Golden Hour into{" "}
            <span className="font-semibold text-foreground">Golden Minutes</span>{" "}
            through AI‑powered rapid emergency response.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;

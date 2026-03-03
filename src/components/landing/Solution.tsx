import { motion } from "framer-motion";

const Solution = () => {
  return (
    <section id="solution" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[27px] font-medium uppercase tracking-[0.4em] text-accent">
            The Solution
          </p>

          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground">
            <span className="text-accent">India's first</span>, AI-powered rapid
            <br />
            emergency response infrastructure.
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-foreground/80 font-medium max-w-2xl">
            Shift from <span className="text-destructive">"Fast Transport"</span> to <span className="text-accent">"Fast Stabilization"</span> by using AI and an amalgamation of advanced technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;

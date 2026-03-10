import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                type="button"
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
              </motion.button>
            </DialogTrigger>
            <DialogContent className="max-w-xl sm:max-w-2xl p-8">
              <DialogHeader>
                <DialogTitle className="text-xl sm:text-2xl">Connect With Us</DialogTitle>
              </DialogHeader>
              <div className="mt-4 space-y-4 text-left text-base sm:text-lg">
                <div>
                  <span className="font-medium text-muted-foreground">Email: </span>
                  <a
                    href="mailto:info@triahealth.in"
                    className="font-semibold text-accent hover:underline"
                  >
                    info@triahealth.in
                  </a>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Phone No: </span>
                  <a
                    href="tel:+916304121437"
                    className="font-semibold text-accent hover:underline"
                  >
                    +91-630-412-1437
                  </a>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Website: </span>
                  <a
                    href="https://triahealth.in"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    triahealth.in
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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

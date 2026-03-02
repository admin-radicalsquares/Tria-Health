import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Pre-Hospital Care makes huge impact over patient outcomes exponentially in India",
    name: "Dr. Kiran Kumar Verma",
    credentials: "MBBS, MD, MEM, DEM (UK), FICM",
    role: "Associate Clinical Director, HOD & Sr. Consultant, Emergency Medicine - Care Hospital, Hyderabad",
  },
  {
    quote:
      "Emergency care is the essential right of every citizen which includes prehospital stabilisation and adequate resuscitation in emergency rooms before transferring to definitive care. Fragmented care disrupts the ecosystem and the most sophisticated intensive care units become preterminal wards if prehospital care & emergency care fails.",
    name: "Dr. Shree Sowjanya Patibandla",
    credentials: "MD (EM), MBA",
    role: "Chief Emergency Physician, National President - Society for Emergency Medicine India (SEMI). HOD Emergency Medicine, Apollo Hospitals Hyderabad. Innovator in Patient Centered Care",
  },
];

const Testimonial = () => {
  return (
    <section id="from-doctors" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-10">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-accent">
            From Doctors
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
            Trusted by leading medical professionals
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <Quote className="mb-4 h-6 w-6 text-accent/40 shrink-0" strokeWidth={1.5} />

              {/* Scrollable quote area */}
              <div className="flex-1 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                <blockquote className="text-[15px] leading-[1.6] text-foreground/80 font-medium">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author info pinned to bottom */}
              <div className="mt-5 pt-4 border-t border-border/40 space-y-1">
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  {t.name}
                </p>
                <p className="text-xs text-accent font-medium">
                  {t.credentials}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--accent) / 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--accent) / 0.4);
        }
      `}</style>
    </section>
  );
};

export default Testimonial;

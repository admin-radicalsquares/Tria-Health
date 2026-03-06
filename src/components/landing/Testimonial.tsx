import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "In the past and present, the most ignored care is pre-hospital management. Right person, at the right place, and at the right time. The golden hour of resuscitation is actually the pre-hospital care, which indeed decreases the severity (mortality and morbidity). A nation with strong pre-hospital care will be a nation with less mortality and morbidity.",
    name: "Dr. Ratna Kumar Natta",
    credentials: "MBBS, MD Emergency Medicine, DrNB Critical Care Medicine",
    role: "HOD & Emergency Department Intensivist",
    hospital: "AIG Hospitals, Hyderabad",
  },

  {
    quote:
      "Pre-Hospital Care makes huge impact over patient outcomes exponentially in India",
    name: "Dr. Kiran Kumar Verma",
    credentials: "MBBS, MD, MEM, DEM (UK), FICM",
    role: "Associate Clinical Director, HOD & Sr. Consultant, Emergency Medicine",
    hospital: "Care Hospital, Hyderabad",
  },
  {
    quote:
      "Emergency care is the essential right of every citizen which includes prehospital stabilisation and adequate resuscitation in emergency rooms before transferring to definitive care. Fragmented care disrupts the ecosystem and the most sophisticated intensive care units become preterminal wards if prehospital care & emergency care fails.",
    name: "Dr. Shree Sowjanya Patibandla",
    credentials: "MD (EM), MBA",
    role: "Chief Emergency Physician, HOD Emergency Medicine",
    hospital:
      "Apollo Hospitals, Hyderabad\nNational President - Society for Emergency Medicine India (SEMI)",
  },
];

const Testimonial = () => {
  return (
    <section
      id="from-doctors"
      className="relative bg-background py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-10">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 text-[20px] font-medium uppercase tracking-[0.4em] text-accent">
            From Doctors
          </p>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
            What experts say...
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col rounded-2xl border-2 border-accent bg-card/80 backdrop-blur-sm p-6 shadow-[0_0_24px_hsl(var(--accent)/0.4)]"
            >
              {/* Author info at top - min-h aligns separator across all cards */}
              <div className="mb-2 flex min-h-[120px] flex-col justify-start border-b-2 border-accent/90 pb-3 space-y-1">
                <p className="text-sm font-semibold text-foreground tracking-tight">
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {t.credentials}
                </p>
                <p className="text-xs text-accent font-medium leading-relaxed whitespace-pre-line">
                  {t.role}
                </p>
                <p className="text-xs text-foreground leading-relaxed whitespace-pre-line">
                  {t.hospital}
                </p>
              </div>

              {/* Scrollable quote area */}
              <div className="flex-1 max-h-[160px] overflow-y-auto pr-1 custom-scrollbar">
                <div className="flex gap-3">
                  <Quote className="mt-1 h-5 w-5 text-accent/70 shrink-0" strokeWidth={1.5} />
                  <blockquote className="text-[15px] leading-[1.6] text-foreground/80 font-medium">
                    "{t.quote}"
                  </blockquote>
                </div>
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

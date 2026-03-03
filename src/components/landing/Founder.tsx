import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";
import partnersLogos from "@/assets/partners-logos.png";

const Founder = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-10">
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Photo */}
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border border-border">
            <img
              src={founderImg}
              alt="Rajesh Dayala"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Founder &amp; CEO
            </p>
            <h3 className="mb-1 text-2xl font-semibold tracking-[-0.02em] text-foreground">
              Rajesh Dayala
            </h3>

            <p className="mb-4 text-[14px] leading-relaxed text-accent font-medium">
              UC Berkeley-Haas School of Business (USA, Ranked Top #4), MBA
              <br />
              University of Maryland (USA), MS in Applied Computer Science
            </p>

            <p className="mb-6 text-[15px] leading-[1.7] text-muted-foreground">
              Technology executive with over 18 years of experience in Finance,
              Legal Consumer goods, Medical device, Health Insurance and
              Consulting. Rajesh brings a rare blend of deep multi-domain
              knowledge, engineering expertise, and business acumen. He led
              complex tech initiatives, building and turning vision into
              results.
            </p>

            {/* Companies */}
            <div className="mt-10 flex justify-center">
              <img
                src={partnersLogos}
                alt="Logos of Medtronic, Boston Scientific, Medica, Virgin Pulse, and RedBrick Health"
                className="w-full max-w-6xl md:h-32 lg:h-40 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;

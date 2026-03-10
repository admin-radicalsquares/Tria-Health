import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Impact", href: "#impact" },
  { label: "From Doctors", href: "#from-doctors" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-5">
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-accent">TRIA</span>
          <span className="text-2xl font-light tracking-tight text-foreground">Health</span>
          <span className="hidden sm:inline text-[12px] md:text-[13px] font-medium tracking-[0.18em] text-foreground/70">
            (Tria – Sanskrit: to rescue, to save)
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="rounded-full bg-accent px-6 py-2.5 text-[13px] font-medium text-accent-foreground transition-all duration-300 hover:bg-accent/85"
              onClick={() =>
                trackEvent("cta_click", {
                  cta_label: "Connect With Us",
                  section: "navbar",
                })
              }
            >
              Connect With Us
            </button>
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
      </div>
    </motion.nav>
  );
};

export default Navbar;

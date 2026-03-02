import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-accent">TRIA</span>
          <span className="text-xl font-light tracking-tight text-foreground/60">Health</span>
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

        <a
          href="#contact"
          className="rounded-full bg-accent px-6 py-2.5 text-[13px] font-medium text-accent-foreground transition-all duration-300 hover:bg-accent/85"
        >
          Request Pilot Proposal
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

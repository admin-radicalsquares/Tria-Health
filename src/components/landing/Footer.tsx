const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-10 text-center">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between w-full">
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-accent">TRIA</span>
            <span className="text-lg font-light tracking-tight text-foreground/60">Health</span>
          </a>

          <div className="flex gap-8 text-[12px] text-muted-foreground">
            <span>rajesh@triahealth.in</span>
            <span>+91-630-412-1437</span>
          </div>
        </div>

        <div className="w-full border-t border-border/40 pt-5 flex flex-col items-center gap-2">
          <p className="text-[11px] font-medium tracking-wide text-accent">
            TRIA Health™ | Confidential &amp; Proprietary | Patent Pending | Trademark Pending
          </p>
          <p className="text-[11px] text-muted-foreground/50">
            © {new Date().getFullYear()} TRIA Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Hint scrolling for first-time visitors: after load, scroll a bit
    // so it's clear there's more content below the fold.
    const scheduledKey = "tria_auto_scroll_scheduled_v2";
    const doneKey = "tria_auto_scroll_done_v2";

    try {
      if (typeof window === "undefined") return;
      if (window.sessionStorage.getItem(doneKey)) return;
      if (window.sessionStorage.getItem(scheduledKey)) return;

      window.sessionStorage.setItem(scheduledKey, "1");

      let userInteracted = false;
      const markInteracted = () => {
        userInteracted = true;
      };

      // If the user interacts while we're waiting, don't override their scroll.
      window.addEventListener("wheel", markInteracted, { passive: true });
      window.addEventListener("touchstart", markInteracted, { passive: true });
      window.addEventListener("pointerdown", markInteracted, { passive: true });
      window.addEventListener("keydown", markInteracted);

      const timeoutId = window.setTimeout(() => {
        window.sessionStorage.setItem(doneKey, "1");
        if (userInteracted) return;

        // Scroll hint should be noticeable but not "jarring".
        const amount = Math.round(Math.min(500, window.innerHeight * 0.6));
        const maxTop = Math.max(
          0,
          document.documentElement.scrollHeight - window.innerHeight
        );
        const targetTop = Math.min(amount, maxTop);

        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }, 10000);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("wheel", markInteracted);
        window.removeEventListener("touchstart", markInteracted);
        window.removeEventListener("pointerdown", markInteracted);
        window.removeEventListener("keydown", markInteracted);
      };
    } catch {
      // If sessionStorage isn't available, fail silently.
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

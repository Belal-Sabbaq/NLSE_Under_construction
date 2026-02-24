import { CTAButton } from "@/components/ui/CTAButton";
import { HeroSection } from "@/components/ui/HeroSection";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { LogoStrip } from "@/components/ui/LogoStrip";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { InteractiveGrid } from "@/components/ui/InteractiveGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col selection:bg-accent/30 selection:text-white">
      {/* Deep Background Layer (Level 0) */}
      <AnimatedBackground />

      {/* Interactive Grid Layer (Level 1) */}
      <InteractiveGrid />

      {/* Foreground Header (Level 2) */}
      <div className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-20">
        <div className="flex-1" />
        <LanguageToggle />
      </div>

      {/* Main Content (Level 3) */}
      <div className="flex flex-col items-center justify-center flex-grow w-full relative z-30 pb-24">
        <LogoStrip />
        <HeroSection />
        <CTAButton />
      </div>

      {/* Footer minimal */}
      <footer className="w-full py-8 flex justify-center items-center text-xs text-neutral/40 relative z-20 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Sabbaq. All rights reserved.</p>
      </footer>
    </main>
  );
}

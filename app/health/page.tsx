"use client";

import UniversalModuleCTA from "../components/UniversalModuleCTA";
import HealthHero from "../modules/health/ui/HealthHero";
import HealthVitalityBento from "../modules/health/ui/HealthVitalityBento";

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      <main>
        <HealthHero />
        <HealthVitalityBento />
      </main>
      <UniversalModuleCTA />
    </div>
  );
}

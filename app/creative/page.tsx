'use client'
import UniversalModuleCTA from "../components/UniversalModuleCTA";
import CreativeHero from "../modules/creative/ui/CreativeHero";
import CreativePhilosophy from "../modules/creative/ui/CreativePhilosophy";
import CreativeStats from "../modules/creative/ui/CreativeStats";

export default function CreativePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="">

        <CreativeHero />
        </div>
        <div className="mt-10">

        <CreativePhilosophy />
        </div>

        <div className="mt-10">

        <CreativeStats />
        </div>
        <div className="mt-10">
         <UniversalModuleCTA/>
        </div>
      </main>
    </div>
  );
}

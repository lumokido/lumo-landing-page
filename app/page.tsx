'use client';
import HeroSection from "./components/HeroSection";
import HeroSectionLeft from "./components/HeroSectionLeft";
import Dna from "./components/Dna";
// import GradualBlur from "../components/GradualBlur";
import { Bento } from "./components/Bento";
import { Dashboard } from "./components/Dashboard";
import Comparsion from "./components/Comparsion";
import WhoWeAre from "./components/WhoWeAre";
import OrbitSection from "./components/OrbitSection";
import Teacher from "./components/Teacher";
import UniversalModuleCTA from "./components/UniversalModuleCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-white via-[#f8f7ff] to-[#eef0ff] text-[#17171e]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_70%_at_50%_-10%,rgba(109,40,217,0.07),transparent_50%),radial-gradient(ellipse_80%_60%_at_100%_30%,rgba(139,92,246,0.05),transparent_45%)]" />
      {/* <GradualBlur position="bottom" target="page" height="7rem" strength={2.2} divCount={7} /> */}

      <main className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-28 sm:pb-28">
        
        
      <div className="">
          <OrbitSection />
        </div>
        
        <section className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex w-full justify-center">
              <HeroSectionLeft />
            </div>
            <div className="flex w-full justify-center">
              <HeroSection />
            </div>
          </div>
        </section>

      
        <div className="pt-5">
          <Bento />
        </div>
        <div className="pt-5">
          <Dashboard />
        </div>
        <div className="pt-5">
          <Teacher />
        </div>
        <div className="pt-5">
          <Comparsion />
        </div>
      
        <div className="pt-10">
          <Dna />
        </div>
        <div className="pt-10">  
          <WhoWeAre />
        </div>
     
     <div className="">
      <UniversalModuleCTA/>
     </div>
       
        {/* <div className="">
          <OrbitSection />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}

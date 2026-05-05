"use client";

import Lottie from "lottie-react";

import animationData from "../../../../public/lotttie/student.json";

const CreativeHero = () => {
  return (
    <section className="grid items-center justify-items-center gap-8 lg:grid-cols-2">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-[#e9c432] bg-[#fff7cf] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-[#6b5600]">
          Creative Modules
        </span>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          Turn Ideas Into <span className="text-[#6110c7]">Real-World Skills</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-[#4c4c59] sm:text-base">
          Gamified challenges in robotics, storytelling, and finance for the next generation of curious,
          collaborative, and confident learners.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        
          <button className="rounded-xl border-2 border-[#17171e] bg-white px-5 py-2.5 text-sm font-black text-[#17171e] shadow-[4px_4px_0px_#17171e] transition hover:translate-y-px hover:shadow-none" onClick={() => window.open('https://calendly.com/vaishnavirudraraju-lumokido/30min', '_blank')}>
            Watch Demo
          </button>
        </div>

        
      </div>

      <div className="h-[400px] w-[400px] rounded-2xl border-2 border-[#17171e] bg-white p-3 shadow-[6px_6px_0px_#6d28d9]">
        <div className="overflow-hidden rounded-2xl border border-[#d2d2df]">
          <Lottie animationData={animationData} loop={true} className="h-[300px] w-[400px] object-cover" />
        </div>
        <div className="mt-3 rounded-xl border-2 border-[#17171e] bg-[#f8f5ff] px-3 py-2">
          <p className="text-xs font-black text-[#6110c7]">New: Robotics Lab</p>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-[#dfd7f3]">
            <div className="h-full w-2/3 rounded-full bg-[#e2bc2f]" />
          </div>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#6d6d7e]">
            35% challenge complete
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;

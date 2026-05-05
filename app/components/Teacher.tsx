"use client";

import Lottie from "lottie-react";
import animationData from "../../public/lotttie/teacher.json";

const Teacher = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="rounded-[2rem] border-2 border-[#17171e] bg-white p-3 shadow-[8px_8px_0px_#6d28d9] sm:p-4">
          <div className="overflow-hidden rounded-[1.5rem] bg-[#f8f8fb]">
            <Lottie
              animationData={animationData}
              loop
              className="h-full w-full scale-125 -translate-y-2"
            />
          </div>
        </div>

        <div className="text-[#17171e]">
          <span className="mb-5 inline-block rounded-full border border-[#17171e]/10 bg-[#d9f99d] px-4 py-1 text-xs font-black uppercase tracking-widest text-black">
            Smart Access 
          </span>
          <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">
          THE TEACHER
          &apos;s <span className="text-[#6d28d9]">INSIGHT HUB</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#5f5f6d] sm:text-lg">
          Understand every student better with real-time progress tracking, activity insights, and smart analytics.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl border-2 border-[#17171e] bg-[#6110c7] px-7 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[4px_4px_0px_#17171e] transition hover:translate-x-px hover:translate-y-px hover:shadow-none">
              Get Started
            </button>
            <button className="rounded-2xl border-2 border-[#17171e] bg-white px-7 py-3 text-sm font-black uppercase tracking-wide text-[#17171e] transition hover:bg-[#17171e] hover:text-white">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
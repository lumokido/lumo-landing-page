"use client";

import Lottie from "lottie-react";

import animationData from "../../../../public/lotttie/yoga.json";

export default function HealthHero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center justify-items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#17171e] bg-[#fff9e0] px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-[#6b5600]">
          <span aria-hidden className="text-yellow-500">
            ★
          </span>
          Health Module 2.0
        </span>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#6110c7] sm:text-5xl lg:text-[3.25rem]">
          The Adventure of Growing Strong
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-[#4c4c59] sm:text-base">
          Lumo gamifies well-being for Grades 5–7: nutrition, movement, and mental clarity—so students build habits
          that stick and teachers see progress at a glance.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-2xl bg-[#6110c7] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#5210a8]"
            onClick={() => window.open('https://calendly.com/vaishnavirudraraju-lumokido/30min', '_blank')}
          >
            Start Your Quest
          </button>
          <button
            type="button"
            className="rounded-2xl border-2 border-[#e3b700] bg-white px-6 py-3.5 text-sm font-bold text-[#17171e] transition hover:bg-[#fffef5]"
            onClick={() => window.open('https://calendly.com/vaishnavirudraraju-lumokido/30min', '_blank')}
          >
            Watch Demo
          </button>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-lg lg:max-w-md">
        <div className="overflow-hidden rounded-[1.25rem] border-2 border-dashed border-[#c4b5e8] bg-[#faf8ff] p-2 shadow-[0_20px_50px_-12px_rgba(97,16,199,0.2)]">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-[#ede9fe]">
            <Lottie animationData={animationData} loop className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

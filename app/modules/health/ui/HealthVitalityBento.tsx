"use client";

import Image from "next/image";
import { Ham } from "lucide-react";

import { HEALTH_GOLD } from "./healthTheme";
import Lottie from "lottie-react";
import animationData from '../../../../public/lotttie/harvest.json';
import animationData2 from '../../../../public/lotttie/yogamindest.json';

const VITALITY_STATS = [
  { label: "Hydration", pct: 85, color: "#0f766e" },
  { label: "Protein", pct: 60, color: "#6110c7" },
  { label: "Vitamins", pct: 92, color: "#6b7c3a" },
  { label: "Fruit goals", pct: 45, color: "#e11d48" },
] as const;

export default function HealthVitalityBento() {
  return (
    <section id="features" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-[#6110c7] sm:text-4xl">Master Your Vitality</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base font-medium text-[#5c5c6a]">
          The tools students need to thrive in a digital world.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
        {/* Nutrient — large top-left */}
        <article className="flex min-h-[280px] flex-col overflow-hidden rounded-[1.25rem] border-2 border-[#321064] bg-[#faf9fc] p-5 shadow-[0_12px_40px_-12px_rgba(50,16,100,0.18)] sm:p-6 lg:col-span-7 lg:row-start-1">
          <div className="flex items-start gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg sm:h-16 sm:w-16"
              style={{ backgroundColor: HEALTH_GOLD }}
              aria-hidden
            >
              <Ham className="h-8 w-8 text-[#17171e] sm:h-10 sm:w-10" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-[#17171e] sm:text-xl">Nutrient Quests</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#5c5c6a]">
                Turn healthy eating into a leveling system. Students scan meals to identify Power-Ups (vitamins,
                proteins) and avoid Drainers (excess sugars).
              </p>
            </div>
          </div>
          <div className="mt-auto grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-xl border border-[#99f6e4]/80 bg-[#ccfbf1] px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#0f766e]">Eat more</p>
              <p className="mt-1 text-sm font-semibold text-[#134e4a]">Super greens, lean protein</p>
            </div>
            <div className="rounded-xl border border-[#fecdd3] bg-[#ffe4e6] px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#be123c]">Eat less</p>
              <p className="mt-1 text-sm font-semibold text-[#881337]">High-sodium snacks</p>
            </div>
          </div>
        </article>

        {/* Daily Harvest — tall top-right */}
        <article className="flex min-h-[320px] flex-col overflow-hidden rounded-[1.25rem] border-2 border-[#321064] bg-white shadow-[0_12px_40px_-12px_rgba(15,118,110,0.2)] lg:col-span-5 lg:row-span-2 lg:row-start-1">
          <div className="relative min-h-[200px] flex-1">
            <Lottie animationData={animationData} loop={true} className="w-full h-full object-cover" />
           
          </div>
          <div className="shrink-0 bg-[#0f766e] px-5 py-7 text-white sm:px-6 sm:py-8">
            <h3 className="text-xl font-bold">Daily Harvest</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">
              Earn 500 XP for every colorful vegetable streak.
            </p>
          </div>
        </article>

        {/* Yoga & Mindset — bottom-left */}
        <article className="flex min-h-[260px] flex-col overflow-hidden rounded-[1.25rem] border-2 border-[#321064] bg-[#faf9fc] shadow-[0_12px_40px_-12px_rgba(50,16,100,0.15)] lg:col-span-3 lg:row-start-2">
          <div className="p-5 pb-0 sm:p-6 sm:pb-0">
            <h3 className="text-lg font-bold text-[#6110c7] sm:text-xl">Yoga & Mindset</h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#5c5c6a]">
              Real-time camera tracking analyzes movement for perfect form. Level up through meditative flows.
            </p>
          </div>
          <div className="relative mt-3 min-h-[160px] flex-1 sm:min-h-[180px]">
            <Lottie animationData={animationData2} loop={true} className="w-full h-[150px] object-contain" />
          </div>
        </article>

        {/* Vitality Dashboard — bottom-right */}
        <article className="flex min-h-[260px] flex-col rounded-[1.25rem] border-2 border-[#321064] bg-[#f0f0f5] p-5 shadow-[0_12px_40px_-12px_rgba(50,16,100,0.12)] sm:p-6 lg:col-span-4 lg:row-start-2">
          <h3 className="text-lg font-bold text-[#6110c7] sm:text-xl">The Vitality Dashboard</h3>
          <div className="mt-4 grid flex-1 grid-cols-2 gap-3 sm:gap-4">
            {VITALITY_STATS.map((row) => (
              <div
                key={row.label}
                className="flex flex-col rounded-xl border border-[#e4e4ec] bg-white p-3 shadow-sm"
              >
                <div className="flex items-baseline justify-between gap-1">
                  <span className="text-[11px] font-bold text-[#17171e]">{row.label}</span>
                  <span className="text-xs font-black text-[#6110c7]">{row.pct}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#ececf2]">
                  <div className="h-full rounded-full" style={{ width: `${row.pct}%`, backgroundColor: row.color }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

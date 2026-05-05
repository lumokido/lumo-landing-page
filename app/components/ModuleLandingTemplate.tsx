"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

import UniversalModuleCTA from "./UniversalModuleCTA";

const badgeStyles = {
  purple: "border-[#c4b5fd] bg-[#f5f3ff] text-[#5b21b6]",
  gold: "border-[#e3b700]/60 bg-[#fff9e0] text-[#6b5600]",
  emerald: "border-[#6ee7b7] bg-[#ecfdf5] text-[#065f46]",
  indigo: "border-[#a5b4fc] bg-[#eef2ff] text-[#312e81]",
} as const;

export type ModuleLandingBadgeVariant = keyof typeof badgeStyles;

export type ModuleHighlight = {
  title: string;
  description: string;
};

export type ModuleLandingHero =
  | { mode: "image"; src: string; alt: string }
  | { mode: "lottie"; animationData: object; ariaLabel: string };

export type ModuleLandingTemplateProps = {
  badge: string;
  badgeVariant?: ModuleLandingBadgeVariant;
  title: ReactNode;
  description: string;
  hero: ModuleLandingHero;
  highlights: readonly ModuleHighlight[];
  primaryCta?: string;
  secondaryCta?: string;
};

export default function ModuleLandingTemplate({
  badge,
  badgeVariant = "purple",
  title,
  description,
  hero,
  highlights,
  primaryCta = "Get started",
  secondaryCta = "Watch demo",
}: ModuleLandingTemplateProps) {
  const badgeClass = badgeStyles[badgeVariant];

  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <section className="grid items-center justify-items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="text-center">
            <span
              className={`inline-flex rounded-full border-2 border-[#17171e] px-3 py-1.5 text-[11px] font-black uppercase tracking-wide ${badgeClass}`}
            >
              {badge}
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#17171e] sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-[#4c4c59] sm:text-base">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="rounded-xl border-2 border-[#17171e] bg-[#6110c7] px-5 py-2.5 text-sm font-black text-white shadow-[4px_4px_0px_#17171e] transition hover:translate-y-px hover:shadow-none"
                onClick={() => window.open('https://calendly.com/vaishnavirudraraju-lumokido/30min', '_blank')}
              >
                {primaryCta}
              </button>
              <button
                type="button"
                className="rounded-xl border-2 border-[#17171e] bg-white px-5 py-2.5 text-sm font-black text-[#17171e] shadow-[4px_4px_0px_#17171e] transition hover:translate-y-px hover:shadow-none"
                onClick={() => window.open('https://calendly.com/vaishnavirudraraju-lumokido/30min', '_blank')}
              >
                {secondaryCta}
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-[2rem] border-2 border-[#17171e] bg-white p-2 shadow-[8px_8px_0px_#6d28d9]">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[1.35rem] border-2 border-dashed border-[#d6d6e0] bg-[#f8f8fb]">
                {hero.mode === "lottie" ? (
                  <div role="img" aria-label={hero.ariaLabel} className="absolute inset-0 flex items-center justify-center p-4">
                    <Lottie animationData={hero.animationData} loop className="h-full max-h-[min(100%,420px)] w-full object-contain" />
                  </div>
                ) : (
                  <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <div className="rounded-[2rem] border-2 border-[#17171e] bg-white p-6 shadow-[8px_8px_0px_#17171e] sm:p-10">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-[#17171e] md:text-4xl">
              Inside the <span className="text-[#6d28d9]">module</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-medium text-[#606072] sm:text-base">
              Short sessions, clear outcomes, and signals teachers can use the same week—not after the unit ends.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {highlights.map((h) => (
                <article
                  key={h.title}
                  className="flex min-h-[200px] flex-col rounded-[1.5rem] border-2 border-[#17171e] bg-[#fafaff] p-5 shadow-[4px_4px_0px_#17171e] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#17171e]"
                >
                  <h3 className="text-lg font-black uppercase italic tracking-tight text-[#17171e]">{h.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#5f5f6d]">{h.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className="mt-10">
        <UniversalModuleCTA />
      </div>
    </div>
  );
}

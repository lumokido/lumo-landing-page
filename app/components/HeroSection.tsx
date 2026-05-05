'use client';

import Link from 'next/link';
import ShinyText from "../../components/ShinyText";

export default function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
        The Growth Platform for
        <br />
        <ShinyText
          text="Modern Schools"
          speed={5}
          delay={2}
          color="#6110c7"
          shineColor="#ffffff"
          spread={120}
          direction="left"
        />
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#45454f] sm:text-xl">
        Lumo helps schools track student progress, engage parents, and build
        real-world skills through a gamified learning experience.
      </p>

      <div className="mt-10">
        <Link
          href={process.env.NEXT_PUBLIC_CTO_CALENDLY_URL || 'https://calendly.com/vaishnavirudraraju-lumokido/30min'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-3xl border-2 border-[#17171e] bg-[#17171e] px-12 py-4 text-xl font-black uppercase italic tracking-tight text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#17171e]"
        >
          Book a Demo
        </Link>
      </div>
    </section>
  );
}
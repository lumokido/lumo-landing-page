"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

import thinkingAnimation from "../../public/lotttie/thinking.json";

const orbitImages = [
  "/bag.svg",
  "/maths.svg",
  "/sciense.svg",
  "/maths2.svg",
  "/mission.svg",
] as const;

type OrbitItemProps = {
  src: string;
  index: number;
  total: number;
  time: number;
};

function roundTo(value: number, precision: number) {
  return Number(value.toFixed(precision));
}

function OrbitItem({ src, index, total, time }: OrbitItemProps) {
  const baseAngle = (index / total) * Math.PI * 2;
  const angle = baseAngle + time;

  const radiusX = 160;
  const radiusY = 80;

  const x = Math.cos(angle) * radiusX;
  const y = Math.sin(angle) * radiusY;

  const depth = Math.sin(angle);

  const scale = roundTo(0.7 + ((depth + 1) / 2) * 0.6, 4);
  const opacity = roundTo(0.4 + ((depth + 1) / 2) * 0.6, 6);
  const zIndex = Math.floor((depth + 1) * 100);
  const translateX = roundTo(x, 3);
  const translateY = roundTo(y, 3);

  return (
    <div
      className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-xl border-2 border-[#17171e] bg-white shadow-[3px_3px_0px_#17171e]"
      style={{
        transform: `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scale})`,
        opacity,
        zIndex,
        padding: "6px",
        filter: depth < 0 ? "blur(1px)" : "none",
      }}
    >
      <Image src={src} alt="" width={24} height={24} />
    </div>
  );
}

type OrbitLayerProps = {
  images: readonly string[];
  time: number;
};

function OrbitLayer({ images, time }: OrbitLayerProps) {
  return (
    <div className="relative mx-auto h-[220px] w-[220px] sm:h-[260px] sm:w-[260px]">
      {images.map((src, index) => (
        <OrbitItem key={`${src}-${index}`} src={src} index={index} total={images.length} time={time} />
      ))}
    </div>
  );
}

export default function OrbitSection() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      setTime((t) => t + 0.006);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="rounded-[2rem] border-2 border-[#17171e] bg-white p-3 shadow-[8px_8px_0px_#6d28d9] sm:p-4">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#f8f8fb] sm:min-h-[360px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/25 blur-2xl sm:h-96 sm:w-96" />

            <div className="absolute left-1/2 top-[40%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="rotate-[-15deg] scale-[0.85] sm:scale-100">
                <OrbitLayer images={orbitImages} time={time} />
              </div>
            </div>

            <div className="relative z-20 flex items-center justify-center animate-[pulse-soft_3s_ease-in-out_infinite]">
              <Lottie
                animationData={thinkingAnimation}
                loop
                className="h-56 w-56 max-w-full sm:h-72 sm:w-72 md:h-80 md:w-80"
              />
            </div>
          </div>
        </div>

        <div className="text-[#17171e]">
          <span className="mb-5 inline-block rounded-full border border-[#17171e]/10 bg-[#fef3c7] px-4 py-1 text-xs font-black uppercase tracking-widest text-[#713f12]">
            One workspace
          </span>
          <h2 className="text-4xl font-black uppercase italic leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl">
            Confused with <span className="text-[#6d28d9]">too many tools?</span>
            <br />
            Lumo brings everything into <span className="text-[#6d28d9]">one simple flow.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-[#5f5f6d] sm:text-lg">
            Stop juggling spreadsheets, chat threads, and five different apps. Lumo connects lessons, progress, and
            insights so you spend less time switching—and more time teaching.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-2xl border-2 border-[#17171e] bg-[#6110c7] px-7 py-3 text-sm font-black uppercase tracking-wide text-white shadow-[4px_4px_0px_#17171e] transition hover:translate-x-px hover:translate-y-px hover:shadow-none"
            >
              Get Started
            </button>
            <button
              type="button"
              className="rounded-2xl border-2 border-[#17171e] bg-white px-7 py-3 text-sm font-black uppercase tracking-wide text-[#17171e] transition hover:bg-[#17171e] hover:text-white"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

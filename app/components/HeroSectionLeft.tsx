'use client';

import Lottie from "lottie-react";
import animationData from "../../public/lotttie/analystic.json";

export default function HeroAnimation() {
  return (
    <div className="mx-auto flex w-full max-w-[420px] items-center justify-center">
      <Lottie animationData={animationData} loop={true} className="w-full" />
    </div>
  );
}
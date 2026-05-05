"use client";

import Image from "next/image";

export default function FloatingBottom() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-2 z-50 flex justify-end px-4 sm:px-6 md:px-10">
      <div className="pointer-events-none relative w-fit max-w-full overflow-hidden rounded-2xl border border-[#1e1e24]/10 bg-[#ede8ff]/90 shadow-[0_10px_40px_-12px_rgba(23,23,30,0.18)] backdrop-blur-xl sm:rounded-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[rgba(246,244,255,0.35)]"
        />
        <div className="relative z-10 flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2">
          <Image
            src="/bottom.png"
            alt=""
            width={200}
            height={80}
            className="h-auto max-h-12 w-auto object-contain sm:max-h-14"
            sizes="200px"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#17171e]/10 bg-white/80">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="flex w-full flex-col items-start gap-4 text-sm text-[#5f5f6d] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/main.png" alt="Lumokido" width={100} height={100} />
            <p className="font-semibold text-[#17171e]">Lumo</p>
          </div>

          <div className="flex flex-col gap-1 text-left sm:items-end sm:text-right">
            <a
              href="mailto:vaishanavi@lumokido.in"
              className="transition hover:text-[#6d28d9]"
            >
              vaishanavi@lumokido.in
            </a>
            <a href="mailto:anas@lumokido.in" className="transition hover:text-[#6d28d9]">
              anas@lumokido.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

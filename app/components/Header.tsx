"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const scrollRange: [number, number] = [0, 140];

export default function Header() {
  const { scrollY } = useScroll();

  const mainOpacity = useTransform(scrollY, scrollRange, [1, 0]);
  const main2Opacity = useTransform(scrollY, scrollRange, [0, 1]);
  const mainScale = useTransform(scrollY, scrollRange, [1, 0.94]);
  const main2Scale = useTransform(scrollY, scrollRange, [0.9, 1]);
  const veilOpacity = useTransform(scrollY, scrollRange, [0.06, 0.55]);
  const borderOpacity = useTransform(scrollY, scrollRange, [0, 0.12]);
  const logoY = useTransform(scrollY, scrollRange, [0, -2]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-2 z-50 flex justify-start items-start px-4 sm:px-6 md:px-10">
      <motion.div
        className="pointer-events-auto relative w-fit max-w-full overflow-hidden rounded-2xl border border-[#1e1e24]/10 bg-[#ede8ff]/90 shadow-[0_10px_40px_-12px_rgba(23,23,30,0.18)] backdrop-blur-xl sm:rounded-3xl"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: "rgba(246, 244, 255, 0.35)" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-white"
          style={{ opacity: veilOpacity }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#17171e]"
          style={{ opacity: borderOpacity }}
        />

        <nav className="relative z-10 flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2">
          <motion.div style={{ y: logoY }}>
            <Link
              href="/"
              className="relative flex h-20 w-40 items-center justify-center sm:h-24 sm:w-44"
            >
              <motion.span
                className="absolute inset-0 flex items-center justify-center will-change-transform"
                style={{ opacity: mainOpacity, scale: mainScale }}
              >
                <Image
                  src="/main.png"
                  alt="Lumo"
                  width={160}
                  height={120}
                  className="h-auto max-h-17 w-auto object-contain sm:max-h-22"
                  priority
                />
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center will-change-transform"
                style={{ opacity: main2Opacity, scale: main2Scale }}
              >
                <Image
                  src="/main2.png"
                  alt=""
                  width={160}
                  height={120}
                  className="h-auto max-h-17 w-auto object-contain sm:max-h-22"
                  aria-hidden
                />
              </motion.span>
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  );
}

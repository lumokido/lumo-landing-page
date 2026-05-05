"use client";

import Lottie from 'lottie-react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

import animationData from '../../../../public/lotttie/scan.json'
import animationData2 from '../../../../public/lotttie/Searching.json'

const featurePoints = [
  "Scan any textbook, PDF, or handwritten notes.",
  "Automatic question leveling based on Bloom's Taxonomy.",
  "Instant distractors and explanation generation.",
];

const quickStats = [
  { label: "Quiz generation time", value: "< 60 sec" },
  { label: "Question quality checks", value: "3 layers" },
  { label: "Input methods", value: "AI + Scan + Manual" },
];

const AItext = () => {
  return (

    <>
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-18">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-[1.75rem] border-2 border-[#17171e] bg-white p-4 shadow-[6px_6px_0px_#6d28d9] sm:rounded-[2rem] sm:p-5">
            <div className="mb-5 flex items-center gap-3 rounded-2xl border border-dashed border-[#d8d7e0] bg-[#f7f7fb] px-4 py-3">
            <Lottie animationData={animationData} loop={true} className="w-10 h-10 text-[#17171e]" />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#dee1ea]">
                <motion.div
                  className="h-full rounded-full bg-[#6d28d9]"
                  initial={{ width: "12%" }}
                  animate={{ width: ["12%", "100%", "2%", "92%"] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-xs font-black uppercase tracking-wide text-[#6d28d9]">Scanning...</span>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-[#17171e] bg-[#f3f2f8] sm:rounded-[1.3rem]">
            <Lottie animationData={animationData2} loop={true} className="w-full h-96" />
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[#c9b7ff] bg-[#f3edff] px-4 py-1 text-xs font-black uppercase tracking-[0.15em] text-[#5a20bf]">
              Powered by AI
            </span>
            <h2 className="text-3xl font-black leading-tight tracking-tighter text-[#17171e] sm:text-4xl md:text-5xl">
            AI Quiz Assistant : <br className="hidden sm:block" />
            Create Quizzes Without the Busywork
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#4f4f5f] sm:text-lg">
            Teachers no longer need to spend hours preparing quizzes. Lumo handles creation through AI, manual input, or textbook scanning — so educators can focus on monitoring progress and guiding students.
            </p>

            <motion.ul
              className="mt-7 space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
              }}
            >
              {featurePoints.map((item) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
                  }}
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6d28d9] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base font-semibold text-[#2f2f3a]">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border-2 border-[#17171e] bg-white px-4 py-3 shadow-[3px_3px_0px_#17171e]"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-[#6c6c78]">{stat.label}</p>
                  <p className="mt-1 text-sm font-black text-[#17171e] sm:text-base">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>

    )
}

export default AItext
"use client";

import { Gamepad2, Heart, Lightbulb, Sparkles, TrendingUp, Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

/** Creative module (id 2) — three preview images; swap paths as needed */
const CREATIVE_BENTO_IMAGES = ["/createbro.svg", "/create1.jpg", "/create3.jpg"] as const;

const MODULES = [
    {
      id: 1,
      title: "Quiz Wars",
      tag: "Competitive",
      desc: "Global weekly challenges that motivate students through peer ranking and instant mastery badges.",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-orange-500",
      size: "col-span-2 md:col-span-2 row-span-1",
      link: "/quiz",
    },
    {
      id: 2,
      title: "Creative & Skill Dev",
      tag: "Growth",
      desc: "Hands-on creative tasks and practical skill missions that build confidence, communication, and maker mindset.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-yellow-400",
      size: "col-span-2 md:col-span-2 row-span-1",
      link: "/creative",
    },
    {
      id: 3,
      title: "Health Updates",
      tag: "Wellness",
      desc: "Daily health check-ins with hydration, movement, yoga, and mindfulness streak tracking for students.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-pink-500",
      size: "col-span-2 md:col-span-2 row-span-1",
      link: "/health",
    },
    {
      id: 4,
      title: "Traditional vs Gen Z",
      tag: "Culture",
      desc: "Compare classic learning styles with modern Gen Z methods through stories, activities, and discussion prompts.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-purple-500",
      size: "col-span-2 md:col-span-2 row-span-1",
      link: "/culture",
    },
    {
      id: 5,
      title: "Learn Something New",
      tag: "Future Skills",
      desc: "Explore real-life topics like stocks, investing, photography, and speaking new languages like Spanish.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-emerald-500",
      size: "col-span-2 md:col-span-2 row-span-1",
      link: "/future-skills",
    },
    {
      id: 6,
      title: "Mini Games",
      tag: "Fun Logic",
      desc: "Quick brain games and arcade-style activities that improve focus, memory, and reflexes in short sessions.",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "bg-indigo-600",
      size: "col-span-2 md:col-span-2 row-span-1",
      link: "/mini-games",
    },
  ];

  
export const Bento = () => {
  const router = useRouter();
  return (
    <section id="modules" className="px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="mb-4 text-4xl font-black uppercase italic tracking-tighter text-[#17171e] md:text-6xl">
          Green-Point <span className="text-[#6d28d9]">Engagement</span>
        </h2>
        <p className="font-medium text-[#606072]">
          LUMO connects traditional skill-building with future-ready cognitive engagement.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {MODULES.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`${m.size} group flex min-h-[260px] flex-col rounded-[2rem] border-2 cursor-pointer border-[#17171e] bg-white p-6 shadow-[5px_5px_0px_#17171e] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#17171e]`}
            onClick={() => {
              if (m.link) router.push(m.link);
            }}
        >
            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${m.color} text-white transition-transform group-hover:rotate-12`}>
              {m.icon}
            </div>
            <div className="mb-2 flex items-center justify-between gap-2">
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#17171e]">{m.title}</h3>
              <div className="rounded bg-[#f4f4f7] px-2 py-1 text-[9px] font-black uppercase tracking-widest text-[#8a8a99]">{m.tag}</div>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-[#5f5f6d]">{m.desc}</p>
            
            {m.id === 2 && (
              <div className="mt-auto grid grid-cols-3 gap-2">
                {CREATIVE_BENTO_IMAGES.map((src, index) => (
                  <div
                    key={src}
                    className="relative h-20 overflow-hidden rounded-xl border-2 border-dashed border-[#d6d6e0] bg-[#f8f8fb]"
                  >
                    <Image
                      src={src}
                      alt={`${m.title} preview ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 120px"
                    />
                  </div>
                ))}
              </div>
            )}

            {m.id === 1 && (
              <div className="space-y-3 mt-auto">
                <div className="h-2 w-full bg-slate-100 rounded-full"><div className="h-full w-3/4 bg-orange-400 rounded-full"/></div>
                <div className="h-2 w-full bg-slate-100 rounded-full"><div className="h-full w-1/2 bg-slate-300 rounded-full"/></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
}

export default Bento

"use client";

import futureSkillsAnimation from "../../public/lotttie/student.json";

import ModuleLandingTemplate from "../components/ModuleLandingTemplate";

const highlights = [
  {
    title: "Real-world tracks",
    description: "Stocks, budgeting basics, photography composition, and language micro-lessons students can try today.",
  },
  {
    title: "Leveled quests",
    description: "Each topic breaks into short wins so confidence builds before complexity ramps up.",
  },
  {
    title: "Portfolio proof",
    description: "Students save artifacts—screens, captions, mini-presentations—to show growth over the term.",
  },
] as const;

export default function FutureSkillsPage() {
  return (
    <ModuleLandingTemplate
      badge="Future skills"
      badgeVariant="emerald"
      title={
        <>
          Learn <span className="text-[#6d28d9]">Something New</span>
        </>
      }
      description="Explore real-life topics like stocks, investing, photography, and speaking new languages like Spanish—with structure teachers can trust."
      hero={{
        mode: "lottie",
        animationData: futureSkillsAnimation,
        ariaLabel: "Animation of a student representing future-ready skills and learning",
      }}
      highlights={highlights}
      primaryCta="Browse tracks"
      secondaryCta="Watch demo"
    />
  );
}

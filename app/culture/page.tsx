"use client";

import ModuleLandingTemplate from "../components/ModuleLandingTemplate";

const highlights = [
  {
    title: "Get the facts",
    description: "Get the facts about traditional learning styles and modern Gen Z methods through stories, activities, and discussion prompts that feel relevant—not preachy.",
  },
  {
    title: "Keep it real",
      description: "Get students to relate to cultural concepts through relatable stories, activities, and discussion prompts that feel relevant—not preachy.",
  },
  {
    title: "Stay curious",
    description: "Compare classic learning styles with modern Gen Z methods through stories, activities, and discussion prompts that feel relevant—not preachy.",
  },
] as const;

export default function CulturePage() {
  return (
    <ModuleLandingTemplate
      badge="Culture module"
      badgeVariant="purple"
      title={
        <>
          Traditional vs <span className="text-[#6d28d9]">Gen&nbsp;Z</span>
        </>
      }
      description="Compare classic learning styles with modern Gen Z methods through stories, activities, and discussion prompts that feel relevant—not preachy."
      hero={{ mode: "image", src: "/genz.png", alt: "Students collaborating on a culture and identity activity" }}
      highlights={highlights}
      primaryCta="Start a discussion"
      secondaryCta="Watch demo"
    />
  );
}

"use client";

import miniGamesAnimation from "../../public/lotttie/game.json";

import ModuleLandingTemplate from "../components/ModuleLandingTemplate";

const highlights = [
  {
    title: "Bite-sized rounds",
    description: "90-second loops that fit bell schedules—perfect warm-ups, brain breaks, or end-of-day wind-downs.",
  },
  {
    title: "Skills, not scores only",
    description: "Memory, pattern speed, and attention cues surface so students see why the practice matters.",
  },
  {
    title: "Class mode",
    description: "Project-friendly layouts and optional leaderboards that keep the vibe collaborative, not cutthroat.",
  },
] as const;

export default function MiniGamesPage() {
  return (
    <ModuleLandingTemplate
      badge="Fun logic"
      badgeVariant="indigo"
      title={
        <>
          Mini <span className="text-[#6d28d9]">Games</span>
        </>
      }
      description="Quick brain games and arcade-style activities that improve focus, memory, and reflexes in short sessions—without hijacking your lesson plan."
      hero={{
        mode: "lottie",
        animationData: miniGamesAnimation,
        ariaLabel: "Playful animation representing logic mini games and quick brain challenges",
      }}
      highlights={highlights}
      primaryCta="Try a round"
      secondaryCta="Watch demo"
    />
  );
}

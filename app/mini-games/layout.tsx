import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Games | Lumo",
  description:
    "Quick brain games and arcade-style activities that improve focus, memory, and reflexes in short sessions.",
};

export default function MiniGamesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      {children}
    </div>
  );
}

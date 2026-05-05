import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumo Quiz Module",
  description: "Gamified quiz experiences for modern classrooms.",
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#f7f4ff] via-[#f1eef8] to-[#f8f7fb] text-[#17171e]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,40,217,0.10),transparent_35%),radial-gradient(circle_at_88%_12%,rgba(250,204,21,0.14),transparent_25%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

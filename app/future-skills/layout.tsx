import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Something New | Lumo",
  description:
    "Explore real-life topics like stocks, investing, photography, and new languages with guided, age-right modules.",
};

export default function FutureSkillsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      {children}
    </div>
  );
}
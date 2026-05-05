import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional vs Gen Z | Lumo",
  description:
    "Compare classic learning styles with modern Gen Z methods through stories, activities, and discussion prompts.",
};

export default function CultureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      {children}
    </div>
  );
}

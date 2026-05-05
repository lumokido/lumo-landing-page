import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Adventure of Growing Strong | Lumo Health",
  description:
    "Lumo gamifies well-being for Grades 5–7: nutrition, movement, and mental clarity in one health module.",
};

export default function HealthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f5f8] text-[#17171e]">
      {children}
    </div>
  );
}

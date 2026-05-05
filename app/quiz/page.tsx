'use client'
import QuizHeader from "../modules/quiz/ui/QuizHeader";
import AItext from "../modules/quiz/ui/AItext";
import UniversalModuleCTA from "../components/UniversalModuleCTA";

const journeySteps = [
  {
    title: "1. Upload or scan",
    description: "Bring a textbook page, PDF, or your handwritten notes.",
  },
  {
    title: "2. Review suggestions",
    description: "Adjust difficulty levels, distractors, and explanations in one place.",
  },
  {
    title: "3. Publish instantly",
    description: "Share the quiz with students and track class performance in real time.",
  },
];

const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#f6f4ff] via-[#efeded] to-[#e9f7ef] text-[#17171e]">
      <QuizHeader />

      <AItext />

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[1.8rem] border-2 border-[#17171e] bg-white p-5 shadow-[8px_8px_0px_#17171e] sm:p-8">
          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">How quiz creation flows</h3>
          <p className="mt-2 max-w-2xl text-sm font-medium text-[#555568] sm:text-base">
            A simple workflow for teachers to move from content to assessment without manual formatting headaches.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {journeySteps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-[#d7d7e2] bg-[#fafaff] p-4">
                <h4 className="text-base font-black text-[#1c1c25]">{step.title}</h4>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#555568]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <UniversalModuleCTA />
    </div>
  );
};

export default page;
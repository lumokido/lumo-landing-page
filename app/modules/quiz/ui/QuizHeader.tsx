import Image from "next/image";
import { Rocket } from "lucide-react";
import Lottie from "lottie-react";
import animationData from '../../../../public/lotttie/Gamification.json';

const QuizHeader = () => {
  return (
    <section className="">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="inline-flex rounded-full border border-[#6d28d9]/30  px-4 py-1 text-[11px] font-black uppercase tracking-widest text-[#6d28d9] sm:text-xs">
            New: AI-Powered Quizzes
          </span>

          <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tighter text-[#17171e] sm:text-5xl md:text-6xl">
            The Ultimate <br />
            <span className="italic text-[#6d28d9]">Gamified</span> Quiz <br />
            Experience
          </h1>

          <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-[#4f4f5f] sm:text-lg">
            Turn every assessment into an adventure. Lumo Quiz Module helps educators create
            high-energy learning environments where students crave the next challenge.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#17171e] bg-[#6110c7] px-6 py-3 text-sm font-black text-white shadow-[4px_4px_0px_#17171e] transition hover:translate-x-px hover:translate-y-px hover:shadow-none sm:px-7 sm:py-3.5 sm:text-lg" onClick={() => window.open('https://calendly.com/vaishnavirudraraju-lumokido/30min', '_blank')}>
              Request a Demo
              <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-center">
          {/* <div className="relative w-full max-w-[280px] rounded-[1.8rem] border-2 border-[#17171e] bg-white p-3 shadow-[6px_6px_0px_#6d28d9] sm:max-w-[350px] sm:rounded-[2rem] sm:p-4"> */}
            {/* <div className="overflow-hidden rounded-[1.25rem] border border-[#17171e]/20 bg-[#f7f7fb] sm:rounded-[1.5rem] flex items-center justify-center"> */}
  <Lottie
    animationData={animationData}
    loop={true}
    className="w-full h-[560px] sm:h-[620px] md:h-[680px]"
  />
{/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default QuizHeader;
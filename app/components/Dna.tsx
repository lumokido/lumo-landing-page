import React from 'react'
import { ArrowUpRight, BookOpen, Trophy, Zap } from 'lucide-react'

const Dna = () => {
  return (

    <section id="about" className="relative overflow-hidden rounded-[2rem] bg-[#17171e] py-24 text-[#f8f8fb]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="pointer-events-none absolute -left-8 -top-16 select-none text-[9rem] font-black leading-none opacity-10 md:text-[11rem]">DNA</div>
              <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 relative z-10 leading-[0.85]">
                The <span className="text-[#8b5cf6]">L.U.M.O</span> <br/> Formula.
              </h2>
              <p className="max-w-md text-xl font-medium text-[#b7b7c2]">
                Our core architectural philosophy that drives student success across every grade level.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                    { label: "Learn", desc: "Absorb foundational knowledge via gamified quizzes.", icon: <BookOpen className="w-6 h-6" /> },
                { label: "Upgrade", desc: "Build on core concepts through daily challenges.", icon: <ArrowUpRight className="w-6 h-6" /> },
                { label: "Master", desc: "Achieve deep expertise in creative & cognitive skills.", icon: <Trophy className="w-6 h-6" /> },
                { label: "Overcome", desc: "Solve real-world logic & critical thinking puzzles.", icon: <Zap className="w-6 h-6" /> }
              ].map((dna, i) => (
                <div key={i} className="group cursor-default rounded-[2rem] border border-white/10 bg-white/3 p-8 transition-all hover:border-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-[#17171e]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:bg-black/10">
                    {dna.icon}
                  </div>
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2">{dna.label}</h4>
                  <p className="text-sm font-medium text-[#c9c9d4] group-hover:text-[#17171e]">{dna.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>    
)
}

export default Dna
import { BarChart3 } from 'lucide-react';

export const Dashboard = () => {
  return (
    <section id="principals" className="relative flex flex-col items-center px-6 py-24">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="text-[#17171e]">
          <span className="mb-6 block text-xs font-black uppercase tracking-[0.2em] text-[#6d28d9]">Command Center API</span>
          <h2 className="mb-10 text-4xl font-black uppercase italic leading-[0.9] tracking-tighter md:text-6xl">
            The Principal's <br/> <span className="text-[#6d28d9] underline decoration-black/10 underline-offset-8">Dashboard.</span>
          </h2>
          
          <ul className="space-y-10">
            {[
              { title: "Engagement Heatmaps", desc: "See where your students are excelling and where curiosity is growing in real-time." },
              { title: "Parent Satisfaction Loop", desc: "Automated transparency reports that keep parents excited about your curriculum." },
              { title: "Safe & Curated", desc: "Zero ads, zero data tracking for external parties. 100% compliant with safety standards." }
            ].map((item, i) => (
              <li key={i} className="flex gap-6">
                <div className="text-3xl font-mono font-black italic opacity-20">0{i + 1}</div>
                <div>
                  <h4 className="mb-2 text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="font-medium leading-relaxed text-[#5f5f6d]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] border-2 border-[#17171e] bg-white p-8 text-black shadow-[12px_12px_0px_#6d28d9] md:p-10">
            <div className="mb-10 flex items-center justify-between border-b border-[#ececf2] pb-6">
              <div className="font-mono text-xs font-black uppercase tracking-widest text-[#5f5f6d]">School ID: OAK-7724</div>
              <BarChart3 className="w-5 h-5" />
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-1 text-xs font-bold uppercase text-[#8a8a99]">Students Active</div>
                  <div className="text-4xl font-mono font-black italic">94.2%</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase text-[#8a8a99]">Skills Gained</div>
                  <div className="text-4xl font-mono font-black italic">1.4k</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative h-6 w-full overflow-hidden rounded-lg bg-slate-100">
                  <div className="h-full w-[65%] bg-[#22c55e]" />
                  <span className="absolute inset-y-0 left-3 flex items-center text-[10px] font-black uppercase text-black">Robotics Intro</span>
                </div>
                <div className="relative h-6 w-full overflow-hidden rounded-lg bg-slate-100">
                  <div className="h-full w-[90%] bg-[#17171e]" />
                  <span className="absolute inset-y-0 left-3 flex items-center text-[10px] font-black uppercase italic text-white">Wellness Check</span>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <div className="mb-4 text-xs font-black uppercase italic tracking-widest text-[#8a8a99]">Next Step</div>
                <button className="w-full rounded-2xl border-2 border-[#17171e] bg-[#17171e] py-4 font-black uppercase italic tracking-tighter text-white transition hover:bg-white hover:text-[#17171e]">
                  Download Quarterly Insight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

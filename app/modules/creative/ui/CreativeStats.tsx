import { stats } from "./creativeData";

const CreativeStats = () => {
  return (
    <section className="mt-10 rounded-2xl border-2 border-[#17171e] bg-[#11131a] p-6 shadow-[6px_6px_0px_#17171e]">
      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-4xl font-black text-[#f8d64a]">{stat.value}</p>
            <p className="mt-1 text-base font-bold text-white">{stat.label}</p>
            <p className="text-xs font-medium text-[#a2a9bd]">Actively participating in every module</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeStats;

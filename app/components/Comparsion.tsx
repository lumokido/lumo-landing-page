import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Comparsion = () => {
    return (
        <section className="">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 px-4 text-center">
                    <h2 className="mb-4 text-4xl font-black uppercase italic tracking-tighter text-[#17171e] md:text-5xl">
                        Legacy <span className="text-[#b3bdd0] font-bold underline decoration-black/10 underline-offset-8 shadow-[2px_2px_0px_#000000] transition-all hover:-translate-y-1 hover:shadow-[2px_2px_0px_#17171e] px-2">vs</span> Lumo
                    </h2>
                    <p className="mx-auto max-w-xl font-medium text-[#616174]">
                        Why schools are moving their traditional ERP systems to the LUMO ecosystem.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-2">
                    {/* Legacy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col rounded-[2.5rem] border-2 border-[#e8e8ef] bg-white p-8 shadow-[6px_6px_0px_#e9e9f2] md:p-10"
                    >
                        <h3 className="mb-10 text-center text-2xl font-black uppercase tracking-tight text-gray-600 md:text-left">Legacy Systems</h3>
                        <ul className="flex-1 space-y-7">
                            {[
                                "One-way attendance tracking",
                                "Boring static forms",
                                "No after-school engagement",
                                "Manual parent notifications"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-5 text-lg font-bold text-gray-600">
                                    <div className="h-3 w-3 shrink-0 rounded-full bg-[#e7ebf3]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Lumo Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col rounded-[2.5rem] border-2 border-[#17171e] bg-[#6d28d9] p-8 text-white shadow-[8px_8px_0px_#17171e] md:p-10"
                    >
                        <h3 className="mb-10 text-center text-2xl font-black uppercase italic tracking-tight text-white md:text-left">Lumo Platform</h3>
                        <ul className="flex-1 space-y-7">
                            {[
                                "Bi-directional growth loops",
                                "AI-driven skill prompts",
                                "Holistic health & culture logs",
                                "Automated parent satisfaction"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-5 text-lg font-bold text-white">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white/90">
                                        <Check className="h-4 w-4 stroke-[3px] text-white" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Comparsion
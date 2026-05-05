'use client';

import Image from 'next/image';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PixelTransition from '../../components/PixelTransition';

type Member = {
  name: string;
  role: string;
  tag: string;
  img: string;
  linkedin: string;
};

const team: Member[] = [
  {
    name: 'Vaishnavi',
    role: 'Product Vision',
    tag: 'Founder',
    img: '/founder.png',
    linkedin: '',
  },
  {
    name: 'ANAS',
    role: 'Software Engineer',
    tag: 'CTO',
    img: '/design.png',
    linkedin: 'https://www.linkedin.com/in/anas-mohamad369',
  },
  {
    name: 'Sanjana Varma',
    role: 'UX Designer',
    tag: 'Designer',
    img: '/ui.png',
    linkedin: '',
  },
  {
    name: 'Sanjana Redddy',
    role: 'Logo Designer',
    tag: 'Designer',
    img: '/logo.png',
    linkedin: '',
  },
  {
    name: 'Ranga Raju',
    role: 'Marketing Lead',
    tag: 'Marketing',
    img: '/marketing.png',
    linkedin: '',
  },
];

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const TeamCard = ({ member }: { member: Member }) => {
  return (
    <div className="group flex w-[250px] shrink-0 flex-col items-stretch rounded-[28px] border-2 border-[#17171e] bg-white/90 p-4 shadow-[4px_4px_0px_#17171e] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#17171e] sm:w-[285px] sm:p-5">
      <div className="w-full shrink-0">
        <PixelTransition
          firstContent={
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2 border-[#17171e] bg-[#f8f8fb]">
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 250px, 285px"
                className="object-cover"
              />
            </div>
          }
          secondContent={
            <div className="grid h-full w-full place-items-center bg-[#17171e]">
              <p className="px-2 text-center text-base font-bold text-white sm:text-lg">
                {member.name}
              </p>
            </div>
          }
          gridSize={8}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.4}
          aspectRatio="100%"
          className="w-full overflow-hidden rounded-2xl border-2 border-[#17171e]"
        />
      </div>

      <div className="mt-4 flex min-w-0 flex-col items-center text-center">
        <h4 className="text-base font-extrabold uppercase tracking-tight text-[#17171e] sm:text-lg">
          {member.name}
        </h4>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-[#8a8a99]">
          {member.role}
        </p>
        <div className="mt-3 rounded-full bg-[#17171e] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          {member.tag}
        </div>
        <a
          href={member?.linkedin || ''}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full border-2 border-[#0a66c2] bg-[#0a66c2] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#0958a8]"
          aria-label={`${member.name} on LinkedIn`}
        >
          <LinkedInGlyph className="h-3.5 w-3.5 shrink-0" />
          Profile
        </a>
      </div>
    </div>
  );
};

const WhoWeAre = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="team" className="relative overflow-hidden px-6 py-24">
      <div className=" w-full  mx-auto">
        <div className="space-y-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full border border-[#17171e]/10 bg-[#22c55e] px-4 py-1 text-xs font-black uppercase tracking-widest text-black">
              The Collective
            </div>

            <h2 className="mb-8 text-4xl font-black uppercase italic leading-[0.9] tracking-tighter text-[#17171e] sm:text-5xl md:text-6xl lg:text-7xl">
              Behind <br />
              the <span className="text-[#6d28d9]">Glow.</span>
            </h2>

            {/* <p className="mx-auto mb-10 max-w-3xl text-lg font-medium leading-relaxed text-[#5f5f6d] sm:text-xl">
              We&apos;re a team of educators, designers, and engineers who got tired of seeing
              students bored by traditional ERP systems. LUMO is our answer to the modern
              classroom.
            </p> */}

            {/* <div className="grid gap-5 text-left md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-[1.75rem] border-2 border-[#17171e] bg-white/80 p-5 shadow-[4px_4px_0px_#17171e]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] text-[#17171e]">
                  <Star className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-black uppercase tracking-tight text-[#17171e]">Our Mission</h4>
                  <p className="mt-1 text-sm font-medium text-[#7b7b8b]">
                    To replace bureaucracy with inspiration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.75rem] border-2 border-[#17171e] bg-white/80 p-5 shadow-[4px_4px_0px_#17171e]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d9f99d] text-[#17171e]">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-black uppercase tracking-tight text-[#17171e]">Our Vision</h4>
                  <p className="mt-1 text-sm font-medium text-[#7b7b8b]">
                    Gen Z ideas driving Middle School success.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="min-w-0 w-full">
            

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true, margin: '-40px' }}
                className="relative overflow-hidden "
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 " />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12" />

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? { x: 0 }
                      : { x: ['0%', '-50%'] }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          duration: 18,
                          ease: 'linear',
                          repeat: Number.POSITIVE_INFINITY,
                        }
                  }
                  className="flex w-max gap-6"
                >
                  {[0, 1].map((loopIndex) => (
                    <div key={loopIndex} className="flex shrink-0 gap-6 pr-6">
                      {team.map((member) => (
                        <TeamCard key={`${loopIndex}-${member.name}`} member={member} />
                      ))}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

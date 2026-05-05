export type PhilosophyDialog = {
  title: string;
  summary: string;
  points: string[];
  /** Optional hero image in `public/` — e.g. `/create1.jpg` */
  imageSrc?: string;
  imageAlt?: string;
};

export type CreativeCard = {
  title: string;
  description: string;
  cta: string;
  accent: string;
  buttonClass: string;
  media: string;
  dialog: PhilosophyDialog;
};

export type CreativeStat = {
  value: string;
  label: string;
};

export const philosophyCards: CreativeCard[] = [
  {
    title: "Creative Writing Prompts",
    description:
      "Practice the art of storytelling through interactive missions that strengthen imagination and vocabulary.",
    cta: "Explore Story Writing",
    accent: "border-[#6d28d9]",
    buttonClass: "bg-[#6d28d9] text-white border-[#17171e]",
    media: "/lotttie/storyicon.json",
    dialog: {
      title: "Story writing missions",
      summary:
        "Learners move from prompts to polished scenes with structured feedback—not passive video—so vocabulary and narrative craft stick.",
      points: [
        "Branching prompts adapt difficulty as confidence grows.",
        "Peer-safe sharing builds voice without the pressure of a blank page.",
        "Revision checkpoints teach editing as part of creativity, not an afterthought.",
      ],
    },
  },
  {
    title: "Decision Lab",
    description: "Learn to make decisions and solve problems with the help of Real World Scenarios",
    cta: "Start Building",
    accent: "border-[#17171e]",
    buttonClass: "bg-[#17171e] text-white border-[#17171e]",
    media: "/lotttie/thinking.json",
    dialog: {
      title: "Real-world decision practice",
      summary:
        "Scenarios mirror messy trade-offs: constraints, stakeholders, and incomplete information—so judgment improves where worksheets fall short.",
      points: [
        "Timed decisions train prioritization under realistic pressure.",
        "Debriefs compare your path with expert rationale, not just right/wrong.",
        "Skills transfer to group projects, exams, and everyday choices.",
      ],
    },
  },
  {
    title: "Why It Works",
    description: "Learn the science behind why our creative learning approach works",
    cta: "Learn More",
    accent: "border-[#17171e]",
    buttonClass: "bg-[#0f766e] text-white border-[#17171e]",
    media: "/lotttie/bulb.json",
    dialog: {
      title: "Evidence behind active creative learning",
      summary:
        "We combine retrieval practice, spaced repetition, and productive struggle—proven levers for durable understanding—in creative formats students actually finish.",
      points: [
        "Short loops of try → reflect → retry strengthen metacognition.",
        "Multimodal tasks (write, sketch, choose) widen access and engagement.",
        "Progress signals reduce anxiety and keep momentum visible.",
      ],
    },
  },
  {
    title: "Unlock Your Potential",
    description: "Our mixed-skill roadmap adapts to every learner to boost logic, collaboration, and confidence.",
    cta: "View Full Track",
    accent: "border-[#17171e]",
    buttonClass: "bg-[#f7df64] text-[#17171e] border-[#17171e]",
    media: "/lotttie/champion.json",
    dialog: {
      title: "Your adaptive skill roadmap",
      summary:
        "The track blends logic, communication, and collaboration milestones so learners see how strengths connect—not siloed subjects.",
      points: [
        "Diagnostics suggest the next best mission instead of a fixed sequence.",
        "Milestones celebrate growth across skills, not only scores.",
        "Capstone-style challenges require teaming up and presenting work.",
      ],
    },
  },
];

export const stats: CreativeStat[] = [
  { value: "94%", label: "Student Engagement" },
  { value: "120+", label: "Interactive Missions" },
  { value: "50+", label: "Career Paths" },
];

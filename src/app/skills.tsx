"use client";

import {
  RectangleGroupIcon,
  ServerIcon,
  WrenchIcon,
  CircleStackIcon,
  EyeIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import { SkillCard } from "@/components";
import Image from "next/image";
import { motion } from "framer-motion";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Development",
    children:
      "I specialize in building responsive and modern user interfaces using technologies like TailwindCSS, Shadcn UI, JavaScript, TypeScript, React.js, Vue.js, Inertia.js, and Next.js.",
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    children:
      "My backend expertise includes working with HonoJS, PHP 8, Laravel, Livewire.js, and LighthousePHP. I also use Python for machine learning and AI. I build scalable and maintainable backends that power seamless frontend experiences.",
  },
  {
    icon: WrenchIcon,
    title: "Tools and Workflow",
    children:
      "I use modern tools like Git, GitHub Actions, Vite, Prisma, GraphQL and tRPC to streamline development, manage data efficiently, and automate deployments.",
  },
  {
    icon: CircleStackIcon,
    title: "Database & Authentication",
    children:
      "I design and manage robust relational databases using MySQL, PostgreSQL, MongoDB, Prisma and Supabase in Next.js, and Eloquent ORM in Laravel. For authentication, I implement secure login systems using NextAuth.js for Next.js and Laravel Breeze or Sanctum for Laravel.",
  },
  {
    icon: EyeIcon,
    title: "UI Consistency & Design Systems",
    children:
      "By leveraging component libraries like Shadcn UI, I maintain consistency in UI while ensuring accessibility and maintainability across complex applications.",
  },
  {
    icon: CloudIcon,
    title: "CI/CD & Deployment",
    children:
      "I implement continuous integration and deployment pipelines using GitHub Actions for fast and reliable production delivery.",
  },
];

const TECHSTACKS = [
  { image: "typescript.png", name: "TypeScript" },
  { image: "graphql.png", name: "GraphQL" },
  { image: "trpc.png", name: "tRPC" },
  { image: "nextjs.png", name: "Next.js" },
  { image: "expo.png", name: "Expo" },
  { image: "react.png", name: "React.js" },
  { image: "vue.png", name: "Vue.js" },
  { image: "laravel-2.png", name: "Laravel" },
  { image: "inertia.svg", name: "Inertia.js" },
  { image: "livewire.webp", name: "Livewire.js" },
  { image: "tailwind.png?new", name: "TailwindCSS" },
  { image: "shadcn.png?new", name: "ShadcnUI" },
  { image: "nextauth.png", name: "NextAuth.js" },
  { image: "react-query.webp", name: "TanStack" },
  { image: "prisma.png", name: "Prisma" },
  { image: "mysql.png", name: "MySQL" },
  { image: "vite.svg", name: "Vite" },
  { image: "git.png", name: "Git" },
  { image: "github actions.png", name: "GH Actions" },
  { image: "doppler.svg", name: "Doppler" },
];

export function Skills() {
  return (
    <section className="px-8 py-24 bg-white" id="skills">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto mb-16 text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Skills & Stack
          </h2>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-500">
            I&apos;m not just a developer — I&apos;m a digital dreamweaver.
            Crafting immersive online experiences is not just a job but my calling.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* ── Tech Stack Icons ── */}
      <div className="container mx-auto mb-20">
        <p className="text-center text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
          Languages · Frameworks · Tools
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {TECHSTACKS.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl
                              bg-gray-50 border border-gray-100
                              hover:bg-white hover:border-blue-100 hover:shadow-md
                              transition-all duration-300 cursor-default">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100
                                group-hover:scale-110 transition-transform duration-300">
                  <Image
                    width={28}
                    height={28}
                    alt={tech.name}
                    src={`/icons/${tech.image}`}
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-[11px] font-medium text-gray-600 text-center leading-tight">
                  {tech.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Skill Cards Grid ── */}
      <div className="container mx-auto">
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((props, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SkillCard {...props} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Skills;
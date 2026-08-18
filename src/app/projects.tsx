"use client";

import { ProjectCard } from "@/components";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    img: "/projects/slgovhub.png",
    title: "SLGOVHUB",
    desc: "Landing page with AI Agent and list of all portals, developed for the Province of Southern Leyte.",
    tech: [
      "JavaScript",
      "NextJS",
      "ReactJS",
      "Tailwind CSS",
      "Groq SDK",
      "Google GenAI",
    ],
    site: "https://promotors.southernleyte.org.ph/",
  },
  {
    img: "/projects/promotors-2.png?new",
    title: "PROMOTORS",
    desc: "A comprehensive system for managing and monitoring equipment, fuel, oil and other inventory, developed for the Province of Southern Leyte.",
    tech: [
      "TypeScript",
      "NextJS",
      "ReactJS",
      "Tanstack Query",
      "Prisma",
      "tRPC",
      "NextAuthJS",
      "MySQL",
    ],
    site: "https://promotors.southernleyte.org.ph/",
  },
  {
    img: "/projects/budgetrack-2.png",
    title: "BudgeTRACK",
    desc: "A comprehensive system for managing and monitoring budget allocations and expenditures, developed for the Province of Southern Leyte.",
    tech: [
      "TypeScript",
      "NextJS",
      "ReactJS",
      "Tanstack Query",
      "Prisma",
      "tRPC",
      "NextAuthJS",
      "MySQL",
      "Google Cloud API",
    ],
    site: "https://budgetrack.southernleyte.org.ph/",
  },
  {
    img: "/projects/dota-2.png",
    title: "DOTA | DTS",
    desc: "A comprehensive system for tracking documents and transactions using QR Code, developed for the Province of Southern Leyte.",
    tech: [
      "JavaScript",
      "Laravel",
      "Livewire",
      "MySQL",
      "Chatify",
      "NextJS",
      "ReactJS",
    ],
    site: "https://dts.southernleyte.org.ph/",
  },
  {
    img: "/projects/dates.png",
    title: "DATES",
    desc: "A comprehensive system for DTR availability monitoring, developed for the Province of Southern Leyte.",
    tech: [
      "TypeScript",
      "NextJS",
      "ReactJS",
      "Tanstack Query",
      "Prisma",
      "tRPC",
      "NextAuthJS",
      "MySQL",
    ],
    site: "https://dates.southernleyte.org.ph/",
  },
  {
    img: "/projects/bizibee-2.png",
    title: "BiziBee",
    desc: "A cloud-based Business Inventory & Sales Management System designed to help businesses simplify daily operations.",
    tech: [
      "TypeScript",
      "NextJS",
      "ReactJS",
      "Tanstack Query",
      "Prisma",
      "tRPC",
      "NextAuthJS",
      "MySQL",
      "Oracle CI",
    ],
    site: "https://bizi-bee.vercel.app/",
  },
  {
    img: "/projects/solepgea-2.png",
    title: "SOLEPGEA",
    desc: "A comprehensive system for managing and monitoring contributions & loans of employees, developed for the Province of Southern Leyte.",
    tech: [
      "TypeScript",
      "Laravel",
      "InertiaJS",
      "ReactJS",
      "MySQL",
      "TailwindCSS",
      "Shadcn UI",
    ],
    site: "https://solepgea.southernleyte.org.ph/",
  },
];

export function Projects() {
  return (
    <section
      className="relative py-28 px-8 bg-[#f8f8f6] overflow-hidden"
      id="projects"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex flex-col items-center text-center gap-4">
            {/* Label pill */}
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Portfolio
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Featured Projects
            </h2>

            <p className="max-w-lg text-[15px] leading-relaxed text-gray-500">
              Whether you need a powerful web system built from scratch or a
              website refreshed, I&apos;m here to bring your digital vision to
              life.
            </p>

            {/* Decorative line */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-stretch">
          {PROJECTS.map((props, idx) => (
            <motion.div
              key={idx}
              className="flex"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: "easeOut" }}
            >
              <ProjectCard {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

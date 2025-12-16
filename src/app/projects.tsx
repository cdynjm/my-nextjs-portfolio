"use client";

import { ProjectCard } from "@/components";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    img: "/projects/pos.png",
    title: "Point of Sale System - PSAO",
    desc: "A comprehensive system for managing and monitoring sales at Provincial Systems Administrator's Office",
    tech: [
      "TypeScript",
      "Laravel",
      "ReactJS",
      "MySQL",
      "TailwindCSS",
      "Shadcn UI",
    ],
    site: "https://prime.southernleyte.org.ph/",
  },
  {
    img: "/projects/prime.png",
    title: "Property Records & Inventory Monitoring Engine",
    desc: "A comprehensive system for managing and monitoring property records, developed for the Province of Southern Leyte.",
    tech: [
      "TypeScript",
      "Laravel",
      "Livewire",
      "MySQL",
      "Alpine.js",
      "TailwindCSS",
      "Flux UI",
    ],
    site: "https://prime.southernleyte.org.ph/",
  },
  {
    img: "/projects/nextjs-graphql-honojs.png",
    title: "NextJS Starter Kit",
    desc: "A comprehensive starter kit for nextjs projects with built in authentication and postgresql for its database",
    tech: [
      "NextJS",
      "NextAuthJS",
      "HonoJS",
      "TailwindCSS",
      "Shadcn UI",
      "TypeScript",
      "GraphQL",
      "TanStack Query",
      "Supabase",
    ],
    site: "https://nextjs-graphql-honojs-starterkit.vercel.app/",
  },
  {
    img: "/projects/lms-vue.png",
    title: "Legislative Management System",
    desc: "A comprehensive system for managing legislative documents and transactions, developed for municipalities.",
    tech: [
      "VueJS",
      "InertiaJS",
      "Laravel",
      "TailwindCSS",
      "TypeScript",
      "GraphQL",
      "TanStack Query",
    ],
    site: "https://lms.southernleyte.org.ph/",
  },
  {
    img: "/projects/dota.png",
    title: "Document Tracking Assistant",
    desc: "A comprehensive system for tracking documents and transactions using QR Code, developed for the Province of Southern Leyte.",
    tech: ["JavaScript", "Laravel", "Livewire", "MySQL"],
    site: "https://dts.southernleyte.org.ph/",
  },
  {
    img: "/projects/e-mercado.png",
    title: "e-Mercado",
    desc: "A full-featured online store with product management and a shopping cart, developed for the Province of Southern Leyte.",
    tech: ["JavaScript", "Laravel", "Bootstrap 5", "MySQL"],
    site: "https://www.e-mercado.southernleyte.org.ph/",
  },
  {
    img: "/projects/gjtvs.png",
    title: "GJTVS - Enrolment & Attendance MS (RFID)",
    desc: "A fully integrated enrolment and attendance monitoring system using RFID technology.",
    tech: ["JavaScript", "Laravel", "Bootstrap 5", "MySQL", "Livewire"],
    site: "https://gjtvsims.ccsit.info/",
  },
  {
    img: "/projects/bfp.png",
    title: "BFP - Information Management System",
    desc: "A comprehensive Management Information System (MIS) for the Bureau of Fire Protection (BFP), including inspection scheduling and SMS-enabled appointment setting.",
    tech: ["VueJS", "InertiaJS", "Laravel", "MySQL", "Pushbullet API"],
    site: "https://mis-bfphl.ccsit.info/",
  },
  {
    img: "/projects/stmg.png",
    title: "STMG Road Traffic Offense MS",
    desc: "A comprehensive road traffic offense management system that tracks driver information and outstanding penalties.",
    tech: ["VueJS", "InertiaJS", "Laravel", "MySQL"],
    site: "https://rtoims.ccsit.info/",
  },
  {
    img: "/projects/mcms.png",
    title: "Municipal Crime & Accident MS",
    desc: "A comprehensive system that records crimes and accidents, featuring a GIS map powered by Leaflet to track incident locations based on SMS reports from concerned individuals.",
    tech: [
      "Laravel",
      "Livewire",
      "Bootstrap 5",
      "MySQL",
      "Leaflet",
      "Pushbullet API",
      "JavaScript",
    ],
    site: "",
  },
  {
    img: "/projects/als.png",
    title: "ALS - Learners Progress Monitoring",
    desc: "A system for monitoring the progress of ALS learners, developed for the Department of Education.",
    tech: ["Laravel", "Livewire", "Bootstrap 5", "MySQL", "JavaScript"],
    site: "",
  },
  {
    img: "/projects/southerncp.png",
    title: "Southern Comfort Pensionne",
    desc: "A basic and simple commercial website developed for Southern Comfort Pensionne House",
    tech: ["HTML 5", "CSS 3", "Bootstrap 5", "JavaScript"],
    site: "https://southerncp.vercel.app/",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8 bg-white" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto mb-20 text-center">
          <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
            Featured Projects
          </h2>
          <p className="mb-4 text-[16px] text-blue-gray-900">
            Whether you need a powerful web system built from scratch or a
            website refreshed, I’m here to bring your digital vision to life. I
            also offer seamless website-to-APK conversions using Median.co—so
            your entire platform runs as a mobile app, all from a single
            codebase.
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <ProjectCard key={idx} {...props} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

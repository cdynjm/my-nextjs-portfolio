"use client";

import { ProjectCard } from "@/components";
// import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/projects/lms-vue.png",
    title: "Legislative Management System",
    desc: "A comprehensive system for managing legislative documents and transactions, developed for municipalities.",
    tech: "VueJS | InertiaJS | Laravel | TaildwindCSS | TypeScript | GraphQL | TanStack Query",
    site: "https://lms.southernleyte.org.ph/",
  },
  {
    img: "/projects/dota.png",
    title: "Document Tracking Assistant",
    desc: "A comprehensive system for tracking documents and transactions using QR Code, developed for the Province of Southern Leyte.",
    tech: "Javascript | Laravel | Livewire | MySQL",
    site: "https://dts.southernleyte.org.ph/",
  },
  {
    img: "/projects/e-mercado.png",
    title: "e-Mercado",
    desc: "A full-featured online store with product management and a shopping cart, developed for the Province of Southern Leyte.",
    tech: "Javascript | Laravel | Bootstrap 5 | MySQL",
    site: "https://www.e-mercado.southernleyte.org.ph/",
  },
  {
    img: "/projects/gjtvs.png",
    title: "GJTVS - Enrolment & Attendance MS (RFID)",
    desc: "A fully integrated enrolment and attendance monitoring system using RFID technology.",
    tech: "Javascript | Laravel | Bootstrap 5 | MySQL | Livewire",
    site: "https://gjtvsims.ccsit.info/",
  },
  {
    img: "/projects/bfp.png",
    title: "BFP - Information Management System",
    desc: "A comprehensive Management Information System (MIS) for the Bureau of Fire Protection (BFP), including inspection scheduling and SMS-enabled appointment setting.",
    tech: "VueJS | InertiaJS | Laravel | MySQL | Pushbullet API",
    site: "https://mis-bfphl.ccsit.info/",
  },
  {
    img: "/projects/stmg.png",
    title: "STMG Road Traffic Offense MS",
    desc: "A comprehensive road traffic offense management system that tracks driver information and outstanding penalties.",
    tech: "VueJS | InertiaJS | Laravel | MySQL",
    site: "https://rtoims.ccsit.info/",
  },
  {
    img: "/projects/mcms.png",
    title: "Municipal Crime & Accident MS",
    desc: "A comprehensive system that records crimes and accidents, featuring a GIS map powered by Leaflet to track incident locations based on SMS reports from concerned individuals.",
    tech: "Laravel | Livewire | Boostrap 5 | MySQL | Leaflet | Pushbullet API | Javascript",
    site: "",
  },
  {
    img: "/projects/als.png",
    title: "ALS - Learners Progress Monitoring",
    desc: "A system for monitoring the progress of ALS learners, developed for the Department of Education.",
    tech: "Laravel | Livewire | Boostrap 5 | MySQL | Javascript",
    site: "",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
          My Projects
        </h2>
        <p className="mb-4 text-[16px] text-blue-gray-900">
          Whether you need a powerful web system built from scratch or a website
          refreshed, I’m here to bring your digital vision to life. I also offer
          seamless website-to-APK conversions using Median.co—so your entire
          platform runs as a mobile app, all from a single codebase.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

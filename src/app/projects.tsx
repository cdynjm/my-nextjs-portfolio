"use client";

import { ProjectCard } from "@/components";
// import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const PROJECTS = [
  {
    img: "/projects/lms-vue.png",
    title: "Legislative Management System",
    desc: "A comprehensive system for managing legislative documents and transactions, developed for municipalities.",
    tech: ["VueJS", "InertiaJS", "Laravel", "TailwindCSS", "TypeScript", "GraphQL", "TanStack Query"],
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
    tech: ["Laravel", "Livewire", "Bootstrap 5", "MySQL", "Leaflet", "Pushbullet API", "JavaScript"],
    site: "",
  },
  {
    img: "/projects/als.png",
    title: "ALS - Learners Progress Monitoring",
    desc: "A system for monitoring the progress of ALS learners, developed for the Department of Education.",
    tech: ["Laravel", "Livewire", "Bootstrap 5", "MySQL", "JavaScript"],
    site: "",
  },
];

export function Projects() {
  const [featuredRepo, setFeaturedRepo] = useState<any>(null);
  const [codeCrypto, setCodeCrypto] = useState("");
  const [codeRoute, setCodeRoute] = useState("");

  // Fetch featured repo & both code files
  useEffect(() => {
    fetch("https://api.github.com/repos/cdynjm/my-nextjs-starterkit")
      .then((res) => res.json())
      .then((data) => setFeaturedRepo(data))
      .catch((err) => console.error("Failed to fetch featured repo:", err));

    fetch("https://raw.githubusercontent.com/cdynjm/my-nextjs-starterkit/main/lib/crypto.ts")
      .then((res) => res.text())
      .then((text) => setCodeCrypto(text))
      .catch((err) => console.error("Failed to fetch crypto.ts:", err));

    fetch("https://raw.githubusercontent.com/cdynjm/my-nextjs-starterkit/main/app/api/admin/graphql/route.ts")
      .then((res) => res.text())
      .then((text) => setCodeRoute(text))
      .catch((err) => console.error("Failed to fetch route.ts:", err));
  }, []);

  return (
    <section className="py-28 px-8 bg-white" id="projects">
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

      {/* Featured Code Project */}
      {featuredRepo && (
        <div className="mt-20 container mx-auto p-6 shadow-none">
          <h2 className="text-2xl font-semibold mb-4 text-center capitalize">
            {featuredRepo.name}
          </h2>
          <p className="text-center mb-4 text-gray-600">
            {featuredRepo.description}
          </p>
          <div className="text-center text-sm text-gray-500 mb-6">
            ⭐ {featuredRepo.stargazers_count} | Updated:{" "}
            {new Date(featuredRepo.updated_at).toLocaleDateString()}
          </div>

          {/* Two Code Files Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* crypto.ts */}
            <div>
              <h3 className="text-md font-semibold mb-2">
                File: <code>lib/crypto.ts</code>
              </h3>
              <SyntaxHighlighter
                language="tsx"
                style={oneDark}
                customStyle={{
                  borderRadius: "0.5rem",
                  maxHeight: "500px",
                  overflowY: "auto",
                  fontSize: "0.875rem",
                  padding: "1rem",
                }}
              >
                {codeCrypto || "// Loading crypto.ts..."}
              </SyntaxHighlighter>
            </div>

            {/* route.ts */}
            <div>
              <h3 className="text-md font-semibold mb-2">
                File: <code>app/api/admin/graphql/route.ts</code>
              </h3>
              <SyntaxHighlighter
                language="tsx"
                style={nightOwl}
                customStyle={{
                  borderRadius: "0.5rem",
                  maxHeight: "500px",
                  overflowY: "auto",
                  fontSize: "0.875rem",
                  padding: "1rem",
                }}
              >
                {codeRoute || "// Loading route.ts..."}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
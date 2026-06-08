"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    period: "2024 - Present",
    title: "Software Developer | Consultant",
    company: "Provincial Systems A.O.",
    location: "Remote",
    description:
      "Leading the design, development, and deployment of enterprise-grade web applications and internal government systems. Building scalable full-stack solutions using Next.js, React, TypeScript, tRPC, Prisma, Laravel, and MySQL. Responsible for system architecture, database design, API development, performance optimization, CI/CD automation, and maintaining secure, reliable production environments that streamline office operations and document management workflows.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Prisma",
      "Laravel",
      "Livewire",
      "MySQL",
      "TanStack Query",
      "GitHub Actions",
    ],
    achievements: [
      "Designed and deployed multiple enterprise and government-focused systems used across various offices",
      "Implemented CI/CD pipelines with GitHub Actions to automate testing and deployments",
      "Developed scalable APIs and database architectures supporting high-volume transactional workflows",
      "Improved application performance through query optimization, caching strategies, and efficient data fetching",
      "Built modern full-stack applications using Next.js, tRPC, Prisma, and TypeScript",
      "Maintained secure production environments while ensuring reliability, uptime, and system stability",
    ],
  },

  {
    period: "2023 - Present",
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    description:
      "Designing, developing, and maintaining custom web applications for clients across various industries. Delivering end-to-end solutions ranging from system architecture and database design to frontend development and deployment. Building modern, scalable applications using Laravel, Next.js, React, TypeScript, Prisma, and MySQL while focusing on performance, security, and user experience.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "Livewire",
      "Prisma",
      "MySQL",
      "tRPC",
      "TanStack Query",
      "Bootstrap",
    ],
    achievements: [
      "Developed and deployed multiple custom business and institutional systems",
      "Built full-stack applications from requirements gathering through production deployment",
      "Integrated modern development workflows and best practices across client projects",
      "Expanded expertise across multiple frameworks, libraries, and database technologies",
      "Delivered scalable solutions tailored to client operational requirements",
      "Provided ongoing maintenance, feature enhancements, and technical support for deployed systems",
    ],
  },
];

const OTHERS = [
  {
    period: "April 2026",
    title: "Implementation of the Budget Transaction and Control Keeper System",
    location: "Provincial Government of Southern Leyte",
    description:
      "Successfully designed, developed, and implemented the Budget Transaction and Control Keeper System, a comprehensive platform for managing, monitoring, and controlling budget transactions across various departments. The system provides accurate tracking of budget allocations, expenditures, and financial reporting, helping improve transparency, accountability, and the efficient utilization of government resources. The implementation streamlined budget-related workflows and enhanced financial oversight within participating offices.",
  },
  {
    period: "February - March 2026",
    title:
      "SOLEPGEA System Development, Presentation, and Stakeholder Consultations",
    location: "Provincial Government of Southern Leyte",
    description:
      "Developed the SOLEPGEA System and conducted a series of meetings, consultations, demonstrations, and stakeholder discussions during February and March 2026. The platform was designed exclusively for the Provincial Government of Southern Leyte Employees Association (SOLEPGEA) to manage employee association records, membership information, benefits, and loan transactions. The discussions focused on gathering requirements, validating workflows, presenting system features, and ensuring the platform aligned with the operational needs of the association. The SOLEPGEA System is a privately developed platform created specifically for SOLEPGEA and is not a government-owned system.",
  },

  {
    period: "December 2025",
    title: "PRIME: Property Records & Inventory Monitoring Engine",
    location: "Provincial Government of Southern Leyte",
    description:
      "Successfully developed and completed the Property Records & Inventory Monitoring Engine (PRIME), a robust system designed to manage government property records and inventory operations. The platform provides real-time asset tracking, detailed inventory reporting, and efficient monitoring of government-owned resources. By centralizing property information and automating inventory processes, the system improves accountability, transparency, asset utilization, and maintenance management across participating offices.",
  },

  {
    period: "August 2025",
    title:
      "Comprehensive Discussion and Open Forum for the Document Tracking Assistant System",
    location:
      "Boardroom, Provincial Governor's Office, Capitol Site Southern Leyte",
    description:
      "Conducted a comprehensive discussion on key issues, gathered user feedback, and facilitated an open forum to address concerns and share insights. Presented recommendations to further enhance the Document Tracking Assistant System, ensuring improved usability and alignment with office needs at the Capitol Site of Southern Leyte.",
  },
  {
    period: "January 2025",
    title:
      "Full Implementation and User Demonstration for the Document Tracking Assistant",
    location: "Capitol Site Southern Leyte",
    description:
      "Conducted a follow-up orientation in January 2025, focusing on the full implementation of the Document Tracking System. The session included in-depth user demonstrations, system navigation, and real-time simulations to ensure smooth adoption and operational efficiency across all offices at the Capitol Site of Southern Leyte.",
  },
  {
    period: "November 2024",
    title: "Comprehensive Presentation of the Document Tracking Assistant",
    location: "Capitol Site Southern Leyte",
    description:
      "Conducted the initial orientation and training session for the Document Tracking System in November 2024 at the Capitol Site offices in Southern Leyte. The session introduced staff to the system's features and workflow, aimed at improving document processing efficiency and enhancing overall transparency in transactions.",
  },
  {
    period: "April 2024",
    title:
      "Comprehensive Orientation of the Legislative MS for Sogod So. Leyte",
    location: "FCSIT Building SLSU MC",
    description:
      "A half-day orientation conducted in April 2024 at the FCSIT Building, Southern Leyte State University (SLSU), introducing the Legislative Management System to key personnel and staff. The session covered practical understanding of the platform's capabilities in streamlining legislative operations.",
  },
  {
    period: "March - November 2023",
    title: "e-Mercado Project Development for the Province of Southern Leyte",
    location: "Province of Southern Leyte",
    description:
      "The e-Mercado Project was developed to support local commerce by providing a digital platform for market vendors and consumers in Southern Leyte. The project began in March 2023, starting with planning, system design, and development phases. It was completed in May 2023. In June 2023, the project was officially introduced during the province's anniversary celebration at the Capitol Site. The development team presented the system to Governor Mian Mercado and members of the Sangguniang Panlalawigan (SP), highlighting its potential to promote digital economic inclusion. Following feedback and recommendations from stakeholders, the system underwent enhancements in November 2024 to improve functionality, user experience, and adaptability based on actual community needs. The e-Mercado platform continues to serve as a step forward in the province's digital transformation initiatives.",
  },
  {
    period: "February – June 2023",
    title: "On-the-Job Training (OJT): System Developer",
    location: "FCSIT Building, SLSU Main Campus",
    description: `Completed my On-the-Job Training at the FCSIT building, where I developed two internal systems: 
  (1) a Capstone Project Repository — an online archive system for student capstone projects, and 
  (2) a QA File Management System — designed for document handling and compliance under the QA office of SLSU.

  In parallel, I also handled a freelance client from Maasin City, developing a Graduate Studies Profiling Management System to assist in tracking academic records and profiles of graduate students.`,
  },
  {
    period: "December 2022",
    title:
      "Capstone Project Defense: Property Inventory and Control System at FCSIT Bulding SLSU",
    location: "FCSIT Building SLSU MC",
    description: `Successfully presented and defended our capstone project titled "Property Inventory and Control System" at Southern Leyte State University (SLSU). The system was developed to enhance the tracking, management, and reporting of physical assets within the university. The presentation covered the system's features, technical architecture, and its potential to streamline property-related operations.`,
  },
];

export default function Experience() {
  return (
    <section className="px-8 py-24 bg-white" id="experience">
      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto mb-20 text-center">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
            Professional Experience
          </h2>
          <p className="text-[15px] text-gray-500">
            My journey in software development
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-10 h-0.5 bg-gray-200 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-10 h-0.5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* ── Work Experience Timeline ── */}
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-[calc(40%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  {/* Left: Period & title */}
                  <div className="md:col-span-2 text-center md:text-right md:pr-10 relative">
                    <span className="inline-block bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide shadow-sm shadow-blue-200">
                      {exp.period}
                    </span>
                    <h3 className="mt-3 text-[15px] font-bold text-gray-900 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 mt-1">
                      {exp.company} · {exp.location}
                    </p>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute -right-[5px] top-[9px] w-[10px] h-[10px] rounded-full bg-blue-600 ring-4 ring-white border border-blue-200 z-10" />
                  </div>

                  {/* Right: Card */}
                  <div className="md:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                    <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-white border border-gray-200 text-gray-700 font-medium px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-3">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-[13px] text-gray-700"
                          >
                            <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="container mx-auto max-w-4xl my-16">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 px-2">
            Other Activities & Milestones
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
      </div>

      {/* ── Other Activities Timeline ── */}
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[calc(40%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-100 to-transparent" />

          <div className="space-y-10">
            {OTHERS.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  {/* Left */}
                  <div className="md:col-span-2 text-center md:text-right md:pr-10 relative">
                    <span className="inline-block bg-gray-100 text-gray-700 text-[11px] font-bold px-3.5 py-1.5 rounded-full tracking-wide">
                      {exp.period}
                    </span>
                    <h3 className="mt-3 text-[13px] font-semibold text-gray-800 leading-snug">
                      {exp.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1">
                      {exp.location}
                    </p>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute -right-[5px] top-[9px] w-[10px] h-[10px] rounded-full bg-gray-300 ring-4 ring-white z-10" />
                  </div>

                  {/* Right: Card */}
                  <div className="md:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-sm hover:border-gray-200 transition-all duration-300">
                    <p className="text-[13px] text-gray-600 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

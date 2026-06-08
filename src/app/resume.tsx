"use client";

import {
  CursorArrowRaysIcon,
  ArrowRightIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Science in Information Technology",
  },
  {
    icon: AcademicCapIcon,
    children: "Graduated Cum Laude",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Full Stack Software Developer",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24 bg-white" id="resume">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-5">
            Curriculum Vitae
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            My Resume
          </h2>

          <p className="text-[15px] leading-relaxed text-gray-500 mb-6 max-w-sm">
            I am a passionate Software Developer with a strong focus on
            building efficient, user-centric applications. I specialize in
            full-stack web development and enjoy solving real-world problems
            through clean, scalable code.
          </p>

          <a
            href="/resume/Cadayona Resume - June 21, 2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-800 hover:text-gray-500 transition-colors group"
          >
            View Full Resume
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Right — Resume items */}
        <div className="col-span-1 grid gap-y-4 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map(({ icon: Icon, children }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 hover:shadow-sm hover:border-gray-200 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-[14px] font-medium text-gray-800 leading-snug">
                  {children}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Resume;
"use client";

import { useCallback, useEffect, useState } from "react";
import { ProjectCard } from "@/components";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative py-16 md:py-28 px-4 md:px-8 bg-[#f8f8f6] overflow-hidden"
      id="projects"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex flex-col items-center text-center gap-4">
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

            <div className="flex items-center gap-2 mt-2">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-center py-4">
              {PROJECTS.map((props, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_88%] min-w-0 sm:flex-[0_0_70%] md:flex-[0_0_58%] lg:flex-[0_0_48%] xl:flex-[0_0_42%] px-1 md:px-3"
                >
                  <ProjectCard {...props} isActive={idx === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={scrollPrev}
              aria-label="Previous project"
              className="hidden md:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center
                         text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50
                         transition-colors duration-200"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === selectedIndex
                      ? "w-6 bg-blue-600"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Next project"
              className="hidden md:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center
                         text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50
                         transition-colors duration-200"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

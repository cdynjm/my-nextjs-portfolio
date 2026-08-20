"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  site: string;
  isActive?: boolean;
}

export function ProjectCard({ img, title, desc, tech, site, isActive = true }: ProjectCardProps) {
  return (
    <a
      href={site}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col h-full w-full bg-white border border-gray-100 rounded-2xl overflow-hidden
                 shadow-sm transition-all duration-500 ease-out
                 ${isActive
                   ? "shadow-xl scale-100 opacity-100"
                   : "shadow-sm scale-[0.88] opacity-40 hover:opacity-70"
                 }`}
    >
      <div className={`relative overflow-hidden bg-gray-50 transition-all duration-500 ${isActive ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
        <Image
          src={img}
          alt={title}
          width={1200}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {isActive && (
          <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md
                          opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-300">
            <ArrowUpRightIcon className="w-4 h-4 text-gray-800" />
          </div>
        )}
      </div>

      <div className={`flex flex-col flex-grow gap-3 transition-all duration-500 ${isActive ? "p-6" : "p-4"}`}>
        <h3 className={`font-bold text-gray-900 uppercase transition-all duration-500 ${isActive ? "text-base tracking-widest" : "text-xs tracking-wide"}`}>
          {title}
        </h3>

        <div className={`h-0.5 bg-blue-500 rounded-full transition-all duration-300 ${isActive ? "w-10 group-hover:w-14" : "w-6"}`} />

        {isActive && (
          <p className="text-[13px] leading-relaxed text-gray-500 flex-grow">
            {desc}
          </p>
        )}

        {isActive && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tech.map((item, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full
                           bg-gray-100 text-gray-600 tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {isActive && (
        <div className="px-6 pb-6">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-600
                          group-hover:text-blue-700 transition-colors tracking-wide uppercase">
            <span>View Live Site</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      )}
    </a>
  );
}

export default ProjectCard;
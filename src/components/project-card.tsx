"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tech: string[];
  site: string;
}

export function ProjectCard({ img, title, desc, tech, site }: ProjectCardProps) {
  return (
    <a
      href={site}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full w-full bg-white border border-gray-100 rounded-2xl overflow-hidden
                 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-50">
        <Image
          src={img}
          alt={title}
          width={1000}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Arrow icon on hover */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md
                        opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300">
          <ArrowUpRightIcon className="w-4 h-4 text-gray-800" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 gap-3">
        {/* Title */}
        <h3 className="font-bold text-sm tracking-widest text-gray-900 uppercase">
          {title}
        </h3>

        {/* Divider */}
        <div className="w-8 h-0.5 bg-blue-500 rounded-full" />

        {/* Description */}
        <p className="text-[13px] leading-relaxed text-gray-500 flex-grow">
          {desc}
        </p>

        {/* Tech Stack */}
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
      </div>

      {/* Bottom bar */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-600
                        group-hover:text-blue-700 transition-colors tracking-wide uppercase">
          <span>View Live Site</span>
          <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
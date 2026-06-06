"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface CertificateCardProps {
  img: string;
  title: string;
  desc: string;
  site: string;
}

export function CertificateCard({ img, title, desc, site }: CertificateCardProps) {
  return (
    <a
      href={site}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full w-full bg-white border border-gray-100 rounded-2xl overflow-hidden
                 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
    >
      {/* Certificate image */}
      <div className="relative h-44 overflow-hidden bg-gray-50">
        <Image
          src={img}
          alt={title}
          width={1080}
          height={720}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Arrow badge */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-md
                        opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300">
          <ArrowUpRightIcon className="w-3.5 h-3.5 text-gray-800" />
        </div>

        {/* "Certificate" label on image */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            View Certificate
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 gap-3">
        {/* Title */}
        <h3 className="font-bold text-[12px] tracking-widest text-gray-900 uppercase leading-snug">
          {title}
        </h3>

        {/* Accent line */}
        <div className="w-8 h-0.5 bg-blue-500 rounded-full" />

        {/* Description */}
        <p className="text-[12px] leading-relaxed text-gray-500 flex-grow">
          {desc}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-600
                        group-hover:text-blue-700 transition-colors tracking-wide uppercase">
          <span>View Certificate</span>
          <ArrowUpRightIcon className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}

export default CertificateCard;
"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

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
    <section className="px-8 py-24 bg-gray-50" id="resume">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h2"
            color="blue-gray"
          >
            My Resume
          </Typography>
          <Typography
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
          >
            I am a passionate Software Developer with a strong focus on building
            efficient, user-centric applications. I specialize in full-stack web
            development and enjoy solving real-world problems through clean,
            scalable code.
          </Typography>
          <Button
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            <a
              href="/resume/Cadayona Resume - June 16, 2025.pdf"
              target="_blank"
            >
              View More
            </a>
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;

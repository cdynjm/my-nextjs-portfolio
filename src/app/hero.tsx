"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Select, Option } from "@material-tailwind/react";

function Hero() {
  const fullText = "SOFTWARE DEVELOPER";
  const [displayedText, setDisplayedText] = useState("");

  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);


  return (
    <header className="bg-gray-50 p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-1 md:ml-[100px] lg:row-auto">
          <h1 className="text-4xl font-bold mb-1">Jemuel Cadayona</h1>
          <p className="text-[16px] font-mono">{displayedText}</p>
          <hr className="my-4 md:mr-[100px]" />
          <div className="flex items-center gap-2 mb-2">
            <MapPinIcon className="w-[20px] h-auto" />
            <h4>Provincial Systems A.O.</h4>
          </div>
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="w-[20px] h-auto" />
            <h4>Software Dev. | Consultant</h4>
          </div>
          <hr className="my-4 md:mr-[100px]" />
          <div className="flex items-center gap-2 mb-2">
            <MapPinIcon className="w-[20px] h-auto" />
            <p className="font-thin text-[14px]">
              Capitol Site, Southern Leyte PH
            </p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <AcademicCapIcon className="w-[20px] h-auto" />
            <p className="font-thin text-[14px]">Graduated, Cum Laude (BSIT)</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FolderIcon className="w-[20px] h-auto" />
            <p className="font-thin text-[14px] underline underline-offset-4">
              <a
                href="/resume/Cadayona Resume - June 16, 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            width={1024}
            height={1024}
            alt="team work"
            src="/image/me-2.png"
            className="h-[30rem] w-auto mx-auto rounded-xl object-cover"
            priority
          />
          <div className="flex gap-4 mt-6">
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="px-6 py-2"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="outlined"
              className="px-6 py-2"
            >
              <a href="#commissions">Commissions</a>
            </Button>
          </div>
        </div>
      </div>

      {/* GitHub Contributions */}
      <div className="mt-16 container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>

        <div className="mb-6 w-48">
          <Select
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            id="year"
            label="Select Year"
            value={String(year)}
            onChange={(val) => setYear(Number(val))}
          >
            {years.map((yr) => (
              <Option key={yr} value={String(yr)}>
                {yr}
              </Option>
            ))}
          </Select>
        </div>

        <GitHubCalendar
          username="cdynjm"
          year={year}
          blockSize={14}
          blockMargin={5}
          fontSize={14}
        />
      </div>

      
    </header>
  );
}

export default Hero;

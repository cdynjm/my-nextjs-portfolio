"use client";

import {
  RectangleGroupIcon,
  ServerIcon,
  WrenchIcon,
  EyeIcon,
  HashtagIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import { SkillCard } from "@/components";
import Image from "next/image";
import { Card, CardBody } from "@material-tailwind/react";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Development",
    children:
      "I specialize in building responsive and modern user interfaces using technologies like TailwindCSS, Daisy UI, Shadcn UI, Bootstrap 5, JavaScript, TypeScript, React.js, Vue.js, Inertia.js, and Next.js.",
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    children:
      "My backend expertise includes working with Next.js API routes, PHP 8, Laravel, Livewire.js, and LighthousePHP. I build scalable and maintainable backends that power seamless frontend experiences.",
  },
  {
    icon: WrenchIcon,
    title: "Tools and Workflow",
    children:
      "I use modern tools like Git, GitHub Actions, Vite, Drizzle ORM, GraphQL, and TanStack Query to streamline development, manage data efficiently, and automate deployments.",
  },
  {
    icon: HashtagIcon,
    title: "Database & Authentication",
    children:
      "I design and manage robust relational databases using MySQL and Drizzle ORM in Next.js, and Eloquent ORM in Laravel. For authentication, I implement secure login systems using NextAuth.js for Next.js and Laravel Breeze or Sanctum for Laravel.",
  },
  {
    icon: EyeIcon,
    title: "UI Consistency & Design Systems",
    children:
      "By leveraging component libraries like Daisy UI and Shadcn UI, I maintain consistency in UI while ensuring accessibility and maintainability across complex applications.",
  },
  {
    icon: CloudIcon,
    title: "CI/CD & Deployment",
    children:
      "I implement continuous integration and deployment pipelines using GitHub Actions and host projects on modern platforms like Median.co for fast and reliable production delivery.",
  },
];

const FRONTEND = [
  {
    image: "bootstrap.png",
    name: "Bootstrap 5",
  },
  {
    image: "tailwind.png",
    name: "TaildwindCSS",
  },
  {
    image: "daisyui.png",
    name: "Daisy UI",
  },
  {
    image: "shadcn.png",
    name: "Shadcn UI",
  },
  {
    image: "javascript.png",
    name: "JavaScript",
  },
  {
    image: "typescript.png",
    name: "TypeScript",
  },
  {
    image: "vue.png",
    name: "Vue.js",
  },
  {
    image: "inertia.svg",
    name: "Inertia.js",
  },
  {
    image: "nextjs.png",
    name: "Next.js",
  },
  {
    image: "react.png",
    name: "React.js",
  },
];

const BACKEND = [
  {
    image: "php.png",
    name: "PHP 8",
  },
  {
    image: "laravel-2.png",
    name: "Laravel",
  },
  {
    image: "livewire.webp",
    name: "Livewire.js",
  },
  {
    image: "lighthouse.png",
    name: "LighthousePHP",
  },
];

const TOOLS = [
  {
    image: "graphql.png",
    name: "GraphQL",
  },
  {
    image: "tanstack.png",
    name: "TanStack Query",
  },
  {
    image: "mysql.png",
    name: "MySQL",
  },
  {
    image: "drizzle.jpg",
    name: "Drizzle ORM",
  },
  {
    image: "nextauth.png",
    name: "NexAuth.js",
  },
  {
    image: "vite.svg",
    name: "Vite",
  },
  {
    image: "git.png",
    name: "Git",
  },
  {
    image: "github.png",
    name: "Github Actions",
  },
  {
    image: "median.png",
    name: "Median.co",
  },
];

export function Skills() {
  return (
    <section className="px-8 mt-7" id="skills">
      <div className="container mx-auto mb-20 text-center">
        <h1 color="blue-gray" className="mb-2 font-bold uppercase text-3xl">
          My Skills
        </h1>

        <p className="mx-auto w-full !text-gray-500 text-[16px]">
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </p>
      </div>

      <h3 className="mx-auto text-center">Frontend</h3>
      <div className="container mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-5 mb-4">
        {FRONTEND.map((tech, index) => (
          <div key={tech.name}>
            <Card
              color="transparent"
              shadow={false}
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <CardBody
                className="grid justify-center text-center"
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-200 p-2.5 text-white shadow">
                  <Image
                    width={50}
                    height={50}
                    alt={tech.image}
                    src={`/icons/${tech.image}`}
                    priority
                  />
                </div>
                <p className="text-[13px]">{tech.name}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <h3 className="mx-auto text-center">Backend</h3>
      <div className="container mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-5 mb-4">
        {BACKEND.map((tech, index) => (
          <div key={tech.name}>
            <Card
              color="transparent"
              shadow={false}
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <CardBody
                className="grid justify-center text-center"
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-200 p-2.5 text-white shadow">
                  <Image
                    width={50}
                    height={50}
                    alt={tech.image}
                    src={`/icons/${tech.image}`}
                    priority
                  />
                </div>
                <p className="text-[13px]">{tech.name}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <h3 className="mx-auto text-center">Tools, Database & CI/CD</h3>
      <div className="container mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-5 mb-6">
        {TOOLS.map((tech, index) => (
          <div key={tech.name}>
            <Card
              color="transparent"
              shadow={false}
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <CardBody
                className="grid justify-center text-center"
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-200 p-2.5 text-white shadow">
                  <Image
                    width={50}
                    height={50}
                    alt={tech.image}
                    src={`/icons/${tech.image}`}
                    priority
                  />
                </div>
                <p className="text-[13px]">{tech.name}</p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

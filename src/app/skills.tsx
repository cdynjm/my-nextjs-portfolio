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
      "I specialize in building responsive and modern user interfaces using technologies like TailwindCSS, Shadcn UI, JavaScript, TypeScript, React.js, Vue.js, Inertia.js, and Next.js.",
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    children:
      "My backend expertise includes working with HonoJS, PHP 8, Laravel, Livewire.js, and LighthousePHP. I build scalable and maintainable backends that power seamless frontend experiences.",
  },
  {
    icon: WrenchIcon,
    title: "Tools and Workflow",
    children:
      "I use modern tools like Git, GitHub Actions, Vite, Drizzle ORM, GraphQL to streamline development, manage data efficiently, and automate deployments.",
  },
  {
    icon: HashtagIcon,
    title: "Database & Authentication",
    children:
      "I design and manage robust relational databases using MySQL, PostgreSQL, MongoDB, Drizzle ORM and Supabase in Next.js, and Eloquent ORM in Laravel. For authentication, I implement secure login systems using NextAuth.js for Next.js and Laravel Breeze or Sanctum for Laravel.",
  },
  {
    icon: EyeIcon,
    title: "UI Consistency & Design Systems",
    children:
      "By leveraging component libraries like Shadcn UI, I maintain consistency in UI while ensuring accessibility and maintainability across complex applications.",
  },
  {
    icon: CloudIcon,
    title: "CI/CD & Deployment",
    children:
      "I implement continuous integration and deployment pipelines using GitHub Actions for fast and reliable production delivery.",
  },
];

const TECHSTACKS = [
  {
    image: "tailwind.png",
    name: "TaildwindCSS",
  },
  {
    image: "shadcn.png?new",
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
  {
    image: "nextauth.png",
    name: "NextAuth.js",
  },
  {
    image: "honojs.png?new",
    name: "Hono.js",
  },
  {
    image: "livewire.webp",
    name: "Livewire.js",
  },
  {
    image: "tanstack.png",
    name: "TanStack Query",
  },

  {
    image: "php.png",
    name: "PHP 8",
  },
  {
    image: "laravel-2.png",
    name: "Laravel",
  },
  {
    image: "lighthouse.png?new-1",
    name: "LighthousePHP",
  },
  {
    image: "python.webp",
    name: "Python",
  },
  {
    image: "graphql.png",
    name: "GraphQL",
  },
  {
    image: "mysql.png",
    name: "MySQL",
  },
  {
    image: "postgres.webp",
    name: "PostgreSQL",
  },
  {
    image: "mongodb.png",
    name: "MongoDB",
  },
  {
    image: "supabase.png",
    name: "Supabase",
  },
  {
    image: "drizzle.jpg",
    name: "Drizzle ORM",
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
    image: "github actions.png?new",
    name: "Github Actions",
  },
  {
    image: "median.png",
    name: "Median Co",
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

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 mb-20">
        {TECHSTACKS.map((tech, index) => (
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
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gray-100 p-2.5 text-white shadow">
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

      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 bg-gray-50">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

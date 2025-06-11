"use client";

const EXPERIENCES = [
  {
    period: "2024 - Present",
    title: "Software Engineer | Consultant",
    company: "Provincial Systems A.O.",
    location: "Remote",
    description:
      "Leading the development of enterprise-level web applications using Laravel, Vue.js, and TailwindCSS. Implementing complex database architectures and optimizing application performance.",
    tech: ["Laravel", "Vue.js", "TailwindCSS", "MySQL", "Livewire"],
    achievements: [
      "Reduced application load time by 40% through code optimization",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Developed projects intended for the office’s daily use",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    description:
      "Developed and maintained multiple client websites and web applications.",
    tech: ["PHP", "JavaScript", "Laravel", "Bootstrap", "MySQL", "Livewire"],
    achievements: [
      "Developed multiple system projects for specific institutions",
      "Learned new tech stacks and frameworks",
      "Improved offered services to each client",
    ],
  },
];

const OTHERS = [
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
      "Conducted the initial orientation and training session for the Document Tracking System in November 2024 at the Capitol Site offices in Southern Leyte. The session introduced staff to the system’s features and workflow, aimed at improving document processing efficiency and enhancing overall transparency in transactions.",
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
      "The e-Mercado Project was developed to support local commerce by providing a digital platform for market vendors and consumers in Southern Leyte. The project began in March 2023, starting with planning, system design, and development phases. It was completed in May 2023. In June 2023, the project was officially introduced during the province's anniversary celebration at the Capitol Site. The development team presented the system to Governor Mian Mercado and members of the Sangguniang Panlalawigan (SP), highlighting its potential to promote digital economic inclusion. Following feedback and recommendations from stakeholders, the system underwent enhancements in November 2024 to improve functionality, user experience, and adaptability based on actual community needs. The e-Mercado platform continues to serve as a step forward in the province’s digital transformation initiatives.",
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
    description: `Successfully presented and defended our capstone project titled "Property Inventory and Control System" at Southern Leyte State University (SLSU). The system was developed to enhance the tracking, management, and reporting of physical assets within the university. The presentation covered the system’s features, technical architecture, and its potential to streamline property-related operations.`,
  },
];

export default function Experience() {
  return (
    <section className="px-8 py-24 bg-white" id="experience">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
          Professional Experience
        </h2>
        <p className="mb-4 text-[16px] text-blue-gray-900">
          My journey in software development
        </p>
      </div>

      <div className="container mx-auto space-y-16">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-5 gap-6 items-start">
            {/* Left: Date */}
            <div className="md:col-span-2 text-center md:text-right">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                {exp.period}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600">
                {exp.company} | {exp.location}
              </p>
            </div>

            {/* Right: Details */}
            <div className="md:col-span-3 bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="mb-4 text-gray-700 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <p className="font-semibold mb-2">Key Achievements:</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-10 xl:mx-[200px]" />
      <div className="container mx-auto space-y-16">
        {OTHERS.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-5 gap-6 items-start">
            {/* Left: Date */}
            <div className="md:col-span-2 text-center md:text-right">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full">
                {exp.period}
              </span>
              <h3 className="mt-4 text-md font-semibold text-gray-800">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600">{exp.location}</p>
            </div>

            {/* Right: Details */}
            <div className="md:col-span-3 bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="mb-4 text-gray-700 text-[14px] leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

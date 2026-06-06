"use client";

import CertificateCard from "@/components/certificate-card";
import { motion } from "framer-motion";

const CERTS = [
  {
    img: "/certificates/Document Tracking Assistant Certificate.png",
    title: "Document Tracking Assistant Certificate",
    desc: "I have completed this certification for developing the Document Tracking Assistant for the Province of Southern Leyte",
    site: "_next/image?url=%2Fcertificates%2FDocument%20Tracking%20Assistant%20Certificate.png&w=1080&q=75",
  },
  {
    img: "/certificates/Enablement.png",
    title: "Enablement Certificate",
    desc: "Participated the ASEAN Data Science Explorers in 2023. An Enablement Session - SAP Analytics Cloud training session",
    site: "/_next/image?url=%2Fcertificates%2FEnablement.png&w=1080&q=75",
  },
  {
    img: "/certificates/Data Analysis with Python.png",
    title: "Data Analysis with Python Certificate",
    desc: "I completed the Data Analysis with Python Certification, where I learned to read data from CSVs and SQL, and used Numpy, Pandas, Matplotlib, and Seaborn to analyze and visualize it",
    site: "https://www.freecodecamp.org/certification/cdynjm/data-analysis-with-python-v7",
  },
  {
    img: "/certificates/Scientific Computing with Python.png",
    title: "Scientific Computing with Python Certificate",
    desc: "I completed this curriculum and learned to analyze and manipulate data with Python, using data structures, algorithms, OOP, and advanced calculations",
    site: "https://www.freecodecamp.org/certification/cdynjm/scientific-computing-with-python-v7",
  },
  {
    img: "/certificates/JavaScript Algorithms and Data Structures.png",
    title: "JavaScript Algorithms and Data Structures Certificate",
    desc: "I completed this certification and learned core JavaScript, OOP, Functional Programming, algorithms, local storage, and working with APIs",
    site: "https://www.freecodecamp.org/certification/cdynjm/javascript-algorithms-and-data-structures-v8",
  },
  {
    img: "/certificates/Front End Development Libraries.png",
    title: "Front End Development Libraries Certificate",
    desc: "Used Bootstrap, jQuery, Sass, React, and Redux to build 5 projects that tested everything I had learned up to that point. Completed all 5 projects and earned the Front End Development Libraries certification.",
    site: "https://www.freecodecamp.org/certification/cdynjm/front-end-development-libraries",
  },
  {
    img: "/certificates/Data Visualization.png",
    title: "Data Visualization Certificate",
    desc: "I built charts, graphs, and maps to present different types of data using the D3.js library. I also learned about JSON (JavaScript Object Notation) and how to work with data online using an API (Application Programming Interface).",
    site: "https://www.freecodecamp.org/certification/cdynjm/data-visualization",
  },
  {
    img: "/certificates/Relational Database.png",
    title: "Relational Database Certificate",
    desc: "I learned Bash fundamentals, how to manage files and write scripts, worked with PostgreSQL databases using SQL, and mastered Git for version control",
    site: "https://www.freecodecamp.org/certification/cdynjm/relational-database-v8",
  },
  {
    img: "/certificates/Responsive Web Design.png",
    title: "Responsive Web Design Certificate",
    desc: "I learned HTML and CSS by building projects like a cat photo app, a quiz site, a photo gallery, and a magazine layout. I also practiced modern CSS and responsive design techniques",
    site: "https://www.freecodecamp.org/certification/cdynjm/responsive-web-design",
  },
];

export function Certificates() {
  return (
    <section className="py-28 px-8 bg-[#f8f8f6] relative overflow-hidden" id="certificates">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-blue-50 opacity-70 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] rounded-full bg-indigo-50 opacity-60 blur-3xl" />
      </div>

      <div className="relative container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-20 text-center">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
              Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Certificates
            </h2>
            <p className="max-w-xl mx-auto text-[15px] leading-relaxed text-gray-500">
              These certificates show the real projects I built and the skills I
              practiced through FreeCodeCamps hands-on challenges and also with
              other trainings and seminars.
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-stretch">
          {CERTS.map((props, idx) => (
            <motion.div
              key={idx}
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <CertificateCard key={idx} {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
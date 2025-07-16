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
    <section className="py-28 px-8 bg-white" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto mb-20 text-center">
          <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
            Certificates
          </h2>
          <p className="mb-4 text-[16px] text-blue-gray-900">
            These certificates show the real projects I built and the skills I
            practiced through FreeCodeCamp’s hands-on challenges and also with
            other trainings and seminars
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {CERTS.map((props, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
          >
            <CertificateCard key={idx} {...props} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;

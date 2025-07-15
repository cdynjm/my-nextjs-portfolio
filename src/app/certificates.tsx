"use client";

import CertificateCard from "@/components/certificate-card";

const CERTS = [
  {
    img: "/certificates/Front End Development Libraries.png",
    title: "Front End Development Libraries",
    desc: "Used Bootstrap, jQuery, Sass, React, and Redux to build 5 projects that tested everything I had learned up to that point. Completed all 5 projects and earned the Front End Development Libraries certification.",
    site: "https://www.freecodecamp.org/certification/cdynjm/front-end-development-libraries",
  },
  {
    img: "/certificates/Data Visualization.png",
    title: "Data Visualization",
    desc: "In the Data Visualization Certification, I built charts, graphs, and maps to present different types of data using the D3.js library. I also learned about JSON (JavaScript Object Notation) and how to work with data online using an API (Application Programming Interface).",
    site: "https://www.freecodecamp.org/certification/cdynjm/data-visualization",
  },
  {
    img: "/certificates/Responsive Web Design.png",
    title: "Responsive Web Design",
    desc: "In this Responsive Web Design Certification, I learned HTML and CSS by building projects like a cat photo app, a quiz site, a photo gallery, and a magazine layout. I also practiced modern CSS and responsive design techniques",
    site: "https://www.freecodecamp.org/certification/cdynjm/responsive-web-design",
  },
  {
    img: "/certificates/Enablement.png",
    title: "Enablement Certificate",
    desc: "Participated the ASEAN Data Science Explorers in 2023. An Enablement Session - SAP Analytics Cloud training session",
    site: "/_next/image?url=%2Fcertificates%2FEnablement.png&w=1080&q=75",
  },
];

export function Certificates() {

  return (
    <section className="py-28 px-8 bg-white" id="certificates">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
          Certificates
        </h2>
        <p className="mb-4 text-[16px] text-blue-gray-900">
         These certificates show the real projects I built and the skills I practiced through FreeCodeCamp’s hands-on challenges
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {CERTS.map((props, idx) => (
          <CertificateCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
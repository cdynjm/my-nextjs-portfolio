"use client";

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="px-8 py-24 bg-gray-50" id="contact">
      <div className="container mx-auto text-center mb-12">
        <h2 className="mb-2 text-4xl font-semibold text-blue-gray-900">
          Get In Touch
        </h2>
        <p className="text-[16px] text-blue-gray-700">
          Have a project in mind? Let us discuss how I can help bring your ideas
          to life.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-6 text-left">
          Contact Information
        </h3>

        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <EnvelopeIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Email</p>
              <p className="text-gray-900">cdynjm@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Phone</p>
              <p className="text-gray-900">+63 927 502 1810</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Location</p>
              <p className="text-gray-900">Bontoc, Southern Leyte, PH</p>
            </div>
          </div>
        </div>

        <hr className="my-6" />

        <div>
          <p className="mb-4 text-sm font-medium text-gray-700">
            Connect with me
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/cdynjm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.facebook.com/jem.cdyn3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jemuel-cadayona-60b128318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@jemcdyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

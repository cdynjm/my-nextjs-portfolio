"use client";

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "cdynjm@gmail.com",
    href: "mailto:cdynjm@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+63 927 502 1810",
    href: "tel:+639275021810",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "Bontoc, Southern Leyte, PH",
    href: null,
  },
];

const SOCIALS = [
  {
    icon: FaGithub,
    href: "https://github.com/cdynjm",
    label: "GitHub",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/jem.cdyn3",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/jemuel-cadayona-60b128318/",
    label: "LinkedIn",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@jemcdyn",
    label: "TikTok",
  },
];

export default function Contact() {
  return (
    <section className="px-8 py-24 bg-[#f8f8f6] relative overflow-hidden" id="contact">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      </div>

      <div className="relative container mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
              Get In Touch
            </h2>
            <p className="text-[15px] text-gray-500 max-w-md mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* ── Card ── */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

              {/* Contact items */}
              <div className="p-7 space-y-4">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a href={href}
                          className="text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[14px] font-medium text-gray-900">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mx-7" />

              {/* Socials */}
              <div className="px-7 py-6">
                <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-4">
                  Connect with me
                </p>
                <div className="flex gap-2">
                  {SOCIALS.map(({ icon: Icon, href, label }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-900 text-gray-500 hover:text-white
                                 flex items-center justify-center transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
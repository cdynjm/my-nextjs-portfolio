"use client";

import { FaGithub, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const CURRENT_YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { label: "Skills",       href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects",     href: "#projects" },
  { label: "Experience",   href: "#experience" },
  { label: "Commissions",  href: "#commissions" },
  { label: "Contact",      href: "#contact" },
];

const SOCIALS = [
  { icon: FaGithub,    href: "https://github.com/cdynjm",                             label: "GitHub" },
  { icon: FaFacebookF, href: "https://www.facebook.com/jem.cdyn3",                    label: "Facebook" },
  { icon: FaLinkedinIn,href: "https://www.linkedin.com/in/jemuel-cadayona-60b128318/",label: "LinkedIn" },
  { icon: FaTiktok,    href: "https://www.tiktok.com/@jemcdyn",                       label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 pt-14 pb-8">
      <div className="container mx-auto">

        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-[18px] font-extrabold tracking-tight mb-2">
              JEM<span className="text-blue-400">.</span>CDYN
              <span className="ml-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-500 align-middle">Dev</span>
            </p>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              Building efficient, user-centric web applications with clean, scalable code.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[12px] font-medium text-gray-400 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white
                           flex items-center justify-center border border-white/10 transition-all duration-200"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/10 mb-6" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-500">
            &copy; {CURRENT_YEAR} Jemuel Cadayona. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-600">
            Built with{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors">
              Next.js
            </a>
            {" & "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors">
              Tailwind CSS
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
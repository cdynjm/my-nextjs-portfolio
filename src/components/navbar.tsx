"use client";

import React from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { FaGithub, FaFacebook } from "react-icons/fa";

const NAV_MENU = [
  { name: "Skills", href: "#skills" },
  { name: "Certificates", href: "#certificates" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#resume" },
  { name: "Commissions", href: "#commissions" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[15px] font-extrabold text-gray-900 tracking-tight hover:opacity-80 transition-opacity"
        >
          JEM<span className="text-blue-600">.</span>CDYN
          <span className="ml-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400 align-middle">
            Dev
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_MENU.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-[13px] font-medium text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all duration-150"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop social buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://www.facebook.com/jem.cdyn3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-150"
          >
            <FaFacebook className="w-3.5 h-3.5" />
            Facebook
          </a>
          <a
            href="https://github.com/cdynjm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] font-semibold text-white bg-gray-900 hover:bg-gray-700 px-3.5 py-1.5 rounded-lg transition-all duration-150"
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={handleOpen}
          className="lg:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 pb-5 pt-2 border-t border-gray-100">
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_MENU.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block text-[13px] font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-150"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
            <a
              href="https://www.facebook.com/jem.cdyn3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all duration-150"
            >
              <FaFacebook className="w-3.5 h-3.5" />
              Facebook
            </a>
            <a
              href="https://github.com/cdynjm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-semibold text-white bg-gray-900 hover:bg-gray-700 px-3.5 py-1.5 rounded-lg transition-all duration-150"
            >
              <FaGithub className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

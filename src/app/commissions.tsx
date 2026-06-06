"use client";

import { motion } from "framer-motion";

const FUNCTIONAL_FEATURES = [
  "Responsive website design",
  "Interactive UI components",
  "Cross-browser compatibility",
  "Complete web application with mobile application for Android (only if necessary)",
  "Frontend & backend integration",
  "Database design & implementation",
  "User authentication & authorization",
  "API development",
];

const MAINTENANCE_FEATURES = [
  "Free maintenance support only if project is for academic purposes (non-implementation)",
  "Maintenance support for deployed/implemented projects requires additional cost",
  "Maintenance support available with additional cost",
  "Lifetime maintenance included for free",
];

type PricingItem = {
  label: string;
  price: string;
  subLabel: string;
  mostPopular?: boolean;
  features: string[];
  maintenance: string[];
};

const PRICING: PricingItem[] = [
  {
    label: "Static Website",
    price: "₱5K - ₱10K",
    subLabel: "Basic",
    features: [
      "Responsive website design",
      "Interactive UI components",
      "Cross-browser compatibility",
    ],
    maintenance: ["Lifetime maintenance included for free"],
  },
  {
    label: "Full Stack Development",
    price: "₱15K - ₱20K",
    subLabel: "Students | Standard",
    mostPopular: true,
    features: [
      "Complete web application with mobile application for Android (only if necessary)",
      "Frontend & backend integration",
      "Database design & implementation",
      "User authentication & authorization",
      "API development",
    ],
    maintenance: [
      "Free maintenance support only if project is for academic purposes (non-implementation)",
      "Maintenance support for deployed/implemented projects requires additional cost",
    ],
  },
  {
    label: "Full Stack Development",
    price: "₱25K - ₱50K",
    subLabel: "Premium | Professional",
    features: [],
    maintenance: ["Maintenance support available with additional cost"],
  },
  {
    label: "Full Stack Development",
    price: "₱60K - ₱100K",
    subLabel: "Enterprise Level",
    features: [],
    maintenance: ["Lifetime maintenance included for free"],
  },
];

export default function Commissions() {
  let inheritedFeatures: string[] = [];

  return (
    <section className="px-8 py-24 bg-[#f8f8f6] relative overflow-hidden" id="commissions">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      </div>

      <div className="relative container mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-16 text-center">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mb-4">
              Commissions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
              Services & Pricing
            </h2>
            <p className="text-[15px] text-gray-500">
              Professional development services tailored to your needs
            </p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="w-10 h-0.5 bg-gray-300 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* ── Pricing Cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {PRICING.map((price, index) => {
            inheritedFeatures = [...inheritedFeatures, ...(price.features || [])];
            const fullFeatures = Array.from(new Set(inheritedFeatures));

            return (
              <motion.div
                key={index}
                className="flex"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`relative flex flex-col w-full rounded-2xl overflow-hidden transition-all duration-300
                    ${price.mostPopular
                      ? "shadow-2xl shadow-gray-900/20 ring-2 ring-gray-900 scale-[1.03]"
                      : "bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1"
                    }`}
                >
                  {/* Card Header */}
                  <div
                    className={`px-6 py-7 text-center ${
                      price.mostPopular
                        ? "bg-gray-900 text-white"
                        : "bg-gray-50 text-gray-900 border-b border-gray-100"
                    }`}
                  >
                    {price.mostPopular && (
                      <span className="inline-block text-[10px] font-extrabold tracking-[0.18em] uppercase bg-white text-gray-900 px-3 py-1 rounded-full mb-3 shadow-sm">
                        Most Popular
                      </span>
                    )}
                    <p className={`text-[11px] font-bold tracking-[0.18em] uppercase mb-1 ${price.mostPopular ? "text-gray-400" : "text-gray-400"}`}>
                      {price.subLabel}
                    </p>
                    <h4 className="text-[15px] font-bold mb-3 leading-snug">
                      {price.label}
                    </h4>
                    <p className={`text-2xl font-extrabold tracking-tight ${price.mostPopular ? "text-white" : "text-gray-900"}`}>
                      {price.price}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow bg-white px-5 py-6 space-y-2">
                    {FUNCTIONAL_FEATURES.map((feature, i) => {
                      const included = fullFeatures.includes(feature);
                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-2.5 text-[12px] leading-snug ${
                            included ? "text-gray-700" : "text-gray-300"
                          }`}
                        >
                          <span className={`mt-[2px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold
                            ${included
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-gray-100 text-gray-300"
                            }`}
                          >
                            {included ? "✓" : "✗"}
                          </span>
                          <span className={included ? "" : "line-through decoration-gray-200"}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}

                    {/* Divider */}
                    <div className="flex items-center gap-2 py-2">
                      <div className="flex-1 h-px bg-gray-100" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">
                        Maintenance
                      </span>
                      <div className="flex-1 h-px bg-gray-100" />
                    </div>

                    {MAINTENANCE_FEATURES.map((feature, i) => {
                      const included = price.maintenance.includes(feature);
                      return (
                        <div
                          key={`m-${i}`}
                          className={`flex items-start gap-2.5 text-[12px] leading-snug ${
                            included ? "text-gray-700" : "text-gray-300"
                          }`}
                        >
                          <span className={`mt-[2px] flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold
                            ${included
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-gray-100 text-gray-300"
                            }`}
                          >
                            {included ? "✓" : "✗"}
                          </span>
                          <span className={included ? "" : "line-through decoration-gray-200"}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="bg-white px-5 pb-6 pt-2">
                    <a
                      href="https://www.facebook.com/jem.cdyn3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center text-[13px] font-bold py-2.5 rounded-xl transition-colors duration-200
                        ${price.mostPopular
                          ? "bg-gray-900 text-white hover:bg-gray-700"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                    >
                      Avail & Chat Me
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Custom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="mt-16 mx-auto max-w-2xl text-center bg-white border border-gray-100 rounded-2xl shadow-sm px-10 py-10">
            <div className="w-10 h-10 rounded-2xl bg-gray-900 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Custom Project Requirements?
            </h3>
            <p className="text-[14px] text-gray-500 mb-6 leading-relaxed">
              Need something specific or have a unique project in mind? I offer
              custom solutions tailored to your exact requirements.
            </p>
            <a
              href="https://www.facebook.com/jem.cdyn3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-700 text-white text-[13px] font-bold px-8 py-3 rounded-xl transition-colors duration-200"
            >
              Let&apos;s Talk About It
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
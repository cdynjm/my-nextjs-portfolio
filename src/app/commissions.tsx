"use client";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

// All functional features (excluding delivery and maintenance)
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

// Maintenance features are treated separately since they differ
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
    maintenance: [
      "Lifetime maintenance included for free", // Added here
    ],
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
    <section className="px-8 py-24 bg-white" id="commissions">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto mb-20 text-center">
          <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
            Services & Pricing
          </h2>
          <p className="mb-4 text-[16px] text-blue-gray-900">
            Professional development services tailored to your needs
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-4">
        {PRICING.map((price, index) => {
          // Collect inherited + current features
          inheritedFeatures = [...inheritedFeatures, ...(price.features || [])];
          const fullFeatures = Array.from(new Set(inheritedFeatures));

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                key={index}
                className={`p-0 shadow-lg border flex flex-col h-full ${
                  price.mostPopular ? "scale-105 border-black" : ""
                }`}
              >
                <CardHeader
                  placeholder=""
                  onResize={() => {}}
                  onResizeCapture={() => {}}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  shadow={false}
                  floated={false}
                  className={`py-8 text-center ${
                    price.mostPopular
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {price.mostPopular && (
                    <span className="text-xs bg-white text-black px-3 py-1 rounded-full mb-2 inline-block font-semibold">
                      MOST POPULAR
                    </span>
                  )}
                  <h4 className="text-xl font-bold">{price.label}</h4>
                  <p className="text-2xl font-semibold mt-2">{price.price}</p>
                  <p className="text-sm opacity-70">{price.subLabel}</p>
                </CardHeader>

                <CardBody
                  placeholder=""
                  onResize={() => {}}
                  onResizeCapture={() => {}}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  className="bg-white text-sm text-gray-800 space-y-3 px-6 py-8 flex-grow"
                >
                  <ul className="list-none space-y-2">
                    {FUNCTIONAL_FEATURES.map((feature, i) => {
                      const included = fullFeatures.includes(feature);
                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-2 ${
                            !included ? "text-gray-400 italic" : ""
                          }`}
                        >
                          <span
                            className={`${
                              included
                                ? "text-green-600 font-bold"
                                : "text-red-500 font-bold"
                            }`}
                          >
                            {included ? "✓" : "✗"}
                          </span>
                          {feature}
                        </li>
                      );
                    })}

                    <hr className="my-3" />

                    {MAINTENANCE_FEATURES.map((feature, i) => {
                      const included = price.maintenance.includes(feature);
                      return (
                        <li
                          key={`m-${i}`}
                          className={`flex items-start gap-2 ${
                            !included ? "text-gray-400 italic" : ""
                          }`}
                        >
                          <span
                            className={`${
                              included
                                ? "text-green-600 font-bold"
                                : "text-red-500 font-bold"
                            }`}
                          >
                            {included ? "✓" : "✗"}
                          </span>
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>

                <CardFooter
                  placeholder=""
                  onResize={() => {}}
                  onResizeCapture={() => {}}
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  className="px-6 py-6"
                >
                  <a href="https://www.facebook.com/jem.cdyn3" target="_blank">
                    <Button
                      placeholder=""
                      onResize={() => {}}
                      onResizeCapture={() => {}}
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                      fullWidth
                      className="bg-black text-white hover:bg-gray-900"
                    >
                      Avail & Chat Me
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container mx-auto mt-20 text-center justify-center max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-gray-900 mb-2">
            Custom Project Requirements?
          </h3>
          <p className="text-[16px] text-blue-gray-800 mb-6">
            Need something specific or have a unique project in mind? I offer
            custom solutions tailored to your exact requirements.
          </p>
          <a href="https://www.facebook.com/jem.cdyn3" target="_blank">
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="bg-gray-800 text-white hover:bg-black"
            >
              Let us Talk About It
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

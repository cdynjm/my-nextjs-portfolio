"use client";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const PRICING = [
  {
    label: "Static Website",
    price: "₱5K - ₱10K",
    subLabel: "Starting Price",
    features: [
      "Responsive website design",
      "Interactive UI components",
      "Cross-browser compatibility",
      "2 weeks delivery",
    ],
  },
  {
    label: "Full Stack Development",
    price: "₱15K - ₱20K",
    subLabel: "Exclusive for Students Only",
    mostPopular: true,
    features: [
      "Complete web application",
      "Frontend & backend integration",
      "Database design & implementation",
      "User authentication & authorization",
      "API development",
      "4 weeks delivery",
    ],
  },
  {
    label: "Full Stack Development",
    price: "₱25K - ₱50K",
    subLabel: "Starting Price",
    features: [
      "Complete web application",
      "Frontend & backend integration",
      "Database design & implementation",
      "User authentication & authorization",
      "API development",
      "6–8 weeks delivery",
    ],
  },
];

export default function Commissions() {
  return (
    <section className="px-8 py-24 bg-white" id="commissions">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="mb-4 text-4xl font-semibold text-blue-gray-900">
          Services & Pricing
        </h2>
        <p className="mb-4 text-[16px] text-blue-gray-900">
          Professional development services tailored to your needs
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-3">
        {PRICING.map((price, index) => {
          const isMostPopular = price.mostPopular;

          return (
            <Card
              key={index}
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className={`p-0 shadow-lg border ${
                isMostPopular ? "scale-105 border-black" : ""
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
                  isMostPopular
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {isMostPopular && (
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
                className="bg-white text-sm text-gray-800 space-y-3 px-6 py-8"
              >
                <ul className="list-none space-y-2">
                  {price.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
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
          );
        })}
      </div>
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
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              className="bg-gray-800 text-white hover:bg-black"
              placeholder=""
            >
              Let us Talk About It
            </Button>
          </a>
        </div>
    </section>
  );
}

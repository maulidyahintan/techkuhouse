"use client";

import { useState } from "react";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  technologies: string[];
}

interface ServicesAccordionProps {
  services: Service[];
  whatsappNumber: string;
}

const serviceColors: Record<string, { bg: string; expanded: string; accent: string }> = {
  "web-development": {
    bg: "bg-blue-50",
    expanded: "bg-blue-100/50",
    accent: "text-blue-600",
  },
  "seo-bergaransi": {
    bg: "bg-emerald-50",
    expanded: "bg-emerald-100/50",
    accent: "text-emerald-600",
  },
  "mobile-app": {
    bg: "bg-violet-50",
    expanded: "bg-violet-100/50",
    accent: "text-violet-600",
  },
  "google-ads": {
    bg: "bg-amber-50",
    expanded: "bg-amber-100/50",
    accent: "text-amber-600",
  },
  "social-media-ads": {
    bg: "bg-pink-50",
    expanded: "bg-pink-100/50",
    accent: "text-pink-600",
  },
  "web-maintenance": {
    bg: "bg-slate-50",
    expanded: "bg-slate-100/50",
    accent: "text-slate-600",
  },
};

export default function ServicesAccordion({ services, whatsappNumber }: ServicesAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {services.map((service) => {
        const isOpen = openId === service.id;
        const colors = serviceColors[service.id] || serviceColors["web-development"];

        return (
          <div
            key={service.id}
            id={service.id}
            className={`rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 ${
              isOpen ? "shadow-lg" : "shadow-sm hover:shadow-md"
            } ${colors.bg}`}
          >
            {/* Accordion Header - Always Visible */}
            <button
              onClick={() => toggleService(service.id)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors duration-200 hover:bg-black/5"
            >
              {/* Left Side: Icon + Title + Description Snippet */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="text-4xl flex-shrink-0 mt-1">{service.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-dark mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-dark-light line-clamp-1">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Pricing + Toggle Icon */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="hidden sm:block text-right">
                  <div className="text-xs text-dark-light mb-0.5">Harga</div>
                  <div className={`text-base md:text-lg font-bold ${colors.accent}`}>
                    {service.pricing}
                  </div>
                </div>
                <div
                  className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-dark-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Accordion Content - Expandable */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className={`px-6 pb-6 pt-2 ${colors.expanded}`}>
                {/* Mobile Pricing (shown when expanded) */}
                <div className="sm:hidden mb-4 pb-4 border-b border-gray-300">
                  <div className="text-xs text-dark-light mb-1">Harga</div>
                  <div className={`text-lg font-bold ${colors.accent}`}>
                    {service.pricing}
                  </div>
                </div>

                {/* Full Description */}
                <div className="mb-6">
                  <p className="text-dark-light leading-relaxed">{service.description}</p>
                </div>

                {/* Features Grid */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
                    Fitur Layanan:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-dark-light">
                        <span className={`mr-2 mt-0.5 flex-shrink-0 font-bold ${colors.accent}`}>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3 text-sm uppercase tracking-wide">
                    Teknologi:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white/80 text-dark text-xs font-medium rounded-full border border-gray-300 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-300">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Halo%20TechKuHouse%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <span className="mr-2">💬</span>
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

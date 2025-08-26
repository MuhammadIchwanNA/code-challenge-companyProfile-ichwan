"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import Footer from "@/app/components/Footer";

const services = [
  {
    id: "cat-boarding",
    title: "Cat Boarding",
    shortDesc: "Spacious suites for overnight stays.",
    longDesc:
      "Premium overnight accommodations with luxury suites designed for your cat's comfort and security.",
    img: "/catBoarding.png",
    features: [
      "24/7 supervision",
      "Climate-controlled rooms",
      "Daily playtime",
      "Medical care available",
    ],
    startingPrice: "From $45/night",
  },
  {
    id: "day-care",
    title: "Day Care",
    shortDesc: "Play, rest, and cuddles while you're away.",
    longDesc:
      "Daily care services where your cat can socialize, play, and receive personalized attention throughout the day.",
    img: "/catDaycare.jpg",
    features: [
      "Social playtime",
      "Feeding schedule",
      "Rest periods",
      "Exercise activities",
    ],
    startingPrice: "From $25/day",
  },
  {
    id: "playtime-enrichment",
    title: "Playtime & Enrichment",
    shortDesc: "Toys, climbing trees, and more.",
    longDesc:
      "Specialized enrichment programs designed to keep your cat mentally stimulated and physically active.",
    img: "/catPlaytime.jpg",
    features: [
      "Interactive toys",
      "Climbing structures",
      "Mental stimulation",
      "Customized activities",
    ],
    startingPrice: "From $15/session",
  },
  {
    id: "health-vet-care",
    title: "Health & Vet Care",
    shortDesc: "On-call vet for peace of mind.",
    longDesc:
      "Comprehensive health monitoring and veterinary care to ensure your cat's wellbeing at all times.",
    img: "/petVet.jpg",
    features: [
      "Health monitoring",
      "Medication administration",
      "Emergency care",
      "Regular check-ups",
    ],
    startingPrice: "From $35/visit",
  },
];

export default function ServicesPage() {
  const [showSignup, setShowSignup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-100/20 to-purple-100/15 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: "var(--Cream)",
              color: "var(--SoftWood)",
            }}
          >
            Complete Service Catalog
          </div>
          <h1
            className="text-4xl md:text-6xl font-light mb-6 text-gray-800"
            style={{ fontFamily: "var(--font-libre)" }}
          >
            Our Premium
            <span
              className="block text-5xl md:text-7xl font-bold mt-2"
              style={{ color: "var(--SoftWood)" }}
            >
              Cat Care Services
            </span>
          </h1>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Discover our comprehensive range of services designed to provide the
            best possible care for your feline companions.
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src={service.img}
                        alt={service.title}
                        width={600}
                        height={450}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div
                      className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      style={{ backgroundColor: "var(--SoftWood)" }}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3
                      className="text-3xl md:text-4xl font-bold mb-4"
                      style={{
                        fontFamily: "var(--font-libre)",
                        color: "var(--SoftWood)",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-lg text-gray-700 leading-relaxed mb-6"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {service.longDesc}
                    </p>
                  </div>
                  {/* Features */}
                  <div className="space-y-3">
                    <h4
                      className="text-lg font-semibold text-gray-800"
                      style={{ fontFamily: "var(--font-libre)" }}
                    >
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: "var(--SoftWood)" }}
                          >
                            <span className="text-white text-xs">✓</span>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Pricing & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                    <div
                      className="text-2xl font-bold"
                      style={{
                        color: "var(--SoftWood)",
                        fontFamily: "var(--font-libre)",
                      }}
                    >
                      {service.startingPrice}
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/services/${service.id}`}
                        className="px-6 py-3 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
                        style={{
                          backgroundColor: "var(--SoftWood)",
                          color: "var(--white)",
                          fontFamily: "var(--font-libre)",
                        }}
                      >
                        Learn More
                      </Link>
                      <Link
                        href={`/signup?service=${encodeURIComponent(
                          service.title
                        )}`}
                        className="px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-200 text-center"
                        style={{
                          borderColor: "var(--SoftWood)",
                          color: "var(--SoftWood)",
                          fontFamily: "var(--font-libre)",
                        }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-libre)",
              color: "var(--SoftWood)",
            }}
          >
            Ready to Give Your Cat the Best Care?
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Contact us today to discuss your cat's specific needs and create a
            customized care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup?service=Consultation"
              className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg text-center"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Schedule Consultation
            </Link>
            <a
              href="/coming-soon"
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 text-center"
              style={{
                borderColor: "var(--SoftWood)",
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Call (555) 123-CATS
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

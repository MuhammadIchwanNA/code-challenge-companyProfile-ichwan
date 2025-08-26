import Image from "next/image";
import Link from "next/link";
import { Libre_Franklin, Red_Hat_Mono } from "next/font/google";

const libre = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre" });
const mono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-mono" });

const services = [
  {
    title: "Cat Boarding",
    desc: "Spacious suites for overnight stays.",
    img: "/catBoarding.png",
    link: "/services/cat-boarding",
  },
  {
    title: "Day Care",
    desc: "Play, rest, and cuddles while you're away.",
    img: "/catDaycare.jpg",
    link: "/services/day-care",
  },
  {
    title: "Playtime & Enrichment",
    desc: "Toys, climbing trees, and more.",
    img: "/catPlaytime.jpg",
    link: "/services/playtime-enrichment",
  },
  {
    title: "Health & Vet Care",
    desc: "On-call vet for peace of mind.",
    img: "/petVet.jpg",
    link: "/services/health-vet-care",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={`${libre.variable} ${mono.variable} py-24 relative overflow-hidden`}
      style={{ backgroundColor: "var(--softWhite)" }}
    >
      {/* Elegant background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-100/20 to-purple-100/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100/15 to-yellow-100/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-20">
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: "var(--Cream)",
              color: "var(--SoftWood)",
            }}
          >
            Our Premium Services
          </div>
          <h2
            className="text-4xl md:text-6xl font-light mb-6 text-gray-800"
            style={{ fontFamily: "var(--font-libre)" }}
          >
            Exceptional Care for Your
            <span
              className="block text-5xl md:text-7xl font-bold mt-2"
              style={{ color: "var(--SoftWood)" }}
            >
              Beloved Cats
            </span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Discover our comprehensive care solutions designed with love and
            expertise to ensure your feline friends receive the finest attention
            while you're away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group flex flex-col items-center transform transition-all duration-500 hover:scale-105"
            >
              {/* Compact Circle Image */}
              <div className="relative mb-4">
                <div
                  className="w-32 h-32 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 ring-2 ring-white/50"
                  style={{ borderColor: "var(--SoftWood)" }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* accent dot */}
                <div
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full shadow-md"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  <div className="w-full h-full rounded-full bg-white/40 backdrop-blur-sm"></div>
                </div>

                {/* Service number badge */}
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-md"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  {i + 1}
                </div>
              </div>

              <div className="group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                <Link href={service.link}>
                  <div
                    className="px-4 py-4 rounded-xl shadow-md max-w-xs mx-auto relative overflow-hidden group-hover:shadow-lg transition-all duration-500 cursor-pointer"
                    style={{ backgroundColor: "var(--Cream)" }}
                  >
                    <div className="relative z-10 text-center">
                      <h3
                        className="font-semibold text-base mb-2 group-hover:scale-105 transition-transform duration-300"
                        style={{
                          fontFamily: "var(--font-libre)",
                          color: "var(--SoftWood)",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {service.desc}
                      </p>
                      <div
                        className="mt-3 text-xs font-medium"
                        style={{
                          color: "var(--SoftWood)",
                          fontFamily: "var(--font-libre)",
                        }}
                      >
                        Learn More →
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-xl"></div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              View All Services
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 inline-block hover:bg-[var(--Cream)]"
              style={{
                borderColor: "var(--SoftWood)",
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)",
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const pricingPlans = [
  {
    name: "Basic Health Check",
    price: "$35",
    period: "per visit",
    features: [
      "General health assessment",
      "Temperature & vital signs",
      "Weight monitoring",
      "Basic health report",
      "Medication reminders",
    ],
    popular: false,
  },
  {
    name: "Comprehensive Care",
    price: "$65",
    period: "per visit",
    features: [
      "Complete physical examination",
      "Preventive care consultation",
      "Vaccination tracking",
      "Health record maintenance",
      "Behavioral assessment",
      "Detailed health report",
      "24/7 emergency contact",
    ],
    popular: true,
  },
  {
    name: "Premium Wellness",
    price: "$95",
    period: "per visit",
    features: [
      "Comprehensive health evaluation",
      "Preventive care planning",
      "Specialized health monitoring",
      "Nutrition consultation",
      "Senior care management",
      "Emergency response service",
      "Veterinary consultation",
      "Health trend analysis",
    ],
    popular: false,
  },
];

const healthServices = [
  {
    category: "Preventive Care",
    icon: "🛡️",
    services: [
      "Regular health monitoring",
      "Vaccination scheduling",
      "Parasite prevention",
      "Dental health checks",
      "Weight management",
    ],
  },
  {
    category: "Medication Management",
    icon: "💊",
    services: [
      "Prescription administration",
      "Dosage tracking",
      "Side effect monitoring",
      "Compliance reporting",
      "Pharmacy coordination",
    ],
  },
  {
    category: "Emergency Response",
    icon: "🚨",
    services: [
      "24/7 emergency contact",
      "Immediate assessment",
      "Veterinary coordination",
      "Transport assistance",
      "Family notification",
    ],
  },
  {
    category: "Senior Cat Care",
    icon: "👴",
    services: [
      "Age-related health monitoring",
      "Comfort care planning",
      "Mobility assistance",
      "Cognitive health support",
      "Quality of life assessment",
    ],
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    location: "Pet Owner & Veterinarian",
    rating: 5,
    comment:
      "As a vet myself, I'm impressed by their health monitoring protocols. When Patches needed daily insulin, they managed it perfectly with detailed reports.",
    catName: "Patches",
    service: "Comprehensive Care",
  },
  {
    name: "William Thompson",
    location: "Senior Cat Parent",
    rating: 5,
    comment:
      "My 16-year-old Smokey has multiple health conditions. The premium wellness program gives me peace of mind that he's getting the best care possible.",
    catName: "Smokey",
    service: "Premium Wellness",
  },
  {
    name: "Rachel Green",
    location: "Working Professional",
    rating: 5,
    comment:
      "I travel frequently for work. Knowing that Muffin's medication schedule is properly managed and monitored makes all the difference for my peace of mind.",
    catName: "Muffin",
    service: "Basic Health Check",
  },
];

const certifications = [
  {
    title: "Licensed Veterinary Technicians",
    desc: "Our staff includes certified veterinary technicians with specialized training in feline care.",
  },
  {
    title: "Emergency Response Certified",
    desc: "All team members are trained in pet first aid and emergency response protocols.",
  },
  {
    title: "Medication Administration Certified",
    desc: "Proper certification for safe handling and administration of prescription medications.",
  },
  {
    title: "Partner Veterinary Clinics",
    desc: "Established relationships with local veterinary clinics for seamless care coordination.",
  },
];

const healthIndicators = [
  { indicator: "Daily Health Checks", icon: "📋", frequency: "Every visit" },
  { indicator: "Weight Monitoring", icon: "⚖️", frequency: "Weekly" },
  { indicator: "Appetite Tracking", icon: "🍽️", frequency: "Daily" },
  { indicator: "Behavior Assessment", icon: "🧠", frequency: "Ongoing" },
  { indicator: "Mobility Evaluation", icon: "🏃", frequency: "Weekly" },
  { indicator: "Vital Signs Check", icon: "❤️", frequency: "As needed" },
];

export default function HealthVetCarePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-green-100/20 to-teal-100/15 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  backgroundColor: "var(--Cream)",
                  color: "var(--SoftWood)",
                }}
              >
                Professional Health Care
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-libre)",
                  color: "var(--SoftWood)",
                }}
              >
                Health & Vet Care
              </h1>
              <h2
                className="text-2xl md:text-3xl font-light mb-6 text-gray-800"
                style={{ fontFamily: "var(--font-libre)" }}
              >
                On-Call Vet for Peace of Mind
              </h2>
              <p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Comprehensive health monitoring and veterinary care to ensure
                your cat's wellbeing at all times. Our qualified team provides
                professional health assessments, medication management, and
                emergency response services with direct veterinary support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={{
                    pathname: "/signup",
                    query: { service: "Health & Vet Care" },
                  }}
                  className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                  style={{
                    backgroundColor: "var(--SoftWood)",
                    color: "var(--white)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Schedule Check-up
                </Link>
                <Link
                  href={{
                    pathname: "/signup",
                    query: { service: "Health & Vet Care" },
                  }}
                  className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 inline-block"
                  style={{
                    borderColor: "var(--SoftWood)",
                    color: "var(--SoftWood)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Emergency Contact
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/petVet.jpg"
                  alt="Veterinary Care for Cats"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                style={{ backgroundColor: "var(--SoftWood)" }}
              >
                🏥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Monitoring Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Comprehensive Health Monitoring
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              We track key health indicators to ensure early detection and
              optimal care for your cat's wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthIndicators.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-libre)",
                    color: "var(--SoftWood)",
                  }}
                >
                  {item.indicator}
                </h3>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.frequency}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Services Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Our Health Services
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Complete health care solutions covering prevention, treatment, and
              emergency response for all life stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthServices.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-libre)",
                      color: "var(--SoftWood)",
                    }}
                  >
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "var(--SoftWood)" }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Professional Qualifications
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Our team maintains the highest standards of professional
              certification and training in veterinary care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--SoftWood)" }}
                  >
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-libre)",
                        color: "var(--SoftWood)",
                      }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-gray-700"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {cert.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Health Care Packages
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Professional health care services tailored to your cat's specific
              needs and health requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "ring-4 ring-blue-200" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div
                      className="px-6 py-2 rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: "var(--SoftWood)" }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-libre)",
                      color: "var(--SoftWood)",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: "var(--SoftWood)" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-gray-600"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "var(--SoftWood)" }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/coming-soon"
                  className={`w-full py-4 font-semibold rounded-lg transition-all duration-200 ${
                    plan.popular
                      ? "text-white hover:scale-105 shadow-lg"
                      : "border-2 hover:bg-opacity-10"
                  }`}
                  style={{
                    backgroundColor: plan.popular
                      ? "var(--SoftWood)"
                      : "transparent",
                    borderColor: plan.popular
                      ? "transparent"
                      : "var(--SoftWood)",
                    color: plan.popular ? "var(--white)" : "var(--SoftWood)",
                    fontFamily: "var(--font-libre)",
                    padding: "12px"
                  }}
                >
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              * Emergency services available 24/7. Specialty care coordination
              included in all packages.
            </p>
            <a
              href="/coming-soon"
              className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-200"
              style={{
                borderColor: "var(--SoftWood)",
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Emergency Contact Info
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Trusted Health Care Partners
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Hear from cat parents who trust us with their pets' health and
              wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>

                <p
                  className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  "{testimonial.comment}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4
                        className="font-bold text-gray-800"
                        style={{ fontFamily: "var(--font-libre)" }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="text-sm font-medium"
                        style={{
                          color: "var(--SoftWood)",
                          fontFamily: "var(--font-libre)",
                        }}
                      >
                        {testimonial.catName}
                      </p>
                      <p
                        className="text-xs text-gray-500"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {testimonial.service}
                      </p>
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
            Your Cat's Health is Our Priority
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Schedule a health consultation to discuss your cat's specific needs
            and create a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={{
                pathname: "/signup",
                query: { service: "Health & Vet Care" },
              }}
              className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Schedule Health Check
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 inline-block"
              style={{
                borderColor: "var(--SoftWood)",
                color: "var(--SoftWood)",
                fontFamily: "var(--font-libre)",
              }}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

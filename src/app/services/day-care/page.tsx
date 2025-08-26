"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const pricingPlans = [
  {
    name: "Half Day",
    price: "$25",
    period: "4 hours",
    features: [
      "4 hours of supervised care",
      "Feeding if needed",
      "Basic playtime",
      "Rest periods",
      "Photo updates",
    ],
    popular: false,
  },
  {
    name: "Full Day",
    price: "$40",
    period: "8 hours",
    features: [
      "Full day care (8 hours)",
      "2 meals included",
      "Multiple play sessions",
      "Social interaction time",
      "Naptime supervision",
      "Daily report card",
    ],
    popular: true,
  },
  {
    name: "Extended Day",
    price: "$55",
    period: "10+ hours",
    features: [
      "Extended care (10+ hours)",
      "All meals & snacks",
      "Premium enrichment activities",
      "One-on-one attention",
      "Grooming touch-up",
      "Video updates throughout day",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Jennifer Wu",
    location: "Tech District",
    rating: 5,
    comment:
      "Perfect for my work schedule! Oliver loves the social time and comes home tired and happy. The staff really cares about each cat individually.",
    catName: "Oliver",
    package: "Full Day",
  },
  {
    name: "David Martinez",
    location: "University Area",
    rating: 5,
    comment:
      "Bella was anxious at first, but the patient staff helped her feel comfortable. Now she gets excited when we pull up to Purrfect Getaway!",
    catName: "Bella",
    package: "Half Day",
  },
  {
    name: "Lisa Thompson",
    location: "Business District",
    rating: 5,
    comment:
      "The extended day package is a lifesaver for my long work days. Max gets better care here than he would home alone. Highly recommend!",
    catName: "Max",
    package: "Extended Day",
  },
];

const schedule = [
  { time: "7:00 AM", activity: "Arrival & Morning Check-in", icon: "🌅" },
  {
    time: "8:00 AM",
    activity: "Breakfast & Medication (if needed)",
    icon: "🍽️",
  },
  { time: "9:00 AM", activity: "Morning Playtime & Enrichment", icon: "🎾" },
  { time: "11:00 AM", activity: "Rest Period & Quiet Time", icon: "😴" },
  { time: "12:00 PM", activity: "Lunch & Hydration", icon: "🥛" },
  { time: "1:00 PM", activity: "Social Time & Group Activities", icon: "👥" },
  { time: "3:00 PM", activity: "Individual Attention & Cuddles", icon: "🤗" },
  { time: "4:00 PM", activity: "Afternoon Snack", icon: "🐟" },
  { time: "5:00 PM", activity: "Wind-down Activities", icon: "🧘" },
  { time: "6:00 PM", activity: "Pick-up & Daily Report", icon: "📋" },
];

export default function DayCarePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--softWhite)" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-yellow-100/20 to-orange-100/15 rounded-full blur-3xl"></div>

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
                Daily Cat Care
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-libre)",
                  color: "var(--SoftWood)",
                }}
              >
                Day Care
              </h1>
              <h2
                className="text-2xl md:text-3xl font-light mb-6 text-gray-800"
                style={{ fontFamily: "var(--font-libre)" }}
              >
                Play, Rest & Cuddles All Day
              </h2>
              <p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Perfect for busy cat parents who want their feline friends to
                have companionship, stimulation, and care during the day. Our
                day care provides a safe, fun environment where cats can
                socialize, play, and relax under professional supervision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={{
                    pathname: "/signup",
                    query: { service: "Day Care" },
                  }}
                  className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                  style={{
                    backgroundColor: "var(--SoftWood)",
                    color: "var(--white)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Enroll Today
                </Link>
                <Link
                  href={{
                    pathname: "/signup",
                    query: { service: "Day Care" },
                  }}
                  className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200 inline-block"
                  style={{
                    borderColor: "var(--SoftWood)",
                    color: "var(--SoftWood)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Schedule Visit
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/catDaycare.jpg"
                  alt="Cat Day Care Activity"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                style={{ backgroundColor: "var(--SoftWood)" }}
              >
                🎪
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
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
              A Typical Day at Day Care
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              We follow a structured schedule to ensure your cat gets the right
              balance of activity, rest, and nutrition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div
                      className="text-lg font-bold mb-1"
                      style={{
                        color: "var(--SoftWood)",
                        fontFamily: "var(--font-libre)",
                      }}
                    >
                      {item.time}
                    </div>
                    <p
                      className="text-gray-700"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.activity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Day Care Benefits
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              More than just cat sitting - we provide enriching experiences that
              benefit your cat's physical and mental health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Mental Stimulation",
                desc: "Puzzle toys, interactive games, and enrichment activities to keep minds sharp and engaged.",
              },
              {
                icon: "🏃",
                title: "Physical Exercise",
                desc: "Structured play sessions and climbing activities to maintain healthy weight and fitness.",
              },
              {
                icon: "👥",
                title: "Socialization",
                desc: "Supervised interaction with other cats to develop healthy social behaviors.",
              },
              {
                icon: "❤️",
                title: "Emotional Support",
                desc: "Individual attention and cuddle time to reduce anxiety and loneliness.",
              },
              {
                icon: "🩺",
                title: "Health Monitoring",
                desc: "Daily wellness checks to catch any health concerns early.",
              },
              {
                icon: "📱",
                title: "Peace of Mind",
                desc: "Regular updates and photos so you know your cat is happy and safe.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-libre)",
                    color: "var(--SoftWood)",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" style={{ backgroundColor: "var(--Cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Day Care Packages
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Flexible options to fit your schedule and your cat's needs.
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
                      / {plan.period}
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
                    padding: "12px",
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
              * Multi-day packages and weekly rates available. First day
              includes free assessment.
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
              Request Package Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Day Care Success Stories
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              See how day care has benefited our feline friends and their
              families.
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
                        {testimonial.package}
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
        style={{ backgroundColor: "var(--Cream)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-libre)",
              color: "var(--SoftWood)",
            }}
          >
            Give Your Cat the Perfect Day
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Start with a trial day to see how much your cat loves our day care
            program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/coming-soon"
              className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Book Trial Day
            </a>
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

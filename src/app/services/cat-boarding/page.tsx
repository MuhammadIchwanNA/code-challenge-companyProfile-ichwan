"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const pricingPlans = [
  {
    name: "Standard Suite",
    price: "$45",
    period: "per night",
    features: [
      "Comfortable private suite",
      "Daily feeding & cleaning",
      "Basic playtime (30 min/day)",
      "Daily health check",
      "Photo updates",
    ],
    popular: false,
  },
  {
    name: "Premium Suite",
    price: "$65",
    period: "per night",
    features: [
      "Luxury suite with window view",
      "Premium food & treats",
      "Extended playtime (1 hour/day)",
      "Grooming session",
      "Daily video calls",
      "Bedtime story reading",
    ],
    popular: true,
  },
  {
    name: "VIP Suite",
    price: "$85",
    period: "per night",
    features: [
      "Executive suite with private garden",
      "Gourmet meals & special treats",
      "Personal care assistant",
      "Multiple play sessions",
      "Professional photos",
      "24/7 live cam access",
      "Massage therapy",
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    comment:
      "Whiskers stayed here for a week while we were on vacation. The staff was incredible and sent daily photos. He came home relaxed and happy!",
    catName: "Whiskers",
    duration: "7 nights",
  },
  {
    name: "Mike Chen",
    location: "Westside",
    rating: 5,
    comment:
      "The premium suite was worth every penny. Luna had her own little paradise and the grooming service was fantastic. Highly recommend!",
    catName: "Luna",
    duration: "4 nights",
  },
  {
    name: "Emily Rodriguez",
    location: "Eastside",
    rating: 5,
    comment:
      "First time leaving Mittens overnight anywhere. The VIP suite with garden access was perfect for our anxious cat. She's already asking to go back!",
    catName: "Mittens",
    duration: "3 nights",
  },
];

export default function CatBoardingPage() {

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
                Premium Cat Boarding
              </div>
              <h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-libre)",
                  color: "var(--SoftWood)",
                }}
              >
                Cat Boarding
              </h1>
              <h2
                className="text-2xl md:text-3xl font-light mb-6 text-gray-800"
                style={{ fontFamily: "var(--font-libre)" }}
              >
                Luxury Overnight Accommodations
              </h2>
              <p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Spacious, comfortable suites designed specifically for your
                cat's overnight stays. Each suite is equipped with cozy bedding,
                climbing areas, and everything your feline friend needs for a
                relaxing getaway while you're away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={{
                    pathname: "/signup",
                    query: { service: "Cat Boarding" },
                  }}
                  className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
                  style={{
                    backgroundColor: "var(--SoftWood)",
                    color: "var(--white)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Book Now
                </Link>
                <a
                  href="/coming-soon"
                  className="px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-200"
                  style={{
                    borderColor: "var(--SoftWood)",
                    color: "var(--SoftWood)",
                    fontFamily: "var(--font-libre)",
                  }}
                >
                  Tour Our Facility
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/catBoarding.png"
                  alt="Cat Boarding Suite"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                style={{ backgroundColor: "var(--SoftWood)" }}
              >
                🏨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What Makes Our Boarding Special
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              We've designed every aspect of our boarding service with your
              cat's comfort and happiness in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Private Suites",
                desc: "Each cat gets their own private space with comfortable bedding and personal amenities.",
              },
              {
                icon: "👥",
                title: "24/7 Supervision",
                desc: "Our trained staff monitors your cat around the clock to ensure their safety and wellbeing.",
              },
              {
                icon: "🌡️",
                title: "Climate Control",
                desc: "Temperature-controlled environment to keep your cat comfortable year-round.",
              },
              {
                icon: "🎾",
                title: "Daily Playtime",
                desc: "Structured play sessions to keep your cat active and mentally stimulated.",
              },
              {
                icon: "🩺",
                title: "Health Monitoring",
                desc: "Daily health checks and immediate access to veterinary care if needed.",
              },
              {
                icon: "📱",
                title: "Daily Updates",
                desc: "Receive photos and updates about your cat's activities and wellbeing.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3
                  className="text-xl font-bold mb-3 text-center"
                  style={{
                    fontFamily: "var(--font-libre)",
                    color: "var(--SoftWood)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 text-center"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {feature.desc}
                </p>
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
              Boarding Packages
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Choose the perfect package for your cat's needs and your budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "ring-4 ring-orange-200" : ""
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
                    textAlign: "center",
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
              * Weekly and monthly rates available. Contact us for extended stay
              discounts.
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
              Request Custom Quote
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
              Happy Cats & Parents
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              See what our boarding guests and their families have to say.
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
                        {testimonial.duration}
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
            Ready to Book Your Cat's Stay?
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Give your cat the vacation they deserve while you're away. Contact
            us to schedule a tour or make a reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={{
                pathname: "/signup",
                query: { service: "Cat Boarding" },
              }}
              className="px-8 py-4 font-semibold rounded-lg hover:scale-105 transform transition-all duration-200 shadow-md hover:shadow-lg inline-block"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
                fontFamily: "var(--font-libre)",
              }}
            >
              Book Boarding Now
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

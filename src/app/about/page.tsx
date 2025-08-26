"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Dr. Adrian Setiawan",
    role: "Head Veterinarian",
    bio: "10+ years of clinical experience. Leads health checks and medical protocols with a calm, cat-first approach.",
    image: "/team/adrian.png",
  },
  {
    name: "Maya Petrova",
    role: "Guest Experience Manager",
    bio: "Ensures every stay runs smoothly and keeps pet parents informed with clear, friendly updates.",
    image: "/team/maya.jpeg",
  },
  {
    name: "Lina Pratama",
    role: "Play & Enrichment Specialist",
    bio: "Certified animal behaviorist designing stimulating, safe activities tailored to each cat's personality.",
    image: "/team/lina.jpeg",
  },
  {
    name: "Arif Gootenberg",
    role: "Facilities & Comfort Coordinator",
    bio: "Keeps suites spotless and cozy; obsessive about hygiene standards and daily comfort checks.",
    image: "/team/arif.jpg",
  },
  {
    name: "Nadia Putri",
    role: "Wellness & Nutrition Lead",
    bio: "Builds customized feeding plans, monitors hydration, and collaborates with our vet on special diets.",
    image: "/team/nadia.jpg",
  },
  {
    name: "julia Wulansari",
    role: "Customer Care Specialist",
    bio: "Your first hello and last goodbye—booking support, daily updates, and thoughtful owner guidance.",
    image: "/team/julia.jpeg",
  },
];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, TEAM.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-black">
        {/* Hero / Title */}
        <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-10 sm:pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-3xl"></div>
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              About Purrfect Getaway
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-700">
              A cozy cat hotel & day care where every guest feels safe, loved,
              and entertained.
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">
                  Est. 2020
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">
                  1000+ Happy Guests
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">
                  Professional Care
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative bg-white rounded-3xl shadow-xl border border-orange-100 p-8 lg:p-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-bl-3xl opacity-50"></div>
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="relative">
                <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 mb-2">
                  Company History
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mb-8"></div>
                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    Purrfect Getaway began with a simple idea: every cat
                    deserves a safe, cozy, and joyful place to stay when their
                    families are away. Founded in 2020 by lifelong cat lovers
                    and veterinary professionals, we opened our first location
                    in Jakarta with just six suites and a dream of providing
                    hotel‑level comfort for cats.
                  </p>
                  <p className="text-lg">
                    Within the first year, we introduced themed playrooms and
                    on‑site veterinary support—becoming one of the region's
                    first cat hotels to pair luxury boarding with professional
                    medical oversight. By 2023, we welcomed our 1,000th guest,
                    and we've continued to grow while staying true to our
                    mission: a second home filled with warmth, care, and play.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <Image
                  src="/heroPurrfect.png"
                  alt="Our team caring for a feline guest at the front desk"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(min-width:1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-6"></div>
            <p className="max-w-3xl text-lg text-slate-600 mx-auto">
              Professional expertise + genuine love for cats. Here are the
              people who make every stay special.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative mt-12 bg-white rounded-3xl shadow-xl border border-orange-100 p-8">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg p-4 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110"
              aria-label="Previous team members"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-300 to-pink-400 text-white shadow-lg p-4 hover:from-pink-400 hover:to-pink-500 transition-all duration-300 hover:scale-110"
              aria-label="Next team members"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerView)
                  }%)`,
                }}
              >
                {TEAM.map((m) => (
                  <article key={m.name} className="flex-shrink-0 w-1/3 px-4">
                    <div className="group flex flex-col rounded-3xl border-2 border-orange-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-orange-200 overflow-hidden h-full bg-white">
                      <div className="relative h-80 w-full overflow-hidden">
                        <Image
                          src={m.image!}
                          alt={m.name}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-8 flex-1 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {m.name}
                        </h3>
                        <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-4">
                          {m.role}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {m.bio}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-10 space-x-3">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-orange-400 to-yellow-400 scale-110"
                      : "bg-orange-200 hover:bg-orange-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
          <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-br-3xl"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 mb-4 text-center">
                Our Culture
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto mb-8"></div>
              <div className="prose prose-lg max-w-none text-slate-700">
                <p className="text-xl leading-relaxed mb-8 text-center">
                  At Purrfect Getaway, our culture is built on more than
                  policies or procedures — it's a heartbeat that runs through
                  everything we do. Every meow, every purr, and every playful
                  paw reminds us that our guests aren't just pets, they're
                  family. That belief shapes the way we work, the way we treat
                  one another, and the way we dream about the future.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-center">
                  Our values can be summed up in three simple words:
                  <strong className="text-orange-600"> Compassion</strong>,{" "}
                  <strong className="text-pink-500">Safety</strong>, and
                  <strong className="text-green-500"> Playfulness</strong>.
                  These aren't just ideas on a wall, they are living practices
                  you'll feel from the moment you walk through our doors.
                </p>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-200 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-orange-600 mb-3">
                      Compassion
                    </h3>
                    <p className="text-slate-600">
                      We approach every cat with gentle patience, kindness, and
                      respect. Whether a shy kitten hiding behind the scratching
                      post or a senior cat needing special care, we slow down,
                      listen, and respond with love.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-200 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-pink-500 mb-3">
                      Safety
                    </h3>
                    <p className="text-slate-600">
                      Behind the cozy suites and playful décor lies an
                      uncompromising standard. From veterinarian-led health
                      checks and daily monitoring to meticulous cleaning and
                      hygiene, safety is the quiet promise we keep every single
                      day.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-200 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-500 mb-3">
                      Playfulness
                    </h3>
                    <p className="text-slate-600">
                      Joy is contagious, and we believe cats should never have
                      to leave theirs at home. Our team brings creativity to
                      enrichment: themed playrooms, climbing towers, and
                      interactive games that spark curiosity and laughter — for
                      both cats and humans.
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-center">
                  But culture at Purrfect Getaway isn't only about cats — it's
                  about people too. We support one another with the same warmth
                  we extend to our guests. Collaboration, ongoing learning, and
                  shared laughter make our workplace feel less like a job and
                  more like a community. It's this spirit — human and feline
                  together — that transforms Purrfect Getaway from a simple cat
                  hotel into a true second home.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

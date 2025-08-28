"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// Types
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// Data
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
  // Responsive items-per-view for the carousel (md:2, lg:3)
  const [itemsPerView, setItemsPerView] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setItemsPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, TEAM.length - itemsPerView);

  const goToPrevious = () => setCurrentIndex((p) => (p > 0 ? p - 1 : maxIndex));
  const goToNext = () => setCurrentIndex((p) => (p < maxIndex ? p + 1 : 0));

  // basic touch support (mobile swipe)
  let touchStartX = 0;
  let touchEndX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? goToPrevious() : goToNext();
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-black">
        {/* HERO */}
        <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-200/20 to-yellow-200/20" />
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              About Purrfect Getaway
            </h1>
            <p className="mt-4 sm:mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-700">
              A cozy cat hotel & day care where every guest feels safe, loved, and entertained.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />Est. 2020</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />1000+ Happy Guests</div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />Professional Care</div>
            </div>
          </div>
        </section>

        {/* COMPANY HISTORY */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="relative rounded-3xl border border-orange-100 bg-white shadow-xl p-5 sm:p-8 lg:p-12">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-bl-3xl bg-gradient-to-br from-orange-100 to-yellow-100 opacity-50" />
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">Company History</h2>
                <div className="w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 mb-6 sm:mb-8" />
                <div className="prose max-w-none text-slate-700">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Purrfect Getaway began with a simple idea: every cat deserves a safe, cozy, and joyful place to stay when their families are away. Founded in 2020 by lifelong cat lovers and veterinary professionals, we opened our first location in Jakarta with just six suites and a dream of providing hotel‑level comfort for cats.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed mt-4">
                    Within the first year, we introduced themed playrooms and on‑site veterinary support—becoming one of the region's first cat hotels to pair luxury boarding with professional medical oversight. By 2023, we welcomed our 1,000th guest, and we've continued to grow while staying true to our mission: a second home filled with warmth, care, and play.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <Image
                  src="/heroPurrfect.png"
                  alt="Our team caring for a feline guest at the front desk"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Meet Our Team</h2>
            <div className="w-16 sm:w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-4 sm:mb-6" />
            <p className="mx-auto max-w-3xl text-slate-600 text-base sm:text-lg">
              Professional expertise + genuine love for cats. Here are the people who make every stay special.
            </p>
          </div>

          {/* Desktop/Tablet: carousel with arrows; Mobile: swipeable + snap */}
          <div className="relative mt-8 rounded-3xl border border-orange-100 bg-white p-4 sm:p-6 shadow-xl">
            {/* Arrows (hidden on small screens) */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg p-3 hover:scale-110 transition"
              aria-label="Previous team members"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-pink-400 text-white shadow-lg p-3 hover:scale-110 transition"
              aria-label="Next team members"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>

            {/* Track */}
            <div className="overflow-hidden md:mx-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div
                className="hidden md:flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
              >
                {TEAM.map((m) => (
                  <article key={m.name} className="w-1/2 lg:w-1/3 flex-shrink-0 px-3 lg:px-4">
                    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-orange-100 bg-white shadow-lg transition hover:shadow-2xl hover:border-orange-200">
                      <div className="relative h-64 md:h-72 lg:h-80 w-full overflow-hidden">
                        <Image
                          src={m.image || "/placeholder.jpg"}
                          alt={m.name}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />
                      </div>
                      <div className="flex-1 p-6 text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">{m.name}</h3>
                        <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wide text-orange-600">{m.role}</p>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">{m.bio}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile: horizontal scroll with snap */}
              <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mb-2">
                {TEAM.map((m) => (
                  <article key={m.name} className="snap-start flex-none w-[18rem]">
                    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-orange-100 bg-white shadow-lg">
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={m.image || "/placeholder.jpg"}
                          alt={m.name}
                          fill
                          className="object-cover object-center"
                          sizes="100vw"
                        />
                      </div>
                      <div className="p-5 text-center">
                        <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange-600">{m.role}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.bio}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="hidden md:flex justify-center mt-6 gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-3 w-3 rounded-full transition ${i === currentIndex ? "bg-gradient-to-r from-orange-400 to-yellow-400 scale-110" : "bg-orange-200 hover:bg-orange-300"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-12 sm:pt-16">
          <div className="relative rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-yellow-50 p-6 sm:p-8 lg:p-12">
            <div className="absolute top-0 left-0 h-28 w-28 sm:h-40 sm:w-40 rounded-br-3xl bg-gradient-to-br from-orange-300/20 to-yellow-300/20" />
            <div className="relative">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Culture</h2>
              <div className="mx-auto mb-6 sm:mb-8 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400" />
              <div className="text-slate-700">
                <p className="mx-auto max-w-4xl text-center text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  At Purrfect Getaway, our culture is built on more than policies or procedures — it's a heartbeat that runs through everything we do. Every meow, every purr, and every playful paw reminds us that our guests aren't just pets, they're family.
                </p>
                <p className="mx-auto max-w-4xl text-center text-base sm:text-lg leading-relaxed mb-8">
                  Our values can be summed up in three simple words: <strong className="text-orange-600">Compassion</strong>, <strong className="text-pink-500">Safety</strong>, and <strong className="text-green-500">Playfulness</strong>.
                </p>

                <div className="grid gap-6 md:grid-cols-3 md:gap-8 my-8 md:my-12">
                  {/* Card 1 */}
                  <div className="rounded-2xl border-2 border-orange-100 bg-white p-5 shadow-lg transition-colors hover:border-orange-200">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-500">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </div>
                    <h3 className="mb-2 text-lg sm:text-xl font-bold text-orange-600">Compassion</h3>
                    <p className="text-slate-600 text-sm sm:text-base">We approach every cat with gentle patience, kindness, and respect. Whether a shy kitten or a senior cat needing special care, we slow down, listen, and respond with love.</p>
                  </div>

                  {/* Card 2 */}
                  <div className="rounded-2xl border-2 border-pink-100 bg-white p-5 shadow-lg transition-colors hover:border-pink-200">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-300 to-pink-400">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h3 className="mb-2 text-lg sm:text-xl font-bold text-pink-500">Safety</h3>
                    <p className="text-slate-600 text-sm sm:text-base">Vet‑led health checks, daily monitoring, and meticulous hygiene. Safety is the quiet promise we keep every single day.</p>
                  </div>

                  {/* Card 3 */}
                  <div className="rounded-2xl border-2 border-green-100 bg-white p-5 shadow-lg transition-colors hover:border-green-200">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-500">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <h3 className="mb-2 text-lg sm:text-xl font-bold text-green-500">Playfulness</h3>
                    <p className="text-slate-600 text-sm sm:text-base">Themed playrooms, climbing towers, and interactive games that spark curiosity and joy—for cats and humans.</p>
                  </div>
                </div>

                <p className="mx-auto max-w-4xl text-center text-base sm:text-lg leading-relaxed">
                  Our team supports one another with the same warmth we extend to our guests. Collaboration, ongoing learning, and shared laughter make our workplace a community—and a true second home.
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


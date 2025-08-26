"use client";

import Image from "next/image";
import { Libre_Franklin, Red_Hat_Mono } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const libre = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre" });
const mono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const cards: Array<{
    id: string;
    name: string;
    role: string;
    avatar: string;
    quote: string;
    tone: "purple" | "green" | "orange" | "white";
  }> = [
    {
      id: "sarah",
      name: "Sarah W.",
      role: "Owner of Luna",
      avatar: "/testimonials/sarahTest.png",
      tone: "purple",
      quote:
        "I was nervous leaving Luna for the first time, but Purrfect Getaway treated her like family. The cozy rooms and constant care gave me total peace of mind. When I picked her up, she looked happier than ever!",
    },
    {
      id: "daniel",
      name: "Daniel K.",
      role: "Owner of Simba & Nala",
      avatar: "/testimonials/danielTest.jpg",
      tone: "green",
      quote:
        "We travel often, and finding a place that feels safe for both our cats was a challenge. The staff here is amazing—daily updates with photos made us smile. Simba and Nala love their stays; it’s like a vacation for them too!",
    },
    {
      id: "ayumi",
      name: "Ayumi T",
      role: "Owner of Mochi",
      avatar: "/testimonials/ayumiTest.jpg",
      tone: "white",
      quote:
        "The environment feels more like a boutique hotel than a kennel. Mochi had her own comfy space, natural light, and even playtime with other cats. I’m so grateful for the love and attention she received.",
    },
    {
      id: "michael",
      name: "Michael R.",
      role: "Owner of Oliver",
      avatar: "/testimonials/michaelTest.jpeg",
      tone: "orange",
      quote:
        "Oliver can be shy, but the team at Purrfect Getaway really understood his personality. They made sure he felt comfortable and secure. I wouldn’t trust anyone else with his care.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`${libre.variable} ${mono.variable} relative py-24 overflow-hidden`}
      style={{ backgroundColor: "var(--softWhite)" }}
    >
      {/* background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-gray-700 text-sm font-medium mb-8">
            Customer Stories
          </div>
          <h2 className="font-bold tracking-tight text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            What our cat parents say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-mono leading-relaxed">
            Real stories from happy families who trust us with their beloved
            feline companions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation panah */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-5 h-5"
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
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-5 h-5"
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

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={card.id} className="w-full flex-shrink-0">
                  <Card {...card} isVisible={isVisible} index={index} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gray-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/coming-soon"
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              Share Your Story
            </a>
            <a
              href="/coming-soon"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-center"
            >
              Read More Reviews
            </a>
          </div>
        </div>
      </div>

      {/* Separation space */}
      <div className="h-16"></div>
    </section>
  );
}

function Card({
  name,
  role,
  avatar,
  quote,
  tone,
  index = 0,
  isVisible = false,
}: {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  tone: "purple" | "green" | "orange" | "white";
  index?: number;
  isVisible?: boolean;
}) {
  const toneClass =
    tone === "purple"
      ? "bg-gradient-to-br from-purple-500 to-purple-600 text-white"
      : tone === "green"
      ? "bg-gradient-to-br from-green-400 to-green-500 text-white"
      : tone === "orange"
      ? "bg-gradient-to-br from-orange-400 to-orange-500 text-white"
      : "bg-gradient-to-br from-white to-gray-50 text-gray-800 border border-gray-200";

  const ringColor =
    tone === "purple"
      ? "ring-purple-300/50"
      : tone === "green"
      ? "ring-green-300/50"
      : tone === "orange"
      ? "ring-orange-300/50"
      : "ring-gray-300/50";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01] ${toneClass} p-8 md:p-12 mx-4 ${
        isVisible ? "animate-slide-in opacity-0" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${index * 200}ms` : "0ms",
        animationFillMode: "forwards",
      }}
    >
      {/* background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Subtle sparkle effects */}
      <div className="absolute top-6 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-700"></div>
      {/* quote mark */}
      {tone !== "white" && (
        <span
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-10 select-none text-[280px] font-black leading-none opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ fontFamily: "var(--font-libre)" }}
        >
          "
        </span>
      )}

      <div className="mb-8 flex items-center gap-4 relative z-10">
        <div
          className={`relative h-16 w-16 overflow-hidden rounded-full ring-3 ${ringColor} group-hover:ring-4 transition-all duration-300 shadow-md`}
        >
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1 leading-tight">
          <div
            className={`text-lg font-bold mb-1 ${
              tone === "white" ? "text-gray-800" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-libre)" }}
          >
            {name}
          </div>
          <div
            className={`text-sm ${
              tone === "white" ? "text-gray-600" : "text-white/80"
            }`}
            style={{ fontFamily: "var(--font-libre)" }}
          >
            {role}
          </div>
        </div>

        {/* Rating bintang */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 text-yellow-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <blockquote
        className={`relative z-10 text-lg md:text-xl leading-relaxed tracking-wide ${
          tone === "white" ? "text-gray-700" : "text-white/95"
        } group-hover:text-opacity-100 transition-all duration-300`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        "{quote}"
      </blockquote>

      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/15 to-transparent rounded-bl-2xl"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-black/5 to-transparent rounded-tr-2xl"></div>
    </article>
  );
}

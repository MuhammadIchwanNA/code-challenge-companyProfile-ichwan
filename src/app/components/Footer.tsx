"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";
import { Libre_Franklin, Red_Hat_Mono } from "next/font/google";

const libre = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre" });
const mono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function Footer() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer
      className={`${libre.variable} ${mono.variable} relative overflow-hidden mt-8 border-t border-gray-100`}
      style={{ backgroundColor: "var(--softWhite)" }}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/20 to-pink-100/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-100/15 to-purple-100/10 rounded-full blur-3xl"></div>

      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/purrfectLogo.png"
                alt="Purrfect Getaway"
                width={45}
                height={45}
                priority
                className="h-auto w-[45px]"
              />
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "var(--font-libre)",
                    color: "var(--SoftWood)",
                  }}
                >
                  Purrfect Getaway
                </h3>
                <p
                  className="text-xs text-gray-600"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Cat Hotel & Daycare
                </p>
              </div>
            </div>

            <p
              className="text-gray-700 leading-relaxed mb-4 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Exceptional care, comfort, and love for your beloved cats while
              you're away.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div
                className="flex items-center gap-2 text-gray-700 text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  <span className="text-white text-xs">📍</span>
                </div>
                <span>420 Ucing Street, Kampung meong, Kota Oyen</span>
              </div>
              <div
                className="flex items-center gap-2 text-gray-700 text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  <span className="text-white text-xs">📞</span>
                </div>
                <span>(420) 6969-CATS</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Quick Links
            </h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Our Services
            </h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/cat-boarding"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Cat Boarding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/day-care"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Day Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/playtime-enrichment"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Playtime & Enrichment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/health-vet-care"
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Health & Vet Care
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-base font-semibold mb-4"
              style={{
                fontFamily: "var(--font-libre)",
                color: "var(--SoftWood)",
              }}
            >
              Stay Connected
            </h4>
            <p
              className="text-gray-700 text-sm mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Get updates and special offers.
            </p>

            <form onSubmit={onSubmit} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full h-10 rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none focus:border-gray-500 transition-all duration-200"
                style={{ fontFamily: "var(--font-mono)" }}
              />
              <button
                type="submit"
                className="w-full h-10 rounded-lg font-semibold text-white text-sm transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: "var(--SoftWood)",
                  fontFamily: "var(--font-libre)",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Elegant bottom section */}
      <div
        className="relative z-10 border-t border-gray-200"
        style={{ backgroundColor: "var(--Cream)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span
                className="text-gray-600 text-xs"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Follow us:
              </span>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  <span className="text-white text-xs">f</span>
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  <span className="text-white text-xs">ig</span>
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "var(--SoftWood)" }}
                >
                  <span className="text-white text-xs">X</span>
                </Link>
              </div>
            </div>

            {/* Legal Links & Copyright */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200 text-xs"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200 text-xs"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Terms of Service
                </Link>
              </div>

              <div
                className="text-gray-600 text-xs"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                © 2025 Purrfect Getaway. Designed by Ichwan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

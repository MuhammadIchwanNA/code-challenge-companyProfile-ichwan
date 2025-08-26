"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { isAuthed, logout } from "@/lib/auth";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(isAuthed());
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 backdrop-blur-enhanced bg-white/95 border-b border-orange-200/30 shadow-soft">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 hover-lift group">
          <div className="relative">
            <Image
              src="/purrfectLogo.png"
              alt="Purrfect Getaway logo"
              width={40}
              height={40}
              priority
              className="rounded-full shadow-medium group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Purrfect Getaway
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Cat Hotel & Daycare
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {/* ...existing nav links... */}
          <Link
            href="/"
            className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/services"
            className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/teams"
            className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
          >
            Our Teams
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/blog"
            className="relative px-3 py-2 font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Login/Logout replaces Contact */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="btn-primary hover-lift relative overflow-hidden ml-4 px-6 py-2 rounded-xl bg-gray-700 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="btn-primary hover-lift relative overflow-hidden ml-4 px-6 py-2 rounded-xl bg-gray-700 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg bg-orange-100 hover:bg-orange-200 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg
            className={`w-6 h-6 text-orange-600 transform transition-transform duration-200 ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/98 backdrop-blur-md border-b border-orange-200/30`}
      >
        <div className="px-6 py-4 space-y-3">
          {/* ...existing mobile nav links... */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block px-4 py-3 font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
          >
            🏠 Home
          </Link>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className="block px-4 py-3 font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
          >
            ℹ️ About
          </Link>
          <Link
            href="/services"
            onClick={closeMobileMenu}
            className="block px-4 py-3 font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
          >
            🏥 Services
          </Link>
          <Link
            href="/teams"
            onClick={closeMobileMenu}
            className="block px-4 py-3 font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
          >
            👥 Our Teams
          </Link>
          <Link
            href="/blog"
            onClick={closeMobileMenu}
            className="block px-4 py-3 font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
          >
            📝 Blog
          </Link>

          {/* Login/Logout replaces Contact in mobile menu */}
          {isAuthenticated ? (
            <button
              onClick={() => { handleLogout(); closeMobileMenu(); }}
              className="block w-full text-center px-6 py-4 font-semibold rounded-lg bg-gray-700 text-white shadow-md hover:bg-orange-600 transition-all duration-200 mt-2"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="block w-full text-center px-6 py-4 font-semibold rounded-lg bg-gray-700 text-white shadow-md hover:bg-orange-600 transition-all duration-200 mt-2"
            >
              Login
            </Link>
          )}

          <div className="pt-3 mt-3 border-t border-gray-200">
            <Link
              href="/booking"
              onClick={closeMobileMenu}
              className="block w-full text-center px-6 py-4 font-semibold rounded-lg transition-all duration-200 shadow-md"
              style={{
                backgroundColor: "var(--SoftWood)",
                color: "var(--white)",
              }}
            >
              📞 Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

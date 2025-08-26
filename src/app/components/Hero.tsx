"use client";
import Image from "next/image";
import Link from "next/link";
import { isAuthed, logout } from "@/lib/auth";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section className="relative mx-auto mt-6 max-w-[1100px] overflow-hidden rounded-[18px]">
   
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/catHotel.jpg"
          alt="Cat hotel interior"
          fill
          priority
          className="object-cover"
        />

        
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/15" />

      
        <div className="absolute right-6 top-8 max-w-[520px]">
          <div className="rounded-2xl bg-black/40 px-6 py-4 backdrop-blur-sm border border-white/20 shadow-xl">
            <p className="font-mono text-white leading-relaxed">
              <span className="block text-sm md:text-base font-light text-orange-200 mb-1">
                Welcome to
              </span>
              <span className="block text-lg md:text-xl font-semibold text-white">
                A safe, cozy, and playful retreat<br />
                <span className="text-yellow-300 font-bold">
                  where your cat feels at home.
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Beautiful Title */}
        <div className="absolute left-6 bottom-24 sm:bottom-20">
          <div className="relative">
            <div className="absolute inset-0 text-white opacity-50 blur-sm">
              <span className="block font-black text-[clamp(40px,8vw,120px)] leading-none">"Purrfect</span>
              <span className="block font-black text-[clamp(40px,8vw,120px)] leading-none -mt-2">Getaway"</span>
            </div>
            
            {/* Main title */}
            <div className="relative font-black text-white leading-none" style={{WebkitTextStroke: '2px rgba(0,0,0,0.3)'}}>
              <span className="block text-[clamp(40px,8vw,120px)] hover:scale-105 transition-transform duration-300">
                "Purrfect
              </span>
              <span className="block text-[clamp(40px,8vw,120px)] -mt-2 hover:scale-105 transition-transform duration-300">
                Getaway"
              </span>
            </div>
          </div>
        </div>

        {/* BOOK NOW button */}
        <div className="absolute bottom-6 right-6">
          <Link
            href="/signup"
            className="rounded-full bg-orange-500 hover:bg-orange-600 px-7 py-4 text-xl font-extrabold text-black shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            BOOK NOW!
          </Link>
        </div>
      </div>
    </section>
  );
}

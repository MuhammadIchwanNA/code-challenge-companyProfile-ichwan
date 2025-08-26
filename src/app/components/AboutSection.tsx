import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                About Purrfect Getaway
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-4"></div>
            </div>

            <p className="text-xl leading-relaxed text-slate-700 sm:text-2xl">
              At Purrfect Getaway, we believe every cat deserves comfort and
              care. Our team provides a loving environment with cozy spaces, fun
              playrooms, and round-the-clock attention.
              <span className="block mt-4 text-orange-600 font-semibold">
                Whether for a day or a week, your cat will feel right at home.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Learn More About Us</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/teams"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white border-2 border-orange-200 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Meet Our Team</span>
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-orange-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1000+</div>
                <div className="text-sm text-slate-600 font-medium">
                  Happy Cats
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-slate-600 font-medium">
                  Care & Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-slate-600 font-medium">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[440px] bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-700">
              <Image
                src="/purrfect-Staff.png"
                alt="Purrfect Getaway team with a cat at the front desk"
                fill
                priority
                className="object-cover"
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-700">
                    Professional Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

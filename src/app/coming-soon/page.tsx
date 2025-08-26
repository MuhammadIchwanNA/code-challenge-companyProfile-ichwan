import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-lg mx-auto p-8 text-center bg-white rounded-3xl shadow-xl border border-orange-100">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">New Features Coming Soon!</h1>
          <p className="text-slate-700 mb-6 text-lg">
            We're working hard to bring you more awesome features. Stay tuned!
          </p>
          <Link href="/" className="inline-block px-6 py-3 text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

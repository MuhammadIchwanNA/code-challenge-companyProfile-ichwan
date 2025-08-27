"use client";
import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Backendless from "@/utils/backendless";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function SignupModalPage() {
  const [copied, setCopied] = useState(false);
  const handleCopyPassword = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");
  // Formik initial values and validation
  interface ReservationFormValues {
    ownerName: string;
    email: string;
    phone: string;
    catName: string;
    service: string;
    date: string;
    password: string;
  }

  const initialValues: ReservationFormValues = {
    ownerName: "",
    email: "",
    phone: "",
    catName: "",
    service: "",
    date: "",
    password: "",
  };

  const validationSchema = Yup.object({
    ownerName: Yup.string().required("Owner name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    catName: Yup.string().required("Cat name is required"),
    service: Yup.string().required("Service is required"),
    date: Yup.string().required("Date is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-black/40">
        <div className="bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-50 rounded-3xl shadow-2xl p-0 max-w-md w-full relative border border-orange-100">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full p-3 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <div className="p-8 pt-12">
            {!success ? (
              <>
                <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {selectedService
                    ? `${selectedService} Reservation`
                    : "Cat Hotel Reservation / Day Care"}
                </h2>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (
                    values: ReservationFormValues,
                    {
                      setSubmitting,
                    }: { setSubmitting: (isSubmitting: boolean) => void }
                  ) => {
                    setLoading(true);
                    setError(null);
                    console.log("Form submitted! Values:", values);
                    setError("Form submitted! Check the browser console for logs.");
                    const {
                      ownerName,
                      email,
                      phone,
                      catName,
                      service,
                      date,
                      password,
                    } = values;
                    try {
                      const reservationRes = await Backendless.Data.of("Reservations").save({
                        ownerName,
                        email,
                        phone,
                        catName,
                        service,
                        date,
                      });
                      console.log("Reservation saved:", reservationRes);
                      let registerRes;
                      try {
                        registerRes = await Backendless.UserService.register({
                          email,
                          password,
                          name: ownerName,
                          role: "user",
                        });
                        console.log("User registered:", registerRes);
                        // Backendless auto-logs in after registration, no need to login again
                      } catch (userErr: any) {
                        console.error("Registration error:", userErr);
                        if (userErr && userErr.status === 409) {
                          setError("Email already registered. Please log in manually.");
                          setGeneratedPassword(null);
                          setLoading(false);
                          setSubmitting(false);
                          return;
                        } else {
                          setError("Registration failed: " + (userErr?.message || "Unknown error"));
                          setGeneratedPassword(null);
                          setLoading(false);
                          setSubmitting(false);
                          return;
                        }
                      }
                      setGeneratedPassword(null);
                      setUserName(ownerName);
                      setSuccess(true);
                    } catch (err: any) {
                      console.error("Reservation or registration/login error:", err);
                      setError(
                        "Failed to save reservation or register/login user. Please try again."
                      );
                      setGeneratedPassword(null);
                    } finally {
                      setLoading(false);
                      setSubmitting(false);
                    }
                  }}
                >
                  {({ isSubmitting }: { isSubmitting: boolean }) => (
                    <Form className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Owner Name
                        </label>
                        <Field
                          name="ownerName"
                          type="text"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                          placeholder="Your Name"
                        />
                        <ErrorMessage
                          name="ownerName"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Email
                        </label>
                        <Field
                          name="email"
                          type="email"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                          placeholder="Your Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Phone Number
                        </label>
                        <Field
                          name="phone"
                          type="tel"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                          placeholder="Your Phone Number"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Cat Name
                        </label>
                        <Field
                          name="catName"
                          type="text"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                          placeholder="Cat's Name"
                        />
                        <ErrorMessage
                          name="catName"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Service
                        </label>
                        <Field
                          as="select"
                          name="service"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                        >
                          <option value="">Select Service</option>
                          <option value="Cat Boarding">Cat Boarding</option>
                          <option value="Day Care">Day Care</option>
                          <option value="Playtime & Enrichment">
                            Playtime & Enrichment
                          </option>
                          <option value="Health & Vet Care">
                            Health & Vet Care
                          </option>
                        </Field>
                        <ErrorMessage
                          name="service"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Date
                        </label>
                        <Field
                          name="date"
                          type="date"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                        />
                        <ErrorMessage
                          name="date"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-orange-700 mb-2">
                          Password
                        </label>
                        <Field
                          name="password"
                          type="password"
                          className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                          placeholder="Choose a password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>
                      {error && (
                        <div className="text-red-600 text-sm mb-2">
                          {error.includes("already registered") ? (
                            <span>
                              This email is already registered.{" "}
                              <a
                                href="/login"
                                className="text-orange-700 underline font-semibold"
                              >
                                Log in
                              </a>{" "}
                              or use a different email.
                            </span>
                          ) : (
                            error
                          )}
                        </div>
                      )}
                      <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-extrabold rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                        disabled={loading || isSubmitting}
                      >
                        {loading || isSubmitting
                          ? "Reserving..."
                          : "Reserve Now"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <svg
                  className="w-16 h-16 text-orange-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-orange-700 mb-2">
                  Welcome, {userName}!
                </h3>
                <p className="text-slate-700 mb-4 text-center">
                  Your booking for our Cat Hotel or Day Care is confirmed and
                  and you can login now.
                </p>
                <a
                  href="/services"
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
                >
                  Back to Services
                </a>
              </div>
            )}
            <button
              type="button"
              className="w-full py-3 mt-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 font-semibold rounded-xl shadow hover:from-orange-200 hover:to-yellow-200 transition-all duration-200 border border-orange-200"
              onClick={() => router.back()}
            >
              ← Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

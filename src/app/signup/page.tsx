"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Backendless from "@/utils/backendless";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { login as setAuth } from "@/lib/auth"; // <-- update app auth store after Backendless login

export default function SignupModalPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    ownerName: Yup.string().min(2, "Too short").required("Owner name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number")
      .required("Phone number is required"),
    catName: Yup.string().min(2, "Too short").required("Cat name is required"),
    service: Yup.string().required("Service is required"),
    date: Yup.date()
      .min(new Date(Date.now() + 24 * 60 * 60 * 1000), "Pick a date from tomorrow onward")
      .required("Date is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  // helper: after Backendless login, sync app auth store and redirect
  const finishLogin = async (emailNorm: string) => {
    const current = await Backendless.UserService.getCurrentUser();
    const role = (current as any)?.role || (current as any)?.userRole || "user";
    setAuth(emailNorm, role);           // <-- persist to your app
    router.push("/");                   // <-- go where you want
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-black/40">
        <div className="bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-50 rounded-3xl shadow-2xl p-0 max-w-md w-full relative border border-orange-100">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full p-3 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>

          <div className="p-8 pt-12">
            <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Cat Hotel Reservation / Day Care
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting }) => {
                setLoading(true);
                setError(null);

                let { ownerName, email, phone, catName, service, date, password } = values;
                const emailNorm = email.trim().toLowerCase();

                try {
                  // avoid stale session collisions
                  try { await Backendless.UserService.logout(); } catch {}

                  // 1) Save reservation (not tied to auth)
                  await Backendless.Data.of("Reservations").save({
                    ownerName,
                    email: emailNorm,
                    phone,
                    catName,
                    service,
                    date,
                  });

                  // 2) Try to register
                  try {
                    await Backendless.UserService.register({
                      email: emailNorm,
                      password,
                      name: ownerName,
                      role: "user",
                    });

                    // 3) Registration OK → login
                    try {
                      await Backendless.UserService.login(emailNorm, password, true);
                      await finishLogin(emailNorm);
                      return;
                    } catch (loginErr: any) {
                      const msg = (loginErr?.message || "").toLowerCase();
                      if (msg.includes("confirm")) {
                        setError("Please confirm your email address before logging in.");
                      } else {
                        setError("Registration succeeded but auto-login failed. Please try logging in.");
                      }
                      return;
                    }
                  } catch (regErr: any) {
                    // 409 (already registered) → try to login with typed password
                    const msg = (regErr?.message || "").toLowerCase();
                    if (regErr?.status === 409 || msg.includes("already")) {
                      try {
                        await Backendless.UserService.login(emailNorm, password, true);
                        await finishLogin(emailNorm);
                        return;
                      } catch {
                        setError("This email is already registered. Log in with your existing password or use a different email.");
                        return;
                      }
                    }
                    // other register errors
                    setError("Registration failed: " + (regErr?.message || "Unknown error"));
                    return;
                  }
                } catch (outerErr: any) {
                  setError("Failed to save reservation or sign up. Please try again.");
                } finally {
                  setLoading(false);
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Owner Name</label>
                    <Field
                      name="ownerName"
                      type="text"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      placeholder="Your Name"
                      aria-describedby="ownerName-error"
                    />
                    <ErrorMessage name="ownerName" component="div" id="ownerName-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      placeholder="Your Email"
                      aria-describedby="email-error"
                    />
                    <ErrorMessage name="email" component="div" id="email-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Phone Number</label>
                    <Field
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      placeholder="Your Phone Number"
                      aria-describedby="phone-error"
                    />
                    <ErrorMessage name="phone" component="div" id="phone-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Cat Name</label>
                    <Field
                      name="catName"
                      type="text"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      placeholder="Cat's Name"
                      aria-describedby="catName-error"
                    />
                    <ErrorMessage name="catName" component="div" id="catName-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Service</label>
                    <Field
                      as="select"
                      name="service"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      aria-describedby="service-error"
                    >
                      <option value="">Select Service</option>
                      <option value="Cat Boarding">Cat Boarding</option>
                      <option value="Day Care">Day Care</option>
                      <option value="Playtime & Enrichment">Playtime & Enrichment</option>
                      <option value="Health & Vet Care">Health & Vet Care</option>
                    </Field>
                    <ErrorMessage name="service" component="div" id="service-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Date</label>
                    <Field
                      name="date"
                      type="date"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      aria-describedby="date-error"
                    />
                    <ErrorMessage name="date" component="div" id="date-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orange-700 mb-2">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full px-4 py-3 border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 bg-white/70"
                      placeholder="Choose a password"
                      aria-describedby="password-error"
                    />
                    <ErrorMessage name="password" component="div" id="password-error" className="text-red-600 text-sm mt-1" />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm mb-2">
                      {error.includes("already registered") ? (
                        <span>
                          This email is already registered.{" "}
                          <a href="/login" className="text-orange-700 underline font-semibold">
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
                    {loading || isSubmitting ? "Reserving..." : "Reserve & Create Account"}
                  </button>

                  <button
                    type="button"
                    className="w-full py-3 mt-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 font-semibold rounded-xl shadow hover:from-orange-200 hover:to-yellow-200 transition-all duration-200 border border-orange-200"
                    onClick={() => router.back()}
                  >
                    ← Back
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

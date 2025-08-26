import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin, Red_Hat_Mono, DM_Mono } from "next/font/google";

const libre = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre" });
const mono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-mono" });
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Purrfect Getaway",
  description: "Cat hotel & day care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libre.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-[#F5F5F5] text-black">{children}</body>
    </html>
  );
}

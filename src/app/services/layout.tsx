import { Libre_Franklin, Red_Hat_Mono } from "next/font/google";

const libre = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre" });
const mono = Red_Hat_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${libre.variable} ${mono.variable}`}>{children}</div>;
}

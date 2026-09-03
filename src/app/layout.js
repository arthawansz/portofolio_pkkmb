import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arthawan Pratama | Portfolio PKKMB Telkom University",
  description: "Portfolio digital dan pencapaian Arthawan Pratama Pakurimba Azzuhud - S1 Rekayasa Perangkat Lunak Telkom University.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-neutral-100 selection:bg-emerald-500 selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
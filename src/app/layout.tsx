import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import ClientProviders from "@/components/layout/ClientProviders";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Piyush Kumar Rai | AI/ML Enthusiast & Developer",
  description:
    "Portfolio of Piyush Kumar Rai - AI/ML Enthusiast, Developer, and BCA Final Year Student at Patliputra University. Building the future with code and creativity.",
  keywords: [
    "Piyush Kumar Rai",
    "AI/ML",
    "Developer",
    "Portfolio",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased bg-dark-900 text-white`}
      >
        <Navigation />
        <div className="noise-overlay" />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

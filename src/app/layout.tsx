import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TechMatrix-AI — AI-First Web & Mobile App Development Company",
  description: "TechMatrix-AI builds scalable, secure, AI-powered web and mobile applications for startups and enterprises. Product design, engineering, MLOps, and support — end to end.",
  keywords: ["TechMatrix-AI", "AI development", "web development", "mobile apps", "Next.js", "TypeScript", "Tailwind CSS", "machine learning", "MLOps"],
  authors: [{ name: "TechMatrix-AI Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "TechMatrix-AI — AI-First Web & Mobile App Development",
    description: "Building intelligent software that scales — Web, Mobile & Embedded",
    url: "https://techmatrix-ai.com",
    siteName: "TechMatrix-AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMatrix-AI",
    description: "Building intelligent software that scales — Web, Mobile & Embedded",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-background text-foreground font-poppins`}
      >
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
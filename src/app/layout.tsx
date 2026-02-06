import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asj-roofing.co.uk'),
  title: {
    default: "ASJ Roofing | Professional Roofers in Frome & Somerset",
    template: "%s | ASJ Roofing"
  },
  description: "Expert roofing services in Frome, Bath, and Somerset. New roofs, repairs, flat roofing, and loft conversions by ASJ Roofing. Get a free quote today.",
  keywords: ["roofing Frome", "roofers Somerset", "roof repairs Bath", "new roofs Somerset", "ASJ Roofing"],
  authors: [{ name: "ASJ Roofing" }],
  creator: "ASJ Roofing",
  publisher: "ASJ Roofing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://asj-roofing.co.uk',
    siteName: 'ASJ Roofing',
    title: 'ASJ Roofing | Professional Roofers in Frome & Somerset',
    description: 'Expert roofing services in Frome, Bath, and Somerset. New roofs, repairs, flat roofing, and loft conversions by ASJ Roofing.',
    images: [
      {
        url: '/hero-home.png',
        width: 1200,
        height: 630,
        alt: 'ASJ Roofing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASJ Roofing | Professional Roofers in Frome & Somerset',
    description: 'Expert roofing services in Frome, Bath, and Somerset.',
    images: ['/hero-home.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

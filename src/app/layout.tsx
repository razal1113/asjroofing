import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asj-roofing.co.uk'),
  title: {
    default: "ASJ Roofing | Expert Roofers & Loft Conversions in Frome, Bath & Somerset",
    template: "%s | ASJ Roofing"
  },
  description: "Top-rated roofing contractors and loft conversion specialists serving Frome, Bath, Wiltshire, and Somerset. Specialising in flat roofs, repairs, and new installations.",
  keywords: ["roofing Frome", "roofers Bath", "flat roof specialists Somerset", "roof repairs Wiltshire", "loft conversions Bath", "ASJ Roofing", "emergency roofer Frome", "roofers Somerset"],
  authors: [{ name: "ASJ Roofing" }],
  creator: "ASJ Roofing",
  publisher: "ASJ Roofing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.asj-roofing.co.uk',
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
    url: 'https://www.asj-roofing.co.uk',
    siteName: 'ASJ Roofing',
    title: 'ASJ Roofing | Expert Roofers & Loft Conversions in Frome, Bath & Somerset',
    description: 'Top-rated roofing contractors and loft conversion specialists serving Frome, Bath, Wiltshire, and Somerset.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ASJ Roofing - Professional Roofing Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASJ Roofing | Roofing & Loft Conversions',
    description: 'Professional roofing and loft conversion services across the UK.',
    images: ['/og-image.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ASJ Roofing",
              "image": "https://www.asj-roofing.co.uk/og-image.png",
              "@id": "https://www.asj-roofing.co.uk",
              "url": "https://www.asj-roofing.co.uk",
              "telephone": "+447974100989",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Frome",
                "addressLocality": "Somerset",
                "postalCode": "BA11 5AS",
                "addressCountry": "GB"
              }
            })
          }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

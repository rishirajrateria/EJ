import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, absoluteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "The Education Junction | Online Handwriting & Abacus Classes — UK & USA",
    template: "%s | The Education Junction",
  },
  description: site.description,
  keywords: [
    "handwriting classes",
    "handwriting improvement classes",
    "online handwriting classes",
    "abacus classes",
    "abacus classes for kids",
    "mental math classes",
    "cursive writing classes",
    "calligraphy classes online",
    "phonics classes online",
    "handwriting classes UK",
    "handwriting classes USA",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Online Handwriting & Abacus Classes for Kids and Adults — UK & USA",
    description: site.description,
    locale: "en_GB",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Education Junction | Online Handwriting & Abacus Classes",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": absoluteUrl("/#organization"),
  name: site.name,
  url: site.url,
  logo: absoluteUrl("/icon.svg"),
  description: site.description,
  email: site.email,
  slogan: site.tagline,
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
  ],
  sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
  knowsAbout: [
    "Handwriting improvement",
    "Cursive writing",
    "Calligraphy",
    "Abacus mental arithmetic",
    "Phonics and early reading",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: site.name,
  url: site.url,
  publisher: { "@id": absoluteUrl("/#organization") },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

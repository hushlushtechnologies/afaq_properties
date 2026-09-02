import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { CookieConsentBanner } from "@/components/legal/CookieeConsentBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { lora, publicSans } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getOrganizationSchema } from "@/lib/structured-data";
import { WhatsAppFloatingBar } from "@/components/layout/WhatsAppFloatingBar";
import { BrochureModalProvider } from "@/context/BrochureModal";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.afaqalmanzilproperties.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Afaq Al Manzil Properties | Luxury Real Estate in Dubai, Abu Dhabi & Sharjah",
    template: "%s | Afaq Al Manzil Properties",
  },
  description:
    "Afaq Al Manzil Properties connects you to premium off-plan and secondary properties across Dubai, Abu Dhabi and Sharjah, with expert guidance on UAE real estate investment.",
  keywords: [
    "UAE properties",
    "Dubai properties",
    "Dubai off-plan properties",
    "Abu Dhabi properties",
    "Sharjah properties",
    "Dubai property investment",
    "luxury properties UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Afaq Al Manzil Properties",
    title: "Afaq Al Manzil Properties | Luxury Real Estate in the UAE",
    description:
      "Premium off-plan and secondary properties across Dubai, Abu Dhabi and Sharjah.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Afaq Al Manzil Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afaq Al Manzil Properties",
    description: "Luxury real estate across Dubai, Abu Dhabi and Sharjah.",
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000614",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${lora.variable} ${publicSans.variable}`}
    >
      <body className="bg-background text-text font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <BrochureModalProvider>
          <Navbar />

          {children}
          <Footer />
          <WhatsAppFloatingBar />
          <Analytics />
          <GoogleAnalytics />
          <SpeedInsights />
          <CookieConsentBanner />
        </BrochureModalProvider>
      </body>
    </html>
  );
}

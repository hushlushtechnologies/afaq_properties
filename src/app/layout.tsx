import type { Metadata, Viewport } from "next";
import { lora, publicSans } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Afaq Al Manzil Properties | Luxury Real Estate in Dubai, Abu Dhabi & Sharjah",
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
    description: "Premium off-plan and secondary properties across Dubai, Abu Dhabi and Sharjah.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afaq Al Manzil Properties",
    description: "Luxury real estate across Dubai, Abu Dhabi and Sharjah.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${publicSans.variable}`}>
      <body className="bg-background text-text font-body antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
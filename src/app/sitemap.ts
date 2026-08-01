import { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.afaqalmanzil.com";

const ROUTES: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/properties", priority: 0.9, changeFrequency: "daily" },
  { path: "/off-plan", priority: 0.9, changeFrequency: "daily" },
  { path: "/ready", priority: 0.9, changeFrequency: "daily" },
  { path: "/rental", priority: 0.9, changeFrequency: "daily" },

  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.5, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.6, changeFrequency: "yearly" },
  { path: "/enquiry", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

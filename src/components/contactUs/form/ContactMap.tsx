"use client";

import { MapPin, Navigation } from "lucide-react";
import { COMPANY_CONTACT } from "@/config/footer";

const MAPS_QUERY = encodeURIComponent(COMPANY_CONTACT.address);

export function ContactMap() {
  return (
    <div className="relative mt-6 h-64 w-full overflow-hidden rounded-md border border-border sm:h-72">
      <iframe
        title="Afaq Al Manzil Properties office location"
        src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
        style={{
          border: 0,
          filter:
            "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[130%] text-primary">
        <MapPin size={28} fill="currentColor" className="drop-shadow" />
      </div>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-primary bg-background/90 px-4 py-2 font-body text-caption font-medium text-primary backdrop-blur-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <Navigation size={13} /> Get Direction
      </a>
    </div>
  );
}

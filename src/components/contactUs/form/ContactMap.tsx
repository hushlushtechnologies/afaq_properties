"use client";

import { MapPin, Navigation } from "lucide-react";
import { COMPANY_CONTACT } from "@/config/footer";

// Used for the embedded map
const MAPS_QUERY = encodeURIComponent(COMPANY_CONTACT.address);

// Your exact Google Maps location/share link
const GOOGLE_MAPS_LOCATION = "https://maps.app.goo.gl/PA2BdwifAnzWsa7w6";

export function ContactMap() {
  return (
    <div className="relative mt-6 h-64 w-full overflow-hidden rounded-md border border-border sm:h-72">
      {/* Google Map */}
      <iframe
        title="Afaq Al Manzil Properties office location"
        src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full"
        style={{
          border: 0,
          filter:
            "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)",
        }}
      />

      {/* Custom Afaq Marker */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[130%] text-primary"
      >
        <MapPin size={28} fill="currentColor" className="drop-shadow" />
      </div> */}

      {/* Get Direction */}
      <a
        href={GOOGLE_MAPS_LOCATION}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-primary bg-background/90 px-4 py-2 font-body text-caption font-medium text-primary backdrop-blur-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <Navigation size={13} />
        Get Direction
      </a>
    </div>
  );
}

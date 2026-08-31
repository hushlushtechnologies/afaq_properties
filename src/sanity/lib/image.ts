import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageRef } from "@/types/sanity/sanity-property";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

// The image builder library accepts a broader range of shapes at runtime than
// its own bundled types describe well across versions — we use our own
// SanityImageRef type (matching what our GROQ queries actually return) and
// pass it through, rather than depending on the library's internal type path.
export function urlFor(source: SanityImageRef) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

export function toImageUrl(
  source: SanityImageRef | undefined,
  width = 1200,
): string {
  if (!source) return "";
  return urlFor(source).width(width).quality(90).auto("format").url();
}

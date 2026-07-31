import type { StaticImageData } from "next/image";

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  imageLabel?: string;
}

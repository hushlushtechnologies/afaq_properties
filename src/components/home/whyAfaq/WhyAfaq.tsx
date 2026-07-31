import { ImageFeatureShowcase } from "@/components/home/whyAfaq/ImageFeatureShowcase";
import { WHY_AFAQ_CONTENT, WHY_AFAQ_ITEMS } from "@/data/why-afaq";

export function WhyAfaq() {
  return (
    <ImageFeatureShowcase
      eyebrow={WHY_AFAQ_CONTENT.eyebrow}
      title={WHY_AFAQ_CONTENT.title}
      highlight={WHY_AFAQ_CONTENT.highlight}
      description={WHY_AFAQ_CONTENT.description}
      items={WHY_AFAQ_ITEMS}
    />
  );
}

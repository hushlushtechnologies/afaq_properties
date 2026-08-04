import careersData from "@/data/careers/careers.json";
import { Career, EmploymentType } from "@/types/careers";

export function getPublishedCareers(): Career[] {
  const careers = careersData as Career[];
  return careers
    .filter((c) => c.publishStatus === "published")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  "full-time": "Full-Time",
  "part-time": "Part-Time",
  contract: "Contract",
  internship: "Internship",
};

export function getEmploymentTypeLabel(type: EmploymentType): string {
  return EMPLOYMENT_TYPE_LABELS[type] ?? type;
}

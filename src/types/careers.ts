export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "internship";

export interface CareerSEO {
  title?: string;
  description?: string;
}

export interface Career {
  id: string;
  title: string;
  slug: string;
  publishStatus: "draft" | "published";
  displayOrder: number;

  department: string;
  employmentType: EmploymentType;
  experienceRequired: string;
  location: string;

  description: string;

  applyEmail: string;

  seo?: CareerSEO;
  publishedDate: string;
}

export interface AboutStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const ABOUT_STATS: AboutStat[] = [
  { id: "team", value: 50, suffix: "+", label: "Our Team" },
  { id: "properties", value: 500, suffix: "+", label: "Premium Properties" },
  { id: "developers", value: 20, suffix: "+", label: "Trusted Developers" },
];

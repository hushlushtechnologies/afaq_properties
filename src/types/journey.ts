export type JourneyIcon = "ClipboardList" | "Compass" | "Handshake" | "Key";

export interface JourneyStep {
  id: string;
  icon: JourneyIcon;
  title: string;
  description: string;
}

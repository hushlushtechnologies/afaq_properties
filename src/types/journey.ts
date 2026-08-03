export type JourneyIcon =
  | "ClipboardList"
  | "Compass"
  | "Handshake"
  | "Key"
  | "MessageSquare"
  | "Search"
  | "FileCheck"
  | "Users";

export interface JourneyStep {
  id: string;
  icon: JourneyIcon;
  title: string;
  description: string;
}

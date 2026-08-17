export interface LegalParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface LegalListBlock {
  type: "list";
  items: string[];
}

export interface LegalContactBlock {
  type: "contact";
}

export type LegalBlock =
  | LegalParagraphBlock
  | LegalListBlock
  | LegalContactBlock;

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

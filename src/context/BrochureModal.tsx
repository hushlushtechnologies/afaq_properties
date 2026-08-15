"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { BrochureDownloadModal } from "@/components/enquiry/brochure/BrochureDownloadModal";
import type { BrochureProperty } from "@/types/brochure";

interface BrochureModalContextValue {
  openBrochureModal: (property: BrochureProperty) => void;
}

const BrochureModalContext = createContext<BrochureModalContextValue | null>(
  null,
);

export function BrochureModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [property, setProperty] = useState<BrochureProperty | null>(null);
  const [open, setOpen] = useState(false);

  const openBrochureModal = useCallback((p: BrochureProperty) => {
    setProperty(p);
    setOpen(true);
  }, []);

  return (
    <BrochureModalContext.Provider value={{ openBrochureModal }}>
      {children}
      <BrochureDownloadModal
        open={open}
        onOpenChange={setOpen}
        property={property}
      />
    </BrochureModalContext.Provider>
  );
}

export function useBrochureModal() {
  const ctx = useContext(BrochureModalContext);
  if (!ctx)
    throw new Error(
      "useBrochureModal must be used within a BrochureModalProvider",
    );
  return ctx;
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAV_LINKS, NAV_CTA } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { fadeInDown } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        variants={fadeInDown}
        initial="hidden"
        animate="visible"
        className="fixed inset-x-0 top-4 sm:top-12 z-50"
      >
      <Container className={cn(
                            "transition-all duration-500",
                            scrolled ? "max-w-6xl" : "max-w-7xl"
                          )}>
          <div
            className={cn(
              "flex items-center border-border  justify-between rounded-lg border px-6 py-2.5 backdrop-blur-xl transition-all duration-400 ease-smooth md:px-20",
              scrolled ? " bg-card-gradient/60 shadow md:px-10" : " bg-card-gradient shadow-sm md:px-20"
            )}
          >
            <Link href="/" aria-label="Afaq Al Manzil Properties — Home">
              <Logo />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative font-body text-xs text-text-secondary transition-colors duration-400 hover:text-accent",
                      isActive && "text-primary"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-2.5 left-0 h-[1px] w-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <Button href={NAV_CTA.href} size="sm" variant="secondary">
                {NAV_CTA.label}
              </Button>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center rounded-full p-2 text-text lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
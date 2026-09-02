"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { SOCIAL_LINKS } from "@/config/social";
import {
  FOOTER_EXPLORE_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
  COMPANY_CONTACT,
} from "@/config/footer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="Afaq Al Manzil Properties — Home">
              <Logo className="items-center flex-row" />
            </Link>
            <div>
              <h3 className="font-heading text-h4 text-text font-semibold">
                Building Dreams. Creating Wealth. Delivering Value.
              </h3>
              <p className="mt-2 max-w-xs font-body text-body-sm text-text-secondary">
                Your trusted partner for exceptional real estate opportunities
                across the UAE.
              </p>
            </div>
          </div>

          <FooterColumn title="Explore" links={FOOTER_EXPLORE_LINKS} />

          <FooterColumn title="Company" links={FOOTER_COMPANY_LINKS} />

          <div>
            <h4 className="font-heading text-body-sm font-semibold uppercase tracking-wide text-subtle">
              Get in Touch
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {COMPANY_CONTACT.phones.map((phone, i) => (
                <li key={i}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-2 font-body text-xs text-text-secondary transition-colors duration-400 hover:text-primary"
                  >
                    <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-start gap-2 font-body text-xs text-text-secondary transition-colors duration-400 hover:text-primary"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2 font-body text-xs text-text-secondary">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                {COMPANY_CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-400 hover:border-primary hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <Button href="/enquiry" variant="outline" size="sm">
            Enquiry Now
          </Button>

          <div className="flex items-center gap-5">
            {FOOTER_LEGAL_LINKS.map((link) =>
              link.href === "#cookie-settings" ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("afaq-cookie-consent");
                    window.location.reload();
                  }}
                  className="font-body text-body-sm text-text-secondary transition-colors duration-400 hover:text-primary"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-body-sm text-text-secondary transition-colors duration-400 hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>

      <div className="border-t border-border py-5 bg-background">
        <p className="text-center font-body text-caption text-text-secondary">
          © {year} Afaq Al Manzil Properties. All Rights Reserved. Designed by{" "}
          <span className="text-muted">Hush Lush Technologies</span>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-heading text-body-sm font-semibold uppercase tracking-wide text-subtle">
        {title}
      </h4>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-body-sm text-text-secondary transition-colors duration-400 hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

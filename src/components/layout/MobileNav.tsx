"use client";

import { useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="grid size-10 place-items-center rounded-lg bg-brand text-ink transition-colors hover:bg-brand-hover"
      >
        <Icon name={open ? "close" : "menu"} />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full mt-2 animate-fade-up rounded-card bg-white p-6 shadow-header"
        >
          <ul className="space-y-4">
            {site.nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)} className="text-h3 font-semibold text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6">
            <a href={site.phone.href} className="font-semibold text-ink">
              {site.phone.text}
            </a>
            <Button href={site.headerCta.href}>{site.headerCta.label}</Button>
          </div>
        </div>
      )}
    </div>
  );
}

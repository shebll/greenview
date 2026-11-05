import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

// Floating white pill that sits on top of the hero banner.
export function Header() {
  return (
    <header className="absolute py-8 inset-x-0 z-30 px-3  2xl:px-20">
      <div className="relative mx-auto flex items-center justify-between rounded-2xl  lg:rounded-full bg-white px-4 lg:pl-6 shadow-header py-4 lg:pr-3">
        <div className=" flex items-center gap-8 ">
          <Link href="#" className="pr-8 lg:border-r border-0 border-line">
            <Image
              src={"/images/brand/logo.svg"}
              alt="logo "
              width={174}
              height={40}
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {site.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-semibold text-ink text-base  transition-opacity hover:opacity-60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-6 lg:flex text-base">
          <a href={site.phone.href} className="">
            <span className="font-semibold text-ink">{site.phone.label} </span>

            <span className="font-semibold text-muted underline">
              {site.phone.text}
            </span>
          </a>
          <Button type="button" variant="primary" href={site.headerCta.href}>
            {site.headerCta.label}
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

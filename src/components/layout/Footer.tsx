import { Container } from "@/components/shared/Container";
import { site } from "@/content/site";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const f = site.footer;
  return (
    <footer className="relative -mt-26 px-4 pb-4 xl:px-25 xl:pb-5">
      <div className="rounded-xl xl:rounded-sheet bg-white px-2  py-10 shadow-header xl:px-10! xl:py-20">
        <Container className="justify-between">
          <div className="grid gap-10 xl:gap-4 lg:grid-cols-[1fr_1fr_1fr] items-center xl:items-stretch">
            <div className="flex flex-col justify-between items-center xl:items-start gap-10 xl:border-r border-line">
              <Link href="#">
                <Image
                  src={"/images/brand/logo.svg"}
                  alt="logo "
                  width={174}
                  height={40}
                  priority
                />
              </Link>
              <p className="max-w-xs text-lg text-center xl:text-start text-muted">
                {f.tagline}
              </p>
            </div>

            <div className="flex justify-between xl:justify-start xl:gap-10 border-y xl:border-y-0  xl:border-r py-8 xl:py-0 border-line">
              {f.columns.map((col, i) => (
                <nav key={i} aria-label={i === 0 ? "Company" : "Resources"}>
                  <ul className="space-y-3 xl:space-y-5">
                    {col.map((label) => (
                      <li key={label}>
                        <a
                          href="#"
                          className="text-base font-semibold text-ink transition-opacity hover:opacity-60 link"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col">
                <a
                  href={site.phone.href}
                  className="block text-2xl  xl:text-[36px] font-extrabold text-ink"
                >
                  {site.phone.text}
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="block text-2xl xl:text-[36px] font-extrabold text-ink"
                >
                  {f.email}
                </a>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 pt-6 text-md font-semibold text-muted">
                {f.social.map((s) => (
                  <li key={s}>
                    <a href="#" className="transition-colors hover:text-ink">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-2 border-t border-line pt-10 text-base xl:text-lg text-muted xl:flex-row xl:justify-between">
            <p>
              © {f.year} <strong className="text-ink">Spaciaz</strong>.{" "}
              {f.copyright}
            </p>
            <p>{f.credit}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

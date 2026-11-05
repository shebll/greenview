import { Container } from "@/components/shared/Container";
import { Picture } from "@/components/shared/Picture";
import { site } from "@/content/site";

export function FooterCta() {
  const cta = site.footerCta;
  return (
    <section className="relative overflow-hidden pb-48 pt-20 text-center md:pb-56 md:pt-28">
      <Container className="relative">
        <h2 className="mx-auto max-w-xl text-display text-white">
          {cta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-body text-white/80">
          {cta.text}
        </p>
        <a
          href={cta.button.href}
          className="mx-auto mt-10 grid size-36 place-items-center rounded-full border border-white/30 bg-black/40 p-6 text-small font-semibold text-white backdrop-blur transition-colors hover:bg-brand hover:text-ink"
        >
          {cta.button.label}
        </a>
      </Container>

      {/* Giant decorative wordmark, partly covered by the footer card */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center text-[clamp(6rem,24vw,24rem)] font-bold leading-[0.7] tracking-tighter text-white/10"
      >
        spaciaz
      </span>
    </section>
  );
}

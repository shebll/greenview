# Spaciaz – Greenview Apartments (foundation)

Next.js (App Router) + TypeScript + Tailwind v4. **Tailwind utilities only — no CSS Modules.**
`globals.css` holds the design tokens + the few animations utilities can't express.

## Run
npm install && npm run dev

## Structure
src/app/globals.css       ← ALL design tokens (colors, fonts, sizes, radii, spacing, breakpoints, motion) + reveal animation
src/app/layout.tsx        ← font (Urbanist placeholder) + metadata
src/app/page.tsx          ← page assembly: just list the sections in order
src/content/              ← all text/data (site.ts = header/footer, project.ts = page content)
src/components/layout/    ← Header, MobileNav, FooterCta, Footer
src/components/sections/  ← one file per page section (HeroBanner, ProjectHero, ProjectMetadata, ProjectOverview,
                            ProjectDetails, FeaturesGrid, FeatureCard, MediaSection, PhotoGallery, FloorPlansGallery,
                            VideoGallery, StreetView, LocationSection, LocationMap, InquiryForm, ProjectNavigation)
src/components/shared/    ← Container, Section, Picture (image or placeholder), Icon, Logo, Reveal
src/components/ui/        ← Button, Input/Textarea
public/images/            ← brand, hero, project, gallery, plans, footer

## Using real images
Copy files into public/images/... then set `src` in src/content/project.ts (e.g. mainImage: { src: "/images/project/main.jpg", alt }).
Hero / footer backgrounds: add `src` in HeroBanner.tsx / FooterCta.tsx (Picture component).

## To confirm against the original (DevTools)
Font family (Urbanist is a stand-in), exact colors, radii, breakpoints, icons, hero/footer images, video id.

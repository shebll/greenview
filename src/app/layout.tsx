import { Inter, Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// Placeholder for the template's display font. Swap here once the real family is confirmed.

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-switzer",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-involve",
});
export const metadata: Metadata = {
  title: "Greenview Apartments – Spaciaz",
  description:
    "Greenview Apartments by Spaciaz: an under-construction apartment project in Hollywood, Florida.",
  icons: ["/images/brand/logo-icon.svg"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}

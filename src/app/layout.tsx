import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("ryntra-theme");
    const theme = stored === "light" || stored === "dark" ? stored : "system";
    const resolved = theme === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = resolved;
  } catch (_) {
    document.documentElement.dataset.theme = "system";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ryntra: Native Modrinth workspace",
    template: "%s · Ryntra",
  },
  description: site.description,
  alternates: { canonical: "/" },
  applicationName: "Ryntra",
  authors: [{ name: "Ryntra contributors", url: site.github }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ryntra",
    title: "Ryntra: Native Modrinth workspace",
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ryntra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryntra: Native Modrinth workspace",
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/icon-192.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#101110" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ryntra",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Android, iOS",
    description: site.description,
    downloadUrl: `${site.url}/download`,
    softwareHelp: `${site.url}/docs`,
    codeRepository: site.github,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

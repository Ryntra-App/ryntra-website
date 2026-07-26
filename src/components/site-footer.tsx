import Link from "next/link";

import { BrandMark } from "./brand-mark";
import { ExternalLink } from "./external-link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <BrandMark compact />
          <p>A native mobile workspace for Modrinth creators.</p>
          <p className="disclaimer">
            Unofficial. Not affiliated with, endorsed by, or maintained by
            Modrinth.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <span>Product</span>
            <Link href="/download">Download</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/docs">Docs</Link>
          </div>
          <div>
            <span>Project</span>
            <ExternalLink href={site.github}>GitHub</ExternalLink>
            <Link href="/#contributors">Contributors</Link>
            <ExternalLink href={site.discord}>Discord</ExternalLink>
          </div>
          <div>
            <span>Legal</span>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </nav>
      </div>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} Ryntra contributors</span>
        <span>English · Russian architecture ready</span>
      </div>
    </footer>
  );
}

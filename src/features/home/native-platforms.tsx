import { Apple, Smartphone } from "lucide-react";
import Image from "next/image";

import { en } from "@/content/en";

export function NativePlatforms() {
  return (
    <section className="native-section">
      <div className="native-heading">
        <p className="eyebrow">{en.sections.native.eyebrow}</p>
        <h2>{en.sections.native.title}</h2>
        <p>{en.sections.native.body}</p>
      </div>
      <div className="platform-pair">
        <article>
          <div className="platform-label">
            <Smartphone aria-hidden="true" size={18} />
            <span>Android</span>
            <small>APK · Android 8+</small>
          </div>
          <Image
            src="/screenshots/android.webp"
            alt="Ryntra running on Android with its native navigation and project workspace"
            width={810}
            height={1800}
            sizes="(max-width: 767px) 74vw, 420px"
          />
        </article>
        <article>
          <div className="platform-label">
            <Apple aria-hidden="true" size={18} />
            <span>iOS</span>
            <small>Unsigned IPA · iOS 16+</small>
          </div>
          <Image
            src="/screenshots/ios.webp"
            alt="Placeholder awaiting an official Ryntra iOS screenshot"
            width={810}
            height={1800}
            sizes="(max-width: 767px) 74vw, 420px"
          />
        </article>
      </div>
    </section>
  );
}

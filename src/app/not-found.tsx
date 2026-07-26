import { ArrowLeft, GitBranch } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-code" aria-hidden="true">
        <span>4</span>
        <GitBranch size={72} strokeWidth={1.1} />
        <span>4</span>
      </div>
      <p className="eyebrow">Not found</p>
      <h1>This route isn&apos;t in the release.</h1>
      <p>
        The page may have moved, or the release tag does not exist in the
        current GitHub history.
      </p>
      <Link className="button button-primary" href="/">
        <ArrowLeft aria-hidden="true" size={18} />
        Back to Ryntra
      </Link>
    </div>
  );
}

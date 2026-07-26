import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  showIcon?: boolean;
};

export function ExternalLink({
  children,
  showIcon = false,
  ...props
}: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noreferrer" {...props}>
      {children}
      {showIcon ? <ArrowUpRight aria-hidden="true" size={16} /> : null}
    </a>
  );
}

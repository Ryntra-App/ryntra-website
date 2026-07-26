import { ArrowUpRight, GitPullRequest } from "lucide-react";
import Image from "next/image";

import type { Contributor } from "./github-contributors";
import { site } from "@/lib/site";

type ContributorsSectionProps = {
  contributors: Contributor[];
};

export function ContributorsSection({
  contributors,
}: ContributorsSectionProps) {
  const creator =
    contributors.find((contributor) => contributor.login === "imsawiq") ??
    contributors[0];
  const community = contributors.filter(
    (contributor) => contributor.id !== creator?.id,
  );

  return (
    <section
      id="contributors"
      className="contributors-section"
      aria-labelledby="contributors-title"
    >
      <div className="contributors-heading">
        <p className="eyebrow">Open source</p>
        <h2 id="contributors-title">Built in the open.</h2>
        <p>
          Ryntra grows through code, translations, fixes and careful feedback
          from its GitHub community.
        </p>
        <a href={site.github} target="_blank" rel="noreferrer">
          <GitPullRequest aria-hidden="true" size={17} />
          Contribute on GitHub
        </a>
      </div>
      <div className="people-panel">
        {creator ? (
          <a
            className="creator-profile"
            href={creator.profileUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={creator.avatarUrl}
              alt=""
              width={72}
              height={72}
              sizes="72px"
              unoptimized
            />
            <span>
              <small>Creator</small>
              <strong>sawiq</strong>
              <span>@{creator.login}</span>
            </span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        ) : null}
        <div className="community-contributors">
          <p>Contributors</p>
          <div>
            {community.map((contributor) => (
              <a
                href={contributor.profileUrl}
                target="_blank"
                rel="noreferrer"
                key={contributor.id}
                aria-label={`Open ${contributor.login}'s GitHub profile`}
                title={contributor.login}
              >
                <Image
                  src={contributor.avatarUrl}
                  alt=""
                  width={58}
                  height={58}
                  sizes="58px"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

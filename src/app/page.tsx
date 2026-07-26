import { FeatureStory } from "@/features/home/feature-story";
import { FinalDownload } from "@/features/home/final-download";
import { Hero } from "@/features/home/hero";
import { NativePlatforms } from "@/features/home/native-platforms";
import { SectionReveal } from "@/features/home/section-reveal";
import { getReleases } from "@/features/releases/github-releases";
import { ContributorsSection } from "@/features/contributors/contributors-section";
import { getContributors } from "@/features/contributors/github-contributors";
import { en } from "@/content/en";

export default async function HomePage() {
  const [{ releases }, contributors] = await Promise.all([
    getReleases(),
    getContributors(),
  ]);

  return (
    <>
      <Hero />
      <div className="home-stories" id="features">
        <SectionReveal>
          <FeatureStory
            eyebrow={en.sections.projects.eyebrow}
            title={en.sections.projects.title}
            body={en.sections.projects.body}
            image="/screenshots/projects.webp"
            imageAlt="Ryntra project list with project status, downloads and followers"
          />
        </SectionReveal>
        <SectionReveal>
          <FeatureStory
            id="analytics"
            eyebrow={en.sections.analytics.eyebrow}
            title={en.sections.analytics.title}
            body={en.sections.analytics.body}
            image="/screenshots/analytics.webp"
            imageAlt="Ryntra analytics screen with downloads, views, follows and range controls"
            imagePosition="start"
          />
        </SectionReveal>
        <SectionReveal>
          <FeatureStory
            eyebrow={en.sections.teams.eyebrow}
            title={en.sections.teams.title}
            body={en.sections.teams.body}
            image="/screenshots/teams.webp"
            imageAlt="Ryntra teams screen with an organization, members and permission-aware actions"
          />
        </SectionReveal>
        <SectionReveal>
          <FeatureStory
            eyebrow={en.sections.notifications.eyebrow}
            title={en.sections.notifications.title}
            body={en.sections.notifications.body}
            image="/screenshots/notifications.webp"
            imageAlt="Placeholder awaiting an official Ryntra notifications screenshot"
            imagePosition="start"
            contain
          />
        </SectionReveal>
        <SectionReveal>
          <NativePlatforms />
        </SectionReveal>
        <SectionReveal>
          <ContributorsSection contributors={contributors} />
        </SectionReveal>
        <SectionReveal>
          <FinalDownload release={releases[0]} />
        </SectionReveal>
      </div>
    </>
  );
}

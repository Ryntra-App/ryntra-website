import { CapabilityIndex } from "@/features/home/capability-index";
import { FinalDownload } from "@/features/home/final-download";
import { Hero } from "@/features/home/hero";
import { InterfaceShowcase } from "@/features/home/interface-showcase";
import { getReleases } from "@/features/releases/github-releases";
import { ContributorsSection } from "@/features/contributors/contributors-section";
import { getContributors } from "@/features/contributors/github-contributors";

export default async function HomePage() {
  const [{ releases }, contributors] = await Promise.all([
    getReleases(),
    getContributors(),
  ]);

  return (
    <>
      <Hero />
      <div className="web-home">
        <InterfaceShowcase />
        <CapabilityIndex />
        <ContributorsSection contributors={contributors} />
        <FinalDownload release={releases[0]} />
      </div>
    </>
  );
}

import "server-only";

export type Contributor = {
  id: number;
  login: string;
  avatarUrl: string;
  profileUrl: string;
};

type GitHubContributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: "User" | "Bot";
};

const fallbackContributors: Contributor[] = [
  {
    id: 224_344_239,
    login: "imsawiq",
    avatarUrl: "https://avatars.githubusercontent.com/u/224344239?v=4",
    profileUrl: "https://github.com/imsawiq",
  },
  {
    id: 85_225_228,
    login: "TheReal-Flo",
    avatarUrl: "https://avatars.githubusercontent.com/u/85225228?v=4",
    profileUrl: "https://github.com/TheReal-Flo",
  },
  {
    id: 237_467_872,
    login: "noriwanne",
    avatarUrl: "https://avatars.githubusercontent.com/u/237467872?v=4",
    profileUrl: "https://github.com/noriwanne",
  },
  {
    id: 156_924_421,
    login: "EmanuelPlays",
    avatarUrl: "https://avatars.githubusercontent.com/u/156924421?v=4",
    profileUrl: "https://github.com/EmanuelPlays",
  },
  {
    id: 182_555_207,
    login: "YoannDev90",
    avatarUrl: "https://avatars.githubusercontent.com/u/182555207?v=4",
    profileUrl: "https://github.com/YoannDev90",
  },
];

export async function getContributors(): Promise<Contributor[]> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Ryntra-Website",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const response = await fetch(
      "https://api.github.com/repos/Ryntra-App/Ryntra/contributors?per_page=30&anon=1",
      {
        headers,
        next: { revalidate: 21_600 },
        signal: AbortSignal.timeout(8_000),
      },
    );
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const contributors = (await response.json()) as GitHubContributor[];
    const people = contributors
      .filter((contributor) => contributor.type !== "Bot")
      .map((contributor) => ({
        id: contributor.id,
        login: contributor.login,
        avatarUrl: contributor.avatar_url,
        profileUrl: contributor.html_url,
      }));
    return people.length > 0 ? people : fallbackContributors;
  } catch {
    return fallbackContributors;
  }
}

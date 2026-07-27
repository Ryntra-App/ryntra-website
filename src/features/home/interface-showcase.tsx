import Image from "next/image";

const interfaces = [
  {
    id: "projects",
    label: "Projects",
    description: "Status, releases and metadata",
    image: "/screenshots/projects.webp",
    alt: "Ryntra projects workspace",
  },
  {
    id: "analytics",
    label: "Analytics",
    description: "Downloads, views and revenue",
    image: "/screenshots/analytics.webp",
    alt: "Ryntra analytics workspace",
  },
  {
    id: "teams",
    label: "Teams",
    description: "Organizations and invitations",
    image: "/screenshots/teams.webp",
    alt: "Ryntra teams workspace",
  },
  {
    id: "notifications",
    label: "Notifications",
    description: "Reviews, updates and activity",
    image: "/screenshots/notifications.webp",
    alt: "Ryntra notifications workspace",
  },
] as const;

export function InterfaceShowcase() {
  return (
    <section
      className="interface-showcase"
      id="features"
      aria-labelledby="interface-showcase-title"
    >
      <div className="showcase-heading">
        <div>
          <p className="section-label">Product surfaces</p>
          <h2 id="interface-showcase-title">Inside Ryntra.</h2>
        </div>
        <p>Real working surfaces from the Android and iOS application.</p>
      </div>

      <nav className="showcase-index" aria-label="Ryntra product surfaces">
        {interfaces.map((item, index) => (
          <a href={`#surface-${item.id}`} key={item.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="showcase-rail">
        {interfaces.map((item) => (
          <figure id={`surface-${item.id}`} key={item.id}>
            <div className="showcase-image">
              <Image
                src={item.image}
                alt={item.alt}
                width={810}
                height={1800}
                sizes="(max-width: 620px) 78vw, 360px"
              />
            </div>
            <figcaption>
              <strong>{item.label}</strong>
              <span>{item.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

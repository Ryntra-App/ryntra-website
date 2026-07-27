const capabilities = [
  {
    title: "Publish",
    body: "Edit project details, versions, files, dependencies and galleries.",
  },
  {
    title: "Measure",
    body: "Follow downloads, views, playtime, revenue and project-level trends.",
  },
  {
    title: "Coordinate",
    body: "Manage organizations, project teams, ownership and invitations.",
  },
  {
    title: "Respond",
    body: "Open review results and project activity from a relevant notification.",
  },
] as const;

export function CapabilityIndex() {
  return (
    <section className="capability-index" aria-labelledby="capability-title">
      <div className="capability-intro">
        <p className="section-label">Workflow</p>
        <h2 id="capability-title">Project operations, without the desktop.</h2>
        <p>
          Publishing, statistics, permissions and review activity stay in one
          mobile workspace.
        </p>
      </div>
      <ol>
        {capabilities.map((capability, index) => (
          <li key={capability.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

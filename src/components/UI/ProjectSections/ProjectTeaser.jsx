export default function ProjectTeaser({
  project: { title, description, githubLink },
}) {
  const usernameConcat = `by Ashleigh Corse`;

  return (
    <>
      <div className="ms-2 me-auto">
        <h2 className="fw-bold mb-1">{title}</h2>
        <h5 className="mb-1">{description}</h5>
        <a href="{githubLink}">{githubLink}</a>
      </div>
    </>
  );
}

export default function ProjectTeaser({ project }) {
  const usernameConcat = `by Ashleigh Corse`;
  // console.log(project);

  return (
    <>
      <div className="ms-2 me-auto">
        <h2 className="fw-bold mb-1">{project.title}</h2>
        <h5 className="mb-1">{project.description}</h5>
        <a href="{githubLink}">{project.githubLink}</a>
      </div>
    </>
  );
}

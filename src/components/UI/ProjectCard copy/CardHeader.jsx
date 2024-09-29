import ProjectTeaser from "../ProjectSections/ProjectTeaser";

export default function CardHeader({ project }) {
  return (
    <div className="card-header">
      <ProjectTeaser project={project} />
      <p className="ms-2 me-auto">{project.title}</p>
    </div>
  );
}

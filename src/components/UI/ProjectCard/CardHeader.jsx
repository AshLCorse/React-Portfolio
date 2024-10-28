import ProjectTeaser from "../ProjectSections/ProjectTeaser";

export default function CardHeader({ project }) {
  return (
    <div className="card-header">
      <ProjectTeaser project={project} />
    </div>
  );
}

import CardHeader from "../ContactCard/CardHeader";
import CardBody from "../ContactCard/CardBody";

export default function ProjectDetailed({ project }) {
  return (
    <div className="card">
      <CardHeader project={project} />
      <CardBody description={project.description} />
    </div>
  );
}

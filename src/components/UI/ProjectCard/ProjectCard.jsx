import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

export default function ProjectCard({ project }) {
  return (
    <div className="card-body">
      <CardHeader project={project} />
      <CardBody project={project} />
    </div>
  );
}

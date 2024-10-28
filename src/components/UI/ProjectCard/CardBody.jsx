import CardDependencies from "./CardDependencies";
import CardDescription from "./CardDescription";

export default function CardBody({ project }) {
  return (
    <div className="card-body">
      <CardDescription project={project} />
      <CardDependencies project={project} />
    </div>
  );
}

import CardDependencies from "./CardDependencies";
import CardDescription from "./CardDescription";

export default function CardBody({ description, dependencies }) {
  return (
    <div className="card-body">
      <CardDescription {...description} />
      <CardDependencies {...dependencies} />
    </div>
  );
}

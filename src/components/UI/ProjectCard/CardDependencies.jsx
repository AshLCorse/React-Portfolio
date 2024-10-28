export default function CardDependencies({ project }) {
  return (
    <address className="text-start m-3">
      <ul className="list-group">
        <h6
          className="ps-3 bg-secondary list-group-item m-0"
          style={{ "--bs-bg-opacity": 0.075 }}
        >
          Dependencies:
        </h6>
        <ul className="list-group list-group">
          {project.dependencies.map((dependency, i) => (
            <li key={i} className="list-group-item">
              {dependency}
            </li>
          ))}
        </ul>
        <h6
          className="ps-3 bg-secondary list-group-item m-0"
          style={{ "--bs-bg-opacity": 0.075 }}
        >
          Technologies:
        </h6>
        <ul>
          {project.technologies.map((technology, i) => (
            <li key={i} className="list-group-item">
              {technology}
            </li>
          ))}
        </ul>
      </ul>
    </address>
  );
}

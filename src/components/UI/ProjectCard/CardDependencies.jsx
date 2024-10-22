export default function CardDependencies({ dependencies, technologies }) {
  return (
    <address className="text-start m-3">
      <ul className="list-group">
        <h6
          className="ps-3 bg-secondary list-group-item m-0"
          style={{ "--bs-bg-opacity": 0.075 }}
        >
          Dependencies:
        </h6>
        <ul>{dependencies}</ul>
        <h6
          className="ps-3 bg-secondary list-group-item m-0"
          style={{ "--bs-bg-opacity": 0.075 }}
        >
          Technologies:
        </h6>
        <ul>{technologies}</ul>
      </ul>
    </address>
  );
}

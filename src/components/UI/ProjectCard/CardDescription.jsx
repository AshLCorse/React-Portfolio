export default function CardDescription({ project }) {
  return (
    <section className="ms-2 me-auto">
      <h4>{project.title}:</h4>
      <h5 className="card-text">{project.description}</h5>
    </section>
  );
}

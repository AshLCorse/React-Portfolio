export default function CardDescription({ title, description }) {
  return (
    <section className="ms-2 me-auto">
      <h4>{title}:</h4>
      <h5 className="card-text">{description}</h5>
    </section>
  );
}

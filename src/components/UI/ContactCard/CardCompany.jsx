export default function CardCompany({ name, website }) {
  return (
    <section className="ms-2 me-auto">
      <h4>{name}:</h4>
      <h5 className="card-text">{website}</h5>
    </section>
  );
}

export default function CardAddress({ suite, street, city, state, country }) {
  return (
    <address className="text-start m-3">
      <ul className="list-group">
        <h6
          className="ps-3 bg-secondary list-group-item m-0"
          style={{ "--bs-bg-opacity": 0.075 }}
        >
          Address:
        </h6>
        <li className="list-group-item">{suite}</li>
        <li className="list-group-item">{street}</li>
        <li className="list-group-item">{city}</li>
        <li className="list-group-item">{state}</li>
        <li className="list-group-item">{country}</li>
      </ul>
    </address>
  );
}

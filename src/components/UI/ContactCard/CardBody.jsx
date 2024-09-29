import CardAddress from "./CardAddress";
import CardCompany from "./CardCompany";

export default function CardBody({ address, company }) {
  return (
    <div className="card-body">
      <CardAddress {...address} />
      <CardCompany {...company} />
    </div>
  );
}

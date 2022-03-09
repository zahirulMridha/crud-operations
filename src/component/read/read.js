import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/useContext";
import "./read.css";
export default function Read() {
  const { id } = useParams();
  const { datas } = useAuth();
  const data = datas.filter((data) => data.id == id);

  return (
    <div className="read">
      <p>ID: {data[0].id}</p>
      <p>Name: {data[0].name}</p>
      <p>Position: {data[0].position}</p>
      <p>Salary: {data[0].salary}</p>

      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}

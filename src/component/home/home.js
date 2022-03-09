import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TableComponent from "../table/table";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <h2 className="crudHead">Crud operation project</h2>
      <Link to="create">
        <Button variant="primary">Create user</Button>
      </Link>
      <TableComponent />
    </div>
  );
}

import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import TableComponent from "./table/table"
export default function Home() {
  return (
    <div>
      <Link to="create">
      <Button variant="primary">Create user</Button>
      </Link>
      <TableComponent />
    </div>
  );
}

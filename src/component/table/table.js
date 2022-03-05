import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useContext";

export default function TableComponent() {
  const { datas } = useAuth();
  // console.log(datas)
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        {datas.map((data) => (
          <tbody key={data.id}>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.position}</td>
              <td>{data.salary}</td>
              <td>
                {" "}
                <Link to={`/read/${data.id}`}>
                  <Button variant="success">Read</Button>
                </Link>
                <Link to={`/edit/${data.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Link to={`/delete/${data.id}`}>
                  <Button variant="danger">Delete</Button>
                </Link>{" "}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

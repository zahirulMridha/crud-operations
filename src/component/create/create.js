import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useContext";
import "./create.css";

export default function Create() {
  const { datas, setData } = useAuth();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const createNew = (e) => {
    e.preventDefault();
    setData([
      ...datas,
      { id: id, name: name, position: position, salary: salary },
    ]);
    navigate("/");
  };
  return (
    <div className="create">
      <Form onSubmit={createNew}>
        <Form.Group className="mb-3">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter id"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Position"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Salary"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create user
        </Button>
        <Link to="/">
          <Button className="createBtn" variant="info" type="submit">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
}

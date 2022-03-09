import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/useContext";
import "./edit.css";
export default function Edit() {
  const { datas, setData } = useAuth();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  // current data get by filtering
  const data = datas.filter((data) => data.id == id);

  const handleName = (e) => {
    setName(e.target.value);
    data[0].name = name;
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
    data[0].position = position;
  };
  const handleSalary = (e) => {
    setSalary(e.target.value);
    data[0].salary = salary;
  };

  const editor = (e) => {
    e.preventDefault();

    setData([...datas]);
  };
  return (
    <div className="editForm">
      <h1>Id: {id}</h1>
      <Form key={id} onSubmit={editor}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={data[0].name}
            onChange={handleName}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder={data[0].position}
            onChange={handlePosition}
            value={position}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder={data[0].salary}
            onChange={handleSalary}
            value={salary}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit">
            Save Edit
          </Button>

          <Button variant="info" type="submit">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
}

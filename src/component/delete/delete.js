import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/useContext";
import "./delete.css";
export default function Delete() {
  const { datas, setData } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const data = datas.filter((data) => data.id != id);

  const deleteItem = (e) => {
    e.preventDefault();
    setData([...data]);
    navigate("/");
  };
  return (
    <div className="deletModal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Are you sure..?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button className="btn-cust" variant="danger" onClick={deleteItem}>
            Delete
          </Button>
          <Link to="/">
            <Button className="btn-cust" variant="secondary">
              Cancel
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

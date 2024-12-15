import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Input from "./common/input";

function ProductAdd() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <>
      <Button
        onClick={toggleModal}
        className="position-fixed bottom-0 end-0 m-5 rounded-circle "
        style={{ width: "60px", height: "60px" }}
      >
        Add+
      </Button>

      <Modal show={modal} onHide={toggleModal} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Input label="Product Name" />
          <Input label="Price" />
          <Input label="Category" />
          <Input label="Weight" />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductAdd;

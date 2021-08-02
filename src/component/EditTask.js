import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../redux/Action";

const EditTask = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [taskEdited, setTaskEdited] = useState("");
  const dispatch = useDispatch();
  const editTask=()=>{dispatch(edit(item.id ,taskEdited));
    handleClose()};


  return (
    <div>
      <i class="fas fa-cogs fa-2x" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body><input  type='text' className="form-control" onChange={(e)=>setTaskEdited(e.target.value)} value={taskEdited}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editTask}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;

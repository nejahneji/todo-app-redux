import { MDBBtn } from "mdb-react-ui-kit";
import { MDBInput } from "mdbreact";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/Action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const newTodo = () => {
    if (todo) {
      dispatch(add({ todo: todo, isDone: false, id: Math.random() }));
      setTodo("");
    } else {
      alert("empty Task");
    }
  };

  return (
    <div className="addtask ">
      <MDBInput
        label="new task..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />

      <MDBBtn id="btn" onClick={newTodo}>
        ADD
      </MDBBtn>
    </div>
  );
};

export default AddTask;

import React from "react";
import { useDispatch } from "react-redux";
import { complete, remove } from "../redux/Action";
import EditTask from "./EditTask";

const Task = ({ item }) => {
  
  const dispatch = useDispatch()
  return (
    <div className="task">
      <input
        type="text"
        id={item.isDone ? 'disable': null}
        className="form-control"
        placeholder={item.todo}
        disabled
      />

      <i class="fas fa-check fa-2x" onClick={()=>dispatch(complete(item.id))}></i>
      <EditTask item={item}/>
      <i class="fas fa-trash-alt fa-2x" onClick={()=>dispatch(remove(item.id))}></i>
      
    </div>
  );
};

export default Task;

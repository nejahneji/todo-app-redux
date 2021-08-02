import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const todos = useSelector((state) => state.todoTask);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    filteredHandler();
  }, [todos, status]);
  // console.log(filteredTodos)
  console.log(status);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isDone === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.isDone === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <AddTask />
      <TaskList filteredTodos={filteredTodos} />
      
      <select onChange={(e) => setStatus(e.target.value)} className='select'>
        <option>all</option>
        <option>completed</option>
        <option>uncompleted</option>
      </select>
    </div>
  );
}

export default App;

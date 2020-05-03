import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Task.css";

const Task = ({ id, name, completed }) => {
  const { toggleCompleted, deleteTask } = useContext(AppContext);

  const toggle = () => toggleCompleted(id);
  const remove = (e) => {
    e.stopPropagation();
    deleteTask(id);
  };

  return (
    <li className={"Task" + (completed ? " completed" : "")} onClick={toggle}>
      <i
        className={`Task-icon far fa-${completed ? "check-square" : "square"}`}
      />
      <span className="Task-text">{name}</span>
      <i className="Task-delete far fa-trash-alt" onClick={remove} />
    </li>
  );
};

export default Task;

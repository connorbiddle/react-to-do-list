import React, { useContext, useState } from "react";
import EditTask from "./EditTask";
import { AppContext } from "../context/AppContext";
import "../styles/Task.css";

const Task = ({ id, name, completed }) => {
  const { toggleCompleted, deleteTask } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const toggle = () => toggleCompleted(id);
  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);
  const remove = (e) => {
    e.stopPropagation();
    deleteTask(id);
  };

  if (isEditing)
    return <EditTask id={id} name={name} stopEditing={stopEditing} />;

  return (
    <li className={"Task" + (completed ? " completed" : "")} onClick={toggle}>
      <i
        className={`Task-icon far fa-${completed ? "check-square" : "square"}`}
      />
      <span className="Task-text">{name}</span>
      <div className="Task-buttons">
        <i className="Task-edit fas fa-pen" onClick={startEditing} />
        <i className="Task-delete fas fa-trash-alt" onClick={remove} />
      </div>
    </li>
  );
};

export default Task;

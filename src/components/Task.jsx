import React, { useContext, useState } from "react";
import EditTask from "./EditTask";
import { TasksContext } from "../TasksContext";
import "../styles/Task.css";

const Task = ({ id, name, completed }) => {
  const { toggleCompleted, deleteTask } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);

  const remove = (e) => {
    e.stopPropagation();
    deleteTask(id);
  };
  const startEditing = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };
  const stopEditing = () => setIsEditing(false);
  const toggle = () => toggleCompleted(id);

  if (isEditing)
    return <EditTask id={id} name={name} stopEditing={stopEditing} />;

  return (
    <li className={"Task" + (completed ? " completed" : "")} onClick={toggle}>
      <i
        className={`Task-icon far fa-${completed ? "check-square" : "square"}`}
        aria-hidden="true"
      />
      <span className="Task-text">{name}</span>
      <div className="Task-buttons">
        <i
          className="Task-edit fas fa-pen"
          onClick={startEditing}
          aria-hidden="true"
        />
        <i
          className="Task-delete fas fa-trash-alt"
          onClick={remove}
          aria-hidden="true"
        />
      </div>
    </li>
  );
};

export default Task;

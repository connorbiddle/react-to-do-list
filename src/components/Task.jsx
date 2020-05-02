import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import "../styles/Task.css";

const Task = ({ id, name, completed, isLast }) => {
  const { toggleCompleted } = useContext(TasksContext);
  const toggle = () => toggleCompleted(id);

  const classes = ["Task"];
  if (completed) classes.push("completed");
  if (isLast) classes.push("last");

  return (
    <li className={classes.join(" ")}>
      <input
        className="Task-checkbox"
        type="checkbox"
        id={`Checkbox-${id}`}
        checked={completed}
        onClick={toggle}
      />
      <label className="Task-custom-checkbox" htmlFor={`Checkbox-${id}`} />
      <span className="Task-text">{name}</span>
    </li>
  );
};

export default Task;

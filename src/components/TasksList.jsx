import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Task from "./Task";
import "../styles/TasksList.css";

const TasksList = () => {
  const { tasks } = useContext(AppContext);

  return (
    <ul className="TasksList">
      <h1 className="TasksList-title">To-Do List</h1>
      {tasks.map((task, index) => (
        <Task key={task.id} isLast={index === tasks.length - 1} {...task} />
      ))}
      <button className="TasksList-add-new">
        <i class="fas fa-plus" />
      </button>
    </ul>
  );
};

export default TasksList;

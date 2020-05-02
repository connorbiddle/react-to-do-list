import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Task from "./Task";
import "../styles/TasksList.css";

const TasksList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <ul className="TasksList">
      <h1 className="TasksList-title">To-Do List</h1>
      {tasks.map((task, index) => (
        <Task key={task.id} isLast={index === tasks.length - 1} {...task} />
      ))}
    </ul>
  );
};

export default TasksList;

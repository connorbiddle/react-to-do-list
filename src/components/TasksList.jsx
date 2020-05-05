import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import "../styles/TasksList.css";

const TasksList = () => {
  const { tasks, isAddingTask, startAddTask, clearTasks } = useContext(
    AppContext
  );

  const getTasks = () => {
    if (tasks.length <= 0 && !isAddingTask) {
      return <p className="TasksList-empty">Add some tasks!</p>;
    } else {
      return tasks.map((task, index) => (
        <Task key={task.id} isLast={index === tasks.length - 1} {...task} />
      ));
    }
  };

  return (
    <ul className="TasksList">
      <h1 className="TasksList-title">To-Do List</h1>
      <div>{getTasks()}</div>
      {isAddingTask ? (
        <NewTaskForm />
      ) : (
        <div className="TasksList-buttons">
          <button className="TasksList-add-new" onClick={startAddTask}>
            <i className="fas fa-plus" />
          </button>
          {/* IMPORTANT: Implement confirmation request. */}
          <button className="TasksList-clear" onClick={clearTasks}>
            <i className="fas fa-times" />
          </button>
        </div>
      )}
    </ul>
  );
};

export default TasksList;

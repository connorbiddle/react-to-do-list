import React, { useContext, useState } from "react";
import { TasksContext } from "../TasksContext";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import "../styles/TasksList.css";

const TasksList = () => {
  const { tasks, clearTasks } = useContext(TasksContext);

  const [isAddingTask, setIsAddingTask] = useState(false);
  const startAddTask = () => setIsAddingTask(true);
  const cancelAddTask = () => setIsAddingTask(false);

  const getTasks = () => {
    if (tasks.length <= 0 && !isAddingTask) {
      return (
        <div className="TasksList-empty">
          <p>No tasks set.</p>
          <p>Get busy - add something!</p>
        </div>
      );
    } else {
      return tasks.map((task, index) => (
        <Task
          key={task.id}
          isLast={index === tasks.length - 1}
          {...task}
          cancelAddTask={cancelAddTask}
        />
      ));
    }
  };

  return (
    <ul className="TasksList">
      <h1 className="TasksList-title">To-Do List</h1>
      <div>{getTasks()}</div>
      {isAddingTask ? (
        <NewTaskForm cancelAddTask={cancelAddTask} />
      ) : (
        <div className="TasksList-buttons">
          <button className="TasksList-add-new" onClick={startAddTask}>
            <i className="fas fa-plus" aria-hidden="true" />
            <div className="TasksList-add-tooltip tooltip">Add task</div>
          </button>
          <button className="TasksList-clear" onClick={clearTasks}>
            <i className="fas fa-times" aria-hidden="true" />
            <div className="TasksList-clear-tooltip tooltip">Clear tasks</div>
          </button>
        </div>
      )}
    </ul>
  );
};

export default TasksList;

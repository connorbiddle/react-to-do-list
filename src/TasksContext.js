import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const TasksContext = createContext();

export const TasksProvider = (props) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("ToDoListTasks")) || []
  );

  // Context functions
  const toggleCompleted = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const createTask = (taskName) => {
    setTasks([...tasks, { id: uuid(), name: taskName, completed: false }]);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const editTask = (taskId, newName) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(newTasks);
  };

  const clearTasks = () => setTasks([]);

  // Persist to local storage on tasks change
  useEffect(() => {
    localStorage.setItem("ToDoListTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        toggleCompleted,
        createTask,
        deleteTask,
        editTask,
        clearTasks,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("ToDoListTasks")) || []
  );
  const [isAddingTask, setIsAddingTask] = useState(false);

  const toggleCompleted = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };
  const createTask = (taskName) => {
    setTasks([...tasks, { id: uuid(), name: taskName, completed: false }]);
  };
  const startAddTask = () => setIsAddingTask(true);
  const cancelAddTask = () => setIsAddingTask(false);
  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("ToDoListTasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{
        tasks,
        toggleCompleted,
        deleteTask,
        isAddingTask,
        startAddTask,
        cancelAddTask,
        createTask,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

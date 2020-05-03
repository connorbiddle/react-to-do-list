import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const AppContext = createContext();

const defaultTasks = [
  { id: uuid(), name: "Walk the dog", completed: true },
  { id: uuid(), name: "Tidy bedroom", completed: false },
  { id: uuid(), name: "Wash the dishes", completed: false },
  { id: uuid(), name: "Mow the back garden", completed: false },
];

export const AppProvider = (props) => {
  const [tasks, setTasks] = useState(defaultTasks);

  const toggleCompleted = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <AppContext.Provider value={{ tasks, toggleCompleted, deleteTask }}>
      {props.children}
    </AppContext.Provider>
  );
};

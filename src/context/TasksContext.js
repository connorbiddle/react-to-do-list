import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TasksContext = createContext();

const defaultTasks = [
  { id: uuid(), name: "Walk the dog", completed: true },
  { id: uuid(), name: "Tidy bedroom", completed: false },
  { id: uuid(), name: "Wash the dishes", completed: false },
];

export const TasksProvider = (props) => {
  const [tasks, setTasks] = useState(defaultTasks);

  const toggleCompleted = (taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, toggleCompleted }}>
      {props.children}
    </TasksContext.Provider>
  );
};

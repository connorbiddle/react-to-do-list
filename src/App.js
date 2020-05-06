import React from "react";
import { TasksProvider } from "./TasksContext";
import TasksList from "./components/TasksList";
import "./App.css";

const App = () => (
  <div className="App">
    <TasksProvider>
      <TasksList />
    </TasksProvider>
  </div>
);

export default App;

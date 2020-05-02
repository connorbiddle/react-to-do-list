import React from "react";
import { TasksProvider } from "./context/TasksContext";
import TasksList from "./components/TasksList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TasksProvider>
        <TasksList />
      </TasksProvider>
    </div>
  );
};

export default App;

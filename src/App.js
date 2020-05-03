import React from "react";
import { AppProvider } from "./context/AppContext";
import TasksList from "./components/TasksList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <TasksList />
      </AppProvider>
    </div>
  );
};

export default App;

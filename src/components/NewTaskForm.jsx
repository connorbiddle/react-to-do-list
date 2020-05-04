import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/NewTaskForm.css";

const NewTaskForm = () => {
  const { createTask, cancelAddTask } = useContext(AppContext);

  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => setTaskName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.length <= 0) return;
    createTask(taskName);
    setTaskName("");
    cancelAddTask();
  };

  return (
    <form className="NewTaskForm" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Enter a new task..."
        value={taskName}
        onChange={handleChange}
      />
      <div className="NewTaskForm-buttons">
        <button className="NewTaskForm-create">Create</button>
        <button className="NewTaskForm-cancel" onClick={cancelAddTask}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewTaskForm;

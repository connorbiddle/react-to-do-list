import React, { useContext, useState } from "react";
import { TasksContext } from "../TasksContext";
import "../styles/NewTaskForm.css";

const NewTaskForm = (props) => {
  const { cancelAddTask } = props;
  const { createTask } = useContext(TasksContext);
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => setTaskName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = taskName.trim();
    if (name.length <= 0) return;
    createTask(name);
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

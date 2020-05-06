import React, { useState, useContext } from "react";
import { TasksContext } from "../TasksContext";
import "../styles/EditTask.css";

const EditTask = ({ id, name, stopEditing }) => {
  const [text, setText] = useState(name);
  const { editTask, deleteTask } = useContext(TasksContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) editTask(id, text);
    else deleteTask(id);
    stopEditing();
  };

  return (
    <form className="EditTask" onSubmit={handleSubmit}>
      <input autoFocus type="text" value={text} onChange={handleChange} />
    </form>
  );
};

export default EditTask;

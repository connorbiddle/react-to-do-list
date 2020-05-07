import React, { useState, useContext } from "react";
import { TasksContext } from "../TasksContext";
import "../styles/EditTask.css";

const EditTask = ({ id, name, stopEditing }) => {
  const [text, setText] = useState(name);
  const { editTask, deleteTask } = useContext(TasksContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = text.trim();
    if (newName.length > 0) editTask(id, newName);
    else deleteTask(id);
    stopEditing();
  };

  const checkEscapePressed = (e) => {
    if (e.keyCode === 27) stopEditing();
  };

  return (
    <form className="EditTask" onSubmit={handleSubmit} onBlur={stopEditing}>
      <input
        autoFocus
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={checkEscapePressed}
      />
    </form>
  );
};

export default EditTask;

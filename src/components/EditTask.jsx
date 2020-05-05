import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/EditTask.css";

const EditTask = ({ id, name, stopEditing }) => {
  const [text, setText] = useState(name);
  const { editTask } = useContext(AppContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, text);
    stopEditing();
  };

  return (
    <form className="EditTask" onSubmit={handleSubmit}>
      <input autoFocus type="text" value={text} onChange={handleChange} />
    </form>
  );
};

export default EditTask;

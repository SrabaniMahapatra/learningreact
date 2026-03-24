import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd() {
    if (task === "") return;

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = task;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, task]);
    }

    setTask("");
  }

  function handleEdit(index) {
    setTask(list[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button onClick={handleAdd}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <button
                className="edit-btn"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

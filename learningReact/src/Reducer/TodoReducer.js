import  { useReducer } from "react";
// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
}

function TodoReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo List</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
          
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoReducer;
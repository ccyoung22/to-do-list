import { useState } from "react";
function InputArea({ addNewListItem }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNewListItem(input);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
}

export default InputArea;

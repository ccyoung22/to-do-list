import { useState } from "react";

function InputArea({ addListItem }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addListItem(input);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Add an item"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default InputArea;

//state imported
//input area componenet created with add new list item function passed in
//state of input is tracked
//handle sumbit function event passed in, default presented, addnewlist item called and passed input, set input put back to being empty
//returning - a form element that triggers handle submit
//an input elemnt with type, value and onchange and a place holder
//a button with a sumbit type

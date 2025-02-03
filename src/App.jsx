import { useState } from "react";
import OutputArea from "./components/OutputArea";
import InputArea from "./components/InputArea";

function App() {
  const [list, setList] = useState([]);

  function addListItem(newListItem) {
    return setList([...list, newListItem]);
  }

  return (
    <>
      <InputArea addListItem={addListItem} />
      <OutputArea list={list} />
    </>
  );
}
export default App;

//use stat eimpoted
//app component created
//track the state of the list here
//a function that adds a new list item, itside the function takes the currect list state and adds a new item to it
//returns the input area whihc is passed a fucntion
//and the output area whihc is passed what it needs

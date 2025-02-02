import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [list, setList] = useState([]);

  function addNewListItem(newListItem) {
    setList([...list, newListItem]);
  }

  return (
    <>
      <InputArea addNewListItem={addNewListItem} />
      <OutputArea list={list} />
    </>
  );
}

export default App;

//set list state is defined in the app
//set list function is defined in the app
//a function is defined in app which take the list array and generates a new list item with the input from the input area via a call back function

//An output area that contains-
//A list of to do items that can be checked off
//an input area -
// a form element that allows input of items to be added to the list

import { useState } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [list, setList] = useState();

  return (
    <>
      <InputArea />
      <OutputArea />
    </>
  );
}

export default App;

//An output area that contains-
//A list of to do items that can be checked off
//an input area -
// a form element that allows input of items to be added to the list

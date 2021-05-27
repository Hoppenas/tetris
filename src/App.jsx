import './App.css';
import { useState } from 'react';
import turn from "./utils/Turn";
import moveShape from "./utils/MoveShape";
import AddShape from "./utils/AddShape";

function App() {
  const [ currentShape, setCurrentShape ] = useState([]);
  const [ currentTable, setCurrentTable ] = useState(Array(20).fill().map(()=>Array(10).fill(0)))

  document.onkeydown = function (event) {
    switch (event.key) {
      case "ArrowLeft":
          moveShape("left", currentTable, currentShape, setCurrentTable, setCurrentShape);
          break;
      case "ArrowUp":
          turn(currentShape, setCurrentShape, currentTable, setCurrentTable);
          break;
      case "ArrowRight":
          moveShape("right", currentTable, currentShape, setCurrentTable, setCurrentShape);
          break;
      case "ArrowDown":
          moveShape("down", currentTable, currentShape, setCurrentTable, setCurrentShape);
          break;
      default:
          break;
    }
  };

  return (
    <div className="App">
      {currentTable.map((line, key) =>
        <div key={key} className="line">
          {line.map((field, key) =>
            <div key={key} className={field===0 ? "field" : "field field-active"}></div>
          )}
        </div>
      )}
      <button onClick={() => AddShape(currentTable, setCurrentTable, currentShape, setCurrentShape)}>add T</button>
      <button onClick={() => moveShape("down", currentTable, currentShape, setCurrentTable, setCurrentShape)}>Down</button>
      <button onClick={() => moveShape("left", currentTable, currentShape, setCurrentTable, setCurrentShape)}>left</button>
      <button onClick={() => moveShape("right", currentTable, currentShape, setCurrentTable, setCurrentShape)}>right</button>
      <button onClick={() => turn(currentShape, setCurrentShape, currentTable, setCurrentTable)}>turn</button>
    </div>
  );
}

export default App;

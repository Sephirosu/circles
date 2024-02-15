import { useState } from "react";
import Circles from "./Circles";

function App() {
  const [circles, setCircles] = useState([]);
  const [undo, setUndo] = useState([]);

  const addCircleHandler = (e) => {
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
    };

    setCircles((prevCircle) => [...prevCircle, newCircle]);
  };

  const undoCircles = (e) => {
    e.stopPropagation();
    if (circles.length > 0) {
      const removedLast = circles.pop();
      setUndo([...undo, removedLast]);
    }
  };

  const redoCircles = (e) => {
    e.stopPropagation();
    if (undo.length > 0) {
      const lastUndo = undo.pop();
      setCircles((prevCircles) => [...prevCircles, lastUndo]);
    }
  };

  return (
    <div className="relative w-screen h-screen " onClick={addCircleHandler}>
      {circles.map((circle, index) => (
        <Circles circle={circle} index={index} key={index} />
      ))}
      <div className="fixed">
        <button
          onClick={redoCircles}
          className="flex p-5 rounded-lg  bg-green-800 m-10"
        >
          Redo
        </button>
        <button
          onClick={undoCircles}
          className="flex p-5 rounded-lg bg-red-800 m-10"
        >
          Undo
        </button>
      </div>
    </div>
  );
}

export default App;

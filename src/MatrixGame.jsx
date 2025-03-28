import { useState } from "react";
import "./MatrixGame.css";

export default function MatrixGame() {
  const [colors, setColors] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);
  const [isFinished,setIsFinished]=useState(false);


  const handleReplay=()=>{
    setColors(Array(9).fill("white"));
    setClickOrder([]);
    setIsFinished(false)
  }

  const handleClick = (index) => {
    if (colors[index] !== "white") return;
    const newColors = [...colors];
    newColors[index] = "green";
    setColors(newColors);

    const newOrder = [...clickOrder, index];
    setClickOrder(newOrder);

    if (newOrder.length === 9) {
      changeToOrange(newOrder);
    }
  };

  const changeToOrange = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setColors((prev) => {
          const updated = [...prev];
          updated[idx] = "orange";
          if (updated.every(color => color === "orange"))
            setIsFinished(true)
          return updated;
        });
      }, i * 500);
    });
  };

  return (
    <div id="matrix-game-app">
    <h1>Matrix Game</h1>
    <div className="matrix-container">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="matrix-cell"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      {isFinished && <button onClick={handleReplay}>Replay</button>}
      <ul>
        <li><strong>Rule 1 : </strong><span>When you click on a box - color should change to green</span></li>
        <li><strong>Rule 2 : </strong><span>When you click on the last box, all colors should change to orange in sequence of their clicks (original clicks)</span></li>
      </ul>
    </div>
  );
}

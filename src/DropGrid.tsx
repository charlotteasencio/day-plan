import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { DragBox } from "./DragBox";

//@ts-ignore
const GridSquare = ({ id }) => {
  const [left, setLeft] = useState();
  console.log(id);
  function moveCard() {
    setLeft(id);
  }

  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={dropRef}
      style={{
        backgroundColor: isOver ? "red" : "purple",
        border: "1px solid gray",
      }}
      className="gridSquare"
    >
      {left === id ? <DragBox /> : null}
    </div>
  );
};

//@ts-ignore
export const DropGrid = () => {
  const gridNumber = 6;
  var gridSquares = [];
  for (let i = 0; i < gridNumber; i++) {
    gridSquares.push(<GridSquare id={i} />);
  }

  return (
    <div
      style={{
        display: "grid",
        height: "100%",
        gridTemplateColumns: "auto auto auto",
      }}
      className="dropGrid"
    >
      {gridSquares}
    </div>
  );
};

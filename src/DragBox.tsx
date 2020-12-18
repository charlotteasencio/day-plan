import React, { ReactElement } from "react";
import { useDrag } from "react-dnd";

//@ts-ignore
export const DragBox = (): ReactElement => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: "card",
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      className="card"
      ref={dragRef}
      style={{
        backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
        height: "100px",
        width: "100px",
      }}
    >
      test
    </div>
  );
};

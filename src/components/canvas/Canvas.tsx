import React from 'react'
import { useState } from 'react'
import styles from "./canvas.module.css"
import { Stage, Layer, Rect, Circle, Text } from 'react-konva'


export default function Canvas() {
  let state = {
    isDragging: false,
    x: 80,
    y: 50,
  }
  const [pos, setPos] = useState(state);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect x={state.x} y={state.y} draggable fill={pos.isDragging ? "blue" : "green"} width={50} height={50} onDragStart={() => {
          setPos({
            isDragging: true,
            x: state.x,
            y: state.y,
          })
        }}

          onDragEnd={(e) => {
            setPos({
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            })
          }} />
        <Circle x={200} y={60} fill="green" draggable radius={50} />
      </Layer>
    </Stage>
  )

}

import React from "react"
import boxes from "./boxes";
import "./index.css";
import Box from "./Box"

function App(props) {
  const [squares, setSquares]=React.useState(boxes)
  const styles = {
    backgroundColor: props.darkMode? '#222222' : '#cccccc'
  }
  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })

    })
  }
  const squareElements = squares.map(square => (
    <Box 
      style={styles} 
      className="box" 
      key={square.id} 
      on={square.on} 
      id={square.id}
      toggle={toggle}
      />
  ))


  return (
    <div >
      {squareElements}

      
    </div>
  );
}

export default App;

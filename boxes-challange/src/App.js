import React from "react"
import boxes from "./boxes";
import "./index.css";
import Box from "./Box"

function App(props) {
  const [squares, setSquares]=React.useState(boxes)



  const styles = {
    backgroundColor: props.darkMode? '#222222' : '#cccccc'
  }
  const squareElements = squares.map(square => (
    <Box style={styles} className="box" key={square.id} on={square.on} />
  ))


  return (
    <div >
      {squareElements}

      
    </div>
  );
}

export default App;

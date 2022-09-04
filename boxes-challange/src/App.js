import React from "react"
import boxes from "./boxes";
import "./index.css";

function App(props) {
  const [squares, setSquares]=React.useState(boxes)



  const styles = {
    backgroundColor: props.darkMode? '#222222' : '#cccccc'
  }
  const squareElements = squares.map(square => (
    <div style={styles} className="box" key={square.id}>

    </div>
  ))


  return (
    <div >
      {squareElements}

      
    </div>
  );
}

export default App;

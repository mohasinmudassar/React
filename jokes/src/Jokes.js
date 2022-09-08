import React from 'react';
import './index.css';


export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    

    return(
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <button cnCLick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
        
    )
}
import React from 'react'

export default function Box(props) {

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    return (
        <div 
            style={styles} 
            className='box' 
            onClick = {()=>props.toggle(props.id)}
        >
        </div>
    )
}
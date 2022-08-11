import React from "react";
import "./style.css";

export default function Card() {
    return(
        <div className="card">
            <img src='../person-1.png' alt='person-1' className="card-image"/>
            <div className="card-stats">
                <img src='../Star 1.png' alt='star' className="card-star"/>
                <span> 5.0 </span>
                <span className="grey"> (6) • </span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p ><span className="bold">From 136$ </span>/ person</p>
        </div>
    ) 
}
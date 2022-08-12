import React from "react";
import "./style.css";

export default function Card(props) {
    return(
            <div className="card ">
                <img src= {props.image} className="card-image"/>
                <div className="card-stats">
                    <img src='../images/Star 1.png' alt='star' className="card-star"/>
                    <span> {props.rating} </span>
                    <span className="grey"> ({props.reviews}) • </span>
                    <span className="grey">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p ><span className="bold">From {props.price}$ </span>/ person</p>
            </div>
    ) 
}
import React from "react";
import "./style.css";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"}
    return(
            <div className="card ">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src= {props.item.coverImg} className="card-image"/>
                <div className="card-stats">
                    <img src='../images/Star 1.png' alt='star' className="card-star"/>
                    <span> {props.item.stats.rating} </span>
                    <span className="grey"> ({props.item.stats.reviews}) • </span>
                    <span className="grey">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p ><span className="bold">From {props.item.price}$ </span>/ person</p>
            </div>
    ) 
}
import React from "react";
import "./index.css";

export default function Card(){
    return(
        <div className="card">
            <img src = "../photos/japan.jpeg" className="card-image"/>

            <div className="card-stats">
                <img src='../photos/location.png' alt='location' className="card-location"/>
                <span>japan</span>
                <span>view on google maps</span>
            </div>
            <h1>Mount Fuji</h1>
            <date>12-02-2022</date>
            <p>msdshadkhsfkjkjfkjdfjkbgkjb</p>

        </div>
    )
}
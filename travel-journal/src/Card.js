import React from "react";
import "./index.css";

export default function Card(){
    return(
        <div className="card">

                <img className=" card-image" src = "../photos/japan.jpeg"/>

                <div className="location-stats">
                    <img src='../photos/location.png' alt='location' className="card-location"/>
                    <span>JAPAN</span>
                    <span className="grey"><u>View on Google Maps</u></span>
                </div>
                    <h1 className="des-h1">Mount Fuji</h1>
                    <span className = "des-date">12 Jan-2021 - 24 Jan,2021</span>
                    <p className="des-text">Mount Fuji is the tallest mountain in Japan, standing at 
                        3,776 meters (12,380 feet). Mount Fuji is the single most 
                        popular tourist site in Japan, for both Japanese and foreign tourists.</p>

                

            <hr/>
        </div>
    )
}
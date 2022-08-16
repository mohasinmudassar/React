import React from "react";
import "./index.css";

export default function Card(props){
    return(
        <div>
        <div className="card">

                <img className=" card-image" src = {props.imageUrl}/>
            <div className="card-info">
                <div className="location-stats">
                    <img src='../photos/location.png' alt='location' className="card-location"/>
                    <span className="loc-dest">{props.location}</span>
                    <a className="grey" href={props.googleMapsUrl} target="_blank"><u>View on Google Maps</u></a>
                </div>
                    <h1 className="des-h1">{props.title}</h1>
                    <span className = "des-date">{props.startDate} - {props.endDate}</span>
                    <p className="des-text">{props.description}</p>    
            </div>
            </div>
            <hr className="hr" />
        </div>
    )
}
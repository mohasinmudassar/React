import React from "react";
import "./contact.css";

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="../phone.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="../mail.png" />
                <p>{props.email}</p>
            </div>
        </div>
        
    );
}
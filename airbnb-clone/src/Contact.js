import React from "react";
import "./contact.css";

export default function Contact() {
    return (
        <div className="contact-card">
            <img src="../cat1.jpeg"/>
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    );
}
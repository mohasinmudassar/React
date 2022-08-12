import React from "react";
import "./style.css";

export default function Hero() {
    return(
        <section className = "hero-all">
            <img className= "hero-img" src = '../images/main.png' alt = 'main' />
            <h1 className="hero-h1">Online Experiences</h1>
            <p className="hero-p" >Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
} 
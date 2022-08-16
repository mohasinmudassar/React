import react from 'react';
import "./style.css";

export default function Navbar() {
  return (
    <nav className="nav">
            <img className="nav-img" src = "../photos/troll-face.png" />
            <h2 className="nav-h2">Meme Generator</h2>
            <h4 className='nav-h4'>React Course - Project 3</h4>
        </nav>
  );
}
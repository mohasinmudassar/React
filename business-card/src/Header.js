import React from 'react';
import './index.css';

export default function Header(){
    return(
        <header>
            <img className = 'header-img' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0rRsL3sugicUgQPX1O6tbIAovGXDKO4m_w&usqp=CAU' alt='mohasin'/>
            <h2 className='header-h2'>Mohasin Mudassar</h2>
            <text className='header-text1'>Frontend Developer</text>
            <text className='header-text2'>mohasin.com</text>
            <button  className = "header-btn" onclick= "https://www.linkedin.com/feed/"> Linkedin</button>

        </header>
    )
}
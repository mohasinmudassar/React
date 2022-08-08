import React from 'react';
import './index.css';

export default function Header(){
    return(
        <main>
            <h4 className='main-A'>About</h4>
            <p className='main-p1'>I am a frontend developer with a particular 
                interest in making things simple and automating 
                daily tasks. I try to keep up with security and 
                best practices, and am always looking for new 
                things to learn. </p>
            <h4 className='main-B'>Interests</h4>
            <p className='main-p2'>
            Food expert. Music scholar. Reader. Internet fanatic. 
            Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
            Coffee fanatic.
            </p>
        </main>
    )
}
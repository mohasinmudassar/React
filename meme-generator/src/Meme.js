import React from 'react';
import './style.css';

export default function Form() {
    function handleClick(){
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"></a>
    }
    return(
        <main>
            
            <form className='form'>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className='form-input'
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className='form-input'
                />
                <button className='form-button' onCLick ={handleClick} type="button">Get a new Meme Image</button>
            </form>
        </main>   
    )
}
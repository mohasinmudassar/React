import React from 'react';
import './style.css';

export default function Form() {
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
                <button className='form-button' type="button">Get a new Meme Image</button>
            </form>
        </main>
        
    )

}

import React from 'react';
import './style.css';
import memeData from './memeData';

export default function Form() {

    let url
    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        url = memesArray[randomNumber].url;
    }
    return(
        <main>
            <p className='url-img'>{url}</p>
            <div className='form'>
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
                <button 
                    className='form-button' onCLick ={getMemeImage} type="button">Get a new Meme Image
                </button>
            </div>
        </main>   
    )
}
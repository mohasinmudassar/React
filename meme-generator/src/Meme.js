import React from 'react';
import './style.css';
import memeData from './memeData';

export default function Form() {

    const [memeImage , setmemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
   
        setmemeImage(memesArray[randomNumber].url )
    }
    return(
        <main>
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
            <img src={memeImage} className = "meme-image"/>
        </main>   

    )
    }
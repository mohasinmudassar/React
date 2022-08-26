import React ,{useState} from 'react';
import './style.css';
import memeData from './memeData';


export default function Form() {

    const [meme , setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })

    const [memeImage , setMemeImage] = useState("");

    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
   
        setMemeImage(memesArray[randomNumber].url )
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
                    className='form-button' 
                    onClick ={getMemeImage} 
                    >
                        Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className = "meme-image"/>
        </main>   

    )
    }
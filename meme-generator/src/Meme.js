import React ,{useState} from 'react';
import './style.css';
import memeData from './memeData';


export default function Form() {
    
    //const [memeImage , setMemeImage] = useState("");


    const [meme , setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })

    const [allMemeImages , setAllMemeImages] = useState(memeData)


    function getMemeImage(){
        const memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
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
            <img src={meme.randomImage} className = "meme-image"/>
        </main>   

    )
    }
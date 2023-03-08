import React, { useEffect } from 'react';
import {useState} from 'react'

const Meme = () =>{

    const [allMemes , setAllMemes] = useState([])

    useEffect(() => {

        // Method 2
        async function getMemeData(){
             const res = await  fetch('https://api.imgflip.com/get_memes')
             const data= await res.json()
             setAllMemes(data.data.memes)
        }

        getMemeData()


        // Method 1
        // fetch('https://api.imgflip.com/get_memes')
        // .then(res => res.json())
        // .then(data =>setAllMemes(data.data.memes))

    } , [])

    const [meme , setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

   

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
             ...prevMeme,
             randomImage: url
        }));
    }

    const handleChange = (event) => {
         const {name , value} = event.target
         setMeme(prevMeme => ({
             ...prevMeme ,
             [name] : value
         }))
    }

    return(
       <main>
           <div className='form'>
                <input 
                   type='text' 
                   placeholder='Top Text'
                   className='form-input'
                   name='topText'
                   value={meme.topText}
                   onChange={handleChange}
                />
                <input 
                   type='text' 
                   placeholder='Bottom Text'
                   className='form-input'
                   name='bottomText'
                   value={meme.bottomText}
                   onChange={handleChange}
                />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>
           </div>
           <div className='meme'>
               <img src={meme.randomImage}  className='meme-image'/>
               <h2 className='meme-text top'>{meme.topText}</h2>
               <h2 className='meme-text bottom'>{meme.bottomText}</h2>
           </div>
       </main>
    )

}


export default Meme;
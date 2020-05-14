import React, { useEffect, useState } from 'react';
import {colors} from './colors.js';
const Tiles = (props) => {
    const [error,setError] = useState('');
    useEffect(()=>{
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        if ('SpeechRecognition' in window) {
            try{
            const recognition = new window.SpeechRecognition();
            recognition.interimResults = true
            recognition.continuous = true
            recognition.onresult = (event) => {
                const speechToText = event.results[event.results.length -1][0].transcript;
                try{
                    let id = parseInt(speechToText);
                    if (!isNaN(id) ){
                        let obj = colors.filter(color => color.id === id)
                        if(obj[0] !== undefined){
                            let el = document.getElementsByClassName("tile");
                            el[id-1].classList.add("upscale");
                            setTimeout(()=> el[id-1].classList.remove("upscale"),100);
                            props.change(obj[0])
                        };
                    }

                }catch(e){
                console.log(speechToText);}
              }
              recognition.start();}catch(e){
                  setError("speech recognition API not supported");
              }
          
        } else {
            alert("speech recognition API not supported")
          }
    },[])

    return (<>
        <div className="error">{error}</div>
        <div className="tiles">
            {colors.map((color) => {
                return (<div className="tile" key={color.id} style={color}>{color.id}</div>)
            })}
            
        </div>
        </>
    );
};

export default Tiles;
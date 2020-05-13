import React, { useEffect } from 'react';
import {colors} from './colors.js';
const Tiles = (props) => {
    
    useEffect(()=>{
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        if ('SpeechRecognition' in window) {
            const recognition = new window.SpeechRecognition();
            recognition.interimResults = true
            recognition.continuous = true
            recognition.onresult = (event) => {
                const speechToText = event.results[event.results.length -1][0].transcript;
                try{
                    let id = parseInt(speechToText);
                    if (id !== NaN){
                        let obj = colors.filter(color => color.id === id)
                        if(obj[0] !== undefined){
                            let el = document.getElementsByClassName("tile")[id-1];
                            el.classList.add("upscale");
                            setTimeout(()=> el.classList.remove("upscale"),2000);
                            props.change(obj[0])
                        };
                    }

                }catch(e){
                console.log(speechToText);}
              }
              recognition.start();
          
        } else {
            alert("speech recognition API not supported")
          }
    },[])

    return (<>
        
        <div className="tiles">
            {colors.map((color) => {
                return (<div className="tile" key={color.id} style={color}>{color.id}</div>)
            })}
            
        </div>
        </>
    );
};

export default Tiles;
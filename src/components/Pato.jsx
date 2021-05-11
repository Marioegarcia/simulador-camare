import React from "react";
import pato from '../assets/img/pato.jpg';
import '../App.css';
import { MapInteractionCSS } from 'react-map-interaction';





export const Pato = () => {
 
    return (
    
    <div className='captura'>
        <MapInteractionCSS
        minScale={1.5}
        >
         <div
         className='patos '
         >
        </div>   
        {/* <img src={pato} className="App-logo" alt="logo" /> */}
        </MapInteractionCSS>
    </div>  
      
        
      
    
    )
}

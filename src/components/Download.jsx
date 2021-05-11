
import React, { createRef } from "react";

import { useScreenshot, createFileName } from "use-react-screenshot";
import pato from '../assets/img/pato.jpg';

import '../App.css';
import { MapInteractionCSS } from 'react-map-interaction';

export const Download = () => {
    const ref = createRef(null);
    const [image, takeScreenShot] = useScreenshot({
      type: "image/png",
      quality: 1.0
    });
  
    const download = (image, { name = "img", extension = "png" } = {}) => {
      const a = document.createElement("a");
      a.href = image;
      a.download = createFileName(extension, name);
      a.click();
    };
  
    const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

    return (
    <div className='camara'>
        <h3> Eduardo Ortiz Diaz </h3>


        <button className='capturar' 
        onClick={downloadScreenshot}
        >
        </button>
        <div
            ref={ref}
            style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "20px"
            }}
        >
            
            <div className='captura'>
        <MapInteractionCSS
        minScale={1.5}
        >
         <div
         className='patos '
         >
         <img src={pato} className="App-logo" alt="logo" />
        </div>   
        
        </MapInteractionCSS>
    </div>  
          

        </div>
    </div>
    )
}

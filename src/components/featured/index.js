 import React from 'react';
 import Carrousel from './Carrousel'; /** Solicito(importo) imagenes del carrusel*/
 import TimeUntil from './TimeUntil';


 const Featured = () => {
     return (
         <div style={{position:'relative'}}>
            
            <Carrousel/>
            
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

            <TimeUntil/>

         </div>
     );
 };
 
 export default Featured;
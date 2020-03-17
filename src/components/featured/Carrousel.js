import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel = () => {

    const settings = {
        dots: false, /**quiero quitar los 'dots' que están debajo del slidder*/
        infinite: true,/**va a estar loopeando infinitamente */
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`, /**calcula la altua de la ventana para autoacomodarse (Vainilla JS) */
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`
                        }}
                    
                    ></div>
                </div>
                <div>
                     <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`
                        }}
                    
                    ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`
                        }}
                    
                    ></div>
                </div>


            </Slider>
            
        </div>
    );
};

export default Carrousel;
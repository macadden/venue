/**Es un RCC porque ¿Depende de ALGO? */
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../Utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }

    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
    /**componentDidUpdate hace correr "porcentage" las veces que sea necesario (hasta llegar a 30) */
    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30) /**este 30 es el tiempo que pasa en la animación de nro a nro */
        
    }


    render() {
        return (
            <div className="center_wrapper">    
                <div className="discount_wrapper"> 

                    <Fade
                        onReveal={(()=> this.porcentage())} //**el % se muestra cuando aparece en pantalla */
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>

                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>Phasellus massa massa, bibendum et venenatis a, dapibus a orci. Pellentesque sit amet semper nisl, eu lacinia sapien. Proin et tincidunt mauris. Maecenas maximus porttitor consequat. Nullam interdum dignissim erat, ut sodales nibh vulputate non. Nulla ultricies volutpat erat. Praesent ac tortor interdum, aliquet est vel, viverra lectus. Donec dignissim tincidunt nunc vitae ultrices. Phasellus vulputate leo vitae ante eleifend dapibus. Vivamus vulputate fermentum erat. Aliquam in lacus eu arcu dignissim convallis sed iaculis diam. Sed faucibus posuere nunc, eu malesuada dolor ultrices vel.</p>

                            <MyButton /**Necesita mandar "props" porque quizás quiero cambierle cosas*/
                                text="Purchase Tickets"
                                bck="#0000FF"
                                color="#FFFF00"
                                link="http://google.com"
                            />

                        </div>
                    </Slide>


                </div>
                
            </div>
        );
    }
}

/** -"center_wrapper" colorea; "discount_wrapper" centraliza (?).
 *  -"<p>" representa PÁRRAFO.
 *  -La animación del PORCENTAJE la hago a través de un estado y no por JAVASCRIPT*/
export default Discount;
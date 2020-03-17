/**es una RCC porque voy alimentando las 'boxes' desde un ESTADO*/

import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100, 150, 250],
        positions:['Balcony','Medium','Star'],
        desc:[
            'Aenean eleifend in dui quis elementum. Aliquam vel odio at mauris iaculis viverra. Proin condimentum molestie ipsum vel pellentesque. In fermentum erat ut nibh condimentum, sed tempor enim euismod. Aliquam ac posuere elit. Vivamus lobortis augue at urna pharetra ultricies. Nam consequat rutrum consequat. Duis sollicitudin nisi vehicula risus laoreet, nec convallis nisi volutpat.',
            'Integer pretium purus sit amet eleifend laoreet. Nullam id fermentum nunc. Curabitur molestie tortor quis viverra porta. Vestibulum condimentum interdum nulla ut varius. Pellentesque hendrerit, nibh eu porta aliquam, massa sapien sodales quam, a tempor massa nulla vel lorem. Quisque consequat tellus a malesuada vestibulum. In blandit felis vel leo fermentum malesuada. Nunc ac malesuada massa. Suspendisse vestibulum, ligula at mollis pellentesque, arcu ipsum volutpat libero, vitae aliquam purus nisi id augue.',
            'Morbi pretium scelerisque hendrerit. Curabitur rhoncus erat tincidunt sapien ultricies, eu euismod tortor vulputate. Nam ut purus nec erat rutrum tincidunt id eu justo. Suspendisse dapibus nunc a laoreet tristique. Quisque efficitur, tellus a varius rutrum, orci est mattis eros, ac commodo tellus urna facilisis erat. Mauris a accumsan ex. In egestas dignissim dictum. Maecenas vitae lorem nulla. In enim tellus, sollicitudin ut tortor eu, congue tincidunt leo. Duis volutpat tellus vel tristique faucibus. Curabitur odio nisl, ornare bibendum semper at, fringilla id turpis.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],
        delay:[500,0,600]
    
    }
    /**-La arrowFuntion va a devolver una jsx, es por eso que pongo "()" y no "{{}}" después del "=>".
     *  Si uso "()" puedo devolver un "<div>" y será renderizado cada vez que se llame a la función. Si usara
     *  "{}", tendría que poner un "return()" antes del "<div>".
     * -Necesito loopear al menos los precios porque siempre tengo 3 posiciones en el array; entonces loopeo y
     *  obtengo las otras posiciones con el nro de index.
     * -El "map" va a loopear sobre "prices". En cada iteración voy a pasar algo y voy a estar corriendo algo.
     *  Si quiero devolver un JSX con el "map", voy a usar "()". "box" va a ser cada item de cada iteración 
     *  (es decir, en la 1ra iteración "box" va a ser 100, Balcony, 1ra descripción); "i" va a ser el nro de
     *  iteración.*/

    showBoxes = () => (
        this.state.prices.map((box, i)=>(
            /**En REACT cuando loopeo algo, tengo que agregar una 'key' */
            <Zoom delay={this.state.delay[i]} key={i}>

                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>${this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>${this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#0000FF"
                                color="#FFFF00"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>

                </div>

            </Zoom>

        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;
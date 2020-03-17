/**Es un Class based Component (rcc) porque vamos a tener un estado que va a manejar todos los números*/
import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'; /**importo el efecto con el que aparece la cuenta regresiva */

class TimeUntil extends Component {

    state = {
        deadLine:'Dec, 16, 2020',
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'
    }

//**The "Date.parse()" function is an inbuilt function in JavaScript which helps us to know the exact number
/*  of milliseconds that have passed since midnight, January 1, 1970, till the date we provide. */

    getTimeUntil(deadLine){
        const time = Date.parse(deadLine) - Date.parse(new Date());
        if(time < 0) {
            console.log('Date Passed')
        }else{ /**todo lo que viene ahora es Vanilla JS;"Math.floor()"
                Devuelve el máximo entero menor o igual a un número. */
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));

            this.setState({ /**establezco valores al estado inicializado al ppio de la clase */
                days, /** days=days (etc); nombre y valor tienen el mismo nombre; ES6 lo traduce por ntros */
                hours,
                minutes,
                seconds 
            })
        }
    }
    
    componentDidMount(){ /**https://es.reactjs.org/docs/react-component.html#componentdidmount
                            Es una trigger function, quiero ejecutar la misma función después de cada segundo,
                            así que ejecuta a "getTimeUntil()" en un loop dsp de cada segundo, por medio de 
                            "setInterval().
                            Paso "this.state.deadLine" porque necesito pasar cuándo va a terminar el loop*/
        setInterval( () => this.getTimeUntil(this.state.deadLine),1000)
    }

    render() {
        return (
            <Slide left delay={1000}>

                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
              </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                    </div>
                            <div className="countdown_tag">
                                Days
                    </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.hours}
                    </div>
                            <div className="countdown_tag">
                                Hs
                    </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.minutes}
                    </div>
                            <div className="countdown_tag">
                                Min
                    </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.seconds}
                    </div>
                            <div className="countdown_tag">
                                Sec
                    </div>
                        </div>
                    </div>
                </div>

            </Slide>

        );
    }
}

export default TimeUntil;
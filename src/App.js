import React from 'react';
import './resources/styles.css'; /**todos los estilos van a ser 'inyectados' en nuestra app;
                                    cuando use el nombre de una clase (className="App"), los obtendré*/
import { Element } from 'react-scroll';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Princing from './components/Pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';     

function App() {
  return (
    /**<Element> es de 'react-scroll', entonces el Scroll sabe que tengo un elemento, pero voy a tener que pasar
     * el nombre de todas maneras.
     */
    <div className="App" style={{height:"1500px", background:'cornflowerblue'}}>
      <Header/>

      <Element name="featured">
        <Featured/>
      </Element>

      <Element name="venuenfo">
        <VunueNfo/>
      </Element>

      <Element name="highlights"> 
        <Highlight/>
      </Element>

      <Element name="pricing">
        <Princing/>
      </Element>

      <Element name="location">
        <Location/>
      </Element>
  
      <Footer/>
    </div>
  );
}

export default App;

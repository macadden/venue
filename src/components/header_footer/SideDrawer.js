import React from 'react';
import { scroller } from 'react-scroll'; /** solo quiero importar "scroller" de todas las disponibilidades*/

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {  /** Acá se ve HERENCIA; este es el hijo que importa de props; */
   
    /**Cada vez que hago click en algo, quiero ejecutar esta función que va a recibir un 'element', que es
     *  el lugar al que vamos a ir (NOTA: ESTA FUERA DEL 'RETURN'). */
    const scrollToElement = (element) => {
        /**La función 'scrollTo()' va a recibir el lugar al que queremos ir ('element') y va a tener una 
         * callback funtion que va a ser lo que está entre '{ }'. El 'smooth' le da elegancia al desplazamiento.
         * El 'offset' hace que, al scrollear, el header no tape el titulo de donde se va a parar... es decir,
         * hace que se posicione bien.*/
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150 
        });

      props.onClose(false) /**acá se activa el cerrador (?) del sideDrawer*/
    }
        
    
    return (

       <Drawer
            anchor="right" /**de qué lado abre */
            open={props.open}
            onClose={()=> props.onClose(false)}
       >
           <List component="nav"> 
                <ListItem button onClick={()=> scrollToElement('featured')}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venuenfo')}>
                    Venue NFO
                </ListItem>
                
                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Highlights
                </ListItem>
                
                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Location
                </ListItem>
           </List>
       </Drawer>
    );
};

export default SideDrawer;
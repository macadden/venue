import React, { Component } from 'react';

/**Para empezar necesito traer cosas de Materials UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'; /** Toolbar Pone cosas dentro de AppBar; dentro de Toolbar,
                                                    nombre de className tiene que ser = que en el css */
import MenuIcon from '@material-ui/icons/Menu'; /**es 'icons' porque tiene otra dependencia en relación a
                                                'core'; es otra librería*/
import IconButton from '@material-ui/core/IconButton'; /**Con el InconButton se puede hacer click */

import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
        drawerOpen: false, /**cuando la app arranque la quiero cerrada */
        headerShow: false /**cuando abro la app, la barra superior NO es transparente */
    }    

    componentDidMount(){ /**¿Qué es componentDidMount?; esta parte es Vanilla JavaScript (?) */
        window.addEventListener('scroll',this.handleScroll); /**siempre que scrollee, activo la función 
                                                                handleScroll */
    }

    handleScroll = () => {
        if(window.scrollY > 0){ /** "Y" porque solo checkeo el eje Y*/
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })

        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        } )
    }

    render() {
        return (
           <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#2f2f2f': 'transparent', /**pregunto para meter
                                                                                        color; si es verdadero
                                                                                        meto negro, si no trans*/
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
           >

                <Toolbar>
                    
                    <div className="header_logo"> 
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>

                     <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}  /**quiero que cambie el estado */
                     >
                         <MenuIcon/>
                     </IconButton>   

                     <SideDrawer  /**acá se ve HERENCIA; este es el padre */
                        open={this.state.drawerOpen} /**booleano */
                        onClose={(value)=> this.toggleDrawer(value)} /**si no le estuviese pasando value, 
                                                                    toggleDrawer nunca recibiría el 'false';
                                                                    a la izq de '=>' valuepadre, a la derecha
                                                                    value hijo*/
                     
                     />

                </Toolbar>

           </AppBar>
        );
    }
}

export default Header;
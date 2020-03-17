/**El botón lo voy a usar en varios lugares, así que esto es para reutilizar código */

import React from 'react';
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'

/**-para el botón, el texto en él y otras propiedades son pasadas a través de "props".
 * -"src" es "source".*/
const MyButton = (props) => {
    return (
        <Button
            href={props.link}
            variant="contained"
            size="small"
                style={{
                    background: props.bck,
                    color: props.color
                }}
        >
            <img 
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"

                /**ahora, después de "/>", voy a usar las propiedades de "Button" que paso vía "props" */
            /> 
        
            {props.text}

        </Button>
    );
};

export default MyButton;
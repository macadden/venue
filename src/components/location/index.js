import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe //** "<iframe>" permite incrustrar otra página HTML en la página actual. */
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.707313337916!2d-57.98910830000001!3d-34.913793899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e796c35ba77f%3A0xfa546c6ec8fdfd96!2sEstadio%20%C3%9Anico%20Ciudad%20de%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1578699427396!5m2!1ses-419!2sar"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
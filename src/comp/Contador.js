import React from 'react';
import '../styles/Contador.css'

function Contador({numero}) {
    return(
        <div className="contador">
            {numero}
        </div>
    );
}

export default Contador
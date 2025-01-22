import React, { useState, useEffect } from 'react';
import '../styles/competitions.css';

function Competitons({ InfoDoCamp, Scores }) {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        setTrigger(true);
        setTimeout(() => {
            setTrigger(false);
        }, 1000);
    }, [InfoDoCamp]);

    console.log(InfoDoCamp)

    return (
        <div>
            <div key={InfoDoCamp ? InfoDoCamp.currentSeason.startDate :
                Date.now()} className={`competitions ${trigger ? 'animate' : ''}`}>
                <h2>Nome: {InfoDoCamp.name}</h2>
                <h2>Pais: {InfoDoCamp.area.name}</h2>
                <h3>Temporada Atual:</h3>
                <p><strong>Inicio:</strong> {InfoDoCamp.currentSeason.startDate}</p>
                <p><strong>Termino:</strong> {InfoDoCamp.currentSeason.endDate}</p>
            </div>
            
        </div>
    );
}

export default Competitons;
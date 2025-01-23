import React, { useState, useEffect } from 'react';
import '../styles/competitions.css';

function Competitons({ InfoDoCamp }) {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        if (InfoDoCamp) {
            setTrigger(true);
            setTimeout(() => {
                setTrigger(false);
            }, 1000);
        }
    }, [InfoDoCamp]);

    // Se InfoDoCamp for nulo ou vazio, mostre uma mensagem de fallback
    if (!InfoDoCamp) {
        return <p>Não há dados de competições disponíveis.</p>;
    }

    return (
        <div>
            <div 
                key={InfoDoCamp.currentSeason?.startDate || Date.now()} 
                className={`competitions ${trigger ? 'animate' : ''}`}
            >
                <h2>Nome: {InfoDoCamp?.name || 'Desconhecido'}</h2>
                <h2>País: {InfoDoCamp?.area?.name || 'Não especificado'}</h2>
                <h3>Temporada Atual:</h3>
                <p><strong>Início:</strong> {InfoDoCamp?.currentSeason?.startDate || 'Indisponível'}</p>
                <p><strong>Término:</strong> {InfoDoCamp?.currentSeason?.endDate || 'Indisponível'}</p>
            </div>
        </div>
    );
}

export default Competitons;
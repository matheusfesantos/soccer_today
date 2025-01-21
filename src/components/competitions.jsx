import React, { useState } from 'react';

function Competitons({InfoDoCamp}) {


    return (
        <div>

            <h2>Nome: {InfoDoCamp.name}</h2>

            <h2>Pais: {InfoDoCamp.area.name}</h2>

            <h3>Temporada Atual</h3>
            <p>Inicio: {InfoDoCamp.currentSeason.startDate}</p>
            <p>Termino: {InfoDoCamp.currentSeason.endDate}</p>


            
        </div>
    );
}

export default Competitons;
import React, { useState } from 'react';

function Competitons({InfoDoCamp}) {

    console.log(InfoDoCamp)

    return (
        <div>

            <h2>Nome: {InfoDoCamp.name}</h2>

            <h2>Pais: {InfoDoCamp.area.name}</h2>

            <h3>Temporada Atual:</h3>
            <p><strong>Inicio:</strong> {InfoDoCamp.currentSeason.startDate}</p>
            <p><strong>Termino:</strong> {InfoDoCamp.currentSeason.endDate}</p>

        </div>
    );
}

export default Competitons;
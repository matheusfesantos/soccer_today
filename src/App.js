import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

import PremierLeague from './assets/premierLeague/PL.png';
import Brasileirao from './assets/Brasileirão/brasileirão.png';

import Competitions from './components/competitions';

function App() {

    const [competitionCode, setCompetitionCode] = useState('PL');
    const [info, setInfo] = useState(null);

    useEffect(() => {

        const API = `/v4/competitions/${competitionCode}`;

        const InfoPL = async () => {
            try {
                const response = await fetch(API, {
                    headers: {
                        'X-Auth-Token': 'f723900b174245f29ce35412b6b644a6',
                    },
                });
                const result = await response.json();

                console.log(result);
                setInfo(result);

            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        InfoPL();
    }, [competitionCode]);

    const loadPremierLeague = () => setCompetitionCode('PL');
    const loadBrasileirao = () => setCompetitionCode('BSA');

    return (
        <div>
            <div className='text-main'>
                <h1>Bem vindo ao FutebolToday</h1>

                <h2>Selecione a competição que você acompanhe
                    e se informe sobre os próximos jogos</h2>
            </div>

            <div>
                <div className='competitons'>

                    <img src={PremierLeague} alt="PremierLeague" onClick={loadPremierLeague} />
                    <img src={Brasileirao} alt='Brasileirão' onClick={loadBrasileirao} />

                </div>
            </div>

            {info && <Competitions InfoDoCamp={info} />}

        </div>
    );
}

export default App;
import React, { useState, useEffect } from 'react';

import './App.css'

import PremierLeague from './assets/premierLeague/PL.png';
import Brasileirao from './assets/Brasileirão/brasileirão.png';
import LaLiga from './assets/la_liga/LaLiga.png'

import Competitions from './components/competitions';
import Matches from './components/matches';

function App() {

    const [competitionCode, setCompetitionCode] = useState('PL');

    const [info, setInfo] = useState(null);
    const [matches, setMatches] = useState(null)

    useEffect(() => {

        const API = `/v4/competitions/${competitionCode}`;
        const APIMatches = `/v4/competitions/${competitionCode}/matches`;

        const InfoCompetitions = async () => {
            try {
                const response = await fetch(API, {
                    headers: {
                        'X-Auth-Token': 'f723900b174245f29ce35412b6b644a6',
                    },
                });
                const resultCamp = await response.json();

                setInfo(resultCamp);

            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };//BUSCAR DADOS DA COMPETIÇÃO

        const InfoMacthes = async () => {
            try {
                const response = await fetch(APIMatches, {
                    headers: {
                        'X-Auth-Token': 'f723900b174245f29ce35412b6b644a6'
                    }
                })
                const resultMatche = await response.json()

                console.log(resultMatche)
                setMatches(resultMatche)
            }
            catch (error) {
                console.error('Erro ao buscar dados das Partidas:', error);
            }
        } //BUSCAR DADOS DAS PARTIDAS

        InfoCompetitions()//RETORNAR DADOS
        InfoMacthes()// RETORNAR DADOS

    }, [competitionCode]);

    const loadPremierLeague = () => setCompetitionCode('PL');
    const loadBrasileirao = () => setCompetitionCode('BSA');
    const loadLaLiga = () => setCompetitionCode('PD')

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
                    <img src={LaLiga} alt='La Liga' onClick={loadLaLiga} />

                </div>
                
            </div>

            {info && <Competitions InfoDoCamp={info} />}
            {matches && info && <Matches InfoDosMatches={matches} InfoDoCamp={info} />}

        </div>
    );
}

export default App;
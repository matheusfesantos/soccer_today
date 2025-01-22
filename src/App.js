import React, { useState, useEffect } from 'react';

import './App.css'

import PremierLeague from './assets/premierLeague/PL.png';
import Brasileirao from './assets/Brasileirão/brasileirão.png';
import LaLiga from './assets/la_liga/LaLiga.png'

import Logo from './assets/logo/logo-bola.png'

import Competitions from './components/competitions';
import Matches from './components/matches';
import Scores from './components/scorers';

function App() {

    const [competitionCode, setCompetitionCode] = useState('PL');

    const [info, setInfo] = useState(null)
    const [matches, setMatches] = useState(null)
    const [scorers, setScorers] = useState(null)

    useEffect(() => {

        const API = `/v4/competitions/${competitionCode}`;
        const APIMatches = `/v4/competitions/${competitionCode}/matches`;
        const APIScore = `/v4/competitions/${competitionCode}/scorers`

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
        }

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
        }

        const InfoScore = async () => {
            try {
                const response = await fetch(APIScore, {
                    headers: {
                        'X-Auth-Token': 'f723900b174245f29ce35412b6b644a6',
                    },
                });
                const resultScore = await response.json();

                console.log(resultScore)
                setScorers(resultScore)

            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }

        const InfoTabela = async () => {}

        InfoCompetitions()
        InfoMacthes()
        InfoScore()

    }, [competitionCode]);

    const loadPremierLeague = () => setCompetitionCode('PL');
    const loadBrasileirao = () => setCompetitionCode('BSA');
    const loadLaLiga = () => setCompetitionCode('PD')

    return (
        <div>
            <div className='text-main'>

                <div className='logo'>
                    <h1>QUEM JOGA HOJE ?</h1>
                    <img src={Logo} alt='Logo' />
                </div>

                <h2>Selecione a competição que você acompanhe
                    e se informe sobre os próximos jogos</h2>
            </div>

            <div>
                <div className='competitons'>

                    <img src={PremierLeague} alt="PremierLeague" onClick={loadPremierLeague} />
                    <img src={LaLiga} alt='La Liga' onClick={loadLaLiga} />

                </div>

            </div>

            {info && <Competitions InfoDoCamp={info}/>}
            {scorers && <Scores scorers={scorers} />}
            {matches && info && <Matches InfoDosMatches={matches} InfoDoCamp={info} />}

        </div>
    );
}

export default App;
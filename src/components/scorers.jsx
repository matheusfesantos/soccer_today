import React, { useEffect } from "react";

import '../styles/scorers.css'

function Scores({ scorers, standings }) {

    useEffect(() => {
        console.log(scorers.scorers[0]); // Logando os dados do primeiro artilheiro
    }, [scorers]);

    useEffect(() => {
        console.log(standings); // Logando os dados da tabela
      }, [standings]);

    return (
        <div className="InfoStatitcs">
            <div className="TopGoals">
                <h1>Artilheiros</h1>
                <ul>
                    {scorers && scorers.scorers && scorers.scorers.length > 0 ? (
                        scorers.scorers.map((scorer, index) => (
                            <p key={index}>
                                <div className="statitics">
                                    <strong>{index + 1}. {scorer.player.name}</strong>
                                    <img src={scorer.team.crest} alt="Image-Team" /> - { } |
                                    <strong>
                                        Gols: {scorer.goals} | </strong><strong>
                                        Assistências: {scorer.assists} <br />
                                    </strong>
                                </div>
                            </p>
                        ))
                    ) : (
                        <p>Não há dados de artilheiros disponíveis.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Scores;
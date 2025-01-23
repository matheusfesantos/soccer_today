import React, { useState, useEffect } from "react";
import "../styles/scorers.css";

function Scores({ scorers, standings }) {
    const [loading, setLoading] = useState(true);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        if (scorers || standings) {
            setLoading(true);
            setAnimationFinished(false);

            // Controle do tempo da animação
            setTimeout(() => {
                setLoading(false);
                setTimeout(() => {
                    setAnimationFinished(true);
                }, 500);
            }, 500);
        }
    }, [scorers, standings]);

    return (
        <div className={`InfoStatitcs ${loading ? "fade-in" : "fade-out"}`}>
            {!animationFinished ? (
                <div className="loadingMessage">
                    <p>Carregando informações...</p>
                </div>
            ) : (
                <>
                    {/* Artilheiros */}
                    <div className="TopGoals">
                        <ul>
                            {scorers?.scorers?.length > 0 ? (
                                scorers.scorers.map((scorer, index) => (
                                    <li key={index} className="statitics">
                                        <strong>
                                            {index + 1}. {scorer?.player?.name || "Nome não disponível"}
                                        </strong>
                                        <img
                                            src={scorer?.team?.crest || ""}
                                            alt="Imagem do time"
                                        />
                                        -
                                        <strong>
                                            Gols: {scorer?.goals || 0} | Assistências:{" "}
                                            {scorer?.assists || 0}
                                        </strong>
                                    </li>
                                ))
                            ) : (
                                <p className="ErrorMessage">Não há dados de disponíveis.</p>
                            )}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default Scores;
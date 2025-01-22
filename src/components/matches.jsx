import React, { useState, useEffect } from "react";
import "../styles/matches.css";

function Matches({ InfoDosMatches, InfoDoCamp }) {
  const matches = InfoDosMatches.matches || []; // Garante que é um array
  const [currentMatchday, setCurrentMatchday] = useState(
    InfoDoCamp.currentSeason.currentMatchday
  );
  const [animationClass, setAnimationClass] = useState("");

  // Filtra as partidas da rodada atual
  const matchesForCurrentMatchday = matches.filter(
    (match) => match.matchday === currentMatchday
  );

  // Funções para navegar entre rodadas
  const handleNextMatchday = () => {
    setAnimationClass("animate-fade-in"); // Adiciona a classe de animação
    setTimeout(() => {
      setCurrentMatchday((prev) => prev + 1);
      setAnimationClass(""); // Remove a classe após a animação
    }, 500); // Tempo deve coincidir com o CSS
  };

  const handlePreviousMatchday = () => {
    setAnimationClass("animate-fade-in");
    setTimeout(() => {
      setCurrentMatchday((prev) => (prev > 1 ? prev - 1 : prev));
      setAnimationClass("");
    }, 500);
  };

  useEffect(() => {
    setAnimationClass("animate-fade-in");
    setTimeout(() => {
      setAnimationClass("");
    }, 500);
  }, [InfoDosMatches, InfoDoCamp]);
  
  return (
    <div>
      <h2>Próximas Partidas</h2>

      <div className="Rodadas">
        <button onClick={handlePreviousMatchday}>Anterior</button>
        <h2>Rodada Atual: {currentMatchday}</h2>
        <button onClick={handleNextMatchday}>Próxima</button>
      </div>

      <ul className={`matches-container ${animationClass}`}>
        {matchesForCurrentMatchday.length > 0 ? (
          matchesForCurrentMatchday.map((match) => (
            <p className="Matches" key={match.id}>
              <img
                className="TeamPhoto"
                src={match.homeTeam.crest}
                alt="Time da Casa"
              />
              <strong>{match.homeTeam.name}</strong> vs{" "}
              <strong>{match.awayTeam.name}</strong>
              <img
                className="TeamPhoto"
                src={match.awayTeam.crest}
                alt="Time Visitante"
              />
              <h3>
                {match.score.fullTime.home} X {match.score.fullTime.away}
              </h3>
              <p>
                <strong>Vencedor:</strong> {match.score.winner}
              </p>
              <p>
                <strong>Status da Partida: </strong>
                {match.status}
              </p>
              <h4>Data: {new Date(match.utcDate).toLocaleString()}</h4>
            </p>
          ))
        ) : (
          <p>Nenhuma partida encontrada para esta rodada.</p>
        )}
      </ul>
    </div>
  );
}

export default Matches;
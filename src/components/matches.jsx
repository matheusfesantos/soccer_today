import React, { useState } from "react";

function Matches({ InfoDosMatches, InfoDoCamp }) {
  const matches = InfoDosMatches.matches || []; // Garante que é um array
  const [currentMatchday, setCurrentMatchday] = useState(
    InfoDoCamp.currentSeason.currentMatchday
  );

  // Obtém a data atual
  const now = new Date();

  // Filtra as partidas da rodada atual
  const matchesForCurrentMatchday = matches.filter(
    (match) => match.matchday === currentMatchday
  );

  // Funções para navegar entre rodadas
  const handleNextMatchday = () => {
    setCurrentMatchday((prev) => prev + 1);
  };

  const handlePreviousMatchday = () => {
    setCurrentMatchday((prev) => (prev > 1 ? prev - 1 : prev));
  };

  console.log(InfoDosMatches)

  return (
    <div>
      <h2>Próximas Partidas</h2>

      <div className="Rodadas">
        <button onClick={handlePreviousMatchday}>Anterior</button>
        <h2>Rodada Atual: {currentMatchday}</h2>
        <button onClick={handleNextMatchday}>Próxima</button>
      </div>

      <ul>
        {matchesForCurrentMatchday.length > 0 ? (
          matchesForCurrentMatchday.map((match) => (
            <p key={match.id}>
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

              <h3>{match.score.fullTime.home} X {match.score.fullTime.away}</h3>
              
              <p><strong>Vencedor:</strong> {match.score.winner}</p>
              <p><strong>Status da Partida: </strong>{match.status}</p>

              <br />
              Data: {new Date(match.utcDate).toLocaleString()}
              <br /> <br /> <br /> <br /> <br /> <br /> <br />
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

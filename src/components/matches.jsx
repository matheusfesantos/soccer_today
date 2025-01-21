import React from "react";

function Matches({ InfoDosMatches }) {
  const matches = InfoDosMatches.matches || []; // Garante que é um array

  // Obtém a data atual
  const now = new Date();

  // Filtra e ordena as partidas futuras
  const nextMatches = matches
    .filter((match) => new Date(match.utcDate) > now) // Apenas partidas futuras
    .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate)); // Ordena por data

  // Exibe uma mensagem caso não haja partidas futuras
  if (nextMatches.length === 0) {
    return <p>Não há partidas futuras disponíveis no momento.</p>;
  }

  return (
    <div>
      <h2>Próximas Partidas</h2>
      
      
      <input type="text" placeholder="Busque por seu time" />
      <button>SEARCH</button>

      <ul>
        {nextMatches.map((match) => (
          <li key={match.id}>
            <strong>{match.homeTeam.name}</strong> vs{" "}
            <strong>{match.awayTeam.name}</strong> - Data:{" "}
            {new Date(match.utcDate).toLocaleString()}
            <h2></h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Matches;
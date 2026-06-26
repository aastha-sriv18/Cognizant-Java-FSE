import React from "react";

export default function Scorebelow70({ players }) {

  return (
    <ul>
      {
        players
          .filter(player => player.score < 70)
          .map((item, index) => (
            <li key={index}>
              Mr. {item.name} {item.score}
            </li>
          ))
      }
    </ul>
  );

}
import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToChech) => {
  // revisamos todas las combinacione ganadoras
  // para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToChech[a] &&
      boardToChech[a] === boardToChech[b] &&
      boardToChech[a] === boardToChech[c]
    ) {
      return boardToChech[a];
    }
  }
  // si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  return newBoard.every((square) => square !== null);
};

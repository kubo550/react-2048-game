// hooks
import { useEffect, useState } from "react";
// components
import { Tile, Scores } from "..";
// functions
import {
  withNewValue,
  changed,
  swap,
  hasPossibilities,
  getInitialBoard,
} from "./Board.helper";
// types
import { Arrows, BoardType } from "./Board.types";
// styles
import * as S from "./Board.style";

const initialBoard: BoardType = getInitialBoard();

const dirs = Object.values(Arrows);

const Board = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard);
  const [score, setScore] = useState(0);
  const [playable, setPlayable] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleArrowPress);
    return () => document.removeEventListener("keydown", handleArrowPress);
  }, []);

  const addScore = (score: number) => {
    setScore(prev => prev + score);
  };

  const handleArrowPress = (event: KeyboardEvent): void => {
    if (!dirs.includes(event.key as Arrows)) {
      return;
    }

    setBoard(prev => {
      const swapped = swap.get(event.key as Arrows)!(prev, addScore);
      const newBoard = changed(prev, swapped) ? withNewValue(swapped) : prev;

      if (!hasPossibilities(newBoard)) {
        setPlayable(false);
      }
      return newBoard;
    });
  };

  const handleNewGame = () => {
    setScore(0);
    setBoard(getInitialBoard());
    setPlayable(true);
  };

  return (
    <S.Screen>
      <Scores score={score} onClick={handleNewGame} />

      <S.Board>
        {board.map((row, y) =>
          row.map((val, x) => <Tile key={x + y} value={val} />)
        )}
      </S.Board>
      {!playable && <h1> Game Over </h1>}
    </S.Screen>
  );
};

export default Board;

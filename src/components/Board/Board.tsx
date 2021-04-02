import { useCallback, useEffect, useState } from "react";
import { Tile, Scores } from "@components";
import {
  withNewValue,
  hasChanged,
  swap,
  hasPossibilities,
  getInitialBoard,
} from "./Board.helper";
import { Arrows, BoardType } from "./Board.types";
import * as S from "./Board.style";
import Alert from "./Alert/Alert";

const dirs = Object.values(Arrows);

const Board = () => {
  const [board, setBoard] = useState<BoardType>(getInitialBoard());
  const [score, setScore] = useState(0);
  const [playable, setPlayable] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleArrowPress);
    return () => document.removeEventListener("keydown", handleArrowPress);
  }, []);

  const handleNewGame = () => {
    setScore(0);
    setBoard(getInitialBoard());
    setPlayable(true);
  };

  const addScore = (score: number) => {
    setScore(prev => prev + score);
  };

  const handleArrowPress = useCallback((event: KeyboardEvent): void => {
    if (!dirs.includes(event.key as Arrows)) {
      return;
    }

    setBoard(prev => {
      const swapped = swap.get(event.key as Arrows)!(prev, addScore);
      const board = hasChanged(prev, swapped) ? withNewValue(swapped) : prev;

      if (!hasPossibilities(board)) {
        setPlayable(false);
      }

      return board;
    });
  }, []);

  return (
    <>
      <Scores score={score} onClick={handleNewGame} />
      <hr />
      <S.Board>
        {board.map((row, y) =>
          row.map((val, x) => <Tile key={x + y} value={val} />)
        )}
        {!playable && <Alert onClick={handleNewGame} />}
      </S.Board>
    </>
  );
};

export default Board;

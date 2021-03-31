// hooks
import { useEffect, useState } from "react";
// components
import { Tile, Scores } from "..";
// functions
import { matrixArray, slideValues } from "./Board.helper";
// types
import { Arrows, BoardType } from "./Board.types";
// styles
import * as S from "./Board.style";

const initialBoard: BoardType = [
  [0, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
];

const dirs = Object.values(Arrows);

const Board = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard);
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleArrowPress);
    return () => document.removeEventListener("keydown", handleArrowPress);
  }, []);

  const addScore = (score: number) => {
    setScore(prev => prev + score);
  };

  // prettier-ignore
  const swap = new Map<Arrows, () => void >([
    [Arrows.ArrowRight, () => setBoard(prev => slideValues(prev, true, addScore))],
    [Arrows.ArrowLeft, () => setBoard(prev => slideValues(prev, false, addScore))],
    [Arrows.ArrowDown, () => setBoard(prev => matrixArray(slideValues(matrixArray(prev), true, addScore)))],
    [Arrows.ArrowUp, () => setBoard(prev => matrixArray(slideValues(matrixArray(prev), false, addScore)))]
  ])

  const handleArrowPress = (event: KeyboardEvent): void => {
    if (!dirs.includes(event.key as Arrows)) {
      return;
    }

    swap.get(event.key as Arrows)!();
  };

  const handleNewGame = () => {
    setScore(0);
    setBoard(initialBoard);
  };

  return (
    <S.Screen>
      <Scores score={score} onClick={handleNewGame} />

      <S.Board>
        {board.map((row, y) =>
          row.map((val, x) => <Tile key={x + y} value={val} />)
        )}
      </S.Board>
    </S.Screen>
  );
};

export default Board;

import { useEffect, useState, useCallback } from "react";
import * as S from "./Scores.style";

interface ScoresProps {
  score: number;
  onClick: () => void;
}

const Scores: React.FC<ScoresProps> = ({ score, onClick }) => {
  const [bestScore, setBestScore] = useState(0);

  const checkBestScore = useCallback(
    () => setBestScore(Math.max(score, bestScore)),
    [score, bestScore]
  );

  useEffect(() => checkBestScore(), [checkBestScore]);
  return (
    <S.ScoresBoard id='score'>
      <S.Header>
        <h1>2048</h1>
        <S.ScoreWrapper>
          <S.ScoreContainer>
            <span>Score</span>
            <p> {score} </p>
          </S.ScoreContainer>

          <S.ScoreContainer>
            <span>Best</span>
            <p> {bestScore} </p>
          </S.ScoreContainer>
        </S.ScoreWrapper>
      </S.Header>
      <S.Info>
        <p>Join the tiles, get to 2048!</p>
        <S.Button onClick={onClick}>New Game </S.Button>
      </S.Info>
    </S.ScoresBoard>
  );
};

export default Scores;

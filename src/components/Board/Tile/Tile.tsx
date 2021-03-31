import { FC } from "react";
import * as S from "./Tile.styles";

interface TileProps {
  value: number;
}

const Tile: FC<TileProps> = ({ value }) => {
  return <S.Tile value={value}> {value || ""} </S.Tile>;
};

export default Tile;

import { FC } from "react";
import * as S from "./Tile.styles";

interface TileProps {
  value: number;
}

const Tile: FC<TileProps> = ({ value }) => (
  <S.Tile initial={{ opacity: 0 }} animate={{ opacity: 1 }} value={value}>
    {value || ""}
  </S.Tile>
);

export default Tile;

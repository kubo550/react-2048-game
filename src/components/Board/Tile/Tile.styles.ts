import styled from "styled-components";
import { colors } from "./Tile.color";
import { motion } from "framer-motion";

interface TileProps {
    value: number
}

const HIGTER_BG = "#3C3A32";
const DEFAULT_BG = "#CDC1B4";

export const Tile = styled(motion.div) <TileProps>`
    width: 100%;
    max-width: 100%;
    height: 100%;
    background-color: ${({ value }) => value ? colors.get(value) || HIGTER_BG : DEFAULT_BG};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ value }) => value > 1000 ? "36px" : value > 100 ? "42px" : "50px"};
    font-weight: 700;
    color: ${({ value }) => value <= 4 ? "#776e65" : "#F9F6F2"};
`;

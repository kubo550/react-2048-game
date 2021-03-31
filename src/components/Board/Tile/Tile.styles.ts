import styled from "styled-components";

interface TileProps {
    value: number
}

export const Tile = styled.div<TileProps>`
    width: 100%;
    height: 100%;
    background-color: ${({ value }) => value ? `hsl(${value}, 40%, 60%)` : '#eee4da'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
    color: #f9f6f2;
`;
// ${({ value }) => `hsl(${value % 255}, 60,60)`}
// ${({ value }) => value <= 4 ? "#776e65" : "#f9f6f2"}
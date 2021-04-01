import styled from "styled-components"


export const Board = styled.div`
    width: 400px;
    height: 400px;
    padding: 15px;
    background-color: #bbada0;
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    gap: 15px;    
    border-radius: 15px;
    position: relative;
    overflow: hidden;
`;



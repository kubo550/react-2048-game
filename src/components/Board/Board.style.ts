import styled from "styled-components"

export const Board = styled.div`
    width: 100%;
    height: 500px;
    padding: 15px;
    background-color: #bbada0;
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    gap: 15px;    
    border-radius: 15px;
`;

export const Screen = styled.div`
    width: 530px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
`
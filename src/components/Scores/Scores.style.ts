import styled from "styled-components";

export const ScoresBoard = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #776e65;

  h1 {
    font-size: 4.5rem;
    margin: 15px 0;
  }
`;

export const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 5px 25px;
  margin: 0 5px;
  background-color: #bbada0;
  color: #eee4da;
  font-weight: 500;
  transform: translateY(-20px);
  border-radius: 5px;

  p {
    margin: 0;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
  }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px; 
    color: #776e65;
    font-weight: 600;

    
`
export const Button = styled.button`
  background-color: #8f7a66;
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 2px 25px;
  color: white;
  letter-spacing: 1.5px;
  font-weight: 800;
  cursor: pointer;  
`;
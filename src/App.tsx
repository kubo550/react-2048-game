import { About, Board, Help } from "@components";
import styled from "styled-components";

const Screen = styled.div`
  width: 430px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: #776e65;
`;

const App = () => (
  <Screen>
    <Board />
    <Hr />
    <Help />
    <Hr />
    <About />
  </Screen>
);

export default App;

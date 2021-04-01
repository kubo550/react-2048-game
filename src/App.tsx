import { About, Board, Help } from "./components";
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

const App = () => (
  // Todo Create own HR
  <Screen>
    <Board />
    <hr />
    <Help />
    <hr />
    <About />
  </Screen>
);

export default App;

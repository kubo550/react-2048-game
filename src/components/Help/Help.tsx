import * as S from "./Help.style";

const Help = () => {
  // Dissable arrow key scrolling
  const keyCodes = [32, 37, 38, 39, 40];
  window.addEventListener(
    "keydown",
    e => {
      if (keyCodes.includes(e.keyCode)) {
        e.preventDefault();
      }
    },
    false
  );
  return (
    <S.Wrapper>
      <p>
        <b> HOW TO PLAY </b> Use your <b>arrow keys</b> to move the tiles. Tiles
        with the same number <b>merge into one</b> when they touch. Add them up
        to reach <b>2048!</b>
      </p>
      <a href='#score'>
        <b> Start playing → </b>
      </a>
    </S.Wrapper>
  );
};

export default Help;

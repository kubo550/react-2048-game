import * as S from "./About.style";

const About = () => (
  <S.Wrapper>
    <p>
      This is a copy of oryginal game
      <a href='https://en.wikipedia.org/wiki/2048_(video_game)'>2048</a>
      created by Jakub Kurdziel for learning React with TypeScript. If You’re
      looking for the original version of 2048 click
      <a href='https://play2048.co/'>here.</a>
    </p>

    <div>
      <a target='_blank' href='https://www.facebook.com/powerty2'>
        <img
          src='https://img.icons8.com/bubbles/50/000000/facebook-new.png'
          alt='Facebook'
        />
      </a>

      <a target='_blank' href='https://www.instagram.com/__kurdziel/'>
        <img
          src='https://img.icons8.com/bubbles/50/000000/instagram.png'
          alt='Instagram'
        />
      </a>

      <a target='_blank' href='https://www.messenger.com/t/100005543894347'>
        <img
          src='https://img.icons8.com/bubbles/50/000000/facebook-messenger.png'
          alt='Messenger'
        />
      </a>
    </div>
  </S.Wrapper>
);

export default About;

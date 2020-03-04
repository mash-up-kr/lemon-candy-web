import styled, { Keyframes, keyframes } from 'styled-components';


interface StyleProps {
  color?: string;
  background?: string;
  motion?: Keyframes;
}

const S = {
  layout: styled.section<StyleProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.background};
  `,
  img: styled.img<StyleProps>`
    width: 100%;
    max-width: 152px;
    margin: 0 0 48px;
    animation: ${(props) => props.motion} 350ms infinite alternate;
  `,
  contents: styled.p<StyleProps>`
     font-size: 1rem;
     color: ${(props) => props.color};
     line-height: 1.5;
     text-align: center;
  `,
  imgMotion: keyframes`
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  `,
};

export default S;

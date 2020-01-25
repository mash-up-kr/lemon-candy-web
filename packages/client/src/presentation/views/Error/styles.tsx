import styled from 'styled-components';

interface StyleProps {
  color?: string;
  background?: string;
}

const S = {
  layout: styled.section<StyleProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.background};
  `,
  subTitle: styled.p<StyleProps>`
    font-size: 1rem;
    opacity: 0.6;
    color: ${(props) => props.color};
    margin-bottom: 16px;
  `,
  img: styled.img<StyleProps>`
    width: 100%;
    max-width: 152px;
    margin: 48px 0;
  `,
  contents: styled.p<StyleProps>`
     font-size: 1rem;
     color: ${(props) => props.color};
     line-height: 1.5;
     text-align: center;
  `,
  button: styled.button<StyleProps>`
    margin-top: 60px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: 0.75rem;
    text-align: center;
  `,
};

export default S;

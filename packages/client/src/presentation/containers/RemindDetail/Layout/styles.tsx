import styled from 'styled-components';

interface StyleProps {
  color?: string;
  background?: string;
}

const S = {
  layout: styled.article<StyleProps>`
    width: 100%;
    height: 100%;
    background: ${(props) => props.background}
  `,
  date: styled.p<StyleProps>`
    width: 100%;
    text-align: center;
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.color}
  `,
};

export default S;

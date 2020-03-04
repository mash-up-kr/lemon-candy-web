import styled from 'styled-components';

interface StyleProps {
  color?: string;
}

const S = {
  layout: styled.section`
    width: 100%;
    height: 100%;
  `,
  year: styled.p`
    padding: 8px 16px 2px;
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1;
    color: ${(props) => props.color}
  `,
  month: styled.p`
    padding: 8px 16px;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: ${(props) => props.color}
  `,
};

export default S;

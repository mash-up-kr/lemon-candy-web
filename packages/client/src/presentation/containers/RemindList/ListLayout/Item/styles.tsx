import styled from 'styled-components';

interface StyleProps {
  color?: string;
  background?: string;
}

const S = {
  layout: styled.article<StyleProps>`
    margin: 8px 20px;
    padding: 20px 16px;
    border-radius: 12px;
    background: ${(props) => props.background}
  `,
  emptyLayout: styled.article`
    margin: 8px 20px;
    padding: 20px 16px;
    border-radius: 12px;
    border: 1px solid white;
    //border-image: linear-gradient(to right, #ff0000, #ff5200, #ffde00, #00ff63, #3000ff, #7b00ff, #ff008e);
  `,
  contents: styled.p<StyleProps>`
    font-size: 1rem;
    color: ${(props) => props.color};
    word-break: keep-all;
  `,
  footer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
  `,
  date: styled.p<StyleProps>`
    color: ${(props) => props.color};
    font-size: 0.875rem;
  `,
  dot: styled.div<StyleProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: ${(prev) => prev.background}
  `,
};

export default S;

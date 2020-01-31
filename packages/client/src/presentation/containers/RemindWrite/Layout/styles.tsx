import styled from 'styled-components';

interface StyleProps {
  color?: string;
  background?: string;
  width?: string;
  height?: string;
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
  lottieWrap: styled.div`
    padding: 0 4px 0 0;
    width: 100%;
    height: 220px;
    
    div > div {
      display: flex;
      align-items: flex-end;
    }
  `,
  lottieLayout: styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width}px !important;
  `,
  lottieTitle: styled.p<StyleProps>`
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 4px;
    color: ${(props) => props.color}
  `,
  contentsLayout: styled.p<StyleProps>`
    width: 100%;
    height: calc(100% - 260px);
    min-height: 100px;
    padding: 24px 16px;
    
    textarea {
      padding: 20px;
      width: 100%;
      height: 100%;
      word-break: keep-all;
      font-size: 0.875rem;
      color: ${(props) => props.color}
      background: ${(props) => props.background}
      border-radius: 8px;
      border: 0;
      resize: none;
    }
    
    textarea:focus {
      outline: none;
    }
  `,
};

export default S;

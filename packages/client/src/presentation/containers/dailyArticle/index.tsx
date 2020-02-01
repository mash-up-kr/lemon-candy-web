import React, { useState } from 'react';
import styled from 'styled-components';
import LottieComp from '@/presentation/components/LottieComp';
import { _MONSTERS } from '@/presentation/resources/monster';
import { useSelector } from 'react-redux';
const SceneWrapper = styled.div`
  margin-top: 53px;
`

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  .add-class {
    min-height: 380px !important;
  }
  .modal {
    width: 100px;
    height: 100px;
    background-color: white;
  }
`;

const Article = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #131415;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 12px;
`;
export const Modal = {
  wrapper: styled.div<any>`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
  `,
  content: styled.div`
    position: fixed;
    z-index: 1;
    bottom: 48px;
    width: 100%;
    min-height: 235px;
    padding: 8px;
  `,
  cancelBtn: styled.div`
    width: 100%;
    min-height: 56px;
    border-radius: 14px;
    background-color: white;
    color: #007aff;
    text-align: center;
    padding: 20.2px;
    font-size: 18px;
    margin-top: 8px;
  `,
  optionWrapper: styled.div`
    width: 100%;
    backdrop-filter: blur(20px);
    background-color: rgba(249, 249, 249, 0.78);
    border-radius: 14px;

    div {
      width: 100%;
      padding: 20.2px;
      font-size: 18px;
      text-align: center;
      color: #007aff;
    }

    div + div {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(157, 160, 158);
      }
    }
  `
}


const DailyArticle = () => {
  const data = useSelector((state: any) => state.dailyArticle.currentArticle);
  
  if (!data.dailylogId) return null;
  return (
    <SceneWrapper>
      <ContentWrapper>
        <LottieComp animationData={ _MONSTERS[data.emotion].img } isActive={true} />
        <Article>
          {data.article}
        </Article>
      </ContentWrapper>
    </SceneWrapper>
  )
}

export default DailyArticle;
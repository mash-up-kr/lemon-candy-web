import React from 'react';
import styled from 'styled-components';

const S = {
  layout: styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000000;
  `,
  subTitle: styled.p`
    font-size: 0.75rem;
    opacity: 0.6;
    color: #ffffff;
    margin-bottom: 16px;
  `,
  title: styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 32px;
  `,
  contents: styled.p`
     font-size: 1rem;
     color: #ffffff;
     line-height: 1.5;
     text-align: center;
  `,
  button: styled.button`
    margin-top: 60px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    background: #ffffff;
    color: #000000;
    font-size: 0.75rem;
    text-align: center;
  `,
};

const NotFound = () => {
  const ActionHistoryBack = () => {
    // eslint-disable-next-line no-restricted-globals
    history.back();
  };

  return (
    <div>
      <S.layout>
        <S.subTitle>
          404 ERROR!
        </S.subTitle>
        <S.title>
          길을 잃었다. 어딜 가야 할까...
        </S.title>
        <S.contents>
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소가 정확한지 다시 확인해 주세요.
        </S.contents>
        <S.button
          onClick={ ActionHistoryBack }
        >
          뒤로가기
        </S.button>
      </S.layout>
    </div>
  );
}

export default NotFound;

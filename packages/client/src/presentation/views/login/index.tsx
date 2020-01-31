import React from 'react';
import styled from 'styled-components';

import colors from '@lemon/colors';
import happyImg from '@lemon/icons/imgs/happy.png';
import facebookImg from '@lemon/icons/imgs/facebook.png';
import kakaoImg from '@lemon/icons/imgs/kakao.png';
import instagramImg from '@lemon/icons/imgs/instagram.png';

import LoginButton from '@/presentation/components/LoginButton';

const onClickTest = (val: string) => () => console.log("onClick", val);

const LoginView = () => (
  <S.Layout>
    <S.Title>Monnday</S.Title>
    <S.Lottie src={ happyImg } />
    <S.LoginLine>Login</S.LoginLine>
    <S.LoginGroup>
      <LoginButton
        onClick={onClickTest("Facebook")}
        src={facebookImg}
      />
      <LoginButton
        onClick={onClickTest('Kakao')}
        src={kakaoImg}
      />
      <LoginButton
        onClick={onClickTest('Instagram')}
        src={instagramImg}
      />
    </S.LoginGroup>
  </S.Layout>
);

const S = {
  Layout: styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colors.black1000};
  `,
  Title: styled.h1`
    font-size: 1.25rem;
    font-weight: bold;
    color: ${colors.black0};
    margin-top: 51px;
    margin-bottom: 86px;
  `,
  Lottie: styled.img`
    margin-bottom: 124px;
  `,
  LoginLine: styled.p`
    & {
      width: 100%;
      text-align: center;
      font-size: 0.75rem;
      opacity: 0.5;
      color: ${colors.black0};
      margin: 24px;
    }
    &:before, &:after {
      content: "";
      display: inline-block;
      margin: 0 20px 3px 20px;
      height: 1px;
      text-shadow: none;
      background-color: ${colors.black0};
      width: 124px;
    }
  `,
  LoginGroup: styled.div`
    display: flex;
    justify-content: space-around;
    height: 60px;
    width: 80%;
  `,
};

export default LoginView;

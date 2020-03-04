import colors from '@lemon/colors';
import facebookImg from '@lemon/icons/imgs/facebook.png';
import happyImg from '@lemon/icons/imgs/happy.png';
import instagramImg from '@lemon/icons/imgs/instagram.png';
import kakaoImg from '@lemon/icons/imgs/kakao.png';
import Error from '@/presentation/components/Error';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  useHistory,
} from 'react-router-dom';

import LoginButton from '@/presentation/components/LoginButton';
import Loading from '@/presentation/components/Lodaing';

const onClickTest = (val: string) => () => alert(`${val}은 준비중 입니다.`);

const LoginView = () => {
  const [state, setState] = useState(200);
  const history = useHistory();

  useEffect(() => {
    if (state === 0) {
      localStorage.setItem('MONNDAY_TOKEN', 'test_token');
      setTimeout(() => { history.push('/'); }, 350);
    }
  }, [state]);

  const fetchLogin = () => setState(0);

  const LoginView = () => (
    <>
      <S.Title>Monnday</S.Title>
      <S.Lottie src={ happyImg } />
      <S.LoginLine>Login</S.LoginLine>
      <S.LoginGroup>
        <LoginButton
          onClick={ onClickTest('Facebook') }
          src={ facebookImg }
        />
        <LoginButton
          onClick={ fetchLogin }
          src={ kakaoImg }
        />
        <LoginButton
          onClick={ onClickTest('Instagram') }
          src={ instagramImg }
        />
      </S.LoginGroup>
    </>
  );

  const renderFetchView = () => (
    // eslint-disable-next-line no-nested-ternary
    state === 0
      ? <Loading />
      : state === 200
        ? LoginView()
        : <Error />
  );

  return (
    <S.Layout>
      {renderFetchView()}
    </S.Layout>
  );
};

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

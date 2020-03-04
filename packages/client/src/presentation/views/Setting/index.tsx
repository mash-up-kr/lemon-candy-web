import { SetId, SetLogout } from '@lemon/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@/presentation/components/header';
import SettingItem from '@/presentation/components/SettingItem';

const S = {
  layout: styled.section`
    width: 100%;
    min-height: 100vh;
    padding-top: 53px;
    height: 100vh;
  `,
};

const Setting = () => {
  const history = useHistory();
  const title = localStorage.getItem('MONNDAY_TOKEN') ? localStorage.getItem('MONNDAY_TOKEN') : '';
  const actionLogout = () => {
    console.log('t');
    localStorage.removeItem('MONNDAY_TOKEN');
    history.push('/login');
  };

  return (
    <S.layout>
      <Header
        title="설정"
        leftSide="<"
        leftSideOnClick={ () => { history.goBack(); } }
      />
      <SettingItem
        icon={ SetId }
        title="hello@monnday.com"
      />
      <SettingItem
        icon={ SetLogout }
        title="로그아웃"
        onClick={ actionLogout }
      />
    </S.layout>
  );
};

export default Setting;

import React from 'react';
import styled from 'styled-components';
import Colors from '@lemon/colors';

interface Props {
  onClick?: Function;
  icon: any;
  title?: string;
}

interface StyleProps {
  color?: string;
  background?: string;
}

const S = {
  layout: styled.div`
    width: 100%;
    min-height: 54px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
  `,
  icon: styled.img`
    width: 23px;
    height: 23px;
  `,
  title: styled.p<StyleProps>`
    margin-left: 12px;
    font-size: 1rem;
    color: ${(props) => props.color};
  `,
};

const SettingItem = ({
  onClick,
  icon,
  title = '',
}: Props) => (
  <S.layout
    onClick={ () => { onClick && onClick(); } }
  >
    <S.icon src={ icon } />
    <S.title color={ Colors.black0 }>{title}</S.title>
  </S.layout>
);

export default SettingItem;

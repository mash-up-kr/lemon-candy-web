import colors from '@lemon/colors';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  themeColor?: string;
  title?: string;
  leftSide?: string | ReactNode;
  rightSide?: string | ReactNode;
  titleOnClick?: Function;
  leftSideOnClick?: Function;
  rightSideOnClick?: Function;
}

interface StyleProps {
  color?: string;
  background?: string;
}

const S = {
  header: styled.header<StyleProps>`
    z-index: 999;
    width: 100%;
    min-width: 53px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) => props.background};
  `,
  title: styled.h1<StyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.color};
  `,
  leftSide: styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.color};
  `,
  rightSide: styled.p`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 25%;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props) => props.color};
  `,
};

const Header: React.FC<Props> = ({
  themeColor = 'dark',
  title = '',
  leftSide = '',
  rightSide = '',
  titleOnClick,
  leftSideOnClick,
  rightSideOnClick,
}: Props) => (
  <S.header background={ themeColor ? colors.black1000 : colors.black0 }>
    <S.leftSide
      color={ themeColor ? colors.black0 : colors.black900 }
      onClick={ () => (leftSideOnClick && leftSideOnClick()) }
    >
      {leftSide}
    </S.leftSide>
    <S.title
      color={ themeColor ? colors.black0 : colors.black900 }
      onClick={ () => (titleOnClick && titleOnClick()) }
    >
      {title}
    </S.title>
    <S.rightSide
      color={ themeColor ? colors.black0 : colors.black900 }
      onClick={ () => (rightSideOnClick && rightSideOnClick()) }
    >
      {rightSide}
    </S.rightSide>
  </S.header>
);

export default Header;

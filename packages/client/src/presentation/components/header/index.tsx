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
  color: string;
}

const S = {
  header: styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 15px;
  `,
  title: styled.h1<StyleProps>`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 33.3333333%;
    font-size: 1.5rem;
    font-weight: bold;
    height: 2rem;
    line-height: 2rem;
    color: ${(props) => props.color};
  `,
  leftSide: styled.p`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    width: 33.3333333%;
    font-size: 1.125rem;
    height: 2rem;
    line-height: 2rem;
    color: ${(props) => props.color};
  `,
  rightSide: styled.p`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    width: 33.3333333%;
    font-size: 1.125rem;
    height: 2rem;
    line-height: 2rem;
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
  <S.header>
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

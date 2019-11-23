import { FloatingButton as FloatIcon } from '@lemon/icons';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
}

const S = {
  floatingButton: styled.img`
    position: fixed;
    z-index: 100;
    bottom: 38px;
    color: #fff;
    left: calc(50% - 33px);
  `,
};

const FloatingButton: React.FC<Props> = ({
  onClick,
}: Props) => (
  <S.floatingButton
    onClick={ () => (onClick()) }
    src={ FloatIcon }
    alt="floating button"
    width="66px"
    height="66px"
  />
);

export default FloatingButton;

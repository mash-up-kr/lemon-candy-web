import colors from '@lemon/colors';
import ADD_BUTTON from '@lemon/icons/imgs/btnAdd.png';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
}

interface StyleProps {
  color?: string;
}

const S = {
  floatingButton: styled.img<StyleProps>`
    position: absolute;
    z-index: 100;
    bottom: 44px;
    color: #fff;
    left: calc(50% - 34px);
    border-radius: 34px;
    border: 1px solid ${(props) => props.color}
  `,
};

const FloatingButton: React.FC<Props> = ({
  onClick,
}: Props) => (
  <S.floatingButton
    onClick={ () => (onClick()) }
    src={ ADD_BUTTON }
    alt="floating button"
    width="68px"
    height="68px"
    color={ colors.black1000 }
  />
);

export default FloatingButton;

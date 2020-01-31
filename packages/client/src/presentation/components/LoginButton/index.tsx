import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: Function;
  src: string;
}

const LoginButton: React.FC<Props> = ({
  onClick, src,
}: Props) => (
    <S.LoginButton
      onClick={() => (onClick())}
      src={src}
      alt="login button"
    />
  );

const S = {
  LoginButton: styled.img`
    width: 60px;
    height: 60px;
  `,
};

export default LoginButton;

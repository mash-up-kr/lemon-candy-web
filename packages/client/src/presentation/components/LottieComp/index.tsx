import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

interface ILottieComp {
  animationData: any;
  isActive?: boolean;
}

export const LottieWrapper = styled.div`
  display: inline-block;
  margin-left: -35px;
`;

export const LottieTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 11px;
`


const LottieComp = (props: ILottieComp) => {
  const { isActive } = props;

  const defaultOptions = {
    animationData: props.animationData,
    loop: true,
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
  }
  };

  return (
      <Lottie
        options={defaultOptions}
        isStopped={!isActive}
        isClickToPauseDisabled={true}
        width={200}
        height={200}
				eventListeners={[
					{
						eventName: 'complete',
						callback: () => console.log('the animation completed'),
					},
				]}
        />
    )
};

export default LottieComp;

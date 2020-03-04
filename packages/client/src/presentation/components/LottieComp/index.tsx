import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';

interface ILottieComp {
  animationData: any;
  isActive?: boolean;
  width?: number | string;
  height?: number | string;
}

export const LottieWrapper = styled.div`
  display: inline-block;
  margin-left: -35px;

  .add-class {
    width: 200px !important;
  }
`;

export const LottieTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 11px;
`;


const LottieComp = (props: ILottieComp) => {
  const { isActive, width = 200, height = 200 } = props;

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
        isPaused={!isActive}
        isStopped={!isActive}
        isClickToPauseDisabled={true}
        width={width}
        height={height}
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

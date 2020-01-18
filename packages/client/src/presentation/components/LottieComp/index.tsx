import React, { useState } from 'react';
import Lottie from 'react-lottie';
import ThumbsUp from '@lemon/icons/lottie/happiness.json';
import styled from 'styled-components';
import { AnimationItem } from 'lottie-web';

interface ILottieComp {
  animationData: any;
}

export const LottieWrapper = styled.div`
  display: inline-block;
`;

export const LottieTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 11px;
`


const LottieComp = (props: ILottieComp) => {
  const [isStopped, setStopped] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const onStop = () => {
		setStopped(!isStopped)
	};

	const onPause = () => {
		setPaused(!isPaused)
  };
  
  const defaultOptions = {
    animationData: props.animationData,   
    loop: true,        
    autoplay: true,   
    rendererSettings: {
    className: 'add-class', // svg에 적용
    preserveAspectRatio: 'xMidYMid slice'
  }
  };

  return (
      <Lottie 
        options={defaultOptions}
				isStopped={isStopped}
				isPaused={isPaused}
        isClickToPauseDisabled={false}
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
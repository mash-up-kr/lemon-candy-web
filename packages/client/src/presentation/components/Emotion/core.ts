import LOTTIE_ANGRO from '@/presentation/resources/lotties/angro.json';
import LOTTIE_DEPRESSED from '@/presentation/resources/lotties/depressed.json';
import LOTTIE_HAPPINESS from '@/presentation/resources/lotties/happiness.json';
import LOTTIE_PLEASURE from '@/presentation/resources/lotties/pleasure.json';
import LOTTIE_SADNESS from '@/presentation/resources/lotties/sadness.json';
import LOTTIE_SATISFACTION from '@/presentation/resources/lotties/satisfaction.json';
import LOTTIE_TIRED from '@/presentation/resources/lotties/tired.json';
import LOTTIE_TRANGUILITY from '@/presentation/resources/lotties/tranguility.json';

enum EMOTION_TYPE {
  HAPPINESS,
  PLEASURE,
  TRANGUILITY,
  SATISFACTION,
  ANGRO,
  DEPRESSED,
  TIRED,
  SADNESS,
}


const getEmotionLottie = (type: EMOTION_TYPE) => {
  switch (type) {
  case EMOTION_TYPE.HAPPINESS:
    return LOTTIE_HAPPINESS;
  case EMOTION_TYPE.PLEASURE:
    return LOTTIE_PLEASURE;
  case EMOTION_TYPE.TRANGUILITY:
    return LOTTIE_TRANGUILITY;
  case EMOTION_TYPE.SATISFACTION:
    return LOTTIE_SATISFACTION;
  case EMOTION_TYPE.ANGRO:
    return LOTTIE_ANGRO;
  case EMOTION_TYPE.DEPRESSED:
    return LOTTIE_DEPRESSED;
  case EMOTION_TYPE.TIRED:
    return LOTTIE_TIRED;
  case EMOTION_TYPE.SADNESS:
    return LOTTIE_SADNESS;
  default:
    return LOTTIE_HAPPINESS;
  }
};

export default { EMOTION_TYPE, getEmotionLottie };

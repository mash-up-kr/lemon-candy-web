import HAPPINESS from '@lemon/icons/lottie/happiness.json'
import DEPRESSED from '@lemon/icons/lottie/depressed.json'
import ANGRO from '@lemon/icons/lottie/angro.json'
import PLEASURE from '@lemon/icons/lottie/pleasure.json'
import SADNESS from '@lemon/icons/lottie/sadness.json'
import SATISFACTION from '@lemon/icons/lottie/satisfaction.json'
import TIRED from '@lemon/icons/lottie/tired.json'
import TRANGUILITY from '@lemon/icons/lottie/tranguility.json'

export enum EMonsters {
  HAPPINESS = 'HAPPINESS',
  DEPRESSED = 'DEPRESSED',
  ANGRO = 'ANGRO',
  PLEASURE = 'PLEASURE',
  SADNESS = 'SADNESS',
  SATISFACTION = 'SATISFACTION',
  TIRED = 'TIRED',
  TRANGUILITY = 'TRANGUILITY',
}

export const _MONSTERS = [
  {
    type: EMonsters.HAPPINESS,
    img: HAPPINESS,
    title: '행복해요',
  },
  {
    type: EMonsters.DEPRESSED,
    img: DEPRESSED,
    title: '우울해요',
  },
  {
    type: EMonsters.ANGRO,
    img: ANGRO,
    title: '분노해요',
  },
  {
    type: EMonsters.PLEASURE,
    img: PLEASURE,
    title: '기뻐요',
  },
  {
    type: EMonsters.SADNESS,
    img: SADNESS,
    title: '슬퍼요',
  },
  {
    type: EMonsters.SATISFACTION,
    img: SATISFACTION,
    title: '만족해요',
  },
  {
    type: EMonsters.TIRED,
    img: TIRED,
    title: '힘들어요',
  },
  {
    type: EMonsters.TRANGUILITY,
    img: TRANGUILITY,
    title: '평온해요',
  }
]

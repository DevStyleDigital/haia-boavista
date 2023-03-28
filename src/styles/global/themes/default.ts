import { SHARED_THEME } from './shared';

export const DEFAULT_THEME = {
  ...SHARED_THEME,

  colors: {
    primary: '059, 064,046', // #3B402E
    secondary: '191, 115, 068', // #BF7344
    beige: {
      100: '242, 194, 165', // #F2C2A5
      200: '249, 193, 148', // #F9C194
    },
    background: '255, 255, 255', // #FFFFFF
    gray: {
      100: '242, 242, 242', // #F2F2F2
      600: '134, 134, 134', // #868686
    },
  },
};

import localFont from '@next/font/local';

const intelo = localFont({
  src: [
    {
      path: '../../../assets/fonts/Intelo/InteloRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/Intelo/InteloBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
});

const nouvelR = localFont({
  src: [
    {
      path: '../../../assets/fonts/NouvelR/NouvelRRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/NouvelR/NouvelRBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-secondary',
});

const karin = localFont({
  src: [
    {
      path: '../../../assets/fonts/Karin/KarinBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/Karin/KarinBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-title',
});

export const SHARED_THEME = {
  fonts: {
    primary: intelo,
    secondary: nouvelR,
    title: karin,
    sizes: {
      xs: '0.6rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.2rem',
      xl: '1.8rem',
      '2xl': '2rem',
    },
  },
};

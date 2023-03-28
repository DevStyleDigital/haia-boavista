import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import { LayoutStyled } from './styles';
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME, SHARED_THEME } from 'styles/global/themes';
import { Styles } from 'styles/global';
import { FixedFooter } from 'components/FixedFooter';

interface LayoutContextProps {
  clientWidth: number;
  clientHeight: number;
}

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps,
);
export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider: BTypes.FC = ({ children }) => {
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    setClientWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setClientWidth(window.innerWidth);
    });

    return () => {
      window.addEventListener('resize', () => true);
    };
  }, []);

  useEffect(() => {
    setClientHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      setClientHeight(window.innerHeight);
    });

    return () => {
      window.addEventListener('resize', () => true);
    };
  }, []);

  const LayoutContextValue: LayoutContextProps = useMemo(
    () => ({ clientHeight, clientWidth }),
    [clientWidth, clientHeight],
  );

  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <Styles.Colors />
      <Styles.Fonts />
      <Styles.Root />

      <LayoutContext.Provider value={LayoutContextValue}>
        <LayoutStyled
          className={`${SHARED_THEME.fonts.primary.variable} ${SHARED_THEME.fonts.secondary.variable} ${SHARED_THEME.fonts.title.variable}`}
        >
          <Header.Root />
          <main className="content">{children}</main>
          <Footer.Root />
          <FixedFooter.Root />
        </LayoutStyled>
      </LayoutContext.Provider>
    </ThemeProvider>
  );
};

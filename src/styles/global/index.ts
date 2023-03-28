import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-background: ${({ theme: { colors } }) => colors.background};

    --color-primary: ${({ theme: { colors } }) => colors.primary};
    --color-secondary: ${({ theme: { colors } }) => colors.secondary};

    --color-beige-100: ${({ theme: { colors } }) => colors.beige['100']};
    --color-beige-200: ${({ theme: { colors } }) => colors.beige['200']};

    --color-gray-100: ${({ theme: { colors } }) => colors.gray['100']};
    --color-gray-600: ${({ theme: { colors } }) => colors.gray['600']};
  }
`;
const Fonts = createGlobalStyle`
  :root {
    --font-size-xs: ${({ theme: { fonts } }) => fonts.sizes.xs};
    --font-size-sm: ${({ theme: { fonts } }) => fonts.sizes.sm};
    --font-size-md: ${({ theme: { fonts } }) => fonts.sizes.md};
    --font-size-lg: ${({ theme: { fonts } }) => fonts.sizes.lg};
    --font-size-xl: ${({ theme: { fonts } }) => fonts.sizes.xl};
    --font-size-2xl: ${({ theme: { fonts } }) => fonts.sizes['2xl']};
  }
`;
const Root = createGlobalStyle`
  :root {
    --box-shadow: 0 0 1rem rgb(0, 0, 0, 0.3);
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    color: rgb(var(--color-primary));
    background-color: rgb(var(--color-background));
    font-family: var(--font-primary), sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p, a, span, button, label {
    color: inherit;
    font-family: var(--font-primary), sans-serif;
  }
  hr {
    width: 8.25rem;
    border: none;
    height: 1px;
    background-color: rgb(var(--color-primary));
    margin-top: 0.6rem;
    margin-bottom: 0.8rem;
  }

  p.small {
    font-size: var(--font-size-sm);
    @media (max-width: 820px) {
      font-size: var(--font-size-lg);
    }
  }
  div.fancybox__caption {
    font-family: sans-serif;
  }
  .mx-w {
    --pd-x: 4rem;
    padding: 0 var(--pd-x);
    max-width: 1920px;
    margin: 0 auto;

    @media (max-width: 520px) {
      padding: 0 2rem;
    }
    @media (max-width: 425px) {
      padding: 0 0.5rem;
    }
  }
  .btn-unstyled {
    border: none;
    outline: none;
    background-color: transparent;

    cursor: pointer;
  }
  .img-bg {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
  .banner {
    width: 100vw;
    height: 70vh;
    object-fit: cover;
    object-position: center;
  }
  .mobile-banner {
    width: 100vw;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .legend {
    font-size: var(--font-size-xs);
    color: rgb(var(--color-gray-600));
    display: block;
    text-align: center;
  }
  .flex {
    display: flex;
    gap: 1rem;
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }

  [aria-hidden="true"] {
    user-select: none;
    pointer-events: none;
  }


  @media (min-width: 1366px) {
    html {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 1620px) {
    html {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 2000px) {
    html {
      font-size: 1.5rem;
    }
  }
`;

export const Styles = {
  Colors,
  Fonts,
  Root,
};

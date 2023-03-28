import styled from 'styled-components';

export const HeroStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 70vh;
  padding: 2rem;

  > .logo > svg {
    fill: rgb(var(--color-background));
    width: 21em;
    height: 11.125em;

    @media (max-width: 820px) {
      font-size: 0.6rem;
    }
  }

  > .info {
    padding: var(--pd-x) 0;
    max-width: 15.625rem;
    height: 100%;
    max-height: 600px;
    gap: 2rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    svg {
      fill: rgb(var(--color-background));
    }
    h2 {
      color: rgb(var(--color-background));
    }
  }
  .banner {
    display: block;
  }
  .mobile-banner {
    display: none;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
    flex-direction: column;
    text-align: center;
    > .info {
      padding: 0;
    }
  }
  @media (max-width: 520px) {
    height: 82vh;
    > .logo {
      display: none;
    }
    .img-bg {
      height: inherit;

      .banner {
        display: none;
      }
      .mobile-banner {
        display: block;
      }
    }
  }
`;

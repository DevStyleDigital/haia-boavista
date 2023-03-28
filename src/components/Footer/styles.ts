import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: rgb(var(--color-gray-100));

  .mx-w {
    --pd-x: 3.5rem;
    width: 100%;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: var(--pd-x);

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;

      > span {
        padding: var(--pd-x) 0;
        font-size: var(--font-size-xs);
        font-weight: 700;
        letter-spacing: 0.5em;
        text-transform: uppercase;
      }
      > svg {
        width: 10em;
      }
    }
    > div:nth-child(2) > svg {
      width: 19em;
      height: 4.5em;
    }
    > div:nth-child(3) > span {
      padding: 1rem 0;
      padding-top: var(--pd-x);
    }

    @media (max-width: 799px) {
      margin-top: var(--pd-x);

      > div {
        > span {
          padding: 1rem 0;
        }
      }
      > div:nth-child(3) > span {
        padding-top: unset;
      }
    }
    @media (max-width: 320px) {
      > div:nth-child(2) > svg {
        width: 16em;
        height: 2.5em;
      }
    }
    @media (max-width: 280px) {
      > div:nth-child(2) > svg {
        width: 12em;
        height: 2em;
      }
    }
  }

  .copy {
    width: 100%;
    background-color: rgb(var(--color-background));
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }
  .caption {
    position: absolute;
    z-index: 8;
    top: 0;
    right: 2rem;
    transform: translateY(-100%);
  }

  @media (max-width: 600px) {
    .caption {
      display: none;
    }
  }
`;

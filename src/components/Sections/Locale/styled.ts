import styled from 'styled-components';

export const LocaleStyled = styled.section`
  background-color: rgb(var(--color-primary));
  display: flex;
  align-items: center;
  gap: 4rem;
  position: relative;

  p,
  h2,
  h1 {
    color: rgb(var(--color-background));
  }
  h2 {
    font-size: var(--font-size-lg);
  }
  > img {
    width: 53%;
    height: 27rem;
    object-fit: cover;
  }

  .info {
    max-width: 21rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .leaf {
    width: 38%;
    height: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 1230px) {
      width: 35%;
      bottom: 30%;
    }
  }
  @media (max-width: 1146px) {
    flex-direction: column;
    gap: 0rem;
    overflow: hidden;
    > img {
      width: 100%;
      object-fit: cover;
    }
    .info {
      padding: 4rem 2rem;
      width: 100%;
      max-width: 50rem;
      padding-right: 6rem;
      @media (max-width: 420px) {
        padding-right: 2rem;
      }
      @media (max-width: 360px) {
        padding: 2rem 0.5rem;
      }
    }
    .leaf {
      width: 45%;
      right: -0.2rem;
      top: 20vw;
    }
  }
`;

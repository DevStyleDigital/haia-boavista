import styled from 'styled-components';

export const VirtualTourStyled = styled.section`
  padding: 2.625rem;
  padding-bottom: 5.59rem;
  background-color: rgb(var(--color-primary));
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;

  > div:nth-child(1) {
    > p,
    > h1 {
      color: rgb(var(--color-background));
      text-align: center;
    }
    > h1 {
      margin-bottom: 1rem;
    }
  }
  > div {
    align-items: center;
    justify-content: center;
  }
  a {
    span {
      transform: translateY(-0.1rem);
    }
  }

  .leaf {
    position: absolute;
    width: 27vw;
    height: auto;
    left: -8vw;
    top: -11.2vh;
    opacity: 0.5;
    pointer-events: none;
  }
  .tour {
    align-self: center;
    position: relative;
    iframe {
      border: none;
      width: 85vw;
      height: 85vh;
    }
  }
  .leaf-flip {
    top: unset;
    left: unset;
    transform: scaleX(-1);
    right: 0;
    bottom: 0;
  }

  @media (max-width: 820px) {
    padding-bottom: 0;
    .leaf {
      width: 8rem;
      height: 5rem;
      top: -6vh;
      left: 0;
      opacity: 0.9;
    }
    .leaf-flip {
      display: none;
    }
    .tour {
      transform: translateY(5px);
      iframe {
        width: 100vw;
        height: 75vh;
      }
    }
  }
`;

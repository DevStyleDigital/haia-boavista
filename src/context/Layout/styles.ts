import styled from 'styled-components';

export const LayoutStyled = styled.div`
  main {
    gap: 4rem;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;
    position: relative;

    > section {
      width: 100%;
      scroll-margin-top: 6rem;

      > h1 {
        text-align: center;
      }
    }

    .scroll-helper {
      scroll-margin-top: 15rem;
      @media (max-width: 600px) {
        scroll-margin-top: 6rem;
      }
    }

    .caption {
      display: none;
      h1 {
        margin-bottom: 2rem;
      }
      form > div {
        padding: 0;
      }

      @media (max-width: 600px) {
        display: block;
      }
    }
  }
`;

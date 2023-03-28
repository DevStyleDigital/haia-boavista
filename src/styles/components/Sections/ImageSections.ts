import styled from 'styled-components';

export const ImageSectionsStyled = styled.section`
  display: flex;
  gap: 3.25rem;
  align-items: center;

  img {
    width: 45%;
    height: auto;

    &.full-size {
      width: 45vw;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
  .card {
    --icon-size: 2.5rem;
    padding: 0;
    gap: 0.5rem;

    svg {
      fill: rgb(var(--color-primary));
    }
  }

  @media (max-width: 955px) {
    text-align: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 1rem;

    img {
      width: 65vw !important;
      height: auto !important;

      &.full-size {
        width: 65vw;
      }

      @media (max-width: 665px) {
        width: 100vw !important;
        &.full-size {
          width: 100vw !important;
        }
      }
    }
    hr {
      margin-left: auto;
      margin-right: auto;
    }
    a {
      margin: 0 auto;
    }
    > div {
      gap: 1rem;

      > div:nth-child(2) {
        align-items: center;
        .card {
          grid-template-columns: 1fr;
          height: auto;
          width: fit-content;

          p {
            text-align: center;
          }
        }
      }
    }
  }
`;

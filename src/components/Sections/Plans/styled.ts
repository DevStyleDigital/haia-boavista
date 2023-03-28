import styled from 'styled-components';

export const PlansStyled = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  .info {
    width: 100%;

    p,
    span,
    h2 {
      white-space: nowrap;
    }

    svg {
      width: 14.5rem;
      height: 100%;
      fill: rgb(var(--color-primary));
    }

    .card {
      grid-template-columns: var(--icon-size) 1fr;
      height: fit-content;
      width: 17.3rem;
      max-width: 100%;
      align-items: center;
      padding: 0;
      border: 2px solid rgb(var(--color-primary));
      gap: 0.5rem;
      margin-top: 2rem;
      > div {
        background-color: rgb(var(--color-primary));
      }
      > p {
        text-align: start;
        white-space: normal;
      }
      svg {
        width: 80%;
        height: 80%;
        fill: rgb(var(--color-primary));
      }
    }
  }
  .hbv-c-container {
    align-self: flex-end;
    position: relative;

    img {
      width: 80%;
      height: 80%;
      transform: translateX(12%);
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    gap: 4rem;

    .info {
      margin: 0 auto;
      width: min-content;
      p,
      span {
        white-space: normal;
      }
      svg {
        width: 11.5rem;
      }

      .card {
        --icon-size: 3rem;
        width: 13.8rem;
        > p {
          font-size: var(--font-size-sm);
        }
      }
    }
    .hbv-c-container {
      img {
        width: 80%;
        height: 80%;
        transform: translateX(13%);
      }
    }
  }
`;

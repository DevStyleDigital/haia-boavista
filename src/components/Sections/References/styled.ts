import styled from 'styled-components';

export const ReferencesStyled = styled.section`
  width: 100%;
  margin: 0 auto;
  gap: 4rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 2.5rem;
    min-height: 400px;
    justify-content: center;

    li {
      width: calc(17rem - 2.5rem);
      height: auto;
      gap: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > div {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        > div {
          span,
          h2 {
            text-transform: uppercase;
            letter-spacing: 0.07em;
          }
          span {
            color: rgb(var(--color-gray-600));
            max-width: 0;
          }
          h2 {
            color: rgb(var(--color-secondary));
            font-size: var(--font-size-lg);
          }
        }
        img {
          width: 100%;
          height: auto;
          filter: grayscale(1);
        }
      }
      button {
        font-size: var(--font-size-sm);
        padding: 0.5rem 1rem;
        svg {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }
    @media (max-width: 683px) {
      text-align: center;
      min-height: auto;

      li {
        width: 18.6rem;
        height: fit-content;

        button {
          align-self: center;
        }
        img {
          max-height: 19rem;
          object-fit: cover;
          object-position: top;
        }
      }
    }
  }
`;

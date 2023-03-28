import styled from 'styled-components';

export const FixedFooterRootStyled = styled.div<{ open: boolean }>`
  z-index: 9;
  position: fixed;
  top: 50%;
  right: 0;
  padding: 1rem 0.8rem;

  background-color: rgb(var(--color-primary));
  transition: 0.5s linear;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 0 20px;
  box-shadow: var(--box-shadow);
  transform: translateY(-50%);

  > button {
    font-size: var(--font-size-md);
    svg {
      display: none;
      fill: rgb(var(--color-background));
      margin-top: 1rem;
      transform: rotate(90deg) translateY(10%);
    }
    * {
      pointer-events: none;
    }
  }
  span {
    color: rgb(var(--color-background));
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    width: 2rem;
    height: 2px;
    margin: 1rem 0;
    background-color: rgb(var(--color-background));
  }
  > .hbv-ff {
    > a {
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        width: 2rem;
        height: 2rem;
        fill: rgb(var(--color-background));
      }
      span {
        margin-top: 0.5rem;
      }

      ::before {
        display: none;
      }
    }
  }

  @media (max-width: 820px) {
    max-width: ${({ open }) => (open ? '20rem' : '2.3rem')};
    flex-direction: row;

    > button {
      max-width: 0.8rem;
      span {
        word-break: break-all;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        > br {
          display: none;
        }
      }
      svg {
        display: block;
      }
    }
    hr {
      height: ${({ open }) => (open ? '8rem' : '2rem')};
      width: 2px;
      margin: 0 1rem;
      display: block;
      flex-shrink: 0;
      transition: 0.2s linear;
    }
  }
`;

import styled from 'styled-components';

export const HeaderStyled = styled.header`
  --pd-y: 1.75rem;
  --logo-height: 2.5rem;
  --header-height: calc(var(--pd-y) * 2 + var(--logo-height));
  top: 0;
  left: 0;
  z-index: 10;
  position: sticky;
  width: 100%;
  background-color: rgb(var(--color-background));

  > div {
    width: 100%;
    padding: var(--pd-y) var(--pd-x) !important;

    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #hbv-h-mt {
      display: none;
    }

    > .logo {
      > svg {
        fill: rgb(var(--color-primary));
        width: 5.25rem;
        height: var(--logo-height);
      }
    }
    > nav {
      font-size: var(--font-size-sm);
      > ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        a {
          padding: 0 0.5rem;
        }
        > .separator {
          border: 0.01rem solid rgb(var(--color-primary));
          background-color: rgb(var(--color-primary));
          height: 1rem;
        }
      }
    }

    @media (max-width: 1180px) {
      justify-content: center;
      #hbv-h-mt {
        display: block;
      }
      > nav {
        visibility: hidden;
        max-height: 0;
        width: 100%;
        transition: 0.2s linear;
        position: absolute;
        background-color: rgb(var(--color-background));
        overflow: hidden;
        overflow-y: auto;
        padding-bottom: 1rem;
        box-shadow: 0 0.5rem 0.5rem rgb(0, 0, 0, 0.2);
        height: calc(100vh - var(--header-height) - 9.9vh);

        top: calc(var(--logo-height) + var(--pd-y) * 2);

        &.modal {
          visibility: visible;
          max-height: 100vh;
        }

        > ul {
          display: flex;
          flex-direction: column;
          li {
            width: 70%;
            text-align: center;

            a {
              padding: 1rem;
              text-align: center;
              display: block;
              width: 100%;

              :focus,
              :hover {
                outline: none;
                border-radius: 0.2rem;
                background-color: rgba(var(--color-primary), 0.4);
              }
              ::before {
                display: none;
              }
            }
          }
          > .separator {
            display: none;
          }
        }
      }
    }
  }
`;

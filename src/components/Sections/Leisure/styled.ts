import styled from 'styled-components';

export const LeisureStyled = styled.section`
  max-width: 100vw;
  color: rgb(var(--color-background));
  background-color: rgb(var(--color-primary));
  padding: 4rem 2rem;
  overflow: hidden;
  position: relative;

  .leaf {
    --w: 27vw;
    --additional-w: 10rem;
    width: var(--w);
    height: auto;
    position: absolute;
    pointer-events: none;

    &.leaf-1 {
      --w: 40vw;
      top: 0;
      right: 0;

      @media (max-width: 1024px) {
        --w: 100vw;
        height: 3rem;
      }
    }
    &.leaf-2 {
      --w: 17vw;
      bottom: 50%;
      left: -3rem;
      transform: translateY(65%) scaleX(-1);
      @media (max-width: 650px) {
        left: 0;
        transform: translateY(0) scaleX(-1);
        bottom: 53%;
        /* display: none; */
      }
    }
    &.leaf-3 {
      --w: 17vw;
      bottom: 0;
      right: 0;
      transform: scaleX(-1);
      @media (max-width: 650px) {
        display: none;
      }
    }
  }

  > div {
    gap: 5rem;
    display: flex;
    align-items: center;

    > section:nth-child(1) {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        font-size: var(--font-size-lg);
        text-align: center;
      }
      img {
        width: 100%;
        height: auto;
      }

      > .leisure-count {
        --size: 2rem;
        border: 1px solid rgb(var(--color-background));
        padding: 1rem 1.5rem;
        font-size: var(--size);
        position: relative;
        display: flex;
        flex-direction: column;

        > div {
          > span.absolute {
            --align-top-offset: 16%;
            padding: 0.1rem 0.5rem;
            background-color: rgb(var(--color-primary));
            position: absolute;
            font-size: var(--size);
            top: calc(
              (var(--size) / 2 * -1) - (var(--size) / 2) +
                var(--align-top-offset)
            );
            line-height: 1rem;
          }
          span.title {
            height: 5rem;
            gap: 0.5rem;
            display: flex;
            align-items: center;
            font-family: var(--font-secondary), sans-serif;

            > strong {
              margin-top: 0.8rem;
              text-transform: uppercase;
              font-size: var(--size);
            }

            span.big {
              margin: 0;
              font-size: 7rem;
              font-family: var(--font-secondary), sans-serif;
            }
          }
        }
        @media (max-width: 550px) {
          --size: 1.5rem;
          padding: 0.5rem;
          span.absolute {
            --align-top-offset: 12% !important;
          }
          span.title {
            span.big {
              font-size: 5rem !important;
            }
          }
        }
        @media (max-width: 360px) {
          --size: 1.2rem;
          padding: 0.2rem;
          span.absolute {
            --align-top-offset: 8% !important;
          }
          span.title {
            > strong {
              margin-bottom: 0.5rem;
            }
            span.big {
              font-size: 3.5rem !important;
            }
          }
        }
      }
      > .info {
        margin-left: 2rem;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h2 {
          text-align: left;
        }
        @media (max-width: 1024px) {
          margin-left: 0;
        }
      }
    }
    > section:nth-child(2) {
      h1 {
        width: 5%;
      }
      ul {
        margin-top: 2rem;
        list-style: none;
        display: grid;
        grid-gap: 1rem 3rem;
        grid-template-columns: 1fr 1fr;

        > li {
          display: flex;
          align-items: center;
          gap: 1rem;

          > svg {
            width: 1.4rem;
            height: 1.4rem;
            fill: rgb(var(--color-secondary));
          }
        }
      }
    }
    h2 {
      text-transform: uppercase;
    }

    @media (max-width: 1270px) {
      section:nth-child(1) {
        width: 45%;
      }
    }
    @media (max-width: 1024px) {
      gap: 2rem;
      flex-direction: column;

      section:nth-child(1) {
        width: 100%;

        .leisure-count {
          text-align: left;
          div {
            align-self: center;
          }
        }
      }
      section:nth-child(2) {
        h1 {
          width: 100%;
        }
        ul {
          grid-template-columns: 1fr 1fr;
          margin: 0 auto;
          margin-top: 2rem;
          width: 100%;
          li {
            width: 100%;
            text-align: left;
          }
        }
      }
      section {
        text-align: center;
        width: 100%;

        h2 {
          text-align: center !important;
        }
        a {
          margin: 0 auto;
        }
      }
    }
  }
  @media (max-width: 576px) {
    padding: 4rem 1rem;

    > div > section:nth-child(2) {
      ul {
        justify-content: center;
        grid-template-columns: unset;
        margin-left: 2rem;
      }
    }
  }
  @media (max-width: 270px) {
    padding: 4rem 0.5rem;

    > div > section:nth-child(2) {
      ul {
        justify-content: center;
        grid-template-columns: 1fr;
        margin-left: 1.5rem;
      }
    }
  }
`;

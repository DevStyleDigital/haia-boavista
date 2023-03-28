import styled from 'styled-components';

export const GalleryStyled = styled.section`
  position: relative;

  > div:nth-child(1) {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-bottom: 0.5rem;

    h1 {
      text-align: center;
    }
    span {
      color: rgb(var(--color-gray-600));
      text-align: right;
      margin-right: 6%;
    }
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .legend {
    position: absolute;
    width: 100%;
    height: 3rem;

    color: rgb(var(--color-background));
    background-color: rgb(var(--color-primary));

    display: flex;
    text-align: left;
    align-items: center;

    font-size: 1rem;
    text-transform: uppercase;

    padding: 0 1rem;
    bottom: 0.3rem;
    left: 0;
    z-index: 1;
  }
  .hbv-c-container {
    width: 80vw;
    margin: 0 auto;
    .image {
      width: 100%;
      height: auto;
      img {
        width: inherit;
        height: auto;
      }
    }
    .hbv-c-wrapper-thumbs {
      margin-top: 1rem;
      > div {
        > div {
          opacity: 0.5;

          &.swiper-slide-thumb-active {
            opacity: 1;
          }
          .image-thumb {
            height: auto;
            width: 6rem;
            height: 4rem;
          }
        }
      }
    }
    .hbv-c-arrows {
      width: 90vw;
      transform: translateX(-5vw) translateY(-50%);

      @media (max-width: 590px) {
        width: 99vw;
        transform: translateX(-9.6%) translateY(-105%);
      }
    }
  }
`;

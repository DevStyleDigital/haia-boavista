import styled from 'styled-components';

export const DifferentialsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 0.5rem;

  > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem 2rem;
  }
  a {
    margin: 0 auto;
  }

  .hbv-c-arrows {
    width: 106%;
    transform: translateY(-25%) translateX(-3.3%);
    @media (max-width: 1920px) {
      width: 96vw;
      transform: translateY(-20%) translateX(-5%);
    }
  }
  .hbv-c-wrapper > div {
    padding: 1rem 0.5rem;

    > div,
    > div > div {
      width: 95%;
    }
  }

  @media (max-width: 665px) {
    > ul {
      justify-content: flex-start;
      width: 100%;
      > li {
        width: 100%;
      }
    }
  }
  @media (min-width: 1995px) {
    &.mx-w.slide {
      max-width: 1860px;
      margin: 0 auto;
      padding: 0;
    }
  }
`;

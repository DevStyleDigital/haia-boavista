import styled from 'styled-components';
import { ImageSectionsStyled } from 'styles/components/Sections/ImageSections';

export const DecoratedVisitStyled = styled(ImageSectionsStyled)`
  p,
  span,
  h2 {
    font-family: var(--font-secondary), sans-serif !important;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  img {
    width: 45%;
    height: 24rem;
  }
  > div {
    gap: 0.5rem;

    > div:nth-child(3) {
      gap: 2rem;
      display: flex;
      flex-direction: column;
    }

    .card {
      --icon-size: 2.2rem;

      display: flex !important;
      height: auto;

      @media (max-width: 955px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

import styled from 'styled-components';

export const TitleStyled = styled.h1`
  text-transform: uppercase;
  font-family: var(--font-title), sans-serif;
  font-size: var(--font-size-2xl);
  font-weight: 700;

  &.light {
    font-weight: 400;
  }

  @media (max-width: 520px) {
    font-size: var(--font-size-xl);
  }
  @media (max-width: 380px) {
    font-size: var(--font-size-lg);
  }
`;

export const SubTitleStyled = styled.h2`
  font-family: var(--font-secondary), sans-serif;
  font-size: var(--font-size-xl);
  font-weight: 400;

  span.small {
    font-size: calc(var(--font-size-lg) - 0.1rem);
  }

  @media (max-width: 820px) {
    font-size: var(--font-size-lg);
    span.small {
      font-size: calc(var(--font-size-lg) - 0.25rem);
    }
  }
`;

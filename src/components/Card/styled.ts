import styled from 'styled-components';

export const CardRootStyled = styled.div`
  --icon-size: 4rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 15.8rem;
  height: 16rem;
  padding: 2rem 1rem;
  gap: 1.8rem;
  display: grid;
  grid-template-columns: 1fr;

  &.line {
    --icon-size: 3rem;
    height: 100%;
    width: 100%;
    grid-template-columns: var(--icon-size) 1fr;

    > p {
      text-align: start;
      align-self: center;
      justify-self: flex-start;
    }
  }
`;

export const CardContentStyled = styled.p`
  text-align: center;
  justify-self: center;
  color: rgb(var(--color-primary));
`;

export const CardIconStyled = styled.div`
  width: var(--icon-size);
  height: var(--icon-size);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

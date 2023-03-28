import styled from 'styled-components';

export const CarouselRootStyled = styled.div`
  position: relative;
  .hbv-c-arrows {
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;

    @media (max-width: 590px) {
      width: calc(100% + 0.5rem * 2);
      transform: translateX(-0.5rem) translateY(-50%);
    }
  }
`;
export const CarouselArrowStyled = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
  pointer-events: all;
  padding: 1rem 0.5rem;
  border-radius: 0.2rem;

  > span {
    border: solid black;
    border-color: rgb(var(--color-primary));
    border-width: 0 0.5rem 0.5rem 0;
    display: inline-block;
    padding: 0.5rem;

    &.right {
      transform: translateX(-20%) rotate(-45deg);
    }

    &.left {
      transform: translateX(20%) rotate(135deg);
    }
  }
  &.hbv-c-arrow-disable {
    cursor: not-allowed;
    opacity: 0.7;
  }

  :focus {
    background-color: rgba(var(--color-primary), 0.4);
  }
`;

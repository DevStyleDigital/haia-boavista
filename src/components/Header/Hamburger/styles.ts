import styled from 'styled-components';

export const HamburgerStyled = styled.label`
  --gap: 0.3rem;
  --pd: 0.5rem;
  --line-width: 1.125rem;
  --line-height: 0.125rem;

  position: absolute;

  display: flex;
  top: var(--pd);
  left: var(--pd);

  transition: 0.2s linear;
  width: calc(var(--line-width) + var(--pd) * 2);
  height: calc((var(--line-height) * 3 + var(--gap) * 2) + var(--pd) * 2);
  padding: var(--pd);
  overflow: hidden;

  :focus {
    outline: none;
    border-radius: 0.2rem;
    background-color: rgba(var(--color-primary), 0.4);
  }

  > .hamburger-line {
    width: var(--line-width);
    height: var(--line-height);
    display: block;
    position: relative;
    background-color: rgb(var(--color-primary));
    transition: 0.2s linear;

    ::before,
    ::after {
      content: '';
      width: 100%;
      height: inherit;
      background-color: rgb(var(--color-primary));
      display: block;
      position: absolute;
      top: calc(var(--gap) + var(--line-height));
      transition: inherit;
    }
    ::after {
      top: calc(var(--gap) * 2 + var(--line-height) * 2);
    }
  }

  > input:checked ~ .hamburger-line {
    transform: translateY(calc(var(--gap) + var(--line-height))) rotate(45deg);
    ::before {
      transform: translateX(200%);
      opacity: 0;
      visibility: hidden;
    }
    ::after {
      transform: rotate(-90deg);
      top: 0;
    }
  }

  @keyframes zoom-in {
    0% {
      zoom: 1;
    }
    100% {
      zoom: 0;
    }
  }
`;

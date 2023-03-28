import NextJSLink from 'next/link';
import styled from 'styled-components';

export const LinkStyles = styled(NextJSLink)`
  color: rgb(var(--color-primary));
  font-family: var(--font-primary), sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.1rem;
    bottom: -3px;
    left: 0;
    background-color: rgb(var(--color-primary));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

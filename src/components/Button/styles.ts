import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';

export interface ButtonStyledProps {
  variant?: 'invert' | 'normal';
}

export const ButtonStyled = styled(Slot)<ButtonStyledProps>`
  --pd-x: 1rem;
  --pd-y: 0.8rem;

  width: fit-content;
  font-size: inherit;
  display: flex;
  gap: 1rem;
  line-height: 0.99;
  cursor: pointer;
  pointer-events: all;

  align-items: center;
  border: none;
  padding: var(--pd-y) var(--pd-x);
  transition: 0.2s linear;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  font-size: var(--font-size-sm);

  ${({ variant }) =>
    variant === 'invert' &&
    css`
      color: rgb(var(--color-primary));
      background-color: rgb(var(--color-background));

      &:hover {
        background-color: rgba(var(--color-background), 0.8);
      }
    `}
  ${({ variant }) =>
    variant === 'normal' &&
    css`
      color: rgb(var(--color-background));
      background-color: rgb(var(--color-primary));

      &:hover {
        background-color: rgba(var(--color-primary), 0.8);
      }
    `}
`;

import styled from 'styled-components';

export const CheckboxStyles = styled.label`
  width: fit-content;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  user-select: none;
  position: relative;
  text-align: left;

  > span {
    user-select: none;
  }

  > input {
    opacity: 0;
    position: absolute;
    transform: translateX(-100%);
  }

  > .custom-checkbox {
    --size: 1.4rem;
    width: var(--size);
    height: var(--size);
    background-color: rgb(var(--color-background));
    border: 1px solid rgb(var(--color-primary));
    pointer-events: none;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    > svg {
      display: none;
    }
  }

  > input:checked + .custom-checkbox {
    > svg {
      display: block;
    }
  }
  > label {
    text-align: left;
  }
`;

import styled, { css } from 'styled-components';

export const InputRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const InputRootStyle = styled.div<{
  focus?: boolean | 'label';
  isTextArea: boolean;
  disabled?: boolean;
  error?: boolean;
}>`
  --color-placeholder: rgb(var(--color-primary));
  --px: 0.8rem;
  --px-only: 0 var(--px);
  --height: 3rem;
  --height-textarea: 8rem;
  --font-size: 1rem;

  width: 100%;
  position: relative;
  color: white;
  font-weight: 400;
  height: var(--height);
  border: 1px solid rgb(var(--color-primary));
  background-color: transparent;
  font-size: var(--font-size);

  display: flex;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}

  ${({ isTextArea }) =>
    isTextArea &&
    css`
      height: var(--height-textarea);
      padding: 1.2rem 0.5rem;
      align-items: flex-start;
    `}
`;

interface InputStyleProps {
  hasLabel: boolean;
  enablePlaceholderInFocus?: boolean;
}

export const InputStyle = styled.div<InputStyleProps>`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: inherit;

  > input,
  > textarea {
    width: 100%;
    height: 100%;
    padding: var(--px-only);
    background-color: transparent;
    border: none;
    outline: none;
    color: rgb(var(--color-primary));
    font-size: inherit;
    position: relative;
    border-radius: inherit;

    ::placeholder {
      color: ${({ hasLabel }) =>
        hasLabel ? 'transparent' : 'var(--color-placeholder)'};
    }
    :focus {
      ::placeholder {
        color: ${({ hasLabel, enablePlaceholderInFocus }) =>
          hasLabel && !enablePlaceholderInFocus
            ? 'transparent'
            : 'var(--color-placeholder)'};
      }
    }
  }

  > textarea {
    --color-bg-scrollbar: rgb(var(--color-background));
    resize: none;
    height: calc(var(--height-textarea) - 2rem);
  }
`;

interface InputLabelStyleProps {
  inputFocused: boolean | 'label';
}

export const InputErrorLabelStyles = styled.label`
  color: rgb(var(--color-error));
  width: 100%;
  text-align: left;
`;

const InputLabelStyleFocused = css`
  --scale: 0.85;
  --scale-px: calc(var(--scale) * 16px);

  z-index: 2;
  background-color: rgb(var(--color-background));
  border-radius: 2px;
  font-size: var(--scale-px);
  padding: 0.2rem calc(var(--px) / 2);
  left: var(--px);

  transform: translate(
    -0.3rem,
    calc(
      var(--height) / 2 * -1 - (var(--font-size) * var(--scale)) +
        var(--scale-px)
    )
  );
`;

export const InputLabelStyle = styled.label<InputLabelStyleProps>`
  left: 0;
  z-index: 0;
  color: var(--color-placeholder);
  font-size: inherit;
  font-weight: inherit;
  position: absolute;
  padding: var(--px-only);
  transition: 0.1s linear;

  ${({ inputFocused }) => inputFocused && InputLabelStyleFocused}
`;

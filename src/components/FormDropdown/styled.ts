import styled from 'styled-components';

export const FormDropdownRootStyled = styled.div`
  box-shadow: var(--box-shadow);
  background-color: rgb(var(--color-background));

  :focus {
    outline: 0.2rem solid rgb(var(--color-primary), 0.5);
  }
`;
export const FormDropdownTriggerStyled = styled.button`
  gap: 1.5rem;
  display: flex;
  padding: 1rem 2rem;
  font-weight: 700;
  align-items: center;
  width: 100%;

  border: none;
  cursor: pointer;
  background: none;
  justify-content: space-between;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .arrow svg {
    fill: rgb(var(--color-primary));
    width: 1rem;
    height: 1rem;
  }

  > * {
    pointer-events: none;
  }
`;

export const FormDropdownPortalStyled = styled.form`
  max-height: 0;
  transition: 0.2s linear;
  overflow: hidden;
  visibility: hidden;

  &.hbv-fd-open {
    max-height: 70vh;
    visibility: visible;
  }
`;

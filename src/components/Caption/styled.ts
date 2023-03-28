import styled from 'styled-components';

export const CaptionRootStyled = styled.form``;
export const CaptionInputsStyled = styled.div`
  padding: 2rem;
  padding-top: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  .checkbox {
    span {
      font-size: 0.7rem;
      align-self: center;
      opacity: 0.8;

      a {
        text-decoration: underline;
        text-underline-offset: 0.2rem;

        ::before {
          display: none;
        }
      }
    }
  }
  div.submit {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      --pd-x: 0.8rem;
      cursor: pointer;
    }

    .legend {
      text-align: left;
      max-width: 13rem;
    }
  }
`;

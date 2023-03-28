import { InputMask, type InputMaskProps } from 'primereact/inputmask';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  InputErrorLabelStyles,
  InputLabelStyle,
  InputRootStyle,
  InputRootWrapper,
  InputStyle,
} from './styles';

interface InputContextProps {
  id: string;
  disabled?: boolean;
  activeLabel?: boolean;
  enablePlaceholderInFocus?: boolean;

  setIsTextArea: (value: boolean) => void;

  hasLabel: boolean;
  setHasLabel: (value: boolean) => void;

  inputFocused: boolean | 'label';
  setInputFocused: (value: boolean | 'label') => void;
}

interface InputRootProps {
  id: string;
  error?: boolean;
  disabled?: boolean;
  activeLabel?: boolean;
  enablePlaceholderInFocus?: boolean;
  renderOutRoot?: React.ReactElement | null;
}

const InputContext = createContext<InputContextProps>({} as InputContextProps);
const useInput = () => useContext(InputContext);

const InputErrorLabel: BTypes.FC<{}, Omit<HTMLLabelElement, 'htmlFor'>> = ({
  children,
  ...props
}) => {
  const { id } = useInput();

  return (
    <InputErrorLabelStyles htmlFor={id} {...props}>
      {children}
    </InputErrorLabelStyles>
  );
};

const InputRoot: BTypes.FC<InputRootProps, HTMLDivElement> = ({
  id,
  error,
  children,
  disabled,
  activeLabel,
  renderOutRoot,
  enablePlaceholderInFocus,
  ...props
}) => {
  const [isTextArea, setIsTextArea] = useState(false);
  const [hasLabel, setHasLabel] = useState(false);
  const [inputFocused, setInputFocused] = useState<boolean | 'label'>(false);

  const InputContextValue = useMemo(
    () => ({
      id,
      activeLabel,
      disabled,
      hasLabel,
      setHasLabel,
      setIsTextArea,
      inputFocused,
      setInputFocused,
      enablePlaceholderInFocus,
    }),
    [
      hasLabel,
      id,
      activeLabel,
      enablePlaceholderInFocus,
      disabled,
      inputFocused,
    ],
  );

  return (
    <InputContext.Provider value={InputContextValue}>
      <InputRootWrapper className={props.className}>
        <InputRootStyle
          disabled={disabled}
          isTextArea={isTextArea}
          focus={inputFocused}
          error={error}
          {...props}
        >
          {children}
        </InputRootStyle>
        {renderOutRoot}
      </InputRootWrapper>
    </InputContext.Provider>
  );
};

const InputLabel: BTypes.FC = ({ children, ...props }) => {
  const { setHasLabel, id, activeLabel, inputFocused } = useInput();
  useEffect(() => setHasLabel(true), [setHasLabel]);

  return (
    <InputLabelStyle
      {...props}
      htmlFor={id}
      inputFocused={activeLabel || inputFocused}
    >
      {children}
    </InputLabelStyle>
  );
};

const InputInputMask = forwardRef(
  (
    {
      mask,
      ...props
    }: BTypes.FCProps<Omit<InputMaskProps, 'disabled'>, {}, false>,
    ref,
  ) => {
    const {
      hasLabel,
      id,
      setInputFocused,
      enablePlaceholderInFocus,
      disabled,
    } = useInput();

    function handleFocus() {
      return setInputFocused(true);
    }
    const handleBlur = useCallback(
      (value: string) => {
        if (value.length) return setInputFocused('label');
        return setInputFocused(false);
      },
      [setInputFocused],
    );

    useEffect(() => {
      if (props.value) handleBlur(props.value.toString());
    }, [props.value, handleBlur]);

    return (
      <InputStyle
        enablePlaceholderInFocus={enablePlaceholderInFocus}
        hasLabel={hasLabel}
      >
        <InputMask
          autoClear={false}
          {...props}
          id={id}
          ref={ref as React.LegacyRef<InputMask>}
          mask={mask}
          disabled={disabled}
          onBlur={(ev) => {
            handleBlur(ev.target.value);
            if (props.onBlur) props.onBlur(ev);
          }}
          onFocus={(ev) => {
            handleFocus();
            if (props.onFocus) props.onFocus(ev);
          }}
        />
      </InputStyle>
    );
  },
);

const InputInput = forwardRef(
  (
    {
      ...props
    }: BTypes.FCProps<
      {},
      Omit<React.InputHTMLAttributes<HTMLInputElement>, 'disabled'>,
      false
    >,
    ref,
  ) => {
    const {
      hasLabel,
      id,
      enablePlaceholderInFocus,
      setInputFocused,
      disabled,
    } = useInput();

    function handleFocus() {
      return setInputFocused(true);
    }
    const handleBlur = useCallback(
      (value: string) => {
        if (value.length) return setInputFocused('label');
        return setInputFocused(false);
      },
      [setInputFocused],
    );

    useEffect(() => {
      if (props.value) handleBlur(props.value.toString());
    }, [props.value, handleBlur]);

    return (
      <InputStyle
        enablePlaceholderInFocus={enablePlaceholderInFocus}
        hasLabel={hasLabel}
      >
        <input
          {...props}
          id={id}
          ref={ref as React.LegacyRef<HTMLInputElement>}
          disabled={disabled}
          onBlur={(ev) => {
            handleBlur(ev.target.value);
            if (props.onBlur) props.onBlur(ev);
          }}
          onFocus={(ev) => {
            handleFocus();
            if (props.onFocus) props.onFocus(ev);
          }}
        />
      </InputStyle>
    );
  },
);

const InputTextArea = forwardRef(
  (
    {
      ...props
    }: BTypes.FCProps<
      {},
      Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled'>,
      false
    >,
    ref: React.ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const {
      hasLabel,
      id,
      enablePlaceholderInFocus,
      setInputFocused,
      setIsTextArea,
      disabled,
    } = useInput();

    function handleFocus() {
      return setInputFocused(true);
    }
    const handleBlur = useCallback(
      (value: string) => {
        if (value.length) return setInputFocused('label');
        return setInputFocused(false);
      },
      [setInputFocused],
    );

    useEffect(() => {
      if (props.value) handleBlur(props.value.toString());
    }, [props.value, handleBlur]);

    useEffect(() => setIsTextArea(true), [setIsTextArea]);

    return (
      <InputStyle
        enablePlaceholderInFocus={enablePlaceholderInFocus}
        hasLabel={hasLabel}
      >
        <textarea
          disabled={disabled}
          id={id}
          className="custom-scroll"
          {...props}
          ref={ref}
          onBlur={(ev) => {
            handleBlur(ev.target.value);
            if (props.onBlur) props.onBlur(ev);
          }}
          onFocus={(ev) => {
            handleFocus();
            if (props.onFocus) props.onFocus(ev);
          }}
        />
      </InputStyle>
    );
  },
);

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Input: InputInput,
  InputMask: InputInputMask,
  TextArea: InputTextArea,
  ErrorLabel: InputErrorLabel,
};
